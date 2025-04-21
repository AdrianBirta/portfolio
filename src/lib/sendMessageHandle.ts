import { MessageFormSchema } from "./rules";
import emailjs from "@emailjs/browser";

export type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string[]>>
export type GlobalError = {
  global: string[],
}

export type MessageFormState =
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

export const sendMessage = async (_: MessageFormState, formData: FormData): Promise<MessageFormState> => {
  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const subject = formData.get("subject")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";

  const raw = { name, email, subject, message }

  const result = MessageFormSchema.safeParse(raw)

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      name, email, subject, message,
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
      errors: { global: ["Something went wrong. Please try again."], },
      name, email, subject, message,
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