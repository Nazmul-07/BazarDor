"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import {
  Menu,
  X,
  Store,
  LogOut,
  LogIn,
  UserPlus,
  Home,
  LayoutGrid,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const { data: session, isPending } = useSession();

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
      setMobileMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-green-300 flex items-center justify-center text-black shadow-md shadow-gray-600/30 overflow-hidden">
              {!logoError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/logo.png"
                  alt="বাজার দর"
                  className="w-full h-full object-contain p-2"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Store className="w-5 h-5 text-white" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-green-600 transition-colors">
                বাজার দর
              </span>
              <span className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">
                BazarDor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/") && pathname === "/"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>হোম</span>
            </Link>
            <Link
              href="/#categories"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/category")
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>ক্যাটাগরি</span>
            </Link>
          </nav>

          {/* Desktop Auth Controls */}
          <div className="hidden md:flex items-center gap-3">
            {isPending ? (
              <div className="h-9 w-24 bg-slate-100 rounded-lg animate-pulse" />
            ) : session?.user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/profile"
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                    isActive("/profile")
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                    {session.user.name ? session.user.name[0].toUpperCase() : "U"}
                  </div>
                  <span className="max-w-[120px] truncate">{session.user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                  title="লগআউট"
                >
                  <LogOut className="w-4 h-4" />
                  <span>লগআউট</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>লগইন</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm shadow-green-600/30 transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>রেজিস্ট্রেশন</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="মোবাইল মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive("/") && pathname === "/"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Home className="w-5 h-5 text-slate-400" />
              <span>হোম</span>
            </Link>
            <Link
              href="/#categories"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-medium ${
                pathname.startsWith("/category")
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <LayoutGrid className="w-5 h-5 text-slate-400" />
              <span>ক্যাটাগরি</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100">
            {session?.user ? (
              <div className="space-y-2">
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                    {session.user.name ? session.user.name[0].toUpperCase() : "U"}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-slate-900 truncate">
                      {session.user.name}
                    </span>
                    <span className="text-xs text-slate-500 truncate">
                      {session.user.email}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>লগআউট</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>লগইন</span>
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>রেজিস্ট্রেশন</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

