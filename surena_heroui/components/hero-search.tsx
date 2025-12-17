import { Layout, Extension, Key, Diamond, Search } from "lucide-react";

const hotTags = ["قالب فروشگاهی", "المنتور پرو", "سئو وردپرس", "امنیت"];

const categories = [
  { name: "قالب وردپرس", icon: Layout, count: "۴۵ محصول", color: "text-blue-400" },
  { name: "افزونه کاربردی", icon: Extension, count: "۱۲۰ محصول", color: "text-indigo-400" },
  { name: "لایسنس اورجینال", icon: Key, count: "۱۵ مورد", color: "text-cyan-400" },
  { name: "سرویس های VIP", icon: Diamond, count: "۸ سرویس", color: "text-purple-400" },
];

export default function HeroSearch() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="ds-container relative z-10 text-center">
        <h2 className="text-3xl font-black text-white md:text-5xl">
          دنبال چه{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            محصولی
          </span>{" "}
          هستید؟
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-slate-400">
          در میان صدها قالب، افزونه و سرویس تخصصی سورنانت، آنچه نیاز دارید را
          بیابید.
        </p>

        <div className="group relative mx-auto mt-10 max-w-3xl text-right" role="search">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-20 transition duration-500 group-within:opacity-50" />
          <div className="relative flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 p-2 backdrop-blur-md">
            <div className="flex items-center justify-center pr-3 text-slate-500">
              <Search className="h-6 w-6" />
            </div>
            <input
              type="text"
              placeholder="جستجوی قالب، افزونه یا خدمات..."
              className="w-full bg-transparent px-3 py-4 text-lg text-white placeholder:text-slate-600 focus:outline-none"
            />
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-blue-500/30">
              جستجو
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="py-1 text-sm text-slate-500">جستجوهای داغ:</span>
            {hotTags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-300 transition-all hover:bg-slate-800"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.name}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/40 p-8 transition-all hover:bg-slate-900"
              >
                <div
                  className={`absolute -right-10 -top-10 h-24 w-24 blur-2xl opacity-0 transition-opacity group-hover:opacity-10 ${cat.color}`}
                />
                <div
                  className={`mb-4 inline-flex rounded-2xl bg-slate-800/50 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-800 ${cat.color}`}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="mb-1 text-base font-bold text-white">{cat.name}</h4>
                <span className="text-xs text-slate-500">{cat.count}</span>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-l from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
