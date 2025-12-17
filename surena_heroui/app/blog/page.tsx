const topics = [
  {
    title: "چک لیست امنیت وردپرس برای سایت های فروشگاهی",
    category: "امنیت",
    summary: "مهم ترین اقدامات برای جلوگیری از نفوذ و حفظ اعتماد مشتری.",
  },
  {
    title: "نقش UX در افزایش نرخ تبدیل فروشگاه آنلاین",
    category: "طراحی",
    summary: "چطور تجربه کاربری هدفمند فروش را به صورت مستقیم بالا می برد.",
  },
  {
    title: "سئو مرحله به مرحله برای برندهای خدماتی",
    category: "سئو",
    summary: "مسیر ساخت ورودی پایدار و رشد قابل پیش بینی.",
  },
  {
    title: "چگونه قالب درست برای برند خود انتخاب کنیم؟",
    category: "محصولات",
    summary: "راهنمای انتخاب بر اساس اهداف کسب و کار و تجربه مشتری.",
  },
];

const resources = [
  "راهنمای انتخاب افزونه های ضروری وردپرس",
  "الگوهای بهینه سازی سرعت و Core Web Vitals",
  "چک لیست تجربه کاربری برای صفحات فرود",
];

export default function BlogPage() {
  return (
    <>
      <section className="ds-card-glow p-8">
        <span className="ds-chip">مرکز دانش سورنانت</span>
        <h1 className="ds-title mt-4">
          آموزش های تخصصی برای رشد دیجیتال مطمئن
        </h1>
        <p className="ds-subtitle mt-4">
          اینجا تجربه های واقعی تیم سورنانت در طراحی، سئو و محصولات وردپرس جمع
          شده تا تصمیم های بهتر و سریع تری بگیرید.
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
              مطالعه مقاله
            </span>
          </div>
        ))}
      </section>

      <section className="ds-card p-7">
        <p className="ds-eyebrow">یادداشت ویژه</p>
        <h2 className="ds-title mt-3">چطور محتوای سئو محور با UX عالی بسازیم؟</h2>
        <article className="prose prose-invert mt-6 max-w-none">
          <p>
            در فضای رقابتی امروز، محتوا فقط برای رتبه گرفتن نیست. محتوا باید هم
            نیاز کاربر را پاسخ دهد و هم مسیر تصمیم گیری را شفاف کند. سورنانت
            محتوا را به عنوان بخشی از تجربه خرید و اعتماد سازی می بیند.
          </p>
          <h3>سه اصل طلایی</h3>
          <ul>
            <li>ساختار شفاف با تیترهای دقیق و قابل اسکن.</li>
            <li>پاسخ مستقیم به سوالات پرتکرار کاربر.</li>
            <li>دعوت به اقدام واضح در نقاط کلیدی صفحه.</li>
          </ul>
          <p>
            اگر محتوا بر اساس نیت جستجو نوشته شود و تجربه کاربری آن دقیق باشد،
            هم نرخ تبدیل بالا می رود و هم اعتماد برند پایدار می ماند.
          </p>
        </article>
      </section>

      <section className="ds-card-muted p-7">
        <p className="ds-eyebrow">منابع سریع</p>
        <h2 className="ds-title mt-3">چک لیست ها و فایل های کاربردی</h2>
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
