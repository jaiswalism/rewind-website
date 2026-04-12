import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rewind - Revisit your digital past",
  description: "A beautiful virtual companion and journaling tool for your daily wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col selection:bg-[#3B38FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
