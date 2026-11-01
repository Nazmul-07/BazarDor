"use client";

import { useState, useMemo } from "react";
import { Product, SortOrder } from "@/types/product";
import { sortProducts } from "@/lib/sort-products";
import { toBengaliDigits } from "@/lib/format-price";
import SortDropdown from "./SortDropdown";
import ProductGrid from "./ProductGrid";
import { Search, X, ShoppingBag } from "lucide-react";

interface ProductListSectionProps {
  initialProducts: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductListSection({
  initialProducts,
  title,
  subtitle,
}: ProductListSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  // Filter products by search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return initialProducts;
    const query = searchQuery.toLowerCase().trim();
    return initialProducts.filter(
      (p) =>
        p.nameBn.toLowerCase().includes(query) ||
        (p.categoryNameBn && p.categoryNameBn.toLowerCase().includes(query)) ||
        p.category.toLowerCase().includes(query)
    );
  }, [initialProducts, searchQuery]);

  // Sort filtered products using Challenge C1 sorting
  const sortedProducts = useMemo(() => {
    return sortProducts(filteredProducts, sortOrder);
  }, [filteredProducts, sortOrder]);

  return (
    <div className="space-y-6">
      {/* Header & Controls Bar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            {title && (
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <span>{title}</span>
                <span className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                  {toBengaliDigits(sortedProducts.length)} টি পণ্য
                </span>
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-slate-500 mt-1 pl-10 md:pl-0">
                {subtitle}
              </p>
            )}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Live Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="পণ্য বা ক্যাটাগরি খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all text-slate-800 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-md hover:bg-slate-200 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Challenge C1 Sort Dropdown */}
            <SortDropdown currentSort={sortOrder} onSortChange={setSortOrder} />
          </div>
        </div>
      </div>

      {/* Product Grid or Search Empty State */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/80 p-8">
          <span className="text-4xl">🔍</span>
          <h3 className="text-lg font-bold text-slate-800 mt-3">
            &quot;{searchQuery}&quot; সম্পর্কিত কোনো পণ্য পাওয়া যায়নি
          </h3>
          <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
            অনুগ্রহ করে সঠিক বানান দিয়ে আবার খুঁজুন অথবা ফিল্টার রিসেট করুন।
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            সব পণ্য দেখুন
          </button>
        </div>
      ) : (
        <ProductGrid products={sortedProducts} />
      )}
    </div>
  );
}
