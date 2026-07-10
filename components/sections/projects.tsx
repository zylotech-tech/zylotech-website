import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Restaurant Website",
    category: "Restaurant",
    description: "Modern, fast-loading website with online menu, reservation system and beautiful gallery for a local restaurant.",
    image: "https://picsum.photos/id/1060/600/400",
    link: "#",
  },
  {
    title: "Café Landing Page",
    category: "Cafe",
    description: "Warm and inviting website with online ordering, location map and customer testimonials.",
    image: "https://picsum.photos/id/1080/600/400",
    link: "#",
  },
  {
    title: "E-commerce Store",
    category: "E-commerce",
    description: "Clean online store with product catalog, cart system and secure checkout for a small business.",
    image: "https://picsum.photos/id/106/600/400",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ice mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Here are some of the websites we've built for small businesses and restaurants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-surface border-surface-raised hover:border-cyan/30 transition-all group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute top-4 right-4 bg-ink/80 text-xs px-3 py-1 rounded-full text-cyan">
                  {project.category}
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="font-display text-2xl text-ice mb-3">{project.title}</h3>
                <p className="text-muted mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    className="flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}