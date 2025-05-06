import { iconMap } from "@/components/icons/iconMap";

export type ChapterKey = "history" | "showcase";

export type Theme = "light" | "dark";

export type SectionType = {
  iconName: keyof typeof iconMap,
  skillName: string,
  years: string
}

// Contact form - send message handler types
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
