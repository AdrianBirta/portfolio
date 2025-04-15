import type { Metadata } from "next";
import "./globals.css";
import HashRedirect from "@/lib/HashRedirect";

export const metadata: Metadata = {
  title: "Portfolio - Adrian Birta",
  description: "Generated by create next app",
  icons: "images/iconM16.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen m-0 p-0 min-h-80">
        <HashRedirect />
        <main className="h-screen m-0 p-0 min-h-80">
          {children}
        </main>
      </body>
    </html>
  );
}
