"use client";

import {
  ButtonLink,
  CtaBand,
  PageHero,
  PersonCard,
  Section,
  SectionHeading,
} from "@/components/ui";
import { MemberMarquee } from "@/components/MemberCarousel";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { ACHIEVEMENTS, ADVISER, GROUPS, OBJECTIVES, PANEL } from "@/lib/content";

export function AboutContent() {
  return (
    <>
      <PageHero
        title="About us"
        lead="Who we are, what we believe and the students who lead the club this session."
      />

      <Section>
        <Stagger className="grid gap-6 md:grid-cols-2">
          <StaggerItem>
            <article className="card-glow relative h-full overflow-hidden rounded-3xl glass p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/25 blur-2xl" />
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-sky font-display font-bold text-white shadow-lg shadow-cyan/30">
                V
              </div>
              <h2 className="font-display text-2xl font-bold text-ink">Vision</h2>
              <p className="mt-3 leading-relaxed text-muted">
                A generation of students who are confident, capable and well
                prepared, who know their strengths and use them to build their
                own futures and serve their communities.
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="card-glow relative h-full overflow-hidden rounded-3xl glass p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-aqua/25 blur-2xl" />
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-deep to-cyan font-display font-bold text-white shadow-lg shadow-cyan/30">
                M
              </div>
              <h2 className="font-display text-2xl font-bold text-ink">Mission</h2>
              <p className="mt-3 leading-relaxed text-muted">
                To develop career awareness and soft skills in students through
                workshops, mentoring and hands-on activities, and to prepare
                them for higher studies, scholarships and professional life.
              </p>
            </article>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section>
        <SectionHeading
          title="Our objectives"
          lead="What we work toward every session."
        />
        <FadeUp>
          <ul className="grid gap-3">
            {OBJECTIVES.map((item, i) => {
              const dots = [
                "bg-cyan",
                "bg-cyan-deep",
                "bg-sky",
                "bg-deep",
                "bg-aqua",
                "bg-cyan",
                "bg-sky",
              ];
              return (
                <li
                  key={item}
                  className="glass relative rounded-2xl px-5 py-3.5 pl-12 text-muted transition hover:shadow-[0_12px_30px_rgba(6,48,63,0.08)]"
                >
                  <span
                    className={`absolute left-5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ${dots[i % dots.length]} shadow`}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
        </FadeUp>
      </Section>

      <Section>
        <SectionHeading
          title="History and achievements"
          lead="Milestones of the club and its members."
        />
        {ACHIEVEMENTS.length ? (
          <div className="ml-2 border-l-[3px] border-sky pl-7">
            {ACHIEVEMENTS.map((a) => (
              <FadeUp key={a.title} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[38px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-gradient-to-br from-cyan to-aqua shadow-[0_0_12px_rgba(0,137,191,0.5)]" />
                <div className="glass rounded-2xl p-5">
                  <b className="text-sm text-gradient">{a.year}</b>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-muted">{a.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        ) : (
          <p className="glass rounded-2xl border-2 border-dashed border-line p-6 text-center text-muted">
            Achievements will be added here soon.
          </p>
        )}
      </Section>

      <Section id="committee" className="overflow-hidden">
        <SectionHeading
          title="Faculty adviser and executive committee"
          lead="Session 2026–2027"
        />

        <div className="mb-12">
          <h3 className="mb-5 border-b border-line/70 pb-3 font-display text-xl font-semibold text-ink">
            Faculty adviser
          </h3>
          <div className="max-w-xs">
            <PersonCard
              name={ADVISER.name}
              role={ADVISER.title}
              bio={ADVISER.bio}
              img={ADVISER.img || undefined}
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-5 border-b border-line/70 pb-3 font-display text-xl font-semibold text-ink">
            Executive panel
          </h3>
          <div className="space-y-5">
            <MemberMarquee members={PANEL} />
            <MemberMarquee members={[...PANEL].reverse()} reverse />
          </div>
        </div>

        {GROUPS.map((group) => {
          const list = PANEL.filter((p) => p.group === group.key);
          if (!list.length) return null;
          return (
            <div key={group.key} className="mb-12 last:mb-0">
              <h3 className="mb-5 border-b border-line/70 pb-3 font-display text-xl font-semibold text-ink">
                {group.label}
              </h3>
              <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.map((p) => (
                  <StaggerItem key={p.name} className="h-full">
                    <PersonCard
                      name={p.name}
                      role={p.role}
                      bio={p.bio}
                      img={p.img}
                    />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          );
        })}
      </Section>

      <CtaBand
        title="Join the club"
        lead="Become a member and take part in upcoming activities."
      >
        <ButtonLink href="/join" variant="light">
          Membership form
        </ButtonLink>
      </CtaBand>
    </>
  );
}
