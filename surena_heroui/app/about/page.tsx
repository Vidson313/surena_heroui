import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

const pillars = [
  {
    title: "اعتماد ساختنی است",
    description:
      "ما با شفافیت در قیمت، گزارش و تحویل، اعتماد را تبدیل به یک تجربه قابل لمس می کنیم.",
  },
  {
    title: "کیفیت قابل سنجش است",
    description:
      "هر محصول و پروژه قبل از انتشار، تست امنیتی و عملکردی می شود تا ریسک صفر شود.",
  },
  {
    title: "رشد باید پایدار باشد",
    description:
      "ما به رشد هیجانی باور نداریم؛ مسیر روشن و ماندگار طراحی می کنیم.",
  },
];

const culture = [
  "طراحی با همدلی نسبت به کاربر نهایی",
  "پاسخگویی دقیق و مسئولانه",
  "تمرکز بر آموزش و به اشتراک گذاری دانش",
  "همگام با استانداردهای جهانی توسعه وب",
];

export default function AboutPage() {
  return (
    <>
      <section className="ds-card-glow p-8">
        <span className="ds-chip">درباره سورنانت</span>
        <h1 className="ds-title mt-4">ساخت اکوسیستم مطمئن رشد دیجیتال</h1>
        <p className="ds-subtitle mt-4">
          سورنانت با یک اصل ساده آغاز شد: رشد آنلاین باید آسوده، شفاف و قابل
          اعتماد باشد. ما برای کسب و کارهای ایرانی مسیری می سازیم که در آن
          دغدغه های فنی تبدیل به اطمینان و شتاب در رشد شود.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ds-card p-7">
          <p className="ds-eyebrow">داستان برند</p>
          <h2 className="ds-title mt-3">چرا سورنانت شکل گرفت؟</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            ما سورنانت را ساختیم تا کسب و کارها بدون درگیری با مسائل فنی به
            محصولات استاندارد وردپرس و خدمات طراحی سایت حرفه ای دسترسی داشته
            باشند. تمرکز ما روی ساخت فرآیندهای شفاف و قابل پیگیری است؛ مسیری که
            رشد را از شانس به تصمیم تبدیل می کند.
          </p>
        </div>
        <div className="ds-card-muted p-7">
          <p className="ds-eyebrow">چشم انداز</p>
          <h3 className="text-xl font-semibold text-white">
            تبدیل شدن به برند اول فنی وب در ایران
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            ساخت بزرگ ترین Marketplace قانونی محصولات وردپرس، ایجاد مرجع آموزش
            تخصصی و تبدیل شدن به شریک اصلی برندها در مسیر رشد دیجیتال.
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
        <p className="ds-eyebrow">فرهنگ تیم</p>
        <h2 className="ds-title mt-3">شیوه کار ما در سورنانت</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {culture.map((item) => (
            <div key={item} className="ds-card-muted p-5">
              <p className="text-sm text-slate-400">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card-glow p-8 text-center">
        <h2 className="ds-title">آماده همکاری هستید؟</h2>
        <p className="mt-3 text-sm text-slate-400">
          برای ساخت یک تجربه دیجیتال قابل اعتماد و نتیجه محور، با ما در تماس
          باشید.
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
            شروع مشاوره
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
