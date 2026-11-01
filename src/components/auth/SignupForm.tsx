"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { UserPlus, User, Mail, Lock, Loader2 } from "lucide-react";

const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, "নাম প্রদান করা আবশ্যক")
      .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
    email: z
      .string()
      .min(1, "ইমেইল প্রদান করা আবশ্যক")
      .email("সঠিক ইমেইল ঠিকানা দিন"),
    password: z
      .string()
      .min(1, "পাসওয়ার্ড প্রদান করা আবশ্যক")
      .min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
    confirmPassword: z.string().min(1, "পাসওয়ার্ড নিশ্চিত করুন"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "পাসওয়ার্ড দুটি মিলছে না",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setFormError(null);

    try {
      const result = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        const errorMsg =
          result.error.message ||
          "রেজিস্ট্রেশন ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।";
        setFormError(errorMsg);
        toast.error(errorMsg);
        setIsLoading(false);
        return;
      }

      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
      router.push(callbackUrl);
      router.refresh();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "রেজিস্ট্রেশন করতে সমস্যা হয়েছে।";
      setFormError(message);
      toast.error(message);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8">
      <div className="text-center space-y-2 mb-6">
        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <UserPlus className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">অ্যাকাউন্ট খুলুন</h1>
        <p className="text-sm text-slate-500">
          বাজার দর এ যুক্ত হতে প্রয়োজনীয় তথ্য দিন
        </p>
      </div>

      {formError && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
            <User className="w-4 h-4 text-slate-400" />
            <span>আপনার নাম</span>
          </label>
          <input
            type="text"
            placeholder="আপনার পূর্ণ নাম"
            disabled={isLoading}
            {...register("name")}
            className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 transition-all ${
              errors.name
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-green-600 focus:ring-green-100"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 font-medium">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-slate-400" />
            <span>ইমেইল</span>
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            disabled={isLoading}
            {...register("email")}
            className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 transition-all ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-green-600 focus:ring-green-100"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-slate-400" />
            <span>পাসওয়ার্ড</span>
          </label>
          <input
            type="password"
            placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড"
            disabled={isLoading}
            {...register("password")}
            className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 transition-all ${
              errors.password
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-green-600 focus:ring-green-100"
            }`}
          />
          {errors.password && (
            <p className="text-xs text-red-500 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-slate-400" />
            <span>পাসওয়ার্ড নিশ্চিত করুন</span>
          </label>
          <input
            type="password"
            placeholder="পুনরায় পাসওয়ার্ড দিন"
            disabled={isLoading}
            {...register("confirmPassword")}
            className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 transition-all ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-200"
                : "border-slate-200 focus:border-green-600 focus:ring-green-100"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500 font-medium">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:opacity-60 shadow-md shadow-green-600/20 transition-all cursor-pointer mt-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>রেজিস্ট্রেশন হচ্ছে...</span>
            </>
          ) : (
            <>
              <UserPlus className="w-5 h-5" />
              <span>রেজিস্ট্রেশন সম্পন্ন করুন</span>
            </>
          )}
        </button>
      </form>

      {/* Switch to Login */}
      <div className="mt-6 pt-5 border-t border-slate-100 text-center text-sm text-slate-600">
        ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
        <Link
          href={`/login${callbackUrl !== "/profile" ? `?callbackUrl=${encodeURIComponent(callbackUrl)}` : ""}`}
          className="font-semibold text-green-600 hover:text-green-700 hover:underline"
        >
          লগইন করুন
        </Link>
      </div>
    </div>
  );
}

