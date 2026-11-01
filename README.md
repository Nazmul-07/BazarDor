# বাজার দর (BazarDor)

> **"বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।"**

**বাজার দর (BazarDor)** হলো বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজার দর পর্যবেক্ষণ ও তথ্য প্রদানের একটি আধুনিক ফুল-স্ট্যাক ওয়েব প্ল্যাটফর্ম। এই প্ল্যাটফর্মের মাধ্যমে সাধারণ ক্রেতা ও গৃহস্থালি ব্যবহারকারীরা প্রতিদিনের চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ এবং মসলার নির্ভরযোগ্য বাজার দর সহজে যাচাই করতে পারেন।

---

## 🌟 মূল বৈশিষ্ট্যসমূহ (Key Features)

1. **ডায়নামিক প্রোডাক্ট ও ক্যাটাগরি ব্রাউজিং (Dynamic Product & Category Browsing)**:
   - কোনো হার্ডকোডেড ডেটা ছাড়া সম্পূর্ণ অফিশিয়াল Programming Hero API থেকে ক্যাটাগরি ও পণ্যের তথ্য লোড করা হয়।
   - প্রতি ক্যাটাগরির জন্য ডেডিকেটেড ডায়নামিক পেজ (`/category/[slug]`)।
2. **এপিআই-চালিত বাজার তথ্য ও ঐতিহাসিক তুলনা (API-Driven Market Information)**:
   - প্রতিদিনের সম্ভাব্য দর, গতকালের দর, গত সপ্তাহের ও গত মাসের দামের তারতম্য (+/- শতাংশ পরিবর্তন) বিশ্লেষণ।
   - বাংলাদেশের বিভিন্ন বিভাগীয় বাজারের (কারওয়ান বাজার, মিরপুর, চট্টগ্রাম, রাজশাহী, খুলনা, সিলেট ইত্যাদি) সর্বনিম্ন, সর্বোচ্চ ও গড় দরের পুঙ্খানুপুঙ্খ তালিকা।
3. **খাঁটি বাংলা সংখ্যা ও মূল্য ফরম্যাটিং (Bengali Price Formatting)**:
   - মূল্যের ইংরেজি সংখ্যাকে স্বয়ংক্রিয়ভাবে বাংলা সংখ্যায় রূপান্তর (যেমন: `৳১৪৮/কেজি`)।
   - কারেন্সি সিম্বল (৳) এবং দেশীয় পরিমাপের একক (কেজি, লিটার, ডজন, পিস) প্রদর্শন।
4. **বাংলা সংখ্যা সমর্থিত মূল্য অনুযায়ী সাজানোর ব্যবস্থা (Bengali Numeral-Compatible Price Sorting - Challenge C1)**:
   - ড্রপডাউন মেনু ("সাজান"): ডিফল্ট, দাম: কম থেকে বেশি, দাম: বেশি থেকে কম।
   - বাংলা ও ইংরেজি সংখ্যা, কারেন্সি সিম্বল এবং সেপারেটর সঠিকভাবে পার্স করে পিওর নিউমেরিক সর্টিং সম্পন্ন করে।
   - মূল এপিআই এর ক্রম নষ্ট না করে (immutable pure function) পুনরায় ডিফল্ট অর্ডারে ফিরে যাওয়ার সুবিধা।
5. **নিরাপদ ইউজার অথেনটিকেশন (Secure User Authentication - Better Auth & MongoDB)**:
   - বেটার অথ (Better Auth) এবং অফিশিয়াল মনগোডিবি অ্যাডাপ্টার (MongoDB Adapter) সমন্বিত প্রমাণীকরণ ব্যবস্থা।
   - রেজিস্ট্রেশন (`/signup`), লগইন (`/login`), এবং লগআউট।
   - রিঅ্যাক্ট হুক ফর্ম (React Hook Form) ও জোড (Zod) ভ্যালিডেশন এবং টোস্ট নোটিফিকেশন (`react-hot-toast`)।
6. **সুরক্ষিত প্রোফাইল ও তথ্য হালনাগাদ (Protected Profile & Update Information - Challenge C3)**:
   - সার্ভার-সাইড অথেনটিকেশন গার্ড (`requireAuth`) দ্বারা সুরক্ষিত রুট (`/profile`, `/profile/update`)।
   - আন-অথেনটিকেটেড ইউজারদের রিডাইরেক্ট করে লগইন পেজে পাঠানো এবং উপযুক্ত টোস্ট মেসেজ প্রদর্শন।
   - বেটার অথের অফিসিয়াল `authClient.updateUser({ name })` মেথড ব্যবহার করে ব্যবহারকারীর নাম পরিবর্তন ও সেশন রিফ্রেশ।
