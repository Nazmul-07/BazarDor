import ProductSkeleton from "@/components/product/ProductSkeleton";

export default function CategoryLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="h-4 w-36 bg-slate-200 rounded animate-pulse" />

      {/* Header skeleton */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 animate-pulse flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-slate-200 shrink-0" />
        <div className="space-y-3 w-full max-w-md">
          <div className="h-4 w-24 bg-slate-200 rounded" />
          <div className="h-8 w-48 bg-slate-200 rounded" />
          <div className="h-4 w-full bg-slate-100 rounded" />
        </div>
      </div>

      <ProductSkeleton count={8} />
    </div>
  );
}

