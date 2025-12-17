import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const services = [
  {
    title: "طراحی وب‌سایت حرفه‌ای",
    desc: "طراحی مدرن، معماری اصولی و تجربه کاربری هدفمند برای افزایش اعتماد.",
    items: ["UI/UX اختصاصی", "سرعت و امنیت بالا", "معماری مقیاس‌پذیر"],
  },
  {
    title: "سئو و رشد ارگانیک",
    desc: "استراتژی مرحله‌به‌مرحله برای رسیدن به ورودی پایدار و درآمدزا.",
    items: ["تحلیل رقبا", "استراتژی محتوا", "گزارش‌های شفاف"],
  },
  {
    title: "پشتیبانی و نگهداری",
    desc: "مانیتورینگ، آپدیت و بکاپ‌گیری منظم برای آرامش خاطر.",
    items: ["پشتیبانی VIP", "به‌روزرسانی منظم", "رفع مشکلات فوری"],
  },
];

const workflow = [
  "تحلیل نیاز و تعیین اهداف کسب‌وکار",
  "طراحی تجربه کاربری و معماری اطلاعات",
  "توسعه استاندارد و تست امنیت",
  "انتشار، سئو و پایش نتایج",
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="ds-card-glow p-8 text-center">
        <span className="ds-chip">خدمات سورنانت</span>
        <h1 className="ds-title mt-4">
          طراحی سایت و سئو حرفه‌ای با مسیر شفاف و نتیجه واقعی
        </h1>
        <p className="ds-subtitle mt-4">
          از طراحی تجربه دیجیتال تا رشد ارگانیک در گوگل، همه چیز بر اساس کیفیت
          واقعی و استانداردهای جهانی انجام می‌شود.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="ds-card p-6">
            <h2 className="text-lg font-semibold text-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{service.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="ds-card-muted p-7">
        <p className="ds-eyebrow">فرآیند همکاری</p>
        <h2 className="ds-title mt-3">
          مسیر همکاری ما شفاف و قدم‌به‌قدم است
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {workflow.map((step) => (
            <div key={step} className="ds-card p-5">
              <p className="text-sm text-slate-400">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card-glow p-8 text-center">
        <h2 className="ds-title">برای شروع همکاری آماده‌اید؟</h2>
        <p className="mt-3 text-sm text-slate-400">
          با مشاوره تخصصی سورنانت، بهترین مسیر رشد را برای برند خود انتخاب کنید.
        </p>
        <Button
          as={Link}
          className="ds-btn ds-btn-primary mt-6"
          href={siteConfig.links.primaryCta}
          radius="lg"
          variant="flat"
        >
          دریافت مشاوره
        </Button>
      </section>
    </div>
  );
}
