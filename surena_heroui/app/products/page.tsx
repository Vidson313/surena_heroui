import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import HeroSearch from "@/components/hero-search";
import { siteConfig } from "@/config/site";

const products = [
  {
    id: 1,
    title: "قالب فروشگاهی نکسوس",
    category: "themes",
    type: "قالب",
    price: "۸۵۰٬۰۰۰ تومان",
    desc: "مناسب فروشگاه‌های حرفه‌ای با طراحی مینیمال و سرعت بالا.",
  },
  {
    id: 2,
    title: "افزونه امنیت پرو",
    category: "plugins",
    type: "افزونه",
    price: "۴۲۰٬۰۰۰ تومان",
    desc: "محافظت کامل در برابر بدافزارها و حملات رایج وردپرس.",
  },
  {
    id: 3,
    title: "قالب شرکتی آروان",
    category: "themes",
    type: "قالب",
    price: "۶۵۰٬۰۰۰ تومان",
    desc: "مخصوص برندهای خدماتی با تمرکز بر اعتماد و اعتبار.",
  },
  {
    id: 4,
    title: "افزونه سئو پیشرفته",
    category: "plugins",
    type: "افزونه",
    price: "۳۸۰٬۰۰۰ تومان",
    desc: "تنظیمات حرفه‌ای سئو، اسکیما و تحلیل محتوا.",
  },
  {
    id: 5,
    title: "لایسنس المنتور پرو",
    category: "licenses",
    type: "لایسنس",
    price: "۵۱۰٬۰۰۰ تومان",
    desc: "نسخه اورجینال با فعال‌سازی معتبر و آپدیت منظم.",
  },
  {
    id: 6,
    title: "قالب کلینیکی هرمس",
    category: "themes",
    type: "قالب",
    price: "۵۹۰٬۰۰۰ تومان",
    desc: "تمرکز بر رزرو آنلاین و تجربه کاربری ساده.",
  },
];

const categoryLabels: Record<string, string> = {
  themes: "قالب‌ها",
  plugins: "افزونه‌ها",
  licenses: "لایسنس‌ها",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query =
    typeof searchParams.search === "string" ? searchParams.search.trim() : "";
  const category =
    typeof searchParams.category === "string" ? searchParams.category : "";

  const filtered = products.filter((product) => {
    const matchesQuery = query
      ? product.title.includes(query) || product.desc.includes(query)
      : true;
    const matchesCategory = category ? product.category === category : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-16 pb-24">
      <section className="ds-card-glow p-8 text-center">
        <span className="ds-chip">محصولات اورجینال سورنانت</span>
        <h1 className="ds-title mt-4">
          انتخاب امن و مطمئن برای رشد وب‌سایت شما
        </h1>
        <p className="ds-subtitle mt-4">
          نسخه‌های اورجینال، تست‌شده و بومی‌سازی‌شده برای بازار ایران؛ با پشتیبانی
          سریع و دقیق.
        </p>
        <div className="mt-6 flex justify-center">
          <HeroSearch />
        </div>
      </section>

      <section className="ds-card-muted p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-400">نمایش نتایج</p>
            <h2 className="text-xl font-semibold text-white">
              {category
                ? `دسته ${categoryLabels[category] ?? "محصولات"}`
                : "همه محصولات"}
            </h2>
          </div>
          {query ? (
            <span className="ds-chip">جستجو: {query}</span>
          ) : null}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length ? (
          filtered.map((product) => (
            <div key={product.id} className="ds-card p-6">
              <div className="flex items-center justify-between">
                <span className="ds-chip">{product.type}</span>
                <span className="text-xs text-slate-500">{product.price}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{product.desc}</p>
              <Link
                className="mt-4 inline-flex text-sm font-semibold text-blue-400"
                href={siteConfig.links.primaryCta}
              >
                دریافت مشاوره خرید
              </Link>
            </div>
          ))
        ) : (
          <div className="ds-card col-span-full p-10 text-center">
            <p className="text-sm text-slate-400">
              نتیجه‌ای برای جستجوی شما پیدا نشد. لطفاً عبارت دیگری امتحان کنید.
            </p>
            <Button
              as={Link}
              className="ds-btn ds-btn-primary mt-6"
              href="/products"
              radius="lg"
              variant="flat"
            >
              نمایش همه محصولات
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
