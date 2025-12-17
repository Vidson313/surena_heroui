import { Search } from "lucide-react";
import NextLink from "next/link";

const hotTags = ["قالب فروشگاهی", "المنتور پرو", "سئو وردپرس", "امنیت"];

export default function HeroSearch() {
  return (
    <div className="group relative w-full max-w-2xl">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-20 transition duration-500 group-focus-within:opacity-50" />
      <form
        action="/products"
        method="get"
        className="relative flex items-center rounded-2xl border border-slate-800 bg-slate-900/80 p-1.5 shadow-2xl backdrop-blur-xl"
        role="search"
      >
        <div className="pr-4 text-slate-500">
          <Search size={22} />
        </div>
        <input
          type="text"
          name="search"
          placeholder="جستجوی هوشمند بین محصولات سورنانت..."
          aria-label="جستجوی محصولات سورنانت"
          className="w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-slate-600 focus:outline-none"
        />
        <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-blue-500/30">
          جستجو
        </button>
      </form>

      <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pr-2 text-xs">
        {hotTags.map((tag) => (
          <NextLink
            key={tag}
            className="cursor-pointer text-slate-500 transition-colors hover:text-blue-400"
            href={`/products?search=${encodeURIComponent(tag)}`}
          >
            #{tag}
          </NextLink>
        ))}
      </div>
    </div>
  );
}
