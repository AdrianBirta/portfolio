"use client"

import { useActionState } from "react"
import emailjs from "@emailjs/browser"
import { MessageFormSchema } from "@/lib/rules"

import { Edit05, Feather, Loading01, Mail02, Mail03, Mail04, Mail05 } from "@untitled-ui/icons-react"

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string[]>>
type GlobalError = {
  global: string[],

}

type MessageFormState =
  | {
    errors: FieldErrors;
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  | {
    errors: GlobalError;
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  | {
    success: true;
    name: string;
    email: string;
    subject: string;
    message: string;
  }

const initialState: MessageFormState = {
  errors: {},
  name: "",
  email: "",
  subject: "",
  message: "",
}

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
      return {
        errors: result.error.flatten().fieldErrors,
        name: formData.get("name")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        subject: formData.get("subject")?.toString() ?? "",
        message: formData.get("message")?.toString() ?? "",
      }
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
    } catch (error: any) {
      console.error("Email error:", error)
      return {
        errors:
          { global: ["Something went wrong. Please try again."], },
        name: formData.get("name")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        subject: formData.get("subject")?.toString() ?? "",
        message: formData.get("message")?.toString() ?? "",
      }
    }

    return {
      success: true,
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }

  const [state, formAction, isPending] = useActionState(sendMessage, initialState)

  // Verificare dacă avem erori pe câmpuri (nu global)
  const isFieldError = (state: MessageFormState): state is {
    errors: FieldErrors;
    name: string;
    email: string;
    subject: string;
    message: string;
  } => {
    return "errors" in state && !("global" in state.errors)
  }

  return (
    <form action={formAction} className="">
      {"errors" in state && "global" in state.errors && (
        <p className="text-red-500">{state.errors.global.join(", ")}</p>
      )}
      <div className="form-fields flex w-full justify-between">
        <div className="details-fields w-[50%]">
          <div className="form-field rounded-xl transition-colors">
            <label htmlFor="name" className="flex items-center p-4">
              <Mail03 className="w-5 h-5 " />
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="form-field-input rounded-r-xl"
              defaultValue={state?.name}
            />
            {isFieldError(state) && state.errors.name && (
              <p className="text-red-500">{state.errors.name.join(", ")}</p>
            )}
          </div>

          <div className="form-field rounded-xl transition-colorsl">
            <label htmlFor="email" className="flex items-center p-4">
              <Feather className="w-5 h-5" />
            </label>
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              className="form-field-input rounded-r-xl"
              defaultValue={state?.email}
            />
            {isFieldError(state) && state.errors.email && (
              <p className="text-red-500">{state.errors.email.join(" ")}</p>
            )}
          </div>

          <div className="form-field rounded-xl transition-colors">
            <label htmlFor="subject" className="flex items-center p-4">
              <Edit05 className="w-5 h-5" />
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              className="form-field-input rounded-r-xl"
              defaultValue={state?.subject}
            />
            {isFieldError(state) && state.errors.subject && (
              <p className="text-red-500">{state.errors.subject.join(", ")}</p>
            )}
          </div>
        </div>

        <div className="form-field w-[50%] mx-4">
          <textarea
            name="message"
            placeholder="Message*"
            rows={6}
            className="form-field-input rounded-r-xl"
            defaultValue={state?.message}
          />
          {isFieldError(state) && state.errors.message && (
            <p className="text-red-500">{state.errors.message.join(", ")}</p>
          )}
        </div>
      </div>

      <div className="action-fileds text-center pt-6">
        <button
          type="submit"
          disabled={isPending}
          className="form-button-submit rounded-xl"
        >
          {isPending ? (
            <p>
              <Loading01 className="w-5 h-5" />
              <span>
                Sending...
              </span>
            </p>
          ) : (
            <p className="flex items-center text-xl">
              <Mail02 className="w-5 h-5 mr-2" />
              <span>
                Send Message
              </span>
            </p>
          )}
        </button>

        {"success" in state && state.success && (
          <p className="text-green-500 mt-2">Message sent successfully!</p>
        )}
      </div>
    </form>
  )
}
