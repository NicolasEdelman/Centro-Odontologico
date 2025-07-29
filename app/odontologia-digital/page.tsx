"use client";

import Hero from "./components/hero";
import { CTA } from "../../components/call-to-action";
import ODMosaicOverlaySimple from "./components/ODGalleryMobile";
import ODMosaicIrregular from "./components/ODGalleryDesktop";

export default function NadiaPerezPage() {
  return (
    <main>
      <Hero />
      <div className="hidden md:block">
        <ODMosaicIrregular />
      </div>
      <div className="block md:hidden">
        <ODMosaicOverlaySimple />
      </div>
      <CTA />
    </main>
  );
}
