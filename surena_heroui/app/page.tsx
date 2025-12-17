import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const services = [
  {
    id: "design",
    title: "طراحی وب سایت اختصاصی",
    description:
      "طراحی رابط کاربری مدرن و کدنویسی استاندارد مطابق با نیازهای برند شما. ما فقط سایت نمی سازیم، هویت خلق می کنیم.",
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
    title: "سئو و بهینه سازی",
    description:
      "افزایش رتبه در گوگل با استراتژی های کلاه سفید. سرعت سایت شما را به موشک تبدیل می کنیم تا دیده شوید.",
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
      "خیالتان از بابت آپتایم و امنیت راحت باشد. تیم فنی سورنانت به صورت ۲۴ ساعته مراقب کسب و کار شماست.",
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
    description: "هر محصول و پروژه قبل از ارائه، تست امنیتی و عملکردی می شود.",
  },
  {
    title: "صداقت و شفافیت",
    description: "قیمت ها و وعده ها روشن، قابل بررسی و بدون اغراق هستند.",
  },
  {
    title: "پشتیبانی حرفه ای",
    description: "متعهد به پاسخگویی سریع و حل مسئله در کوتاه ترین زمان هستیم.",
  },
  {
    title: "نوآوری هدفمند",
    description: "همگام با ترندهای جهانی، اما همیشه با تمرکز بر نتیجه.",
  },
  {
    title: "تجربه کاربر",
    description: "هر سرویس با نگاه عمیق به حس اعتماد و مسیر مشتری طراحی می شود.",
  },
];

const steps = [
  {
    title: "کشف و تحلیل",
    description: "نیاز واقعی، رقبا و فرصت های رشد را دقیق بررسی می کنیم.",
  },
  {
    title: "طراحی و اجرا",
    description: "ساخت تجربه ای که سریع، امن و آماده فروش باشد.",
  },
  {
    title: "رشد پایدار",
    description: "بهینه سازی مداوم برای تبدیل رشد به فرآیند قابل اعتماد.",
  },
];

