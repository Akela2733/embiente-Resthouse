import type { Metadata } from "next";
import OurGallery from "@/components/pages/OurGallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Embiente Guest House",
  description: "View the beautiful spaces, lush gardens, relaxing pool, and comfortable rooms at Embiente Guest House in Negombo.",
};

export default function GalleryPage() {
  return (
    <>
      <OurGallery />
      <Footer />
    </>
  );
}
