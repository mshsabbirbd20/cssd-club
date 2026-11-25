import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-[#031820]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,137,191,0.18),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(11,110,154,0.12),transparent_40%)]" />
      <div className="noise opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="relative mb-4 block h-16 w-16 overflow-hidden rounded-full bg-white shadow-lg">
              <Image
                src="/logo.png"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </span>
            <h4 className="font-display text-lg font-bold text-white">
              {CLUB.name}
            </h4>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">
              {CLUB.tagline}.
              <br />
              {CLUB.school}
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-cyan">
              Pages
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-cyan">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a
                href={`mailto:${CLUB.email}`}
                className="transition hover:text-white"
              >
                {CLUB.email}
              </a>
              <a
                href={CLUB.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Facebook
              </a>
              <a
                href={CLUB.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>
              <a
                href={CLUB.form}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Membership form
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-xs text-white/45">
          © 2026 {CLUB.name}, {CLUB.school}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
