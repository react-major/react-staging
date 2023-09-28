"use client";

import type { PropsWithChildren } from "react";

import { createFeature } from "./actions";
// @ts-expect-error experimental_useFormState is missing from types
import { experimental_useFormState as useFormState } from "react-dom";
import { H2 } from "ui/components/MDX/Heading";
import { SubmitButton } from "./submit-button";

function MaxWidth({ children }: PropsWithChildren) {
  return <div className="max-w-4xl ms-0 2xl:mx-auto">{children}</div>;
}

const labelStyles =
  "block mb-2 text-md font-medium text-gray-900 dark:text-white";
const inputStyles =
  "block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const initialState = {
  message: null,
};

export default function Page() {
  const [state, formAction] = useFormState(createFeature, initialState);

  return (
    <MaxWidth>
      <H2>Add a feature!</H2>
      <form className="space-y-4" action={formAction}>
        <label className={labelStyles} htmlFor="title">
          Title
        </label>
        <input
          className={inputStyles}
          type="text"
          id="title"
          name="title"
          required
        />
        <label className={labelStyles} htmlFor="content">
          Content
        </label>
        <textarea
          className={inputStyles}
          id="content"
          name="content"
          required
        />
        <SubmitButton size="lg" />
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
    </MaxWidth>
  );
}
