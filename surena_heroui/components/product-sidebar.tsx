"use client";

import { Input } from "@heroui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const categories = [
  { label: "همه محصولات", value: "" },
  { label: "قالب‌ها", value: "themes" },
  { label: "افزونه‌ها", value: "plugins" },
  { label: "لایسنس‌ها", value: "licenses" },
];

export default function ProductSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (search) params.set("search", search);
    else params.delete("search");
    
    if (category) params.set("category", category);
    else params.delete("category");

    if (minPrice) params.set("minPrice", minPrice);
    else params.delete("minPrice");

    if (maxPrice) params.set("maxPrice", maxPrice);
    else params.delete("maxPrice");

    router.replace(`${pathname}?${params.toString()}`);
  }, [search, category, minPrice, maxPrice]);

  return (
    <div className="flex flex-col gap-8">
      <div className="ds-card p-5">
        <h3 className="text-sm font-semibold text-white">جستجو</h3>
        <Input
          className="mt-4"
          placeholder="جستجوی محصول..."
          size="sm"
          startContent={<Search className="h-4 w-4 text-slate-500" />}
          value={search}
          onValueChange={setSearch}
        />
      </div>

      <div className="ds-card p-5">
        <h3 className="text-sm font-semibold text-white">دسته‌بندی‌ها</h3>
        <div className="mt-4 flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                category === cat.value
                  ? "bg-blue-600/20 text-blue-400"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              }`}
              onClick={() => setCategory(cat.value)}
            >
              {cat.label}
              {category === cat.value && (
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="ds-card p-5">
        <h3 className="text-sm font-semibold text-white mb-4">محدوده قیمت</h3>
        <div className="flex gap-2 items-center">
          <Input
            placeholder="از"
            size="sm"
            type="number"
            value={minPrice}
            onValueChange={setMinPrice}
          />
          <span className="text-slate-500">-</span>
          <Input
            placeholder="تا"
            size="sm"
            type="number"
            value={maxPrice}
            onValueChange={setMaxPrice}
          />
        </div>
      </div>
    </div>
  );
}
