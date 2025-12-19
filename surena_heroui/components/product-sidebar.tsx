"use client";

import { CheckboxGroup, Checkbox } from "@heroui/checkbox";
import { Slider } from "@heroui/slider";
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

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (search) params.set("search", search);
    else params.delete("search");
    
    if (category) params.set("category", category);
    else params.delete("category");

    router.replace(`${pathname}?${params.toString()}`);
  }, [search, category]);

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
        <h3 className="text-sm font-semibold text-white">محدوده قیمت</h3>
        <Slider
          className="mt-6"
          formatOptions={{ style: "currency", currency: "IRR" }}
          maxValue={2000000}
          minValue={0}
          size="sm"
          step={50000}
          defaultValue={[0, 2000000]}
          label="قیمت (تومان)"
        />
      </div>
    </div>
  );
}
