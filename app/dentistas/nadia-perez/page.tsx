"use client";

import Hero from "./components/hero";
import Reviews from "./components/Reviews";
import CallToAction from "./components/callToAction";
import BiographyGallery from "./components/biography-gallery";

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
