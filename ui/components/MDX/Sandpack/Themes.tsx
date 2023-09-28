/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

"use client";

import tailwindConfig from "../../../../tailwind.config";

export const CustomTheme = {
  colors: {
    accent: "inherit",
    base: "inherit",
    clickable: "inherit",
    disabled: "inherit",
    error: "inherit",
    errorSurface: "inherit",
    hover: "inherit",
    surface1: "inherit",
    surface2: "inherit",
    surface3: "inherit",
    warning: "inherit",
    warningSurface: "inherit",
  },
  syntax: {
    plain: "inherit",
    comment: "inherit",
    keyword: "inherit",
    tag: "inherit",
    punctuation: "inherit",
    definition: "inherit",
    property: "inherit",
    static: "inherit",
    string: "inherit",
  },
  font: {
    // @ts-ignore
    body: tailwindConfig.theme.extend.fontFamily.text
      .join(", ")
      .replace(/"/gm, ""),
    // @ts-ignore
    mono: tailwindConfig.theme.extend.fontFamily.mono
      .join(", ")
      .replace(/"/gm, ""),
    // @ts-ignore
    size: tailwindConfig.theme.extend.fontSize.code,
    lineHeight: "24px",
  },
};
