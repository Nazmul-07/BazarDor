import Link from "next/link";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}

export default function EmptyState({
  title = "কোনো তথ্য পাওয়া যায়নি",
  description = "দুঃখিত, এই মুহূর্তে কোনো তথ্য খুঁজে পাওয়া যায়নি। পরে আবার চেষ্টা করুন।",
  actionText = "হোম পেজে ফিরে যান",
  actionHref = "/",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white rounded-3xl border border-slate-200/80 shadow-xs max-w-lg mx-auto my-8">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center mb-4">
        <PackageOpen className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-2 max-w-sm">{description}</p>
      {actionHref && actionText && (
        <Link
          href={actionHref}
          className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
}

