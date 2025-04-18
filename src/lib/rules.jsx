import { z } from "zod";

export const MessageFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name field is required." })
    .max(100, { message: "Name can't be more than 100 characters." })
    .trim(),

  subject: z
    .string()
    .min(1, { message: "Subject field is required." })
    .max(100, { message: "Title can't be more than 100 characters." })
    .trim(),

  email: z
    .string()
    .email({ message: "Please enter a valid email." })
    .trim(),

  message: z
    .string()
    .min(1, { message: "Content field is required." })
    .max(1000, { message: "Title can't be more than 1000 characters." })
    .trim(),
})