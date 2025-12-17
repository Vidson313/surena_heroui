import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const packages = [
  {
    title: "شروع حرفه ای",
    badge: "مناسب برندهای نوپا",
    features: [
      "طراحی سایت شرکتی یا شخصی",
      "بهینه سازی سرعت پایه",
      "پیکربندی امنیت اولیه",
    ],
  },
  {
    title: "رشد فروش",
    badge: "فروشگاهی و نتیجه محور",
    featured: true,
    features: [
      "طراحی فروشگاهی کامل",
      "بهینه سازی تجربه کاربری خرید",
      "اتصال درگاه و حمل و نقل",
    ],
  },
  {
    title: "رشد پایدار",
    badge: "برای برندهای مقیاس پذیر",
    features: [
      "استراتژی سئو مرحله ای",
      "داشبورد گزارش های پیشرفت",
      "پشتیبانی اختصاصی رشد",
    ],
  },
];

const notes = [
  "قیمت نهایی پس از نیازسنجی شفاف اعلام می شود.",
  "گارانتی کیفیت و بازگشت وجه برای محصولات سورنانت فعال است.",
  "تمام پروژه ها با مستندات و آموزش تحویل داده می شوند.",
];

export default function PricingPage() {
  return (
    <>
      <section className="ds-card-glow p-8 text-center">
        <span className="ds-chip">تعرفه و بسته های همکاری</span>
        <h1 className="ds-title mt-4">
          قیمت گذاری شفاف برای رشد دیجیتال قابل اعتماد
        </h1>
        <p className="ds-subtitle mt-4">
          سورنانت بر اساس نیاز واقعی شما پیشنهاد می دهد. بسته های زیر نمای کلی
          از مسیرهای همکاری هستند.
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
              {pkg.featured ? (
                <div className="ds-border-animated">{card}</div>
              ) : (
                card
              )}
            </div>
          );
        })}
      </section>

      <section className="ds-card-muted p-7">
        <p className="ds-eyebrow">نکات مهم</p>
        <h2 className="ds-title mt-3">چطور قیمت گذاری می کنیم؟</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {notes.map((note) => (
            <div key={note} className="ds-card p-5">
              <p className="text-sm text-slate-400">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card-glow p-8 text-center">
        <h2 className="ds-title">برای دریافت پیشنهاد دقیق آماده اید؟</h2>
        <p className="mt-3 text-sm text-slate-400">
          کافیست نیاز خود را با ما مطرح کنید تا مسیر شفاف و بودجه مناسب را ارائه
          دهیم.
        </p>
        <Button
          as={Link}
          className="ds-btn ds-btn-primary mt-6"
          href={siteConfig.links.primaryCta}
          radius="lg"
          size="lg"
          variant="flat"
        >
          شروع مشاوره
        </Button>
      </section>
    </>
  );
}
