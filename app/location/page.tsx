import type { Metadata } from "next";
import Footer from "@/components/Footer";
import OurLocation from "@/components/pages/OurLocation";

export const metadata: Metadata = {
  title: "Location | Embiente Guest House",
  description: "Find Embiente Guest House in Eththukala, Negombo, Sri Lanka.",
};

export default function LocationPage() {
  return <><OurLocation /><Footer /></>;
}
