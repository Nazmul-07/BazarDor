"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { User, ArrowLeft, Loader2, Save } from "lucide-react";

const updateSchema = z.object({
  name: z
    .string()
    .min(1, "নাম প্রদান করা আবশ্যক")
    .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে")
    .max(50, "নাম সর্বোচ্চ ৫০ অক্ষরের হতে পারে"),
});

type UpdateFormData = z.infer<typeof updateSchema>;

interface UpdateProfileFormProps {
  currentName: string;
  email: string;
}

export default function UpdateProfileForm({
  currentName,
  email,
}: UpdateProfileFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: currentName || "",
    },
  });

  const onSubmit = async (values: UpdateFormData) => {
    setIsLoading(true);
    setFormError(null);

    try {
      const result = await authClient.updateUser({
        name: values.name,
      });

      if (result?.error) {
        const errorMsg =
          result.error.message ||
          "তথ্য আপডেট করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।";
        setFormError(errorMsg);
        toast.error(errorMsg);
        setIsLoading(false);
        return;
      }

      toast.success("নাম সফলভাবে পরিবর্তন করা হয়েছে!");
      router.push("/profile");
      router.refresh();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "তথ্য আপডেট করতে সমস্যা হয়েছে।";
      setFormError(message);
      toast.error(message);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <Link
          href="/profile"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>প্রোফাইলে ফিরুন</span>
        </Link>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
          তথ্য সংশোধন
        </span>
      </div>

      <div className="text-center space-y-1.5 mb-6">
        <h1 className="text-2xl font-bold text-slate-900">তথ্য পরিবর্তন করুন</h1>
        <p className="text-sm text-slate-500">
          আপনার বর্তমান নাম পরিবর্তন করে নতুন নাম দিন
        </p>
      </div>

      {formError && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
          {formError}
        </div>
      )}

      {/* Current User Info Badge */}
      <div className="mb-5 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
        <div className="text-xs text-slate-500">বর্তমান নাম:</div>
        <div className="text-sm font-bold text-slate-800">{currentName}</div>
        <div className="text-xs text-slate-400">ইমেইল (অপরিবর্তনযোগ্য): {email}</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
            <User className="w-4 h-4 text-slate-400" />
            <span>নতুন নাম</span>
          </label>
          <input
            type="text"
            placeholder="আপনার নতুন নাম লিখুন"
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

        {/* Update Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:opacity-60 shadow-md shadow-green-600/20 transition-all cursor-pointer mt-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>আপডেট হচ্ছে...</span>
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              <span>তথ্য সংরক্ষণ করুন</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

