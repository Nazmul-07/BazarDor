export default function CategorySkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-slate-200/80 animate-pulse space-y-3"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-100" />
          <div className="h-4 w-20 bg-slate-100 rounded" />
          <div className="h-3 w-14 bg-slate-100 rounded" />
        </div>
      ))}
    </div>
  );
}

