import { ShieldCheck, BarChart3, Clock, MapPin } from "lucide-react";

export default function WhyBazarDor() {
  const features = [
    {
      icon: Clock,
      title: "প্রতিদিনের তাজা তথ্য",
      description: "সারাদেশের পাইকারি ও খুচরা বাজারের সর্বশেষ দাম প্রতিদিন যাচাই করে প্রকাশ করা হয়।",
      color: "text-green-600 bg-green-50 border-green-200",
    },
    {
      icon: MapPin,
      title: "বিভাগভিত্তিক তুলনামূলক চিত্র",
      description: "কারওয়ান বাজার, মিরপুর, চট্টগ্রাম, রাজশাহী সহ বিভিন্ন বিভাগীয় বাজারের সর্বনিম্ন ও সর্বোচ্চ দর।",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: BarChart3,
      title: "দামের তারতম্য বিশ্লেষণ",
      description: "গতকাল ও গত সপ্তাহের তুলনায় পণ্যের মূল্য বৃদ্ধি বা হ্রাসের নির্ভরযোগ্য শতকরা হিসাব।",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: ShieldCheck,
      title: "১০০% পক্ষপাতহীন ও উন্মুক্ত",
      description: "কোনো প্রকার বাণিজ্যিক স্বার্থ ছাড়া সাধারণ ক্রেতাদের সুবিধার জন্য সঠিক বাজার দরের স্বচ্ছ তথ্য।",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50/80 rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs">
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
        <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
          আমাদের বিশেষত্ব
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          কেন বাজার দর ব্যবহার করবেন?
        </h2>
        <p className="text-sm text-slate-500">
          সাধারণ ভোক্তা ও পরিবারের সাশ্রয়ী কেনাকাটায় সঠিক দিকনির্দেশনা প্রদানই আমাদের লক্ষ্য
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

