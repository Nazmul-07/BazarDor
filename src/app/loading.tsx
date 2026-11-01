import ProductSkeleton from "@/components/product/ProductSkeleton";
import CategorySkeleton from "@/components/category/CategorySkeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <div className="space-y-4">
        <div className="h-8 w-48 bg-slate-200 rounded-lg animate-pulse" />
        <CategorySkeleton count={8} />
      </div>
      <div className="space-y-4">
        <div className="h-8 w-48 bg-slate-200 rounded-lg animate-pulse" />
        <ProductSkeleton count={8} />
      </div>
    </div>
  );
}

