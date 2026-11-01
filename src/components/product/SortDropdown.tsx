"use client";

import { SortOrder } from "@/types/product";
import { ArrowUpDown, ChevronDown } from "lucide-react";

interface SortDropdownProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

export default function SortDropdown({ currentSort, onSortChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort-select"
        className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 whitespace-nowrap"
      >
        <ArrowUpDown className="w-4 h-4 text-slate-500" />
        <span>সাজান:</span>
      </label>

      <div className="relative">
        <select
          id="sort-select"
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value as SortOrder)}
          className="appearance-none bg-white border border-slate-200 hover:border-slate-300 text-slate-800 text-sm font-medium rounded-xl py-2 pl-3.5 pr-9 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-colors cursor-pointer"
        >
          <option value="default">ডিফল্ট</option>
          <option value="price-asc">দাম: কম থেকে বেশি</option>
          <option value="price-desc">দাম: বেশি থেকে কম</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

