import { Product, SortOrder } from "@/types/product";
import { fromBengaliDigits } from "./format-price";

/**
 * Extracts a numeric price from a number, string (English or Bengali numerals, currency symbols, commas).
 */
export function extractNumericPrice(value: number | string | null | undefined): number {
  if (value === null || value === undefined) return 0;
  if (typeof value === "number") {
    return isNaN(value) ? 0 : value;
  }

  // Convert Bengali numerals to English
  const englishString = fromBengaliDigits(String(value));

  // Remove currency symbol ৳, commas, spaces, units etc. Keep digits and decimal point.
  const cleaned = englishString.replace(/[^0-9.]/g, "");
  const parsed = parseFloat(cleaned);

  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Pure function that sorts products by price without mutating the input array.
 * Restores original API ordering when sortOrder is 'default'.
 */
export function sortProducts(products: Product[], sortOrder: SortOrder): Product[] {
  if (!Array.isArray(products)) return [];
  if (sortOrder === "default") {
    // Return a shallow copy to preserve original order and prevent mutation
    return [...products];
  }

  return [...products].sort((a, b) => {
    const priceA = extractNumericPrice(a.today);
    const priceB = extractNumericPrice(b.today);

    if (sortOrder === "price-asc") {
      return priceA - priceB;
    }

    if (sortOrder === "price-desc") {
      return priceB - priceA;
    }

    return 0;
  });
}

