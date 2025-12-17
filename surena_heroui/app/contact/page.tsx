import { Button } from "@heroui/button";

const contactCards = [
  {
    title: "مشاوره تخصصی",
    desc: "برای شروع همکاری و دریافت مسیر رشد اختصاصی.",
    value: "sorenanet.io@gmail.com",
  },
  {
    title: "پشتیبانی فوری",
    desc: "پاسخ‌گویی سریع برای مشتریان فعلی سورنانت.",
    value: "0930 000 0000",
  },
  {
    title: "همکاری تجاری",
    desc: "برای مشارکت و پروژه‌های سازمانی.",
    value: "business@sorenanet.ir",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="ds-card-glow p-8 text-center">
        <span className="ds-chip">تماس با سورنانت</span>
        <h1 className="ds-title mt-4">
          برای شروع یک همکاری حرفه‌ای آماده‌ایم
        </h1>
        <p className="ds-subtitle mt-4">
          اگر سوالی دارید یا می‌خواهید مسیر رشد برندتان را طراحی کنیم، با ما در
          ارتباط باشید. تیم سورنانت در کوتاه‌ترین زمان پاسخ می‌دهد.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {contactCards.map((card) => (
          <div key={card.title} className="ds-card p-6">
            <h2 className="text-lg font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{card.desc}</p>
            <p className="mt-4 text-sm font-semibold text-blue-400">
              {card.value}
            </p>
          </div>
        ))}
      </section>

      <section className="ds-card p-8">
        <p className="ds-eyebrow">فرم تماس</p>
        <h2 className="ds-title mt-3">جزئیات پروژه خود را با ما به اشتراک بگذارید</h2>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            placeholder="نام و نام خانوادگی"
            type="text"
          />
          <input
            className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            placeholder="شماره تماس"
            type="tel"
          />
          <input
            className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 md:col-span-2"
            placeholder="ایمیل"
            type="email"
          />
          <textarea
            className="min-h-[140px] rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 md:col-span-2"
            placeholder="توضیح کوتاه درباره نیاز یا پروژه"
          />
          <div className="md:col-span-2">
            <Button className="ds-btn ds-btn-primary w-full" type="button">
              ارسال درخواست
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
