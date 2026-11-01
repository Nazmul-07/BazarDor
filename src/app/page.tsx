import { getCategories } from "@/services/category.service";
import { getProducts } from "@/services/product.service";
import PriceTicker from "@/components/home/PriceTicker";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/category/CategoryGrid";
import ProductListSection from "@/components/product/ProductListSection";
import WhyBazarDor from "@/components/home/WhyBazarDor";
import ErrorState from "@/components/shared/ErrorState";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { LayoutGrid } from "lucide-react";

export default async function HomePage() {
  let categories: Category[] = [];
  let products: Product[] = [];
  let hasError = false;
  let errorMessage = "";

  try {
    const [catData, prodData] = await Promise.all([
      getCategories(),
      getProducts(),
    ]);
    categories = catData;
    products = prodData;
  } catch (error) {
    hasError = true;
    errorMessage =
      error instanceof Error ? error.message : "তথ্য লোড করতে সমস্যা হয়েছে।";
  }

  return (
    <div className="space-y-10 sm:space-y-14 pb-20">
      {/* Real API Price Ticker */}
      <PriceTicker products={products} />

      {/* Hero Section */}
      <HeroSection />

      {/* Error state if API fails */}
      {hasError ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ErrorState
            title="বাজার দর তথ্য লোড করা যায়নি"
            message={errorMessage}
          />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
          {/* Category Section */}
          <section id="categories" className="scroll-mt-24 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    বাজার ক্যাটাগরি
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    আপনার প্রয়োজনীয় পণ্য সহজে পেতে ক্যাটাগরি নির্বাচন করুন
                  </p>
                </div>
              </div>
            </div>

            <CategoryGrid categories={categories} />
          </section>

          {/* Featured / All Products Section with Challenge C1 Sort Dropdown + Live Search */}
          <section id="products" className="scroll-mt-24">
            <ProductListSection
              initialProducts={products}
              title="আজকের বাজার দর"
              subtitle="নিত্যপ্রয়োজনীয় সকল পণ্যের হালনাগাদ খুচরা ও পাইকারি দর"
            />
          </section>

          {/* Why BazarDor Trust Section */}
          <WhyBazarDor />
        </div>
      )}
    </div>
  );
}
