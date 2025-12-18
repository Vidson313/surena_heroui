"use client";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar
      className="border-b border-[color:var(--ds-border)] bg-slate-950/70 backdrop-blur"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-2">
          <NextLink className="flex items-center gap-2" href="/">
            <Image
              src="/logo-combo-horizontal-fa.svg"
              alt="لوگوی سورنا نت"
              width={160}
              height={44}
              priority
              className="h-10 w-auto"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden items-center gap-6 lg:flex">
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
        className="hidden basis-1/5 sm:basis-full sm:flex"
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
            شروع همکاری
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pr-4 sm:hidden" justify="end">
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
              شروع همکاری
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