const audiences = [
  "کسب و کارهایی که وب سایت فروشگاهی یا شرکتی می خواهند.",
  "کلینیک ها و کسب و کارهای فیزیکی که به حضور دیجیتال نیاز دارند.",
  "طراحان وب مبتدی تا متوسط که محصول اصل و پشتیبانی می خواهند.",
  "برندهایی که رشد سئویی واقعی و پایدار می خواهند.",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[var(--ds-radius-lg)] border border-[color:var(--ds-border)] ds-hero p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-0 ds-grid" />
          <div className="absolute left-8 top-12 h-64 w-64 ds-glow-blue" />
          <div className="absolute right-8 top-0 h-72 w-72 ds-glow-indigo" />
        </div>
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6 animate-rise">
            <span className="ds-chip">Sorena Nexus — رشد آنلاین آسوده و قابل اعتماد</span>
            <h1 className="ds-display">
              <span className="ds-gradient-text">سورنانت</span> اکوسیستم مطمئن
              برای طراحی سایت، تجربه دیجیتال و محصولات اورجینال وردپرس
            </h1>
            <p className="ds-subtitle">
              سورنانت با تمرکز بر کیفیت واقعی، امنیت جدی و خلاقیت هدفمند ساخته
              شده تا رشد آنلاین را از شانس به فرآیند تبدیل کند. اینجا هر تصمیم
              بر پایه استانداردهای جهانی و نیاز واقعی بازار ایران است.
            </p>
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
                { title: "کیفیت واقعی", desc: "تست شده، امن، استاندارد" },
                { title: "مسیر شفاف", desc: "مستند و قابل پیگیری" },
                { title: "پشتیبانی سریع", desc: "متعهد و مسئول" },
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
          <div className="ds-card-soft p-6 animate-rise animate-rise-delay-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">نمای کلی خدمات</p>
                <p className="text-lg font-semibold text-white">
                  تجربه دیجیتال نتیجه محور
                </p>
              </div>
              <span className="ds-chip">از انتخاب تا رشد</span>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                "محصولات اورجینال وردپرس",
                "طراحی سایت حرفه ای",
                "سئو تضمینی با مسیر شفاف",
              ].map((item) => (
                <div key={item} className="ds-card-muted p-5">
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    تیم سورنانت این مسیر را با جزئیات و امنیت کامل هدایت می کند.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 ds-card-muted p-5">
              <p className="text-sm font-semibold text-white">اصل ساده سورنانت</p>
              <p className="mt-1 text-xs text-slate-400">
                رشد آنلاین باید آسوده، شفاف و قابل اعتماد باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="ds-section grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-6">
          <div>
            <p className="ds-eyebrow">چرا سورنانت؟</p>
            <h2 className="ds-title mt-3">
              ایجاد شد تا رشد دیجیتال کسب و کارها ساده، امن و نتیجه محور باشد
            </h2>
          </div>
          <p className="ds-subtitle">
            سورنانت به وجود آمد تا کسب و کارهای ایرانی بدون درگیری با دغدغه های
            فنی به ابزارهای استاندارد وردپرس دسترسی داشته باشند و همزمان از طراحی
            سایت حرفه ای و سئو نتیجه محور بهره ببرند. هدف ما ساخت اکوسیستمی قابل
            اعتماد است که مسیر رشد را روشن و قابل پیگیری کند.
          </p>
          <div className="ds-card-muted p-6">
            <p className="text-sm font-semibold text-white">ماموریت اصلی</p>
            <p className="mt-2 text-sm text-slate-400">
              تبدیل رشد آنلاین از شانس به فرآیند با ارائه محصول اورجینال، طراحی
              هدفمند و سئوی شفاف.
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

      <section
        id="services"
        className="relative overflow-hidden bg-slate-950 py-24"
      >
        <div className="absolute left-1/2 top-0 h-full w-full max-w-3xl -translate-x-1/2 opacity-30 pointer-events-none">
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-600 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-indigo-600 blur-[120px] mix-blend-screen" />
        </div>

        <div className="ds-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هر سرویس برای ساخت{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                اعتماد و فروش
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              راهکارهای اختصاصی سورنانت برای رشد بیزنس شما در دنیای دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
                      isIndigo
                        ? "bg-slate-700 group-hover:bg-indigo-600"
                        : "bg-slate-800 group-hover:bg-blue-600"
                    } transition-colors duration-300`}
                  >
                    <div
                      className={`${
                        isIndigo ? "text-indigo-400" : "text-blue-400"
                      } group-hover:text-white transition-colors duration-300`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-7 mb-8">
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
                      className="h-4 w-4 mr-1 transform transition-transform group-hover:-translate-x-1"
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

      <section id="values" className="ds-section grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="ds-card p-7">
          <p className="ds-eyebrow">ارزش های سورنانت</p>
          <h2 className="ds-title mt-3">
            هر تصمیم با نگاه به کیفیت، اعتماد و تجربه کاربر گرفته می شود
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            سورنانت فقط خدمات نمی فروشد؛ تجربه مطمئن می سازد. این ارزش ها ستون
            فکری تمام محصولات و پروژه های ما هستند.
          </p>
          <div className="mt-6 ds-card-muted p-5">
            <p className="text-sm font-semibold text-white">گارانتی واقعی</p>
            <p className="mt-2 text-xs text-slate-400">
              ضمانت بازگشت وجه، بخشی از تعهد ما به کیفیت است.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="ds-card p-6">
              <p className="text-base font-semibold text-white">{value.title}</p>
              <p className="mt-2 text-sm text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ds-card-muted p-7">
          <p className="ds-eyebrow">تفاوت سورنانت</p>
          <h2 className="ds-title mt-3">
            ترکیب کمیاب محصول اورجینال، پشتیبانی واقعی و تیم متخصص
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            سورنانت فقط خدمات نمی دهد؛ مسیر مطمئن می سازد. از لحظه انتخاب تا خرید
            و پشتیبانی، همه چیز بر اساس اعتماد و کیفیت واقعی طراحی شده است.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "محصولات قانونی و به روز بدون کد مخرب",
            "پشتیبانی پاسخگو با زمان بندی مشخص",
            "گارانتی بازگشت وجه و تعهد کتبی",
            "تیم توسعه متخصص برای پروژه های پیچیده",
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
          <p className="ds-eyebrow">برای چه کسانی؟</p>
          <h2 className="ds-title mt-3">
            سورنانت برای کسب و کارهایی است که رشد واقعی می خواهند
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
              چشم انداز سورنانت
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-4xl">
              مسیر تبدیل شدن به معتبرترین برند فنی وب در ایران
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              ساخت Marketplace قانونی محصولات وردپرس، ایجاد مرجع آموزش تخصصی
              طراحی وب و سئو، و تبدیل شدن به انتخاب اول برندها برای رشد دیجیتال.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">مسیر آینده</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>گسترش محصولات اورجینال و استاندارد</li>
              <li>افزایش عمق آموزش و توانمندسازی تیم ها</li>
              <li>ایجاد تجربه خرید و پشتیبانی بی نقص</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="ds-section ds-card px-7 py-12 text-center">
        <p className="ds-eyebrow">شروع همکاری</p>
        <h2 className="ds-title mt-3">
          آماده ایم تا مسیر رشد دیجیتال شما را طراحی کنیم
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          اگر به دنبال وب سایتی هستید که واقعا کار کند، یا محصول اورجینال و
          پشتیبانی واقعی می خواهید، همین امروز با ما وارد گفتگو شوید.
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
            درخواست مشاوره
          </Button>
          <Button
            as={Link}
            className="ds-btn ds-btn-secondary"
            href={siteConfig.links.services}
            radius="lg"
            size="lg"
            variant="flat"
          >
            دریافت معرفی خدمات
          </Button>
        </div>
      </section>
    </div>
  );
}
