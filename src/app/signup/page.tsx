import { Suspense } from "react";
import SignupForm from "@/components/auth/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "রেজিস্ট্রেশন করুন | বাজার দর (BazarDor)",
  description: "বাজার দর প্ল্যাটফর্মে নতুন অ্যাকাউন্ট তৈরি করুন।",
};

export default function SignupPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <Suspense fallback={<div className="h-96 w-full max-w-md bg-white rounded-3xl animate-pulse" />}>
        <SignupForm />
      </Suspense>
    </div>
  );
}

