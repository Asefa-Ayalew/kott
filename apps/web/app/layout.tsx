import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import RootStyleRegistry from "./mantine";

export const metadata: Metadata = {
  title: "kott",
  description: "kegeberew best order application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <main>{children}</main>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
