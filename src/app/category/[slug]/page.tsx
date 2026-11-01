import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug } from "@/services/category.service";
import { getProductsByCategory } from "@/services/product.service";
import ProductListSection from "@/components/product/ProductListSection";
import { ArrowLeft, Tag } from "lucide-react";
import { Metadata } from "next";


interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return {
      title: "ক্যাটাগরি পাওয়া যায়নি | বাজার দর",
    };
  }
  return {
    title: `${category.nameBn} বাজার দর | বাজার দর (BazarDor)`,
    description: `${category.nameBn} ক্যাটাগরির নিত্যপ্রয়োজনীয় পণ্যের সম্ভাব্য ও সাম্প্রতিক দর।`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id || category.slug);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Breadcrumb / Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>সকল ক্যাটাগরিতে ফিরে যান</span>
        </Link>
      </div>

      {/* Category Header Card */}
      <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-3xl p-6 sm:p-8 border border-green-200/80 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        <div className="w-20 h-20 rounded-2xl bg-white border border-green-200 flex items-center justify-center text-4xl shadow-sm shrink-0">
          {category.icon || "🛒"}
        </div>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
            <Tag className="w-3.5 h-3.5" />
            <span>বাজার বিভাগ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {category.nameBn}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            {category.nameBn} সম্পর্কিত সকল নিত্যপ্রয়োজনীয় পণ্যের বাজার দর ও দামের তুলনামূলক চিত্র।
          </p>
        </div>
      </div>

      {/* Product List with Sorting (Challenge C1) */}
      <ProductListSection
        initialProducts={products}
        title={`${category.nameBn} পণ্যের তালিকা`}
        subtitle="খুচরা ও পাইকারি মূল্যের হালনাগাদ তথ্য"
      />
    </div>
  );
}

