"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className="pointer-events-auto mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between rounded-2xl bg-white px-5 transition-shadow duration-300 sm:px-6"
        style={{
          boxShadow: scrolled
            ? "0 0 0 1px rgba(0,137,191,0.55), 0 0 18px rgba(0,137,191,0.32), 0 0 34px rgba(79,195,255,0.16), 0 12px 36px rgba(6,48,63,0.08)"
            : "0 0 0 1px rgba(0,137,191,0.42), 0 0 14px rgba(0,137,191,0.26), 0 0 28px rgba(79,195,255,0.12)",
        }}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-[0_0_0_1px_rgba(0,137,191,0.25),0_0_12px_rgba(0,137,191,0.22)] transition group-hover:shadow-[0_0_0_1px_rgba(0,137,191,0.4),0_0_16px_rgba(0,137,191,0.35)]">
            <Image
              src="/logo.png"
              alt="CSSD logo"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="44px"
              priority
            />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            CSSD
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "text-cyan-deep" : "text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-cyan/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/join"
            className="ml-2 rounded-full bg-cyan-deep px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(11,110,154,0.35)] transition hover:bg-deep hover:shadow-[0_0_20px_rgba(0,137,191,0.45)]"
          >
            Join the club
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/25 bg-white/70 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-deep transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-deep transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-deep transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="pointer-events-auto mx-auto mt-2 w-full max-w-7xl overflow-hidden rounded-2xl bg-white lg:hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,137,191,0.4), 0 0 14px rgba(0,137,191,0.25)",
            }}
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-base font-medium ${
                      active ? "bg-cyan/10 text-cyan-deep" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/join"
                className="mt-2 rounded-full bg-cyan-deep px-4 py-3 text-center font-semibold text-white"
              >
                Join the club
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
