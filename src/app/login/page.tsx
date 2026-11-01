import { Suspense } from "react";
import LoginForm from "@/components/auth/LoginForm";
import AuthRedirectToast from "@/components/auth/AuthRedirectToast";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "লগইন করুন | বাজার দর (BazarDor)",
  description: "আপনার বাজার দর অ্যাকাউন্টে লগইন করুন।",
};

export default function LoginPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <Suspense fallback={null}>
        <AuthRedirectToast />
      </Suspense>
      <Suspense fallback={<div className="h-96 w-full max-w-md bg-white rounded-3xl animate-pulse" />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}

