import React from "react";
import { AlertCircle, FileText, Scale, ShieldCheck } from "lucide-react";

const terms = [
  {
    title: "شرایط استفاده از محصولات",
    desc: "تمامی محصولات دیجیتال سورنا نت تحت لایسنس اختصاصی ارائه می‌شوند و هرگونه بازنشر غیرمجاز پیگرد قانونی دارد.",
    icon: ShieldCheck,
  },
  {
    title: "سیاست بازگشت وجه",
    desc: "به دلیل ماهیت دیجیتالی محصولات، بازگشت وجه تنها در صورت وجود نقص فنی غیرقابل رفع در محصول امکان‌پذیر است.",
    icon: Scale,
  },
  {
    title: "مسئولیت‌های کاربر",
    desc: "کاربر موظف است از اطلاعات حساب کاربری خود محافظت کرده و از سوءاستفاده از سرویس‌های نکسوس خودداری کند.",
    icon: AlertCircle,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-20 pt-32 font-[Yekan]">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-2xl bg-blue-600/10 p-3 text-blue-500">
            <FileText size={32} />
          </div>
          <h1 className="mb-4 text-4xl font-black text-white">
            قوانین و <span className="text-blue-500">مقررات</span>
          </h1>
          <p className="text-slate-400">آخرین بروزرسانی: آذر ۱۴۰۴</p>
        </div>

        <div className="space-y-6">
          {terms.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-md transition-all hover:bg-slate-900"
            >
              <div className="flex items-start gap-6">
                <div className="rounded-xl bg-slate-800 p-3 text-blue-400 transition-transform group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">
          <p className="text-sm text-blue-200">
            با استفاده از خدمات سورنا نت، شما تمامی موارد فوق را پذیرفته‌اید.
          </p>
        </div>
      </div>
    </main>
  );
}
