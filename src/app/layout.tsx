import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "বাজার দর (BazarDor) — প্রয়োজনীয় পণ্যের দাম এক নজরে",
  description: "নিত্যপ্রয়োজনীয় পণ্যের সম্ভাব্য দাম জানুন সহজেই। প্রতিদিনের বাজার দর এক নজরে।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <ToastProvider />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
