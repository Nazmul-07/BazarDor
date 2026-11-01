import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-10 text-center space-y-6">
        {/* Visual Badge */}
        <div className="relative mx-auto w-24 h-24 rounded-3xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-inner">
          <Compass className="w-12 h-12 stroke-[1.5] animate-pulse" />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-full shadow-xs">
            ৪০৪
          </span>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি।
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে অথবা বর্তমানে উপলব্ধ নয়।
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-green-600 hover:bg-green-700 active:bg-green-800 transition-all shadow-md shadow-green-600/20"
          >
            <Home className="w-4 h-4" />
            <span>হোম পেজে ফিরে যান</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

