"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Page } from "ui/components/Layout/Page";

function MaxWidth({ children }: { children: any }) {
  return <div className="max-w-4xl ms-0 2xl:mx-auto">{children}</div>;
}

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "React Releases",
  description:
    "React feature progression through releases, canary, experimental nightly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Page
          toc={[]}
          // @ts-ignore
          routeTree={{}}
          // @ts-ignore
          meta={metadata}
        >
          <MaxWidth>{children}</MaxWidth>
        </Page>
      </body>
    </html>
  );
}
