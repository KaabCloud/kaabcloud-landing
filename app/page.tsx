import AboutUs from "@/components/sections/about-us/default";
import Contact from "@/components/sections/contact/default";

import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Projects from "../components/sections/projects/default";
import Stats from "../components/sections/stats/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar actions={[]}/>
      <Hero id="hero" mockup={false} badge={false} />
      <Items id="services" />
      <Stats id="stats" />
      <Projects id="projects" />
      <AboutUs id="about" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
