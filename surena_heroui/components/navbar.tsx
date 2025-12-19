"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  ChevronDown,
  Code,
  Laptop,
  Menu,
  MousePointer2,
  Shield,
  Sparkles,
  X,
  Zap,
  ShoppingCart,
} from "lucide-react";
import clsx from "clsx";

import { LogoMark } from "@/components/logo";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/cart-drawer";

const megaMenuContent = {
  products: [
    {
      title: "قالب‌های وردپرس",
      desc: "پوسته‌های المنتور و اختصاصی",
      icon: Laptop,
      color: "text-blue-500",
      href: "/products?category=themes",
    },
    {
      title: "افزونه‌های پیشرفته",
      desc: "بهینه‌سازی و امکانات VIP",
      icon: Zap,
      color: "text-amber-500",
      href: "/products?category=plugins",
    },
    {
      title: "لایسنس‌های اورجینال",
      desc: "فعالسازی آنی و قانونی",
      icon: Shield,
      color: "text-emerald-500",
      href: "/products?category=licenses",
    },
  ],
  services: [
    {
      title: "طراحی اختصاصی",
      desc: "کدنویسی صفر تا صد پروژه",
      icon: Code,
      color: "text-purple-500",
      href: "/services",
    },
    {
      title: "بهینه‌سازی سئو",
      desc: "رتبه ۱ گوگل با استراتژی نکسوس",
      icon: Sparkles,
      color: "text-rose-500",
      href: "/services",
    },
  ],
};

  export const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState<"products" | "services" | null>(
      null,
    );
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    
    const { cart } = useCart();
    const pathname = usePathname();

  const searchParams = useSearchParams();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname, searchParams]);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("?")[0]);
  };

  const toggleMenu = (key: "products" | "services") => {
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  const mobileItems = [
    { label: "محصولات", href: "/products" },
    { label: "خدمات", href: "/services" },
    { label: "وبلاگ", href: "/blog" },
    { label: "درباره ما", href: "/about" },
    { label: "تماس", href: "/contact" },
  ];

  return (
    <header
      className="fixed inset-x-0 top-4 z-[100] flex justify-center px-4 md:top-6 md:px-6 font-[Yekan]"
      role="banner"
    >
      <nav
        onMouseLeave={() => setActiveMenu(null)}
        className="relative flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 md:h-20 md:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="O?U?O-U? OO?U,UO O3U^O?U+O U+O?"
        >
          <LogoMark size={40} />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex" role="menubar">
          {(["products", "services"] as const).map((key) => (
            <li
              key={key}
              className="relative"
              onMouseEnter={() => setActiveMenu(key)}
              onFocus={() => setActiveMenu(key)}
              role="none"
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeMenu === key}
                aria-controls={`mega-${key}`}
                onClick={() => toggleMenu(key)}
                className={clsx(
                  "flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-bold transition-all",
                  activeMenu === key || isLinkActive(`/${key}`)
                    ? "bg-white/5 text-blue-400"
                    : "text-slate-400 hover:text-white",
                )}
              >
                {key === "products" ? "محصولات" : "خدمات تخصصی"}
                <ChevronDown
                  size={14}
                  className={clsx(
                    "transition-transform duration-300",
                    activeMenu === key && "rotate-180",
                  )}
                />
              </button>
            </li>
          ))}
          {["blog", "about"].map((item) => (
            <li key={item} role="none">
              <Link
                href={`/${item}`}
                className={clsx(
                  "px-4 py-2 text-sm font-bold transition-colors",
                  isLinkActive(`/${item}`)
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-white",
                )}
              >
                {item === "blog" ? "وبلاگ" : "درباره ما"}
              </Link>
            </li>
          ))}
        </ul>

          <div className="flex items-center gap-3">
            <button
              className="relative p-2 text-slate-400 transition-colors hover:text-white"
              onClick={() => setCartOpen(true)}
              aria-label="سبد خرید"
            >
              <ShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-lg ring-2 ring-slate-900">
                  {cart.length}
                </span>
              )}
            </button>
            <Link
              href="/login"
              className="hidden text-sm font-bold text-slate-400 transition-colors hover:text-white md:block"
            >
              ورود
            </Link>

            <Link
              href="/contact"
              className="hidden text-sm font-bold text-slate-400 transition-colors hover:text-white md:block"
            >
              تماس
            </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-500 active:scale-95"
          >
            شروع پروژه
          </Link>
          <button
            className="p-2 text-slate-300 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          id={activeMenu ? `mega-${activeMenu}` : undefined}
          role="menu"
          className={clsx(
            "absolute inset-x-0 top-[calc(100%+10px)] origin-top rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-3xl transition-all duration-300",
            activeMenu
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-95 opacity-0 pointer-events-none",
          )}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeMenu &&
              megaMenuContent[activeMenu]?.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  role="menuitem"
                  className="group flex items-start gap-4 rounded-2xl p-4 transition-all hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                  onClick={() => setActiveMenu(null)}
                >
                  <div
                    className={clsx(
                      "rounded-xl bg-slate-800 p-3 transition-colors group-hover:bg-slate-700",
                      item.color,
                    )}
                  >
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}

            <div className="flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6">
              <div>
                <h5 className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-200">
                  پیشنهاد نکسوس
                </h5>
                <p className="text-sm font-medium text-white">
                  تخفیف ۵۰٪ برای اولین سفارش طراحی سایت
                </p>
              </div>
              <Link
                href="/products"
                className="group mt-4 flex items-center gap-2 text-xs font-bold text-white"
                onClick={() => setActiveMenu(null)}
              >
                مشاهده جزئیات
                <MousePointer2
                  size={14}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="absolute inset-x-4 top-24 rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-3">
            {mobileItems.map((item) => (
              <li
                key={item.href}
                className="border-b border-white/5 pb-3 last:border-0 last:pb-0"
              >
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-bold text-slate-200 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        ) : null}

        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </header>
    );
  };

