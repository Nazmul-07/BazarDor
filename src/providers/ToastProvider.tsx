"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1E293B",
          color: "#FFFFFF",
          fontSize: "14px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        success: {
          duration: 3500,
          iconTheme: {
            primary: "#16A34A",
            secondary: "#FFFFFF",
          },
        },
        error: {
          duration: 4000,
          iconTheme: {
            primary: "#EF4444",
            secondary: "#FFFFFF",
          },
        },
      }}
    />
  );
}

