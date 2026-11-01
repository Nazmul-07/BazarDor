const DEFAULT_API_URL = "https://openapi.programming-hero.com/api/bazardor";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export function getApiBaseUrl(): string {
  const envUrl = process.env.BAZARDOR_API_URL || process.env.NEXT_PUBLIC_BAZARDOR_API_URL;
  if (!envUrl) return DEFAULT_API_URL;
  return envUrl.replace(/\/+$/, "");
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit & { revalidate?: number }
): Promise<T> {
  const baseUrl = getApiBaseUrl();
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${cleanEndpoint}`;

  const { revalidate = 60, ...fetchOptions } = options || {};

  try {
    const res = await fetch(url, {
      ...fetchOptions,
      headers: {
        Accept: "application/json",
        ...fetchOptions.headers,
      },
      next: { revalidate },
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new ApiError(`Resource not found: ${cleanEndpoint}`, 404);
      }
      throw new ApiError(
        `API request failed with status ${res.status}: ${res.statusText}`,
        res.status
      );
    }

    const data = await res.json();
    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    const message =
      error instanceof Error ? error.message : "An unexpected network error occurred";
    throw new ApiError(message, 500);
  }
}

