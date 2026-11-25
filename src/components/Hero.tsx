"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui";

const SKILLS = [
  "Public Speaking",
  "Leadership",
  "Teamwork",
  "Communication",
  "Confidence",
  "Career Planning",
  "Mentorship",
  "Presentations",
] as const;

const TYPE_LINES = [
  "speak with confidence",
  "lead with clarity",
  "grow your soft skills",
  "plan your career path",
  "build your future",
] as const;

function useTypewriter(lines: readonly string[], enabled: boolean) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setText(lines[0] ?? "");
      return;
    }

    const full = lines[lineIndex] ?? "";
    const doneTyping = !deleting && text === full;
    const doneDeleting = deleting && text === "";

    let delay = deleting ? 28 : 58;
    if (doneTyping) delay = 1600;
    if (doneDeleting) delay = 320;

    const t = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
        return;
      }
      setText(
        deleting
          ? full.slice(0, text.length - 1)
          : full.slice(0, text.length + 1),
      );
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, lineIndex, lines, enabled]);

  return text;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(TYPE_LINES, !reduce);

  return (
    <section className="relative overflow-hidden pb-6 pt-[108px] sm:pb-10 sm:pt-[118px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,137,191,0.14),transparent_55%),radial-gradient(ellipse_at_15%_70%,rgba(79,195,255,0.1),transparent_42%),radial-gradient(ellipse_at_90%_60%,rgba(11,110,154,0.08),transparent_40%),linear-gradient(180deg,#f7fcff_0%,#ffffff_100%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-6">
        <div className="flex w-full max-w-3xl flex-col items-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-deep shadow-sm backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Soft skills · Career · Confidence
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl font-display text-[clamp(2.45rem,6.2vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-deep"
        >
          Build Thyself to{" "}
          <span className="text-gradient">Build the World.</span>
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-6 flex min-h-[2.5rem] items-center justify-center sm:min-h-[2.8rem]"
        >
          <p className="font-display text-[clamp(1.2rem,2.9vw,1.8rem)] font-semibold text-ink">
            Learn to{" "}
            <span className="rounded-md bg-cyan/10 px-1.5 py-0.5 text-cyan-deep">
              {typed}
              {!reduce && (
                <span
                  className="caret-blink ml-0.5 inline-block h-[1.05em] w-[3px] translate-y-[0.12em] rounded-sm bg-cyan align-baseline"
                  aria-hidden
                />
              )}
            </span>
          </p>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          The Career & Soft Skills Development Club helps students of Govt.
          Mohammadpur Model School & College grow confidence, communication and
          career awareness for life after school.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <ButtonLink href="/join">Join the club</ButtonLink>
          <ButtonLink href="/about" variant="ghost">
            Meet the team
          </ButtonLink>
        </motion.div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden border-y border-line/80 bg-white/50 py-3.5 backdrop-blur-sm">
        <motion.div
          className="flex w-max gap-3"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...SKILLS, ...SKILLS].map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
