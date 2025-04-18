"use client"

import { useActionState } from "react"
import emailjs from "@emailjs/browser"
import { MessageFormSchema } from "@/lib/rules"

import { Edit05, Feather, Mail03 } from "@untitled-ui/icons-react"

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string[]>>
type GlobalError = { global: string[] }

type MessageFormState =
  | { errors: FieldErrors }
  | { errors: GlobalError }
  | { success: true }

const initialState: MessageFormState = { errors: {} }

export default function FormContact() {
  const sendMessage = async (_: MessageFormState, formData: FormData): Promise<MessageFormState> => {
    const raw = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    const result = MessageFormSchema.safeParse(raw)

    if (!result.success) {
      return { errors: result.error.flatten().fieldErrors }
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: result.data.name,
          email: result.data.email,
          title: result.data.subject,
          message: result.data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
    } catch (error) {
      console.error("Email error:", error)
      return { errors: { global: ["Something went wrong. Please try again."] } }
    }

    return { success: true }
  }

  const [state, formAction, isPending] = useActionState(sendMessage, initialState)

  // Verificare dacă avem erori pe câmpuri (nu global)
  const isFieldError = (state: MessageFormState): state is { errors: FieldErrors } => {
    return "errors" in state && !("global" in state.errors)
  }

  return (
    <form action={formAction} className="space-y-4 max-w-md mx-auto">
      {"errors" in state && "global" in state.errors && (
        <p className="text-red-500">{state.errors.global.join(", ")}</p>
      )}

      <div>
        <label htmlFor="name" className="flex items-center gap-2">
          <Mail03 className="w-5 h-5" />
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {isFieldError(state) && state.errors.name && (
          <p className="text-red-500">{state.errors.name.join(", ")}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="flex items-center gap-2">
          <Feather className="w-5 h-5" />
        </label>
        <input
          type="email"
          name="email"
          placeholder="E-mail*"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {isFieldError(state) && state.errors.email && (
          <p className="text-red-500">{state.errors.email.join(", ")}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="flex items-center gap-2">
          <Edit05 className="w-5 h-5" />
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Subject*"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {isFieldError(state) && state.errors.subject && (
          <p className="text-red-500">{state.errors.subject.join(", ")}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="flex items-center gap-2">
          <Edit05 className="w-5 h-5" />
        </label>
        <textarea
          name="message"
          placeholder="Message*"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {isFieldError(state) && state.errors.message && (
          <p className="text-red-500">{state.errors.message.join(", ")}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {"success" in state && state.success && (
        <p className="text-green-500 mt-2">Message sent successfully!</p>
      )}
    </form>
  )
}
