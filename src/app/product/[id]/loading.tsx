export default function ProductDetailsLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-pulse">
      <div className="h-4 w-32 bg-slate-200 rounded" />

      {/* Main card skeleton */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 h-64 bg-slate-100 rounded-2xl flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-slate-200" />
          </div>
          <div className="md:col-span-7 space-y-5">
            <div className="h-8 w-3/4 bg-slate-200 rounded" />
            <div className="h-20 bg-slate-100 rounded-2xl" />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 bg-slate-100 rounded-xl" />
              <div className="h-16 bg-slate-100 rounded-xl" />
              <div className="h-16 bg-slate-100 rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Table skeleton */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
        <div className="h-6 w-48 bg-slate-200 rounded" />
        <div className="h-40 bg-slate-50 rounded-xl" />
      </div>
    </div>
  );
}

