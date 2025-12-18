import {
  ArrowLeft,
  Github,
  Instagram,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  shop: [
    { name: "قالب‌های وردپرس", href: "/products?category=themes" },
    { name: "افزونه‌های اورجینال", href: "/products?category=plugins" },
    { name: "لایسنس‌های آنی", href: "/products?category=licenses" },
  ],
  services: [
    { name: "طراحی سایت اختصاصی", href: "/services" },
    { name: "سئو و بهینه‌سازی", href: "/services" },
    { name: "امنیت و ضد هک", href: "/services" },
  ],
  company: [
    { name: "صفحه اصلی", href: "/" },
    { name: "وبلاگ و آموزش", href: "/blog" },
    { name: "درباره سورنا نت", href: "/about" },
    { name: "تماس با ما", href: "/contact" },
  ],
};

const socials = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-900 bg-slate-950 pb-10 pt-20">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="ds-container relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <div className="ds-logo-stacked" aria-label="لوگوی سورنا نت" />
            </Link>
            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              سورنا نت؛ اکوسیستم هوشمند طراحی و توسعه وب در ایران. ما با تمرکز بر
              کیفیت بین‌المللی، کسب‌وکار شما را به دنیای مدرن متصل می‌کنیم.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-400 transition-all hover:bg-slate-800 hover:text-blue-500"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-base font-bold text-white">فروشگاه</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-base font-bold text-white">
              خدمات تخصصی
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-white">
              <Mail size={18} className="text-blue-500" />
              خبرنامه نکسوس
            </h4>
            <p className="mb-4 text-xs text-slate-500">
              آخرین آپدیت‌ها و تخفیف‌های VIP را در ایمیل خود دریافت کنید.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="ایمیل شما..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                aria-label="ارسال ایمیل"
                className="absolute bottom-1 left-1 top-1 flex items-center justify-center rounded-lg bg-blue-600 px-3 text-white transition-colors hover:bg-blue-500"
              >
                <ArrowLeft size={16} />
              </button>
            </form>
            <div className="mt-6">
              <h4 className="mb-4 text-base font-bold text-white">
                دسترسی سریع
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-900/50 pt-8 text-center text-xs text-slate-600 md:flex-row">
          <p>© ۲۰۲۵ تمام حقوق برای برند Sorena Net (آقای محمد سراج) محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-slate-400">
              قوانین و مقررات
            </a>
            <a href="#" className="transition-colors hover:text-slate-400">
              حریم خصوصی
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
