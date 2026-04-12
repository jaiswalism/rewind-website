import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ScrollToHash from "../components/ScrollToHash";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rewind - Reflect. Reset. Rewind.",
  description: "A beautiful virtual companion and journaling tool for your daily wellness.",
  icons: {
    icon: "/logo-dark.ico",
    apple: "/logo-dark.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col overflow-x-clip max-w-full selection:bg-[#3B38FF] selection:text-white">
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
