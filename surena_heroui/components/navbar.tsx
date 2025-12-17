"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar
      className="border-b border-[color:var(--ds-border)] bg-slate-950/70 backdrop-blur"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit">
          <NextLink className="flex items-center gap-2" href="/">
            <span className="text-[color:var(--ds-accent)]">
              <Logo />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-base text-white">سورنانت</span>
              <span className="text-xs text-[color:var(--ds-muted)]">
                رشد آنلاین آسوده و قابل اعتماد
              </span>
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 items-center">
          {siteConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "ds-nav-link text-[color:var(--ds-ink-soft)]",
                    isActive && "ds-nav-link-active text-white",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>
          <Button
            as={Link}
            className="ds-btn ds-btn-primary"
            href={siteConfig.links.primaryCta}
            radius="lg"
            variant="flat"
          >
            شروع مشاوره
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pr-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-6 flex flex-col gap-3">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link className="text-base" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              as={Link}
              className="ds-btn ds-btn-primary"
              href={siteConfig.links.primaryCta}
              radius="lg"
              variant="flat"
            >
              شروع مشاوره
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
