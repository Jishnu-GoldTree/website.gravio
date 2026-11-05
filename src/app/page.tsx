import { MapEmbed } from "@/components/MapEmbed";
import { HomeHero } from "@/components/pageTops";
import { Blog, Clients, Cta, Faq, Process, Services, Testimonials, Values, Work } from "@/components/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Clients />
      <Process />
      <Values />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Blog />
      <Cta />
      <MapEmbed />
    </>
  );
}
