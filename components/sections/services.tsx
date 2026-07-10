import { Card, CardContent } from "@/components/ui/card";
import { Globe, Bot, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Beautiful, fast, and mobile-friendly websites tailored for restaurants, cafes, e-commerce stores, and local businesses.",
    color: "cyan",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Smart chatbots, automated booking systems, customer insights, and AI tools that save you time and increase sales.",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Website Management",
    description:
      "Ongoing maintenance, security updates, content updates, performance optimization, and reliable hosting support.",
    color: "cyan",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ice mb-4">
            What We Do Best
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We help small businesses and restaurants succeed online with modern websites, AI tools, and expert care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-surface-raised border-surface-raised hover:border-cyan/30 transition-all group"
            >
              <CardContent className="p-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-surface group-hover:bg-cyan/10 transition-colors">
                  <service.icon className="h-8 w-8 text-cyan" />
                </div>

                <h3 className="font-display text-3xl text-ice mb-4">
                  {service.title}
                </h3>

                <p className="text-muted leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}