export default function ProductSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden animate-pulse"
        >
          {/* Image skeleton */}
          <div className="h-44 bg-slate-100 flex items-center justify-center relative">
            <div className="w-16 h-16 rounded-full bg-slate-200/60" />
            <div className="absolute top-3 left-3 h-5 w-16 bg-slate-200/60 rounded" />
          </div>

          {/* Content skeleton */}
          <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-5 w-3/4 bg-slate-200 rounded" />
              <div className="h-7 w-1/2 bg-slate-200 rounded mt-2" />
              <div className="h-3 w-1/3 bg-slate-100 rounded" />
            </div>

            <div className="h-10 w-full bg-slate-200 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}

