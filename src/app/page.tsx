import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <FAQ />
      <Contact />
      <BackToTop/>
    </main>
  );
}
