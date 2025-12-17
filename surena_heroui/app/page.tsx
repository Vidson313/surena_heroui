import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import HeroSearch from "@/components/hero-search";
import CategoryExplore from "@/components/category-explore";

const services = [
  {
    id: "design",
    title: "طراحی وب‌سایت اختصاصی",
    description:
      "طراحی رابط کاربری مدرن، معماری اصولی و سرعت بالا؛ سایتی که فقط زیبا نیست، بلکه فروش می‌سازد.",
    cta: "دریافت مشاوره",
    accent: "blue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "seo",
    title: "سئو و بهینه‌سازی",
    description:
      "تحلیل رقبا، استراتژی مرحله‌به‌مرحله و اجرای کلاه سفید برای رشد پایدار ورودی و درآمد.",
    cta: "شروع رشد",
    accent: "indigo",
    featured: "پیشنهاد ویژه",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "support",
    title: "پشتیبانی و امنیت",
    description:
      "مانیتورینگ، به‌روزرسانی و امنیت جدی تا خیالتان از آپتایم و سلامت سایت راحت باشد.",
    cta: "اطلاعات بیشتر",
    accent: "blue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const values = [
  {
    title: "کیفیت واقعی",
    description:
      "هر محصول و پروژه قبل از ارائه، تست فنی، امنیتی و عملکردی می‌شود.",
  },
  {
    title: "صداقت و شفافیت",
    description:
      "ادعاهای قابل بررسی، قیمت‌گذاری روشن و مسیر همکاری کاملاً مشخص.",
  },
  {
    title: "پشتیبانی حرفه‌ای",
    description:
      "تعهد به پاسخ‌گویی سریع و حل مسئله بدون اتلاف زمان و هزینه.",
  },
  {
    title: "نوآوری و آینده‌گرایی",
    description:
      "همگام با ترندهای طراحی و استانداردهای جهانی توسعه برای رشد پایدار.",
  },
  {
    title: "تجربه کاربر",
    description:
      "طراحی مسیر اعتماد و خرید با تمرکز بر حس امنیت و رضایت مشتری.",
  },
];

const steps = [
  {
    title: "کشف و استراتژی",
    description:
      "شناخت دقیق نیاز، تحلیل رقبا و تعریف مسیر رشد براساس داده واقعی.",
  },
  {
    title: "طراحی و اجرا",
    description:
      "طراحی UI/UX، توسعه استاندارد و تست امنیت برای تحویل مطمئن.",
  },
  {
    title: "بهینه‌سازی و رشد",
    description:
      "سئو مرحله‌ای، پایش عملکرد و پشتیبانی مستمر برای نتایج پایدار.",
  },
];

const audiences = [
  "کسب‌وکارهای فروشگاهی و شرکتی که سایت حرفه‌ای و امن می‌خواهند.",
  "کلینیک‌ها و کسب‌وکارهای فیزیکی که دنبال حضور دیجیتال مؤثر هستند.",
  "طراحان وب مبتدی تا متوسط که محصول اصل و پشتیبانی نیاز دارند.",
  "برندهایی که رشد سئویی واقعی و نتیجه‌محور می‌خواهند.",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="ds-hero relative overflow-hidden rounded-[var(--ds-radius-lg)] border border-[color:var(--ds-border)] p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="ds-grid absolute inset-0" />
          <div className="ds-glow-blue absolute left-8 top-12 h-64 w-64" />
          <div className="ds-glow-indigo absolute right-8 top-0 h-72 w-72" />
        </div>
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-8 animate-rise">
            <span className="ds-chip">
              Sorena Nexus • مسیر شفاف رشد آنلاین
            </span>
            <h1 className="ds-display">
              <span className="ds-gradient-text ds-gradient-animate">
                سورنانت
              </span>{" "}
              اکوسیستم مطمئن برای طراحی وب‌سایت، تجربه دیجیتال و محصولات
              اورجینال وردپرس
            </h1>
            <p className="ds-subtitle">
              ما رشد آنلاین را از یک اتفاق به یک فرآیند تبدیل می‌کنیم؛ از انتخاب
              محصول اورجینال تا طراحی سایت حرفه‌ای و سئو نتیجه‌محور. همه چیز باید
              آسوده، شفاف و قابل اعتماد باشد.
            </p>
            <div className="mt-10 flex w-full justify-center">
              <HeroSearch />
            </div>
            <div className="flex flex-wrap gap-3">
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
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "کیفیت واقعی",
                  desc: "تست فنی، امنیتی و عملکردی برای هر خروجی.",
                },
                {
                  title: "محصول اورجینال",
                  desc: "نسخه به‌روز، لایسنس معتبر و بومی‌سازی کامل.",
                },
                {
                  title: "پشتیبانی حرفه‌ای",
                  desc: "پاسخ‌گویی دقیق و سریع در تمام مراحل.",
                },
              ].map((stat) => (
                <div key={stat.title} className="ds-card-muted p-5">
                  <p className="text-sm font-semibold text-white">
                    {stat.title}
                  </p>
                  <p className="text-xs text-slate-400">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-rise animate-rise-delay-1 border border-slate-800/70 p-8 shadow-2xl ds-card-soft lg:p-10 lg:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">مسیر همکاری سورنانت</p>
                <p className="text-lg font-semibold text-white">
                  از انتخاب محصول تا رشد پایدار همراه شما هستیم
                </p>
              </div>
              <span className="ds-chip">پشتیبانی VIP</span>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                "محصولات اورجینال وردپرس با تضمین امنیت",
                "طراحی UX محور با استانداردهای جهانی",
                "سئو مرحله‌ای با گزارش شفاف",
              ].map((item) => (
                <div key={item} className="ds-card-muted p-5">
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    همه خروجی‌ها قبل از تحویل تست می‌شوند تا کیفیت واقعی تضمین
                    شود.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 ds-card-muted p-5">
              <p className="text-sm font-semibold text-white">
                گارانتی بازگشت وجه
              </p>
              <p className="mt-1 text-xs text-slate-400">
                اگر نتیجه مطابق توافق نبود، بازگشت وجه بدون پیچیدگی انجام می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="ds-section grid gap-10 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="flex flex-col gap-6">
          <div>
            <p className="ds-eyebrow">چرا سورنانت؟</p>
            <h2 className="ds-title mt-3">
              برای اینکه رشد دیجیتال از «شانس» به «فرآیند» تبدیل شود
            </h2>
          </div>
          <p className="ds-subtitle">
            سورنانت با تمرکز بر کیفیت واقعی، امنیت جدی و کیفیت قابل سنجش است، مسیر
            رشد برندها را مرحله‌به‌مرحله طراحی می‌کند. هدف ما ساخت یک اکوسیستم
            قابل اعتماد برای کسب‌وکارهای ایرانی است.
          </p>
          <div className="ds-card-muted p-6">
            <p className="text-sm font-semibold text-white">اصل بنیادین</p>
            <p className="mt-2 text-sm text-slate-400">
              رشد آنلاین باید آسوده، شفاف و قابل اعتماد باشد؛ بدون دغدغه‌های
              فنی، بدون وعده‌فروشی و با نتایج قابل اندازه‌گیری.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="ds-card p-6">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-white">{step.title}</p>
                <span className="text-xs font-semibold text-slate-500">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-slate-950 py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-3xl -translate-x-1/2 opacity-30">
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-600 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-indigo-600 blur-[120px] mix-blend-screen" />
        </div>

        <div className="ds-container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              هر سرویس برای ساخت{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                اعتماد و فروش
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              راهکارهای اختصاصی سورنانت برای رشد کسب‌وکار شما در دنیای دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => {
              const isIndigo = service.accent === "indigo";

              return (
                <div
                  key={service.id}
                  className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    isIndigo
                      ? "bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 hover:border-indigo-500/50 hover:shadow-indigo-900/20"
                      : "bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 hover:shadow-blue-900/20"
                  }`}
                >
                  {service.featured ? (
                    <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                      {service.featured}
                    </div>
                  ) : null}
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isIndigo
                        ? "bg-slate-700 group-hover:bg-indigo-600"
                        : "bg-slate-800 group-hover:bg-blue-600"
                    }`}
                  >
                    <div
                      className={`transition-colors duration-300 ${
                        isIndigo ? "text-indigo-400" : "text-blue-400"
                      } group-hover:text-white`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mb-8 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                  <Link
                    className={`inline-flex items-center text-sm font-medium transition-colors ${
                      isIndigo
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-blue-400 hover:text-blue-300"
                    }`}
                    href={siteConfig.links.primaryCta}
                  >
                    {service.cta}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 h-4 w-4 transform transition-transform group-hover:-translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="values"
        className="ds-section grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="ds-card p-7">
          <p className="ds-eyebrow">ارزش‌های سورنانت</p>
          <h2 className="ds-title mt-3">
            ما فقط خدمات نمی‌فروشیم؛ تجربه مطمئن می‌سازیم
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            کیفیت واقعی، شفافیت و پشتیبانی حرفه‌ای ستون‌های اصلی سورنانت هستند.
            هر تصمیم طراحی و توسعه باید به اعتماد کاربر اضافه کند و مسیر خرید را
            آسان‌تر سازد.
          </p>
          <div className="mt-6 ds-card-muted p-5">
            <p className="text-sm font-semibold text-white">تعهد عملی</p>
            <p className="mt-2 text-xs text-slate-400">
              تمام محصولات و پروژه‌ها قبل از انتشار تست می‌شوند و گزارش کیفیت
              ارائه می‌شود.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="ds-card p-6">
              <p className="text-base font-semibold text-white">{value.title}</p>
              <p className="mt-2 text-sm text-slate-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ds-card-muted p-7">
          <p className="ds-eyebrow">چشم‌انداز سورنانت</p>
          <h2 className="ds-title mt-3">
            تبدیل شدن به معتبرترین برند فنی وب در ایران
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            سورنانت در مسیر ساخت یک Marketplace قانونی و بزرگ برای محصولات
            وردپرس، مرجع آموزش‌های تخصصی طراحی وب و سئو و انتخاب اول برندها برای
            رشد دیجیتال حرکت می‌کند.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "Marketplace اورجینال با لایسنس معتبر و پشتیبانی واقعی",
            "مرجع آموزش‌های تخصصی طراحی وب و سئو",
            "فرآیند همکاری شفاف با گارانتی بازگشت وجه",
            "تیم توسعه متخصص برای پروژه‌های High-End",
          ].map((item) => (
            <div key={item} className="ds-card p-5">
              <p className="text-sm font-semibold text-[color:var(--ds-ink-soft)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="audience" className="ds-section flex flex-col gap-8">
        <div>
          <p className="ds-eyebrow">مناسب برای چه کسانی؟</p>
          <h2 className="ds-title mt-3">
            سورنانت برای برندهایی ساخته شده که رشد واقعی می‌خواهند
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((item) => (
            <div key={item} className="ds-card p-6">
              <p className="text-sm text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section rounded-[var(--ds-radius-lg)] bg-slate-900 px-6 py-12 text-white md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-amber-200">
              آینده‌ای روشن برای رشد دیجیتال
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-4xl">
              با سورنانت، مسیر رشد آنلاین شما شفاف، قابل اعتماد و قابل اندازه‌گیری
              می‌شود
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              ترکیب محصول اورجینال، پشتیبانی واقعی، گارانتی بازگشت وجه و تیم توسعه
              متخصص، تجربه‌ای می‌سازد که از انتخاب تا خرید و پشتیبانی در کنار شماست.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">
              مزیت‌های رقابتی
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>محصولات تست‌شده بدون کد مخرب و با آپدیت منظم</li>
              <li>پشتیبانی سریع و دقیق با تیم متخصص</li>
              <li>گارانتی بازگشت وجه برای پروژه‌های طراحی و سئو</li>
            </ul>
          </div>
        </div>
      </section>

      <CategoryExplore />

      <section id="contact" className="ds-section ds-card px-7 py-12 text-center">
        <p className="ds-eyebrow">شروع همکاری</p>
        <h2 className="ds-title mt-3">
          آماده‌ایم تا مسیر رشد دیجیتال شما را با امنیت و شفافیت بسازیم
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          همین حالا مشاوره تخصصی بگیرید و مسیر مناسب کسب‌وکار خود را انتخاب کنید.
          تیم سورنانت کنار شماست تا بدون دغدغه‌های فنی، بهترین نتیجه را بگیرید.
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
            دریافت مشاوره
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
    </div>
  );
}
