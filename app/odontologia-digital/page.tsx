"use client";

import Hero from "./components/hero";
import { CTA } from "../../components/call-to-action";
import ODGallery from "./components/ODGallery";

export default function NadiaPerezPage() {
  return (
    <main>
      <Hero />
      <ODGallery />
      <CTA />
    </main>
  );
}
