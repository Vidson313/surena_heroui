import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import HeroSearch from "@/components/hero-search";
import { siteConfig } from "@/config/site";
import { createClient } from "@/lib/supabase-server";

const categoryLabels: Record<string, string> = {
  themes: "قالب‌ها",
  plugins: "افزونه‌ها",
  licenses: "لایسنس‌ها",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const supabase = await createClient();

  const query = typeof sp.search === "string" ? sp.search.trim() : "";
  const category = typeof sp.category === "string" ? sp.category : "";

  let dbQuery = supabase.from("products").select("*");

  if (category) {
    dbQuery = dbQuery.eq("category", category);
  }

  const { data: products, error } = await dbQuery;

  if (error) {
    console.error("Error fetching products:", error);
  }

  const filtered = products?.filter((product) => {
    const matchesQuery = query
      ? product.name.includes(query) || (product.description && product.description.includes(query))
      : true;
    return matchesQuery;
  }) || [];

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
                <span className="ds-chip">{categoryLabels[product.category] || product.category}</span>
                <span className="text-xs text-slate-500">
                  {product.price ? `${new Intl.NumberFormat('fa-IR').format(product.price)} تومان` : "تماس بگیرید"}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{product.description}</p>
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
