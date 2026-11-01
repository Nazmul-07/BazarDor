import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/services/product.service";
import { formatPrice, toBengaliDigits, formatUnitBn } from "@/lib/format-price";
import {
  ArrowLeft,
  Store,
  MapPin,
  TrendingUp,
  TrendingDown,
  Minus,
  ShieldCheck,
} from "lucide-react";
import { Metadata } from "next";


interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) {
    return {
      title: "পণ্য পাওয়া যায়নি | বাজার দর",
    };
  }
  return {
    title: `${product.nameBn} বাজার দর | বাজার দর (BazarDor)`,
    description: `${product.nameBn} এর আজকের বাজার দর ${formatPrice(
      product.today,
      product.unit
    )}। গতকালের ও গত সপ্তাহের মূল্যের তুলনামূলক বিবরণ।`,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const currentPrice = formatPrice(product.today);
  const unitBn = formatUnitBn(product.unit);
  const yesterdayPrice = product.yesterday ? formatPrice(product.yesterday) : null;
  const lastWeekPrice = product.lastWeek ? formatPrice(product.lastWeek) : null;
  const lastMonthPrice = product.lastMonth ? formatPrice(product.lastMonth) : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Back Link */}
      <div>
        <Link
          href={`/category/${product.category}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{product.categoryNameBn || "ক্যাটাগরি"} তালিকায় ফিরুন</span>
        </Link>
      </div>

      {/* Main Product Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
          {/* Left Visual */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-green-50/50 to-slate-50 rounded-2xl border border-slate-100">
            <span className="text-7xl sm:text-8xl select-none animate-in zoom-in-50 duration-300">
              {product.image || product.categoryIcon || "🛒"}
            </span>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Link
                href={`/category/${product.category}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-green-400 transition-colors shadow-2xs"
              >
                <span>{product.categoryIcon}</span>
                <span>{product.categoryNameBn || product.category}</span>
              </Link>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100/80 text-green-800 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>দৈনিক যাচাইকৃত দর</span>
              </span>
            </div>
          </div>

          {/* Right Info */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  {product.nameBn}
                </h1>

                {/* Change Pill */}
                {product.change && (
                  <div>
                    {product.change.dir === "up" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+{toBengaliDigits(product.change.pct)}% দাম বৃদ্ধি</span>
                      </span>
                    )}
                    {product.change.dir === "down" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold">
                        <TrendingDown className="w-3.5 h-3.5" />
                        <span>-{toBengaliDigits(product.change.pct)}% দাম কমেছে</span>
                      </span>
                    )}
                    {product.change.dir === "same" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                        <Minus className="w-3.5 h-3.5" />
                        <span>দাম অপরিবর্তিত</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Today's Price Highlight */}
              <div className="p-4 sm:p-5 rounded-2xl bg-green-50/60 border border-green-200/80 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">
                    আজকের গড় বাজার দর
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-green-700">
                      {currentPrice}
                    </span>
                    {unitBn && (
                      <span className="text-sm font-semibold text-slate-600">
                        / প্রতি {unitBn}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="badge badge-success text-white font-bold text-xs">
                    সর্বশেষ আপডেট
                  </span>
                </div>
              </div>

              {/* Historical Price Comparison Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="text-xs text-slate-500 font-medium">গতকাল</span>
                  <div className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
                    {yesterdayPrice || "—"}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="text-xs text-slate-500 font-medium">গত সপ্তাহ</span>
                  <div className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
                    {lastWeekPrice || "—"}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="text-xs text-slate-500 font-medium">গত মাস</span>
                  <div className="text-base sm:text-lg font-bold text-slate-800 mt-0.5">
                    {lastMonthPrice || "—"}
                  </div>
                </div>
              </div>

              {product.description && (
                <div className="pt-2 text-sm text-slate-600 leading-relaxed">
                  <p>{product.description}</p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>পণ্য কোড: BD-{toBengaliDigits(product.id)}</span>
              <span>পরিমাপ একক: {unitBn}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market-by-market breakdown */}
      {product.markets && product.markets.length > 0 && (
        <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  বিভাগীয় বাজারভিত্তিক দর
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  দেশের বিভিন্ন বাজারের সম্ভাব্য সর্বনিম্ন ও সর্বোচ্চ মূল্য
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 w-fit">
              মোট {toBengaliDigits(product.markets.length)} টি বাজার
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase bg-slate-50/70">
                  <th className="py-3.5 px-4 rounded-l-xl">বাজারের নাম</th>
                  <th className="py-3.5 px-4">বিভাগ</th>
                  <th className="py-3.5 px-4 text-right">সর্বনিম্ন দর</th>
                  <th className="py-3.5 px-4 text-right">সর্বোচ্চ দর</th>
                  <th className="py-3.5 px-4 text-right rounded-r-xl">গড় দর</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {product.markets.map((m, index) => {
                  const minPrice = formatPrice(m.min);
                  const maxPrice = formatPrice(m.max);
                  const avgPrice = formatPrice(Math.round((m.min + m.max) / 2));

                  return (
                    <tr
                      key={index}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3 px-4 font-semibold text-slate-800 flex items-center gap-2">
                        <Store className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{m.market}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{m.division}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-slate-700">
                        {minPrice}
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-slate-700">
                        {maxPrice}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-green-700">
                        {avgPrice}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

