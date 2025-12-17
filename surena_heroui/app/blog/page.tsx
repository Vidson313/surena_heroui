const topics = [
  {
    title: "چطور یک سایت فروشگاهی سریع و امن بسازیم؟",
    category: "تجربه کاربری",
    summary:
      "معماری درست، انتخاب افزونه‌های معتبر و بهینه‌سازی سرعت؛ سه ستون یک فروشگاه موفق.",
  },
  {
    title: "نقشه راه سئو برای کسب‌وکارهای ایرانی",
    category: "سئو",
    summary:
      "از تحلیل رقبا تا استراتژی محتوا و لینک‌سازی اصولی، مسیر رشد پایدار را بشناسید.",
  },
  {
    title: "راهنمای انتخاب افزونه‌های اورجینال وردپرس",
    category: "محصولات",
    summary:
      "چطور افزونه امن، به‌روز و بومی‌سازی‌شده بخریم و از باگ‌های رایج دور بمانیم.",
  },
  {
    title: "چرا طراحی UX در اعتماد کاربر نقش کلیدی دارد؟",
    category: "طراحی",
    summary:
      "جزئیات تجربه کاربری می‌تواند تبدیل را چند برابر کند؛ از مسیر کاربر تا حس اعتماد.",
  },
];

const resources = [
  "چک‌لیست امنیت وردپرس برای وب‌سایت‌های فروشگاهی",
  "راهنمای بهبود Core Web Vitals و سرعت صفحات",
  "الگوهای صفحه محصول برای افزایش نرخ تبدیل",
];

export default function BlogPage() {
  return (
    <>
      <section className="ds-card-glow p-8">
        <span className="ds-chip">یادداشت‌های سورنانت</span>
        <h1 className="ds-title mt-4">
          تحلیل‌ها و راهکارهای تخصصی برای رشد واقعی در دنیای دیجیتال
        </h1>
        <p className="ds-subtitle mt-4">
          هر هفته از تجربه‌های واقعی پروژه‌ها، تحلیل بازار و تکنیک‌های طراحی و
          سئو صحبت می‌کنیم تا مسیر رشد شما روشن‌تر و مطمئن‌تر شود.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <div key={topic.title} className="ds-card p-6">
            <span className="ds-chip">{topic.category}</span>
            <h2 className="mt-4 text-lg font-semibold text-white">
              {topic.title}
            </h2>
            <p className="mt-2 text-sm text-slate-400">{topic.summary}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-blue-400">
              ادامه مطلب
            </span>
          </div>
        ))}
      </section>

      <section className="ds-card p-7">
        <p className="ds-eyebrow">مطالعه عمیق</p>
        <h2 className="ds-title mt-3">
          چگونه محتوا و تجربه کاربری را همزمان حرفه‌ای کنیم؟
        </h2>
        <article className="prose prose-invert mt-6 max-w-none">
          <p>
            وقتی کاربر وارد سایت می‌شود، زمان زیادی برای تصمیم‌گیری ندارد. اگر
            محتوا واضح، مسیر خرید کوتاه و صفحات سریع باشند، اعتماد ساخته می‌شود.
            ما در سورنانت برای هر صفحه، هدف مشخص تعریف می‌کنیم و عناصر مزاحم را
            حذف می‌کنیم تا تمرکز کاربر روی اقدام اصلی باقی بماند.
          </p>
          <h3>سه اصل تجربه کاربری در پروژه‌های ما</h3>
          <ul>
            <li>وضوح پیام و ساختار محتوا برای کاهش سردرگمی.</li>
            <li>سرعت بالا و بهینه‌سازی تصاویر برای تجربه روان.</li>
            <li>مسیر خرید کوتاه با CTA واضح و قابل اعتماد.</li>
          </ul>
          <p>
            این اصول در کنار سئو نتیجه‌محور، باعث می‌شوند کاربران در جستجو بمانند
            و تبدیل به مشتری شوند. هدف ما ساخت تجربه‌ای است که هم زیبا باشد و هم
            کار کند.
          </p>
        </article>
      </section>

      <section className="ds-card-muted p-7">
        <p className="ds-eyebrow">منابع پیشنهادی</p>
        <h2 className="ds-title mt-3">
          مسیر یادگیری شما با منابع عملی سریع‌تر می‌شود
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {resources.map((item) => (
            <li key={item} className="ds-card p-5">
              <p className="text-sm text-slate-400">{item}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
