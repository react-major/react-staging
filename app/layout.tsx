"use client";

import { TopNav } from "@/ui/components/Layout/TopNav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <TopNav
          section="unknown"
          // @ts-ignore
          routeTree={metadata}
          breadcrumbs={[]}
        />
        {children}
      </body>
    </html>
  );
}