7. **রেসপনসিভ ও আধুনিক ইন্টারফেস (Modern & Responsive UI/UX)**:
   - ডেইজিইউআই (DaisyUI) ও টেইলউইন্ড সিএসএস (Tailwind CSS v4) দিয়ে তৈরি আধুনিক ও ক্লিন ইন্টারফেস।
   - মোবাইল, ট্যাবলেট, ল্যাপটপ এবং ডেস্কটপের জন্য সম্পূর্ণ উপযোগী।
   - মসৃণ অনুভূমিক প্রাইস টিকার (Horizontal Scrolling Price Ticker), কাস্টম লোডিং স্কেলিটন (Skeleton) এবং বাংলা ৪০৪ পেজ।

---

## 🛠️ ব্যবহৃত প্রযুক্তিসমূহ (Technologies Used)

- **ফ্রন্টএন্ড ও ফ্রেমওয়ার্ক**: [Next.js](https://nextjs.org/) (App Router, Server Components & Client Components)
- **প্রোগ্রামিং ভাষা**: [TypeScript](https://www.typescriptlang.org/)
- **স্টাইলিং ও ডিজাইন**: [Tailwind CSS v4](https://tailwindcss.com/), [DaisyUI v5](https://daisyui.com/)
- **অথেনটিকেশন**: [Better Auth](https://better-auth.com/)
- **ডাটাবেস**: [MongoDB](https://www.mongodb.com/) (Official MongoDB Node.js Driver & `@better-auth/mongo-adapter`)
- **ফর্ম হ্যান্ডলিং ও ভ্যালিডেশন**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **টোস্ট নোটিফিকেশন**: [React Hot Toast](https://react-hot-toast.com/)
- **আইকন**: [Lucide React](https://lucide.dev/)

---

## 📡 এপিআই ইন্টিগ্রেশন (API Integration)

অফিশিয়াল এপিআই বেস ইউআরএল:
`https://openapi.programming-hero.com/api/bazardor`

ব্যবহৃত এন্ডপয়েন্টসমূহ:
- `GET /categories` — সকল বাজার ক্যাটাগরির তালিকা
- `GET /categories/:slug` — নির্দিষ্ট ক্যাটাগরির বিবরণ
- `GET /products` — সকল পণ্যের বিবরণ ও বাজার দর
- `GET /products?category=:categoryId` — নির্দিষ্ট ক্যাটাগরির পণ্যের তালিকা
- `GET /products/:id` — নির্দিষ্ট পণ্যের বিস্তারিত তথ্য ও বাজারভিত্তিক দর

আর্কিটেকচার:
- `src/services/api-client.ts`: সেন্ট্রালাইজড HTTP ক্লায়েন্ট ও এরর হ্যান্ডলার।
- `src/services/category.service.ts`: `getCategories()`, `getCategoryBySlug(slug)`
- `src/services/product.service.ts`: `getProducts()`, `getProductsByCategory(categoryIdentifier)`, `getProductById(id)`

---

## 🔐 অথেনটিকেশন আর্কিটেকচার (Authentication Info)

- **সার্ভার কনফিগারেশন**: `src/lib/auth.ts` এ Better Auth এবং MongoDB অ্যাডাপ্টার সংযোগ।
- **ক্লায়েন্ট হুক**: `src/lib/auth-client.ts` এর মাধ্যমে `useSession`, `signIn`, `signUp`, `signOut`, `updateUser` পরিচালনা।
- **এপিআই হ্যান্ডলার**: `src/app/api/auth/[...all]/route.ts` Next.js App Router এর মাধ্যমে রিকোয়েস্ট হ্যান্ডেল করে।
- **সার্ভার গার্ড**: `src/lib/auth-guard.ts` এর `requireAuth()` ফাংশন সার্ভার কম্পোনেন্টে সেশন ভ্যালিডেট করে।

---

## 📁 ফোল্ডার স্ট্রাকচার (Project Folder Structure)

```text
bazar-dhor/
├── public/                 # স্ট্যাটিক অ্যাসেট
├── src/
│   ├── app/                # Next.js App Router পেজ ও লেআউট
│   │   ├── api/
│   │   │   └── auth/[...all]/ # Better Auth API রুট
│   │   ├── category/[slug]/   # ডায়নামিক ক্যাটাগরি পেজ ও লোডিং
│   │   ├── product/[id]/      # ডায়নামিক প্রোডাক্ট পেজ ও লোডিং
│   │   ├── profile/           # প্রোফাইল ও আপডেট পেজ (Protected)
│   │   │   └── update/
│   │   ├── login/             # লগইন পেজ
│   │   ├── signup/            # রেজিস্ট্রেশন পেজ
│   │   ├── globals.css        # টেইলউইন্ড ও ডেইজিইউআই স্টাইল
│   │   ├── layout.tsx         # গ্লোবাল লেআউট (Navbar, Footer, Toaster)
│   │   ├── page.tsx           # হোমপেজ (Ticker, Hero, Categories, Products)
│   │   ├── loading.tsx        # গ্লোবাল লোডিং স্কেলিটন
│   │   ├── not-found.tsx      # কাস্টম বাংলা ৪০৪ পেজ
│   │   └── error.tsx          # গ্লোবাল এরর বাউন্ডারি
│   ├── components/
│   │   ├── auth/              # LoginForm, SignupForm, AuthRedirectToast
│   │   ├── category/          # CategoryCard, CategoryGrid, CategorySkeleton
│   │   ├── home/              # HeroSection, PriceTicker
│   │   ├── layout/            # Navbar, Footer
│   │   ├── product/           # ProductCard, ProductGrid, SortDropdown, ProductSkeleton
│   │   ├── profile/           # ProfileCard, UpdateProfileForm
│   │   └── shared/            # EmptyState, ErrorState, LoadingSpinner, SectionHeading
│   ├── hooks/                 # use-session.ts
│   ├── lib/                   # auth.ts, auth-client.ts, auth-guard.ts, mongodb.ts, format-price.ts, sort-products.ts
│   ├── providers/             # ToastProvider.tsx
│   ├── services/              # api-client.ts, category.service.ts, product.service.ts
│   └── types/                 # api.ts, category.ts, product.ts, user.ts
├── .env.example
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## ⚙️ ইনস্টলেশন ও লোকাল সেটআপ (Installation & Local Setup)

### ১. রিপোজিটরি ক্লোন করুন
```bash
git clone https://github.com/your-username/bazardor.git
cd bazardor
```

### ২. ডিপেন্ডেন্সি ইনস্টল করুন
```bash
npm install
```

### ৩. এনভায়রনমেন্ট ভেরিয়েবল সেটআপ
প্রজেক্টের রুটে একটি `.env.local` অথবা `.env` ফাইল তৈরি করুন:
```env
BAZARDOR_API_URL=https://openapi.programming-hero.com/api/bazardor
DATABASE_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_32_character_random_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

### ৪. ডেভেলপমেন্ট সার্ভার চালু করুন
```bash
npm run dev
```
ব্রাউজারে [http://localhost:3000](http://localhost:3000) ওপেন করুন।

### ৫. প্রোডাকশন বিল্ড তৈরি ও রান
```bash
npm run build
npm run start
```

---

## 🚀 ডিপ্লয়মেন্ট গাইডলাইন (Vercel Deployment)

প্রজেক্টটি Vercel-এ ডেপ্লয় করার জন্য সম্পূর্ণ প্রস্তুত:
1. কোড GitHub-এ পুশ করুন।
2. [Vercel Dashboard](https://vercel.com)-এ গিয়ে রিপোজিটরিটি ইমপোর্ট করুন।
3. Framework Preset হিসেবে `Next.js` নির্বাচন করুন।
4. Environment Variables সেকশনে নিচের ভেরিয়েবলগুলো যুক্ত করুন:
   - `BAZARDOR_API_URL`: `https://openapi.programming-hero.com/api/bazardor`
   - `DATABASE_URL`: আপনার MongoDB Atlas Connection URI
   - `BETTER_AUTH_SECRET`: জেনারেট করা সিক্রেট কি
   - `BETTER_AUTH_URL`: আপনার Vercel ডেপ্লয়মেন্ট ডোমেইন (যেমন: `https://bazardor.vercel.app`)
5. **Deploy** বাটনে ক্লিক করুন।

---

## 📸 স্ক্রিনশট ও প্রিভিউ (Screenshots & Preview)

| হোমপেজ ও লাইভ প্রাইস টিকার | ক্যাটাগরি ও পণ্য বাছাই |
| :---: | :---: |
| *(Placeholder: /screenshots/home.png)* | *(Placeholder: /screenshots/categories.png)* |

| পণ্য বিবরণী ও বাজারভিত্তিক বিশ্লেষণ | প্রোফাইল ও তথ্য পরিবর্তন |
| :---: | :---: |
| *(Placeholder: /screenshots/product-details.png)* | *(Placeholder: /screenshots/profile.png)* |

---

## 📄 লাইসেন্স (License)

প্রজেক্টটি একাডেমিক ও শিক্ষামূলক উদ্দেশ্যে নির্মিত।
MIT License © 2026 বাজার দর (BazarDor).
