import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#020617" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="fa">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-[color:var(--ds-bg)] font-sans text-white antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="ds-container flex-grow pt-20">{children}</main>
            <footer className="w-full border-t border-[color:var(--ds-border)]">
              <div className="ds-container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-base font-semibold text-white">
                    سورنانت
                  </p>
                  <p className="text-sm text-[color:var(--ds-muted)]">
                    اکوسیستم مطمئن برای طراحی سایت، تجربه دیجیتال و محصولات
                    اورجینال وردپرس.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--ds-muted)]">
                  {siteConfig.navItems.map((item) => (
                    <Link
                      key={item.href}
                      className="hover:text-[color:var(--ds-accent-cool)]"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
