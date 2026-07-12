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

// Simple error boundary for debugging
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink text-ice">
      <div className="text-center">
        <h2 className="text-2xl mb-4">Something went wrong</h2>
        <p className="text-muted">{error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 px-6 py-3 bg-cyan text-ink rounded-lg"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}