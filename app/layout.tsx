import type { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fff] w-full h-full pt-[20px] mx-auto">
        {children}
      </body>
    </html>
  );
}
