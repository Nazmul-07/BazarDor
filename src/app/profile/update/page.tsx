import { requireAuth } from "@/lib/auth-guard";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "তথ্য পরিবর্তন করুন | বাজার দর (BazarDor)",
  description: "আপনার প্রোফাইল নাম ও তথ্য পরিবর্তন করুন।",
};

export default async function UpdateProfilePage() {
  const session = await requireAuth("/profile/update");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <UpdateProfileForm
        currentName={session.user.name}
        email={session.user.email}
      />
    </div>
  );
}

