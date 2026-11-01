"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "তথ্য লোড করতে সমস্যা হয়েছে",
  message = "সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-red-50/50 rounded-3xl border border-red-200/80 shadow-xs max-w-lg mx-auto my-8">
      <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 mt-2 max-w-sm">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>পুনরায় চেষ্টা করুন</span>
        </button>
      )}
    </div>
  );
}

