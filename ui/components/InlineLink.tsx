/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

"use client";

import cn from "classnames";
import NextLink from "next/link";

function InlineLink({
  href,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(
    className,
    "inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal",
  );
  return (
    <NextLink href={href as string} className={classes} {...props}>
      {children}
    </NextLink>
  );
}

export default InlineLink;
