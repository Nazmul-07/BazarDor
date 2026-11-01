import { apiClient, ApiError } from "./api-client";
import { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  try {
    const data = await apiClient<Category[]>("/categories", {
      revalidate: 120,
    });
    if (!Array.isArray(data)) {
      return [];
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  if (!slug) return null;
  try {
    const data = await apiClient<Category>(`/categories/${encodeURIComponent(slug)}`, {
      revalidate: 120,
    });
    if (!data || !data.slug) {
      return null;
    }
    return data;
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }
    console.error(`Failed to fetch category with slug ${slug}:`, error);
    throw error;
  }
}

