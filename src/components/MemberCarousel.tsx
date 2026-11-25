"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { initials, type PanelMember } from "@/lib/content";

type SlidePerson = {
  name: string;
  role: string;
  bio?: string;
  img?: string;
};

function toSlides(members: PanelMember[]): SlidePerson[] {
  return members.map((m) => ({
    name: m.name,
    role: m.role,
    bio: m.bio,
    img: m.img,
  }));
}

/** Fixed-size sliding card — same height for every member */
function SlideCard({ person }: { person: SlidePerson }) {
  return (
    <article className="flex h-[340px] w-[220px] shrink-0 flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_10px_30px_rgba(6,48,63,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,137,191,0.12)]">
      <div className="relative h-[210px] w-full shrink-0 overflow-hidden bg-mist">
        {person.img ? (
          <Image
            src={`/members/${person.img}`}
            alt={person.name}
            fill
            className="object-cover object-top"
            sizes="220px"
          />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-mist to-sky/20 font-display text-3xl font-bold text-cyan">
            {initials(person.name) || "FA"}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-deep/35 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col justify-center px-3.5 py-3 text-center">
        <h4 className="line-clamp-2 font-display text-sm font-semibold leading-snug text-ink">
          {person.name}
        </h4>
        <p className="mt-1.5 line-clamp-2 text-xs font-semibold leading-snug text-cyan-deep">
          {person.role}
        </p>
      </div>
    </article>
  );
}

/** Infinite auto-scrolling marquee of equal-height member cards */
export function MemberMarquee({
  members,
  reverse = false,
}: {
  members: PanelMember[];
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();
  const slides = toSlides(members);
  if (!slides.length) return null;
  const loop = [...slides, ...slides];

  return (
    <div className="relative overflow-hidden py-1">
      <motion.div
        className="flex w-max items-stretch gap-4"
        animate={
          reduce
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{
          duration: Math.max(32, slides.length * 5),
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((person, i) => (
          <SlideCard key={`${person.name}-${i}`} person={person} />
        ))}
      </motion.div>
    </div>
  );
}

export function GroupCarousel({
  title,
  members,
}: {
  title: string;
  members: PanelMember[];
}) {
  if (!members.length) return null;
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="mb-4 border-b border-line/70 pb-3 font-display text-xl font-semibold text-ink">
        {title}
      </h3>
      <MemberMarquee members={members} />
    </div>
  );
}
