import type { Metadata } from "next";
import { CareerContent } from "./CareerContent";

export const metadata: Metadata = {
  title: "Career Opportunities",
  description:
    "Scholarship guidelines, workshops, mentorship and upcoming career opportunities from CSSD Club.",
};

export default function CareerPage() {
  return <CareerContent />;
}
