import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";
import ClientWrapper from "@/components/ClientWrapper";
import ScrollReset from "@/components/ScrollReset";

export const metadata: Metadata = {
  title: "Portfolio - Adrian Birta",
  description: "Generated by create next app",
  icons: "/images/iconM16.webp"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="h-screen m-0 p-0 min-h-80">
        <main className="h-screen m-0 p-0 min-h-80">
          <div className="portfolio-wrapper sm:flex-row flex-col sm:p-5 p-1">
            <Sidebar />
            <ClientWrapper>
              {children}
              <ScrollReset />
            </ClientWrapper>
          </div>
        </main>
      </body>
    </html>
  );
}
