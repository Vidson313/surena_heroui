import { Layout, Puzzle, ShieldCheck, Zap, ArrowLeft } from "lucide-react";
import NextLink from "next/link";

const categories = [
  {
    name: "قالب‌های حرفه‌ای",
    desc: "مجموعه‌ای از پوسته‌های اورجینال با نصب آسان و لایسنس معتبر.",
    icon: Layout,
    href: "/products?category=themes",
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
  },
  {
    name: "افزونه‌های کاربردی",
    desc: "ابزارهای قدرتمند برای سرعت، امنیت و رشد فروش آنلاین.",
    icon: Puzzle,
    href: "/products?category=plugins",
    color: "from-indigo-500 to-purple-500",
    shadow: "shadow-indigo-500/20",
  },
  {
    name: "امنیت و پشتیبانی",
    desc: "خدمات مانیتورینگ، نگهداری و بهینه‌سازی مستمر.",
    icon: ShieldCheck,
    href: "/services",
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
  },
  {
    name: "سرویس‌های فوری",
    desc: "تحویل سریع لایسنس‌ها و مشاوره تخصصی برای شروع.",
    icon: Zap,
    href: "/contact",
    color: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/20",
  },
];

export default function CategoryExplore() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="ds-container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            دسترسی سریع به{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              دنیای محصولات
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <NextLink
                key={cat.name}
                href={cat.href}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-800/60 ${
                  index === 0
                    ? "animate-rise"
                    : index === 1
                      ? "animate-rise animate-rise-delay-1"
                      : index === 2
                        ? "animate-rise animate-rise-delay-2"
                        : "animate-rise animate-rise-delay-3"
                }`}
              >
                <div
                  className={`absolute -inset-24 bg-gradient-to-r ${cat.color} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-[0.03]`}
                />
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-2xl ${cat.shadow} transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">
                  {cat.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-500">
                  {cat.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 transition-all group-hover:gap-4">
                  <span>مشاهده جزئیات</span>
                  <ArrowLeft size={16} />
                </div>
              </NextLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
