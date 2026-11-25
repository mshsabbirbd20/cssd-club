"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { MemberMarquee } from "@/components/MemberCarousel";
import {
  ButtonLink,
  CtaBand,
  FeatureGrid,
  Section,
  SectionHeading,
} from "@/components/ui";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { ANNOUNCEMENTS, CLUB, MISSIONS, PANEL, WHY_JOIN } from "@/lib/content";

export default function HomePage() {
  const half = Math.ceil(PANEL.length / 2);
  const rowA = PANEL.slice(0, half);
  const rowB = PANEL.slice(half);

  return (
    <>
      <Hero />

      <Section className="overflow-hidden !pt-10">
        <SectionHeading
          title="Our mission"
          lead="Marks matter, but so does the ability to speak up, work with others and plan your future. Our work is built around three promises."
        />
        <FeatureGrid items={MISSIONS} />
      </Section>

      <Section className="overflow-hidden !py-12">
        <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <SectionHeading
              title="Executive committee"
              lead="Session 2026–2027"
            />
          </div>
          <FadeUp className="shrink-0 sm:pt-1">
            <Link
              href="/about#committee"
              className="inline-flex rounded-full bg-cyan-deep px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,110,154,0.28)] transition hover:bg-deep"
            >
              View full panel
            </Link>
          </FadeUp>
        </div>
        <div className="space-y-5">
          <MemberMarquee members={rowA} />
          <MemberMarquee members={rowB.length ? rowB : rowA} reverse />
        </div>
      </Section>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] bg-[#02141c] py-14 text-center text-white"
        >
          <p className="mx-auto max-w-4xl px-5 font-display text-[clamp(1.5rem,4vw,2.7rem)] font-extrabold leading-tight tracking-tight">
            “{CLUB.tagline}”
          </p>
        </motion.div>
      </div>

      <Section>
        <SectionHeading
          title="Announcements"
          lead="News, registrations and upcoming events from the club."
        />
        <Stagger className="space-y-4">
          {ANNOUNCEMENTS.map((a, i) => {
            const colors = [
              "from-cyan to-sky",
              "from-cyan-deep to-cyan",
              "from-deep to-cyan",
            ];
            return (
              <StaggerItem key={a.title}>
                <article className="group grid gap-3 overflow-hidden rounded-3xl border border-line bg-white p-5 transition hover:shadow-[0_16px_36px_rgba(6,48,63,0.08)] sm:grid-cols-[140px_1fr] sm:gap-6 sm:p-6">
                  <div className="flex items-start gap-3 sm:block">
                    <span
                      className={`mt-1 inline-block h-10 w-1.5 rounded-full bg-gradient-to-b ${colors[i % colors.length]} sm:h-full sm:min-h-[4.5rem]`}
                    />
                    <time className="text-sm font-bold text-cyan">{a.date}</time>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {a.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {a.text}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading
          title="Why join"
          lead="The habits you build now follow you into college, scholarships and work."
        />
        <FeatureGrid items={WHY_JOIN} />
      </Section>

      <CtaBand
        title="Membership is open"
        lead="Register through our online form to join the club."
      >
        <ButtonLink href="/join" variant="light">
          Go to membership
        </ButtonLink>
      </CtaBand>
    </>
  );
}
