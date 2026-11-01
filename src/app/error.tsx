"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-red-200/90 shadow-xl p-8 sm:p-10 text-center space-y-6">
        <div className="mx-auto w-20 h-20 rounded-3xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
          <AlertCircle className="w-10 h-10 stroke-[1.75]" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">
            একটি অপ্রত্যাশিত সমস্যা দেখা দিয়েছে
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            {error.message || "সার্ভার থেকে তথ্য লোড করতে ব্যর্থ হয়েছে।"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold bg-green-600 hover:bg-green-700 transition-colors shadow-sm cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>আবার চেষ্টা করুন</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-slate-700 font-semibold bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>হোমে যান</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

