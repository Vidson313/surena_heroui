import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ChevronRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase-server";
import AddToCartButton from "@/components/add-to-cart-button";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    themes: "قالب‌ها",
    plugins: "افزونه‌ها",
    licenses: "لایسنس‌ها",
  };

  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link className="hover:text-white" href="/">
          خانه
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link className="hover:text-white" href="/products">
          محصولات
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-300">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Product Image/Gallery Placeholder */}
        <div className="ds-card-glow flex aspect-square items-center justify-center overflow-hidden bg-slate-900/50 p-12">
          <div className="text-center">
            <Globe className="mx-auto h-24 w-24 text-blue-500/20" />
            <p className="mt-4 text-sm text-slate-500">تصویر پیش‌فرض محصول</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="ds-chip">
              {categoryLabels[product.category] || product.category}
            </span>
            <h1 className="ds-title mt-4 text-3xl">{product.name}</h1>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="ds-card-muted p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">قیمت نهایی</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {product.price
                    ? `${new Intl.NumberFormat("fa-IR").format(product.price)} تومان`
                    : "تماس بگیرید"}
                </p>
              </div>
              <Button
                className="ds-btn ds-btn-primary h-12 px-8"
                radius="lg"
                startContent={<ShoppingCart className="h-5 w-5" />}
              >
                افزودن به سبد خرید
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="ds-card flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">ضمانت اصالت</p>
                <p className="text-xs text-slate-500">نسخه ۱۰۰٪ اورجینال</p>
              </div>
            </div>
            <div className="ds-card flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">تحویل آنی</p>
                <p className="text-xs text-slate-500">بلافاصله پس از پرداخت</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Detailed Description */}
      <section className="ds-card p-8">
        <h2 className="text-xl font-bold text-white underline decoration-blue-500 underline-offset-8">
          توضیحات تکمیلی و ویژگی‌ها
        </h2>
        <div className="prose prose-invert mt-8 max-w-none text-slate-400">
          <p>
            این محصول یکی از باکیفیت‌ترین گزینه‌ها در دسته{" "}
            {categoryLabels[product.category]} است که توسط تیم فنی سورنانت بررسی
            و تایید شده است. ما تضمین می‌کنیم که تمامی فایل‌ها فاقد کدهای مخرب
            بوده و با استانداردهای وردپرس کاملاً سازگار هستند.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              به‌روزرسانی‌های رایگان و همیشگی
            </li>
            <li className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              پشتیبانی تخصصی ۶ ماهه
            </li>
            <li className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              فایل‌های کاملاً فارسی و راست‌چین شده
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
