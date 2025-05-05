"use client"

import { useActionState } from "react"

import { Check, Edit04, Feather, Loading01, Mail01, Send01 } from "@untitled-ui/icons-react"
import { MessageFormState, sendMessage } from "@/lib/sendMessageHandle"
import { useFieldError } from "@/lib/useFieldError"
import clsx from "clsx"

const initialState: MessageFormState = {
  errors: {},
  name: "",
  email: "",
  subject: "",
  message: "",
}

export default function FormContact() {
  const [state, formAction, isPending] = useActionState(sendMessage, initialState)
  const nameError = useFieldError("name", state);
  const emailError = useFieldError("email", state);
  const subjectError = useFieldError("subject", state);
  const messageError = useFieldError("message", state);
  const globalError = useFieldError("global", state);

  if ("success" in state && state.success) {
    return (
      <div className="bg-light-highlight flex flex-col gap-6 rounded-2xl items-center justify-center w-full p-10">
        <Check className="w-34 h-34 bg-highlight text-bg-highlight text-md p-8 rounded-full" />
        <div className="text text-center">
          <h2 className="text-2xl mb-2">Yay!</h2>
          <p className="text-gray-400">
            Your message has been sent successfully! I will respond as soon as possible.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} className="relative">
      {globalError.localError && (
        <p className={clsx(
          "form-field-error transition-opacity duration-700",
          globalError.showError ? "opacity-100" : "opacity-0"
        )}>
          {globalError.localError}
        </p>
      )}
      <div className="form-fields flex lg:flex-row flex-col w-full justify-between">
        <div className="details-fields lg:w-[50%] w-[100%]">
          <div className="form-field rounded-xl transition-colors">
            <label htmlFor="name" className="flex items-center p-4">
              <Feather className="w-5 h-5 " />
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="form-field-input rounded-r-xl"
              defaultValue={state?.name}
            />
            {nameError.localError && (
              <p className={clsx(
                "form-field-error transition-opacity duration-700",
                nameError.showError ? "opacity-100" : "opacity-0"
              )}>
                {nameError.localError}
              </p>
            )}
          </div>

          <div className="form-field rounded-xl transition-colorsl">
            <label htmlFor="email" className="flex items-center p-4">
              <Mail01 className="w-5 h-5" />
            </label>
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              className="form-field-input rounded-r-xl"
              defaultValue={state?.email}
            />
            {emailError.localError && (
              <p className={clsx(
                "form-field-error transition-opacity duration-700",
                emailError.showError ? "opacity-100" : "opacity-0"
              )}>
                {emailError.localError}
              </p>
            )}
          </div>

          <div className="form-field rounded-xl transition-colors">
            <label htmlFor="subject" className="flex items-center p-4">
              <Edit04 className="w-5 h-5" />
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              className="form-field-input rounded-r-xl"
              defaultValue={state?.subject}
            />
            {subjectError.localError && (
              <p className={clsx(
                "form-field-error transition-opacity duration-700",
                subjectError.showError ? "opacity-100" : "opacity-0"
              )}>
                {subjectError.localError}
              </p>
            )}
          </div>
        </div>

        <div className="form-field lg:w-[50%] w-[100%] lg:mx-4 mx-0 rounded-tr-xl">
          <textarea
            name="message"
            placeholder="Message*"
            rows={6}
            className="form-field-input rounded-r-xl min-h-48"
            defaultValue={state?.message}
          />
          {messageError.localError && (
            <p className={clsx(
              "form-field-error transition-opacity duration-700",
              messageError.showError ? "opacity-100" : "opacity-0"
            )}>
              {messageError.localError}
            </p>
          )}
        </div>
      </div>

      <div className="action-fileds text-center pt-6">
        <button
          aria-label="Submit"
          type="submit"
          disabled={isPending}
          className="form-button-submit rounded-xl w-[200px] lg:py-2 py-1 lg:px-3.5 px-2"
        >
          {isPending ? (
            <p className="flex items-center lg:text-xl text-base justify-evenly">
              <Loading01 className="w-5 h-5" />
              <span>Sending ...</span>
            </p>
          ) : (
            <p className="flex items-center lg:text-xl text-base justify-evenly">
              <Send01 className="w-5 h-5" />
              <span>Send Message</span>
            </p>
          )}
        </button>
      </div>
    </form>
  )
}
