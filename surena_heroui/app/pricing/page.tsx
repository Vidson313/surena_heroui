import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const packages = [
  {
    title: "استارت حرفه‌ای",
    badge: "مناسب شروع همکاری",
    features: [
      "طراحی پایه با استانداردهای UX",
      "راه‌اندازی محصول اورجینال موردنیاز",
      "پایه‌سازی سئو و سرعت",
    ],
  },
  {
    title: "رشد تجاری",
    badge: "پیشنهاد ویژه سورنانت",
    featured: true,
    features: [
      "طراحی اختصاصی UI/UX و توسعه کامل",
      "سئو مرحله‌ای با گزارش شفاف",
      "پشتیبانی VIP و مانیتورینگ امنیتی",
    ],
  },
  {
    title: "پلتفرم سازمانی",
    badge: "برای برندهای بزرگ",
    features: [
      "معماری مقیاس‌پذیر و توسعه اختصاصی",
      "یکپارچه‌سازی سیستم‌های فروش و CRM",
      "تیم پشتیبانی اختصاصی و SLA",
    ],
  },
];

const notes = [
  "تمام پلن‌ها شامل مشاوره تخصصی و نقشه راه رشد هستند.",
  "قیمت‌گذاری بر اساس نیاز واقعی پروژه و حجم کار تعیین می‌شود.",
  "گارانتی بازگشت وجه برای پروژه‌های طراحی و سئو فعال است.",
];

export default function PricingPage() {
  return (
    <>
      <section className="ds-card-glow p-8 text-center">
        <span className="ds-chip">پلن‌های همکاری سورنانت</span>
        <h1 className="ds-title mt-4">
          انتخاب هوشمندانه برای رشد آنلاین مطمئن و قابل اعتماد
        </h1>
        <p className="ds-subtitle mt-4">
          با توجه به سطح پروژه و اهداف شما، پلن مناسب پیشنهاد می‌شود. هر پلن
          با استانداردهای Sorena Nexus و تعهد به کیفیت واقعی ارائه می‌شود.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {packages.map((pkg) => {
          const card = (
            <div
              className={`ds-card p-7${pkg.featured ? " ds-card-highlight" : ""}`}
            >
              <span className="ds-chip">{pkg.badge}</span>
              <h2 className="mt-4 text-lg font-semibold text-white">
                {pkg.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );

          return (
            <div key={pkg.title}>
              {pkg.featured ? <div className="ds-border-animated">{card}</div> : card}
            </div>
          );
        })}
      </section>

      <section className="ds-card-muted p-7">
        <p className="ds-eyebrow">نکات مهم</p>
        <h2 className="ds-title mt-3">
          قبل از انتخاب پلن، این موارد را در نظر بگیرید
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {notes.map((note) => (
            <div key={note} className="ds-card p-5">
              <p className="text-sm text-slate-400">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card-glow p-8 text-center">
        <h2 className="ds-title">برای انتخاب بهترین پلن آماده‌اید؟</h2>
        <p className="mt-3 text-sm text-slate-400">
          با مشاوره تخصصی سورنانت، دقیق‌ترین مسیر رشد برای کسب‌وکار شما مشخص می‌شود.
        </p>
        <Button
          as={Link}
          className="ds-btn ds-btn-primary mt-6"
          href={siteConfig.links.primaryCta}
          radius="lg"
          size="lg"
          variant="flat"
        >
          شروع همکاری
        </Button>
      </section>
    </>
  );
}
