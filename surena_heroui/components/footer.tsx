"use client";

import React from "react";
import { ArrowLeft, Github, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("اشتراک با موفقیت ثبت شد (بزودی به پنل متصل می‌شود)");
  };

  return (
    <footer
      className="relative mt-20 border-t border-slate-900 bg-slate-950 pb-10 pt-20 font-[Yekan]"
      role="contentinfo"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="mb-6 block text-2xl font-black italic text-white"
            >
              SORENA<span className="text-blue-500">NET</span>
            </Link>
            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              سورنا نت؛ پلتفرم تخصصی محصولات نوین وب. طراحی شده برای ارتقای
              استانداردهای دیجیتال و تجربه کاربر.
            </p>
            <div className="flex gap-4">
              {[
                {
                  Icon: Instagram,
                  label: "اینستاگرام",
                  href: "https://instagram.com/sorena",
                },
                {
                  Icon: Twitter,
                  label: "توییتر",
                  href: "https://twitter.com/sorena",
                },
                {
                  Icon: Github,
                  label: "گیت‌هاب",
                  href: "https://github.com/sorena",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-400 transition-all hover:bg-slate-800 hover:text-blue-500"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="mb-6 text-white font-bold">دسترسی سریع</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/products"
                    className="text-slate-500 transition-colors hover:text-blue-400"
                  >
                    فروشگاه محصولات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-slate-500 transition-colors hover:text-blue-400"
                  >
                    خدمات فنی
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-500 transition-colors hover:text-blue-400"
                  >
                    مقالات آموزشی
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-white font-bold">بخش قانونی</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/terms"
                    className="text-slate-500 transition-colors hover:text-blue-400"
                  >
                    قوانین و مقررات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-slate-500 transition-colors hover:text-blue-400"
                  >
                    حریم خصوصی
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h4 className="mb-4 flex items-center gap-2 text-white font-bold">
              <Mail size={18} className="text-blue-500" />
              خبرنامه VIP
            </h4>
            <form onSubmit={handleSubscribe} className="relative">
              <label htmlFor="footer-email" className="sr-only">
                آدرس ایمیل
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="ایمیل شما..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <button
                type="submit"
                aria-label="عضویت در خبرنامه"
                className="absolute bottom-1 left-1 top-1 rounded-lg bg-blue-600 px-3 text-white transition-colors hover:bg-blue-500"
              >
                <ArrowLeft size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-900/50 pt-8 text-[10px] text-slate-600 md:flex-row md:text-xs">
          <p>
            © {currentYear} تمامی حقوق برای Sorena Net محفوظ است. توسعه توسط آقای
            محمد سراج.
          </p>
          <div className="flex gap-4">
            <span>Powered by Next.js 15</span>
            <span className="italic text-blue-500/50">v1.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
