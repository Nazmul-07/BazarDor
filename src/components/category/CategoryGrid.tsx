import { Category } from "@/types/category";
import CategoryCard from "./CategoryCard";

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-2xl border border-slate-200">
        <p className="text-slate-500">কোনো ক্যাটাগরি পাওয়া যায়নি।</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id || category.slug} category={category} />
      ))}
    </div>
  );
}

