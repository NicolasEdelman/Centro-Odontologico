"use client";

import Hero from "./components/hero";
import Biography from "./components/biography";
import Gallery from "./components/gallery";
import Reviews from "./components/Reviews";
import CallToAction from "./components/callToAction";
import BiographyGallery from "./components/biography-gallery";

export default function NadiaPerezPage() {
  return (
    <main>
      <Hero />
      {/* <Biography />
      <Gallery /> */}
      <BiographyGallery />
      <Reviews />
      <CallToAction />
    </main>
  );
}
