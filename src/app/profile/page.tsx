import { requireAuth } from "@/lib/auth-guard";
import ProfileCard from "@/components/profile/ProfileCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "আমার প্রোফাইল | বাজার দর (BazarDor)",
  description: "আপনার বাজার দর প্রোফাইল এবং অ্যাকাউন্ট সংক্রান্ত তথ্য।",
};

export default async function ProfilePage() {
  const session = await requireAuth("/profile");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <ProfileCard
        user={{
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          createdAt: session.user.createdAt,
        }}
      />
    </div>
  );
}

