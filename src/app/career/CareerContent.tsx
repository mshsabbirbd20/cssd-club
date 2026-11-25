"use client";

import {
  ButtonLink,
  CtaBand,
  FeatureGrid,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { Stagger, StaggerItem } from "@/components/motion";
import { CLUB, OPPORTUNITIES, PROGRAMS, SCHOLARSHIP_STEPS } from "@/lib/content";

export function CareerContent() {
  return (
    <>
      <PageHero
        title="Career opportunities"
        lead="Guidance, practice and mentoring to help you plan what comes after school."
      />

      <Section id="scholarships">
        <SectionHeading
          title="International scholarship guidelines"
          lead="Scholarships are competitive, and the students who succeed usually start early. Use these steps as a starting point."
        />
        <FeatureGrid items={SCHOLARSHIP_STEPS} />
        <p className="mt-8 max-w-3xl text-muted">
          Eligibility, funding and deadlines change every year, so always
          confirm them on the official scholarship website.
        </p>
      </Section>

      <Section id="programs">
        <SectionHeading
          title="What we offer"
          lead="Workshops, mentorship and career-oriented events."
        />
        <FeatureGrid items={PROGRAMS} />
      </Section>

      <Section id="upcoming">
        <SectionHeading
          title="Upcoming opportunities"
          lead="Dates and details will be announced here and on our social media pages."
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {OPPORTUNITIES.map((o, i) => {
            const accents = [
              "from-cyan to-sky",
              "from-cyan-deep to-cyan",
              "from-deep to-cyan",
            ];
            return (
              <StaggerItem key={o.title}>
                <article className="card-glow relative h-full overflow-hidden rounded-3xl glass p-6">
                  <div className={`mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r ${accents[i % accents.length]}`} />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gradient">{o.status}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{o.text}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <CtaBand
        title="Stay updated"
        lead="Members hear about workshops and opportunities first."
      >
        <ButtonLink href="/join" variant="light">
          Become a member
        </ButtonLink>
        <ButtonLink href={CLUB.facebook} variant="outline" external>
          Facebook
        </ButtonLink>
      </CtaBand>
    </>
  );
}
