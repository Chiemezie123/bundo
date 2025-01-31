import type { Metadata } from "next";
import "./globals.css";
import tvSans from "@/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#fff] w-full h-full  mx-auto ${tvSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
