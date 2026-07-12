import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-ink text-ice">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Zylo Tech</h1>
          <p className="text-2xl text-cyan">Portfolio is Loading...</p>
        </div>
      </div>
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}