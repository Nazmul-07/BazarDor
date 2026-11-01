interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  action?: React.ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-slate-200">
      <div className="space-y-1">
        {badge && (
          <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 mb-1">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

