import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const categories = [
  {
    title: "افزونه های فروشگاهی",
    description: "راهکارهای پرداخت، ارسال، کیف پول و شخصی سازی خرید.",
  },
  {
    title: "افزونه های بهینه سازی",
    description: "سرعت، امنیت و عملکرد پایدار با استانداردهای جهانی.",
  },
  {
    title: "قالب های شرکتی",
    description: "طراحی مدرن برای برندهایی که اعتمادسازی اولویت آنهاست.",
  },
  {
    title: "قالب های خدماتی",
    description: "کلینیک، آموزشی و خدماتی با مسیر رزرو یا تماس شفاف.",
  },
];

const guarantees = [
  "نسخه اورجینال و قانونی بدون کد مخرب",
  "بومی سازی کامل برای نیاز بازار ایران",
  "تست امنیتی و عملکردی پیش از انتشار",
  "پشتیبانی سریع و دقیق پس از خرید",
];

export default function DocsPage() {
  return (
    <>
      <section className="ds-card-glow p-8">
        <span className="ds-chip">محصولات وردپرس سورنانت</span>
        <h1 className="ds-title mt-4">
          فروش محصولات اورجینال با ضمانت کیفیت و پشتیبانی واقعی
        </h1>
        <p className="ds-subtitle mt-4">
          سورنانت فقط محصولات قانونی و تست شده ارائه می دهد. ما نسخه های اصلی را
          با بومی سازی کامل، راهنمای فارسی و پشتیبانی دقیق همراه می کنیم تا
          خیالتان از امنیت و عملکرد راحت باشد.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title} className="ds-card p-6">
            <p className="text-base font-semibold text-white">{category.title}</p>
            <p className="mt-2 text-sm text-slate-400">{category.description}</p>
          </div>
        ))}
      </section>

      <section className="ds-card-muted p-7">
        <p className="ds-eyebrow">تعهد سورنانت</p>
        <h2 className="ds-title mt-3">چرا محصولات سورنانت قابل اعتماد است؟</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {guarantees.map((item) => (
            <li key={item} className="ds-card p-5">
              <p className="text-sm text-slate-400">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ds-card p-7">
        <p className="ds-eyebrow">فرآیند خرید</p>
        <h2 className="ds-title mt-3">مسیر شفاف از انتخاب تا استفاده</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "بررسی نیاز و انتخاب محصول مناسب",
            "دریافت فایل اورجینال و راهنمای فارسی",
            "پشتیبانی سریع تا اجرای کامل",
          ].map((step) => (
            <div key={step} className="ds-card-muted p-5">
              <p className="text-sm text-slate-400">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card-glow p-8 text-center">
        <h2 className="ds-title">برای انتخاب محصول مناسب آماده اید؟</h2>
        <p className="mt-3 text-sm text-slate-400">
          تیم سورنانت برای راهنمایی دقیق و پیشنهاد بهترین گزینه در کنار شماست.
        </p>
        <Button
          as={Link}
          className="ds-btn ds-btn-primary mt-6"
          href={siteConfig.links.primaryCta}
          radius="lg"
          size="lg"
          variant="flat"
        >
          دریافت مشاوره خرید
        </Button>
      </section>
    </>
  );
}
