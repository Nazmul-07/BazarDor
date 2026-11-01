import { apiClient, ApiError } from "./api-client";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const data = await apiClient<Product[]>("/products", {
      revalidate: 60,
    });
    if (!Array.isArray(data)) {
      return [];
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getProductsByCategory(categoryIdentifier: string): Promise<Product[]> {
  if (!categoryIdentifier) return [];
  try {
    const data = await apiClient<Product[]>(
      `/products?category=${encodeURIComponent(categoryIdentifier)}`,
      {
        revalidate: 60,
      }
    );
    if (!Array.isArray(data)) {
      return [];
    }
    return data;
  } catch (error) {
    console.error(`Failed to fetch products for category ${categoryIdentifier}:`, error);
    throw error;
  }
}

export async function getProductById(id: string | number): Promise<Product | null> {
  if (id === undefined || id === null || id === "") return null;
  try {
    const data = await apiClient<Product>(`/products/${encodeURIComponent(String(id))}`, {
      revalidate: 60,
    });
    if (!data || !data.id) {
      return null;
    }
    return data;
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }
    console.error(`Failed to fetch product with id ${id}:`, error);
    throw error;
  }
}

