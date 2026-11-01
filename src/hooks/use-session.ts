import { useSession } from "@/lib/auth-client";

export function useUserSession() {
  const { data: session, isPending, error, refetch } = useSession();
  return {
    session,
    user: session?.user || null,
    isLoading: isPending,
    error,
    refetch,
  };
}

