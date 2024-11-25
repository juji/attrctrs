import type { Metadata } from "next";
import { NoScript } from "@/components/noscript";

import "./globals.css";

export const metadata: Metadata = {
  title: "Attractors | juji",
  description: "Some code to fill the time: Attractors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="app">
          {children}
        </div>
        <NoScript />
      </body>
    </html>
  );
}
