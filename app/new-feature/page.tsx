"use client";

import { createFeature } from "./actions";
// @ts-expect-error experimental_useFormState is missing from types
import { experimental_useFormState as useFormState } from "react-dom";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: null,
};

export default function Page() {
  const [state, formAction] = useFormState(createFeature, initialState);

  return (
    <>
      <div>Add a feature!</div>
      <form action={formAction}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="content">Content</label>
        <input type="text" id="content" name="content" required />
        <SubmitButton />
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
    </>
  );
}
