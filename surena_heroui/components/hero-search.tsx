"use client";

import { Search, Rocket, Zap, Database } from "lucide-react";
import NextLink from "next/link";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";

const hotTags = ["قالب فروشگاهی", "المنتور پرو", "سئو وردپرس", "امنیت"];

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      const { data } = await supabase
        .from("products")
        .select("name, slug, category")
        .ilike("name", `%${query}%`)
        .limit(5);
      
      setSuggestions(data || []);
      setLoading(false);
    };

    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) router.push(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="group relative w-full max-w-2xl" ref={dropdownRef}>
      <div className="flex items-center gap-3 mb-2 px-1">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-blue-500 font-bold">
          <Database size={10} />
          <span>Database Online</span>
        </div>
        <div className="h-[1px] flex-1 bg-slate-800/50" />
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-500">
          <span>Sorena Core v4.0</span>
        </div>
      </div>

      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 transition duration-500 group-focus-within:opacity-30 blur-xl" />
      
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center border border-white/10 bg-black/80 p-1 shadow-2xl backdrop-blur-2xl"
        role="search"
      >
        <div className="pr-4 text-white/40">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="کدام ماژول را برای پرتاب نیاز دارید؟"
          className="w-full bg-transparent px-3 py-4 text-base text-white placeholder:text-white/20 focus:outline-none font-light"
        />
        <button 
          type="submit"
          className="flex items-center gap-2 bg-white px-8 py-4 text-xs font-black uppercase tracking-tighter text-black transition-all hover:bg-blue-500 hover:text-white"
        >
          <span>Launch</span>
          <Rocket size={14} />
        </button>
      </form>

      {isOpen && (suggestions.length > 0 || loading) && (
        <div className="absolute top-full left-0 right-0 mt-2 border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl z-50">
          {loading ? (
            <div className="p-4 text-center text-xs text-white/40 uppercase tracking-widest">Scanning Database...</div>
          ) : (
            <div className="flex flex-col gap-1">
              {suggestions.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => {
                    router.push(`/products/${item.slug}`);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between p-3 text-right transition-colors hover:bg-white/5 group/item"
                >
                  <div className="flex flex-col items-start text-left">
                    <span className="text-sm font-medium text-white group-hover/item:text-blue-400">{item.name}</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-tight">{item.category}</span>
                  </div>
                  <Zap size={12} className="text-white/20 group-hover/item:text-blue-500" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pr-2">
        {hotTags.map((tag) => (
          <NextLink
            key={tag}
            className="flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-white"
            href={`/products?search=${encodeURIComponent(tag)}`}
          >
            <span className="h-1 w-1 rounded-full bg-blue-500/50" />
            {tag}
          </NextLink>
        ))}
      </div>
    </div>
  );
}
