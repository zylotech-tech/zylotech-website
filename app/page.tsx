import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}