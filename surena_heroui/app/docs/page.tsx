import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const categories = [
  {
    title: "قالب‌های اورجینال وردپرس",
    description:
      "پوسته‌های معتبر با آپدیت منظم، نصب آسان و سازگاری کامل با نیاز بازار ایران.",
  },
  {
    title: "افزونه‌های کاربردی و امن",
    description:
      "افزونه‌های تست‌شده برای سرعت، امنیت، فروش و بهینه‌سازی تجربه کاربر.",
  },
  {
    title: "لایسنس‌های قانونی و معتبر",
    description:
      "دسترسی قانونی به نسخه‌های اصلی با فعال‌سازی مطمئن و بدون ریسک امنیتی.",
  },
  {
    title: "سرویس‌های نگهداری و پشتیبانی",
    description:
      "به‌روزرسانی، بکاپ و مانیتورینگ برای حفظ سلامت و پایداری وب‌سایت.",
  },
];

const guarantees = [
  "لایسنس معتبر، به‌روز و بدون کد مخرب",
  "تست امنیتی و عملکردی قبل از انتشار هر محصول",
  "پشتیبانی سریع و دقیق در کوتاه‌ترین زمان",
  "گارانتی بازگشت وجه در صورت عدم رضایت",
];

export default function DocsPage() {
  return (
    <>
      <section className="ds-card-glow p-8">
        <span className="ds-chip">مرکز محصولات سورنانت</span>
        <h1 className="ds-title mt-4">
          محصولات اورجینال وردپرس با استاندارد جهانی و بومی‌سازی دقیق
        </h1>
        <p className="ds-subtitle mt-4">
          سورنانت نسخه‌های واقعی، به‌روز و تست‌شده ارائه می‌دهد؛ بدون کد مخرب،
          بدون باگ‌های رایج و با پشتیبانی حرفه‌ای. هدف ما ایجاد یک مرجع قابل اعتماد
          برای دسترسی سریع و امن به محصولات وردپرس است.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title} className="ds-card p-6">
            <p className="text-base font-semibold text-white">
              {category.title}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {category.description}
            </p>
          </div>
        ))}
      </section>

      <section className="ds-card-muted p-7">
        <p className="ds-eyebrow">تضمین‌های سورنانت</p>
        <h2 className="ds-title mt-3">
          خرید مطمئن یعنی شفافیت، امنیت و پشتیبانی واقعی
        </h2>
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
        <h2 className="ds-title mt-3">
          مسیر خرید ساده و سریع برای شروع پروژه شما
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "انتخاب محصول براساس نیاز واقعی و توضیحات شفاف.",
            "ثبت سفارش و دریافت لایسنس معتبر در کمترین زمان.",
            "پشتیبانی تخصصی برای نصب، راه‌اندازی و به‌روزرسانی.",
          ].map((step) => (
            <div key={step} className="ds-card-muted p-5">
              <p className="text-sm text-slate-400">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card-glow p-8 text-center">
        <h2 className="ds-title">
          آماده‌اید محصولات اورجینال را با خیال راحت تهیه کنید؟
        </h2>
        <p className="mt-3 text-sm text-slate-400">
          تیم سورنانت کنار شماست تا بهترین انتخاب را انجام دهید و بدون دغدغه
          فنی، پروژه خود را اجرا کنید.
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
