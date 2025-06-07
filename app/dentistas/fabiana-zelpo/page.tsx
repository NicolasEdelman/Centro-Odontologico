"use client";

import CallToAction from "./components/callToAction";
import BiographyGallery from "./components/biography-gallery";
import Hero from "./components/hero";
import Reviews from "./Reviews";

export default function NadiaPerezPage() {
  return (
    <main>
      <Hero />
      <BiographyGallery />
      <Reviews />
      <CallToAction />
    </main>
  );
}
