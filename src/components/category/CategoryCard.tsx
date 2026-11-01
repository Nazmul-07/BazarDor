import Link from "next/link";
import { Category } from "@/types/category";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative flex flex-col items-center justify-between p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-green-400 shadow-2xs hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200 hover:-translate-y-1 text-center"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-50 to-slate-50 border border-green-100 flex items-center justify-center text-3xl sm:text-4xl group-hover:scale-110 group-hover:bg-green-100/80 transition-all duration-200 mb-3 shadow-2xs">
        {category.icon || "🛒"}
      </div>

      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-green-700 transition-colors">
          {category.nameBn}
        </h3>
        <p className="text-[11px] text-slate-400 font-medium group-hover:text-slate-600 transition-colors">
          নিত্যপ্রয়োজনীয় পণ্য
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1 text-xs font-semibold text-green-600 group-hover:text-green-700 transition-colors">
        <span>দর দেখুন</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
