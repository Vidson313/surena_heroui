import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { createClient } from "@/lib/supabase-server";
import ProjectRequestForm from "@/components/project-request-form";

const workflow = [
  "تحلیل نیاز و تعیین اهداف کسب‌وکار",
  "طراحی تجربه کاربری و معماری اطلاعات",
  "توسعه استاندارد و تست امنیت",
  "انتشار، سئو و پایش نتایج",
];

export default async function ServicesPage() {
  const supabase = await createClient();
  const { data: services, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching services:", error);
  }

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
        {services?.map((service) => (
          <div key={service.id} className="ds-card p-6">
            <h2 className="text-lg font-semibold text-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-400">
              مشاهده جزئیات سرویس
            </div>
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

      <section id="request-form" className="flex flex-col gap-8">
        <div className="text-center">
          <h2 className="ds-title">ثبت درخواست پروژه</h2>
          <p className="mt-3 text-sm text-slate-400">
            برای دریافت برآورد زمان و هزینه، فرم زیر را تکمیل کنید تا کارشناسان ما با شما تماس بگیرند.
          </p>
        </div>
        <ProjectRequestForm />
      </section>
    </div>
  );
}
