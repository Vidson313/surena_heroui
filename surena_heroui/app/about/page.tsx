import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const pillars = [
  {
    title: "کیفیت واقعی و استاندارد",
    description:
      "هر محصول و پروژه قبل از انتشار، تست امنیتی و عملکردی می‌شود تا خروجی نهایی قابل اعتماد باشد.",
  },
  {
    title: "کیفیت قابل سنجش است",
    description:
      "قیمت‌گذاری روشن، گزارش‌های قابل بررسی و مسیر همکاری مشخص؛ بدون وعده‌فروشی.",
  },
  {
    title: "تجربه مطمئن مشتری",
    description:
      "از لحظه انتخاب تا پشتیبانی، همه چیز برای ایجاد حس امنیت و اعتماد طراحی شده است.",
  },
];

const culture = [
  "تعهد به یادگیری مداوم و به‌روز بودن با استانداردهای جهانی",
  "تمرکز بر حل مسئله واقعی به جای ارائه وعده‌های تبلیغاتی",
  "تیم متخصص با نگاه تجربه‌محور و آینده‌گرایانه",
  "پشتیبانی انسانی، سریع و دقیق برای تمام مشتریان",
];

export default function AboutPage() {
  return (
    <>
      <section className="ds-card-glow p-8">
        <span className="ds-chip">درباره سورنانت</span>
        <h1 className="ds-title mt-4">
          سورنانت برای ساخت تجربه‌های دیجیتال قابل اعتماد به‌وجود آمد
        </h1>
        <p className="ds-subtitle mt-4">
          هدف ما این است که کسب‌وکارهای ایرانی بدون درگیری با دغدغه‌های فنی،
          به ابزارهای استاندارد و امن وردپرس دسترسی داشته باشند و در کنار آن از
          طراحی سایت حرفه‌ای و سئوی نتیجه‌محور استفاده کنند.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ds-card p-7">
          <p className="ds-eyebrow">چرایی شکل‌گیری</p>
          <h2 className="ds-title mt-3">
            رشد آنلاین باید از «شانس» به «فرآیند» تبدیل شود
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            سورنانت برای پاسخ به نیاز بازار ایران شکل گرفت؛ جایی که محصولات
            غیرمعتبر و خدمات بی‌کیفیت مانع رشد واقعی بودند. ما این مسیر را با
            تمرکز بر کیفیت، امنیت و شفافیت بازطراحی کردیم تا مسیر رشد دیجیتال
            برای برندها قابل اعتماد شود.
          </p>
        </div>
        <div className="ds-card-muted p-7">
          <p className="ds-eyebrow">چشم‌انداز</p>
          <h3 className="text-xl font-semibold text-white">
            تبدیل شدن به انتخاب اول برندها برای رشد دیجیتال
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            ساخت یک Marketplace قانونی و بزرگ محصولات وردپرس، ایجاد مرجع آموزش‌های
            تخصصی و تبدیل شدن به مرجع اعتماد برای پروژه‌های حرفه‌ای، چشم‌انداز
            بلندمدت سورنانت است.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="ds-card p-6">
            <p className="text-base font-semibold text-white">{pillar.title}</p>
            <p className="mt-2 text-sm text-slate-400">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="ds-card p-7">
        <p className="ds-eyebrow">فرهنگ کاری</p>
        <h2 className="ds-title mt-3">چگونه در سورنانت کار می‌کنیم؟</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {culture.map((item) => (
            <div key={item} className="ds-card-muted p-5">
              <p className="text-sm text-slate-400">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card-glow p-8 text-center">
        <h2 className="ds-title">آماده‌ایم کنار شما رشد کنیم</h2>
        <p className="mt-3 text-sm text-slate-400">
          اگر به دنبال یک تیم حرفه‌ای، قابل اعتماد و آینده‌گرا هستید، با ما
          ارتباط بگیرید تا مسیر رشد دیجیتال شما را طراحی کنیم.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            as={Link}
            className="ds-btn ds-btn-primary"
            href={siteConfig.links.primaryCta}
            radius="lg"
            size="lg"
            variant="flat"
          >
            شروع همکاری
          </Button>
          <Button
            as={Link}
            className="ds-btn ds-btn-secondary"
            href={siteConfig.links.services}
            radius="lg"
            size="lg"
            variant="flat"
          >
            مشاهده خدمات
          </Button>
        </div>
      </section>
    </>
  );
}
