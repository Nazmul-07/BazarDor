import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice, toBengaliDigits, formatUnitBn } from "@/lib/format-price";
import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const currentPrice = formatPrice(product.today);
  const unitBn = formatUnitBn(product.unit);
  const yesterdayPrice = product.yesterday ? formatPrice(product.yesterday) : null;

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 hover:border-green-400 shadow-2xs hover:shadow-xl hover:shadow-green-500/10 transition-all duration-200 overflow-hidden hover:-translate-y-1">
      {/* Visual Header */}
      <div className="relative bg-gradient-to-b from-slate-50/80 to-slate-100/50 p-7 flex items-center justify-center border-b border-slate-100">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-200 select-none drop-shadow-xs">
          {product.image || product.categoryIcon || "🛒"}
        </span>

        {/* Category Pill */}
        <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
          <span>{product.categoryIcon}</span>
          <span>{product.categoryNameBn || product.category}</span>
        </span>

        {/* Price Change Pill */}
        {product.change && (
          <div className="absolute top-3.5 right-3.5">
            {product.change.dir === "up" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[11px] font-bold shadow-2xs">
                <TrendingUp className="w-3 h-3" />
                <span>+{toBengaliDigits(product.change.pct)}%</span>
              </span>
            )}
            {product.change.dir === "down" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold shadow-2xs">
                <TrendingDown className="w-3 h-3" />
                <span>-{toBengaliDigits(product.change.pct)}%</span>
              </span>
            )}
            {product.change.dir === "same" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-semibold">
                <Minus className="w-3 h-3" />
                <span>স্থির</span>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Details Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors line-clamp-1">
            {product.nameBn}
          </h3>

          {/* Pricing Row */}
          <div className="mt-3 flex items-baseline justify-between pt-1">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-green-700 tracking-tight">
                  {currentPrice}
                </span>
                {unitBn && (
                  <span className="text-xs font-bold text-slate-500">
                    / {unitBn}
                  </span>
                )}
              </div>
              {yesterdayPrice && (
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <span>গতকাল:</span>
                  <span className="line-through">{yesterdayPrice}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/product/${product.id}`}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-green-600 hover:text-white transition-all duration-150 shadow-2xs group-hover:shadow-md"
        >
          <span>বিস্তারিত দেখুন</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
