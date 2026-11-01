"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { toBengaliDigits } from "@/lib/format-price";
import toast from "react-hot-toast";
import {
  User as UserIcon,
  Mail,
  Calendar,
  Edit3,
  LogOut,
  ShieldCheck,
  Loader2,
} from "lucide-react";

interface ProfileCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt?: Date | string;
  };
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("সফলভাবে লগআউট হয়েছে!");
            router.push("/");
            router.refresh();
          },
          onError: () => {
            toast.error("লগআউট করতে সমস্যা হয়েছে।");
          },
        },
      });
    } catch {
      toast.error("লগআউট করতে সমস্যা হয়েছে।");
    } finally {
      setIsLoggingOut(false);
    }
  };

  const formattedDate = user.createdAt
    ? toBengaliDigits(
        new Date(user.createdAt).toLocaleDateString("bn-BD", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      )
    : "সাম্প্রতিক";

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Profile Header Gradient */}
      <div className="h-28 bg-gradient-to-r from-green-600 to-emerald-700 relative flex items-center justify-end px-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ভেরিফাইড ইউজার</span>
        </span>
      </div>

      {/* Profile Body */}
      <div className="px-6 sm:px-8 pb-8 pt-0 relative">
        {/* Avatar */}
        <div className="-mt-14 mb-4 flex items-center justify-between">
          <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
            <div className="w-full h-full rounded-xl bg-gradient-to-tr from-green-500 to-emerald-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-inner">
              {user.name ? user.name[0].toUpperCase() : "U"}
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {user.name}
            </h1>
            <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{user.email}</span>
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>যোগদানের তারিখ</span>
              </span>
              <span className="font-semibold text-slate-800">{formattedDate}</span>
            </div>
            <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-200/60">
              <span className="text-slate-500 flex items-center gap-1.5">
                <UserIcon className="w-4 h-4 text-slate-400" />
                <span>অ্যাকাউন্ট আইডি</span>
              </span>
              <span className="font-mono text-xs text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                {user.id.slice(0, 8)}...
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link
              href="/profile/update"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 transition-colors shadow-sm shadow-green-600/20"
            >
              <Edit3 className="w-4 h-4" />
              <span>তথ্য পরিবর্তন করুন</span>
            </Link>

            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 active:bg-red-200 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isLoggingOut ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>লগআউট হচ্ছে...</span>
                </>
              ) : (
                <>
                  <LogOut className="w-4 h-4" />
                  <span>লগআউট</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

