import React from "react";
import { Database, EyeOff, Lock, Server } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-20 pt-32 font-[Yekan]">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-2xl bg-indigo-600/10 p-3 text-indigo-500">
            <Lock size={32} />
          </div>
          <h1 className="mb-4 text-4xl font-black text-white">
            حریم <span className="text-indigo-500">خصوصی</span>
          </h1>
          <p className="text-slate-400">
            امنیت اطلاعات شما اولویت شماره یک ماست.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-6">
              <EyeOff className="mb-4 text-indigo-400" />
              <h4 className="mb-2 font-bold text-white">عدم اشتراک‌گذاری</h4>
              <p className="text-xs leading-relaxed text-slate-500">
                ما هرگز اطلاعات تماس شما را به اشخاص ثالث یا شرکت‌های
                تبلیغاتی نمی‌فروشیم.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-6">
              <Database className="mb-4 text-indigo-400" />
              <h4 className="mb-2 font-bold text-white">جمع‌آوری داده‌ها</h4>
              <p className="text-xs leading-relaxed text-slate-500">
                فقط داده‌های ضروری برای بهبود تجربه خرید و ارائه لایسنس‌ها
                ذخیره می‌شوند.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
            <h3 className="mb-4 flex items-center gap-2 font-bold text-white">
              <Server size={20} className="text-indigo-500" />
              امنیت سرورها
            </h3>
            <p className="text-sm leading-7 text-slate-400">
              تمامی تراکنش‌ها و داده‌های حساس در سورنا نت با استفاده از
              پروتکل‌های رمزنگاری پیشرفته (SSL) محافظت می‌شوند. زیرساخت
              نکسوس از لایه‌های امنیتی چندگانه برای جلوگیری از نفوذ استفاده
              می‌کند.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
