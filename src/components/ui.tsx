"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { initials } from "@/lib/content";
import { iconFor } from "./icons";
import { FadeUp, Stagger, StaggerItem } from "./motion";

const ACCENTS = [
  { from: "from-cyan", to: "to-sky", glow: "shadow-cyan/25", chip: "bg-gradient-to-br from-cyan to-cyan-deep" },
  { from: "from-cyan-deep", to: "to-cyan", glow: "shadow-cyan-deep/25", chip: "bg-gradient-to-br from-cyan-deep to-cyan" },
  { from: "from-sky", to: "to-cyan", glow: "shadow-sky/25", chip: "bg-gradient-to-br from-sky to-cyan" },
  { from: "from-cyan", to: "to-deep", glow: "shadow-cyan/20", chip: "bg-gradient-to-br from-cyan to-deep" },
  { from: "from-deep", to: "to-cyan", glow: "shadow-deep/20", chip: "bg-gradient-to-br from-deep to-cyan" },
  { from: "from-sky", to: "to-cyan-deep", glow: "shadow-sky/20", chip: "bg-gradient-to-br from-sky to-cyan-deep" },
] as const;

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
      <div className="relative z-[1] mx-auto max-w-7xl px-5 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  lead,
  light = false,
}: {
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <FadeUp className="mb-10 max-w-2xl sm:mb-12">
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.65rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {lead}
        </p>
      )}
    </FadeUp>
  );
}

export function PageHero({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-[linear-gradient(180deg,#f7fcff_0%,#ffffff_70%)] pt-[108px] sm:pt-[118px]">
      <div className="relative mx-auto max-w-7xl px-5 pb-14 sm:px-6 sm:pb-20">
        <FadeUp>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-deep sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">{lead}</p>
        </FadeUp>
      </div>
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light" | "outline";
  external?: boolean;
}) {
  const styles = {
    primary:
      "bg-cyan-deep text-white shadow-[0_12px_28px_rgba(11,110,154,0.32)] hover:bg-deep hover:shadow-[0_14px_34px_rgba(6,48,63,0.28)]",
    ghost:
      "border-2 border-cyan/40 bg-white text-cyan-deep hover:border-cyan-deep hover:bg-cyan-deep hover:text-white",
    light:
      "border border-white/70 bg-white text-cyan-deep shadow-[0_10px_28px_rgba(0,0,0,0.12)] hover:bg-mist",
    outline:
      "border-2 border-white/75 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-cyan-deep",
  }[variant];

  const className = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function FeatureGrid({
  items,
}: {
  items: readonly { title: string; text: string; n?: string }[];
}) {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <StaggerItem key={item.title}>
            <article className="card-glow group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,137,191,0.12)]">
              <div
                className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl ${accent.chip} text-white shadow-md ${accent.glow}`}
              >
                {iconFor(item.title)}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export function CtaBand({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <Section className="overflow-hidden">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#02141c] p-10 sm:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,137,191,0.22),transparent_50%)]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/85">{lead}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}

export function FaqList({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={item.q}
            layout
            className={`overflow-hidden rounded-2xl transition ${
              isOpen
                ? "glass-strong border border-cyan/30 shadow-[0_12px_36px_rgba(0,137,191,0.12)]"
                : "glass border border-white/60"
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.05 : 1 }}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan to-aqua text-xl text-white shadow-md"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export function PersonCard({
  name,
  role,
  bio,
  img,
}: {
  name: string;
  role: string;
  bio: string;
  img?: string;
}) {
  return (
    <article className="card-glow group flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,137,191,0.12)]">
      {img ? (
        <div className="relative h-[230px] w-full shrink-0 overflow-hidden bg-mist">
          <Image
            src={`/members/${img}`}
            alt={name}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 220px"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-deep/40 to-transparent" />
        </div>
      ) : (
        <div
          className="grid h-[230px] w-full shrink-0 place-items-center bg-gradient-to-br from-mist to-sky/20 font-display text-4xl font-bold text-cyan"
          aria-hidden
        >
          {initials(name) || "FA"}
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <h4 className="font-display text-base font-semibold text-ink">{name}</h4>
        <p className="mt-1 text-sm font-semibold text-cyan-deep">{role}</p>
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted">{bio}</p>
      </div>
    </article>
  );
}
