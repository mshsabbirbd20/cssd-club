"use client";

import {
  ButtonLink,
  PageHero,
  Section,
} from "@/components/ui";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { CLUB } from "@/lib/content";

const contacts = [
  {
    mark: "@",
    markClass: "bg-gradient-to-br from-cyan to-sky text-white shadow-cyan/30",
    title: "Official email",
    body: (
      <a
        href={`mailto:${CLUB.email}`}
        className="font-medium text-cyan underline-offset-2 hover:underline"
      >
        {CLUB.email}
      </a>
    ),
  },
  {
    mark: "L",
    markClass: "bg-gradient-to-br from-sky to-cyan text-white shadow-sky/30",
    title: "Location",
    body: (
      <>
        <p className="text-muted">{CLUB.location}</p>
        <a
          href={CLUB.map}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-medium text-cyan underline-offset-2 hover:underline"
        >
          View on Google Maps
        </a>
      </>
    ),
  },
  {
    mark: "f",
    markClass: "bg-gradient-to-br from-cyan-deep to-cyan text-white shadow-cyan/30",
    title: "Facebook",
    body: (
      <a
        href={CLUB.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-cyan underline-offset-2 hover:underline"
      >
        facebook.com/gmmsc.cssdclub
      </a>
    ),
  },
  {
    mark: "i",
    markClass: "bg-gradient-to-br from-deep to-cyan-deep text-white shadow-deep/30",
    title: "Instagram",
    body: (
      <a
        href={CLUB.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-cyan underline-offset-2 hover:underline"
      >
        instagram.com/gmmsc_cssd.club
      </a>
    ),
  },
];

export function ContactContent() {
  return (
    <>
      <PageHero
        title="Contact us"
        lead="Questions about the club, events or membership? Reach us any of these ways."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Stagger className="grid gap-4">
            {contacts.map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-glow flex gap-4 rounded-3xl glass p-5 transition hover:shadow-[0_18px_40px_rgba(6,48,63,0.1)]">
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display font-bold shadow-lg ${c.markClass}`}
                  >
                    {c.mark}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {c.title}
                    </h3>
                    <div className="mt-1 text-sm leading-relaxed">{c.body}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.1}>
            <aside className="rounded-3xl bg-deep p-7 text-white lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-bold">Want to join?</h2>
              <p className="mt-3 leading-relaxed text-white/80">
                Registration is done through our online form. It only takes a
                few minutes.
              </p>
              <div className="mt-6">
                <ButtonLink href={CLUB.form} variant="light" external>
                  Open registration form
                </ButtonLink>
              </div>
            </aside>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
