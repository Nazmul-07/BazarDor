import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format-price";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface PriceTickerProps {
  products: Product[];
}

export default function PriceTicker({ products }: PriceTickerProps) {
  if (!products || products.length === 0) {
    return null;
  }

  // Duplicate items to ensure smooth seamless loop
  const tickerItems = [...products, ...products];

  return (
    <div className="bg-slate-900 text-white py-2.5 overflow-hidden border-b border-slate-800 select-none shadow-inner">
      <div className="flex items-center">
        {/* Ticker Badge */}
        <div className="z-10 bg-green-600 text-white font-bold text-xs px-3.5 py-1 ml-4 rounded-full flex items-center gap-1.5 shadow-md shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="hidden sm:inline">লাইভ বাজার দর</span>
          <span className="sm:hidden">লাইভ</span>
        </div>

        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative ml-3">
          <div className="animate-marquee flex items-center gap-7 text-sm">
            {tickerItems.map((product, index) => {
              const formattedPrice = formatPrice(product.today, product.unit);
              const changeDir = product.change?.dir;

              return (
                <Link
                  key={`${product.id}-${index}`}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-2 whitespace-nowrap text-slate-300 hover:text-white px-2 py-0.5 rounded-lg hover:bg-slate-800/80 transition-colors"
                >
                  <span className="text-base">{product.image || "🛒"}</span>
                  <span className="font-semibold text-slate-100">{product.nameBn}</span>
                  <span className="text-green-400 font-bold">{formattedPrice}</span>

                  {changeDir === "up" && (
                    <span className="text-red-400 flex items-center text-xs">
                      <TrendingUp className="w-3 h-3 inline" />
                    </span>
                  )}
                  {changeDir === "down" && (
                    <span className="text-green-400 flex items-center text-xs">
                      <TrendingDown className="w-3 h-3 inline" />
                    </span>
                  )}
                  {changeDir === "same" && (
                    <span className="text-slate-400 flex items-center text-xs">
                      <Minus className="w-3 h-3 inline" />
                    </span>
                  )}

                  <span className="text-slate-700 ml-3 select-none">•</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
