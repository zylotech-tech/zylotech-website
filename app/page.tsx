import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}