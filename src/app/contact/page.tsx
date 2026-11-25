import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Email, location, Facebook and Instagram for Career & Soft Skills Development Club.",
};

export default function ContactPage() {
  return <ContactContent />;
}
