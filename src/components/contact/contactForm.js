import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xoqojvak");
  if (state.succeeded) {
    return (
      <div className="sm:w-1/2 w-full h-full sm:h-full flex-col justify-center">
        <div className="w-auto h-4/5 mt-12 m-8 flex flex-col justify-center ">
          <p className="text-themeWhite self-center text-5xl font-extralight">Thanks for reaching out!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:w-1/2 w-full h-full sm:h-full flex-col justify-center">
      <div className="w-auto h-4/5 mt-12 m-8 ">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label className="text-themeWhite text-2xl font-extralight">
            Name
          </label>
          <input
            className="w-3/4 h-10 m-2 bg-themeWhite rounded-md p-2"
            type="text"
            placeholder="Name"
          />
          <label
            htmlFor="email"
            className="text-themeWhite text-2xl font-extralight"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-3/4 h-10 m-2 rounded-md p-2 bg-themeWhite "
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="text-themeWhite text-2xl font-extralight">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-3/4 h-40 m-2 rounded-md p-2 bg-themeWhite"
            type="text"
            placeholder="Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="w-3/4 h-10 m-2 rounded-md border-themePurple border hover:border-themeWhite text-themeWhite font-extralight"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
