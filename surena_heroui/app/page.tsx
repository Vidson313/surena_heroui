import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { MoveRight, Zap, Target, Layers, ShieldCheck, Cpu } from "lucide-react";

import { siteConfig } from "@/config/site";
import HeroSearch from "@/components/hero-search";
import CategoryExplore from "@/components/category-explore";
import { createClient } from "@/lib/supabase-server";

export default async function Home() {
  const supabase = await createClient();
  const { data: dbServices } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: true });

  const services = dbServices?.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    slug: s.slug
  })) || [];

  const philosophy = [
    { 
      title: "هسته باز و شفاف", 
      description: "کدهای ما بدون پیچیدگی‌های پنهان، استاندارد و آماده توسعه توسط هر تیمی هستند.",
      icon: <Layers size={20} />
    },
    { 
      title: "تلورانس صفر", 
      description: "در سورنا نت، هر خط کد با وسواس مهندسی و تست‌های دقیق برای حذف کوچک‌ترین خطاها نوشته می‌شود.",
      icon: <Target size={20} />
    },
    { 
      title: "معماری مقیاس‌پذیر", 
      description: "زیرساختی که با رشد بیزنس شما، بدون محدودیت و فراتر از مرزها گسترش می‌یابد.",
      icon: <Cpu size={20} />
    },
  ];

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Launch Hero */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="ds-grid absolute inset-0 opacity-20" />
          <div className="absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 bg-blue-600/10 blur-[120px]" />
        </div>
        
        <div className="ds-container relative flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-3">
            <span className="ds-chip border-blue-500/50 text-blue-400">Mission: Online Growth</span>
            <div className="h-[1px] w-12 bg-white/10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Status: Nominal</span>
          </div>

          <h1 className="ds-display mb-8 max-w-5xl tracking-tighter">
            مهندسی استاندارد وب؛ <br />
            <span className="text-white/40">فراتر از خطوط کد.</span>
          </h1>

          <p className="ds-subtitle mb-12 max-w-2xl text-lg text-white/50">
            در سورنا نت، ایده‌های شما را با دقت مهندسی و سرعتی خیره‌کننده به مدار اجرا می‌رسانیم.
          </p>

          <HeroSearch />

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <Button
              as={Link}
              className="ds-btn h-14 px-10 text-xs font-black"
              href="/contact"
            >
              شروع همکاری
            </Button>
            <Button
              as={Link}
              className="ds-btn ds-btn-secondary h-14 px-10 text-xs font-black"
              href="/services"
            >
              مشاهده خدمات
            </Button>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="ds-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Core Philosophy</span>
            </div>
            <h2 className="ds-title mb-8">
              برای اینکه رشد دیجیتال از «شانس» به <span className="text-blue-500">«فرآیند»</span> تبدیل شود
            </h2>
            <p className="ds-subtitle mb-10 text-white/40">
              سورنا نت با تمرکز بر تلورانس صفر و معماری مقیاس‌پذیر، مسیر رشد برندها را مرحله‌به‌مرحله طراحی می‌کند.
            </p>
            <div className="flex items-center gap-4 text-white">
              <ShieldCheck className="text-blue-500" size={24} />
              <span className="text-sm font-bold uppercase tracking-tighter">Certified Original Products Only</span>
            </div>
          </div>

          <div className="grid gap-4">
            {philosophy.map((item) => (
              <div key={item.title} className="group border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.05]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-blue-500">{item.icon}</div>
                  <MoveRight className="opacity-0 transition-all -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" size={20} />
                </div>
                <h3 className="mb-3 text-lg font-black text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Tesla Minimalist */}
      <section className="bg-[#050505] py-32">
        <div className="ds-container">
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="ds-eyebrow mb-4">Modules & Solutions</span>
            <h2 className="ds-title">هر سرویس برای ساخت اعتماد و فروش</h2>
          </div>

          <div className="grid gap-px bg-white/5 border border-white/5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-black p-10 transition-colors hover:bg-white/[0.02]"
              >
                <div className="mb-12 flex h-12 w-12 items-center justify-center border border-white/10 group-hover:border-blue-500 transition-colors">
                  <Zap className="text-white/20 group-hover:text-blue-500 transition-colors" size={20} />
                </div>
                <h3 className="mb-4 text-xl font-black text-white">{service.title}</h3>
                <p className="mb-10 text-sm leading-7 text-white/40">{service.description}</p>
                <Link
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-blue-500 transition-colors"
                  href={`/services#${service.slug}`}
                >
                  Configure
                  <MoveRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoryExplore />

      {/* CTA - Final Mission */}
      <section className="ds-container">
        <div className="relative overflow-hidden bg-white px-8 py-24 text-center text-black">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="ds-grid h-full w-full invert" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="mb-6 text-[10px] font-black uppercase tracking-[0.4em]">Final Destination</span>
            <h2 className="ds-display mb-10 max-w-4xl text-black">
              آماده‌ایم تا مسیر رشد دیجیتال شما را با امنیت و شفافیت بسازیم
            </h2>
            <Button
              as={Link}
              className="bg-black text-white h-16 px-12 text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-colors"
              href="/contact"
            >
              Initiate Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
