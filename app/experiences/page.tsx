import type { Metadata } from "next";
import Footer from "@/components/Footer";
import OurExperience from "@/components/pages/OurExperience";

export const metadata: Metadata = {
  title: "Our Experiences | Embiente Guest House",
  description: "Discover beach walks, pool days and local experiences near Embiente Guest House in Negombo.",
};

export default function ExperiencesPage() {
  return <><OurExperience /><Footer /></>;
}
