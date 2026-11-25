import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vision, mission, objectives, achievements and the 2026–2027 executive committee of CSSD Club.",
};

export default function AboutPage() {
  return <AboutContent />;
}
