import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

/**
 * Server-side guard to ensure the user is authenticated.
 * If not, redirects to /login with reason=auth_required and preserves callbackUrl.
 */
export async function requireAuth(callbackUrl: string = "/profile") {
  const reqHeaders = await headers();
  const session = await auth.api.getSession({
    headers: reqHeaders,
  });

  if (!session || !session.user) {
    const searchParams = new URLSearchParams({
      reason: "auth_required",
      callbackUrl,
    });
    redirect(`/login?${searchParams.toString()}`);
  }

  return session;
}

