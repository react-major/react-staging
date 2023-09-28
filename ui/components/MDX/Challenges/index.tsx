/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

"use client";

import * as React from "react";
export { Challenges } from "./Challenges";

export function Hint({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function Solution({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
