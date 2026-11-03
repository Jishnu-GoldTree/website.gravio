import CanvasBackground from "./CanvasBackground";
import FloatingNav from "./components/landing/FloatingNav";
import Hero from "./components/landing/Hero";
import Manifesto from "./components/landing/Manifesto";
import WorkServices from "./components/landing/WorkServices";
import GlobalPresence from "./components/landing/GlobalPresence";
import Awards from "./components/landing/Awards";
import Industries from "./components/landing/Industries";
import Team from "./components/landing/Team";
import Press from "./components/landing/Press";
import Blog from "./components/landing/Blog";
import FAQ from "./components/landing/FAQ";
import CTA from "./components/landing/CTA";
import SiteFooter from "./components/landing/SiteFooter";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-gradient-to-b from-white via-[#eafaf0] to-white">
      <CanvasBackground />
      <FloatingNav />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <Manifesto />
        <WorkServices />
        <GlobalPresence />
        <Awards />
        <Industries />
        <Team />
        <Press />
        <Blog />
        <FAQ />
        <CTA />
      </main>

      <SiteFooter />
    </div>
  );
}
