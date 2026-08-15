import type { Metadata } from "next";
import OurRoom from "@/components/pages/OurRoom";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Rooms | Embiente Guest House",
  description: "Explore the Budget Double Room and Deluxe Double Room at Embiente Guest House in Negombo.",
};

export default function RoomsPage() {
  return (
    <>
      <OurRoom />
      <Footer />
    </>
  );
}
