import { ArrowDown, Store, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-green-50/60 via-slate-50/50 to-white border-b border-slate-200/80 py-12 md:py-16 lg:py-20">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-green-200/90 shadow-2xs text-xs font-semibold text-green-800">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span>বাংলাদেশে নিত্যপ্রয়োজনীয় পণ্যের নির্ভরযোগ্য বাজার দর</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
              প্রতিদিনের বাজার দর, <br />
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                এখন হাতের মুঠোয়
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              নিত্যপ্রয়োজনীয় পণ্যের সম্ভাব্য দাম জানুন সহজেই। চাল, ডাল, তেল, সবজি সহ খুচরা ও পাইকারি মূল্যের হালনাগাদ তথ্য এক নজরে।
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 shadow-lg shadow-green-600/25 transition-all duration-150 hover:-translate-y-0.5"
              >
                <span>বাজার দর দেখুন</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs transition-all duration-150"
              >
                <Store className="w-4 h-4 text-slate-400" />
                <span>ক্যাটাগরি ব্রাউজ করুন</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-slate-900">৮+</span>
                <span className="text-xs text-slate-500 font-medium">প্রধান ক্যাটাগরি</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-slate-200/80 px-4">
                <span className="text-2xl font-black text-green-700">৩৩+</span>
                <span className="text-xs text-slate-500 font-medium">নিত্যপ্রয়োজনীয় পণ্য</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-black text-slate-900">১২+</span>
                <span className="text-xs text-slate-500 font-medium">বিভাগীয় বাজার</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-white via-slate-50 to-green-50 border border-slate-200 shadow-xl overflow-hidden group">
                <div className="rounded-2xl overflow-hidden bg-white border border-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-banner.png"
                    alt="বাজার দর ব্যানার"
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Floating pill 1: Live badge */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-md flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    আজকের লাইভ রেট
                  </span>
                </div>

                {/* Floating pill 2: Verified badge */}
                <div className="absolute bottom-5 right-5 bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-800 shadow-lg flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-green-500 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-200">
                      দৈনিক যাচাইকৃত
                    </div>
                    <div className="text-[10px] text-green-400">
                      সঠিক বাজার তথ্য
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
