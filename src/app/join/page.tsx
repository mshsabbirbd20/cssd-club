import type { Metadata } from "next";
import { JoinContent } from "./JoinContent";

export const metadata: Metadata = {
  title: "Join the Club",
  description:
    "Apply for CSSD Club membership, explore member benefits, and read frequently asked questions.",
};

export default function JoinPage() {
  return <JoinContent />;
}
