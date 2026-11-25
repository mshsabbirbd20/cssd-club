"use client";

import {
  ButtonLink,
  FaqList,
  FeatureGrid,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { FadeUp } from "@/components/motion";
import { BENEFITS, CLUB, FAQS } from "@/lib/content";

export function JoinContent() {
  return (
    <>
      <PageHero
        title="Join the club"
        lead="Registering takes a few minutes. Fill in the online form and the committee will get in touch."
      />

      <Section id="apply">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              Online membership application
            </h2>
            <p className="mt-3 max-w-lg text-lg text-muted">
              The form opens in a new tab. Please fill in your details carefully
              and use an email address you check regularly.
            </p>
            <div className="mt-7">
              <ButtonLink href={CLUB.form} external>
                Open the application form
              </ButtonLink>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <aside className="rounded-3xl border border-line bg-white p-7 shadow-[0_12px_36px_rgba(6,48,63,0.06)]">
              <div className="mb-3 inline-flex rounded-full bg-cyan-deep px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Open now
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Recruitment announcement
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                We have recently recruited our general members. If you are
                interested in becoming a member, you can still join by
                registering through the online form.
              </p>
            </aside>
          </FadeUp>
        </div>
      </Section>

      <Section id="benefits">
        <SectionHeading
          title="Member benefits"
          lead="What you get from being part of the club."
        />
        <FeatureGrid items={BENEFITS} />
      </Section>

      <Section id="faq">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Frequently asked questions"
            lead="Answers for new applicants."
          />
          <FaqList items={FAQS} />
          <p className="mt-8 text-muted">
            More questions? Email us at{" "}
            <a
              href={`mailto:${CLUB.email}`}
              className="font-semibold text-cyan underline-offset-2 hover:underline"
            >
              {CLUB.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
