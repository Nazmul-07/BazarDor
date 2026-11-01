"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthRedirectToast() {
  const searchParams = useSearchParams();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (hasShownToast.current) return;

    const reason = searchParams.get("reason");
    if (reason === "auth_required") {
      toast.error("এই পেজটি দেখতে আপনাকে প্রথমে লগইন করতে হবে।", {
        id: "auth-required-toast",
      });
      hasShownToast.current = true;
    }
  }, [searchParams]);

  return null;
}

