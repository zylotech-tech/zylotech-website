"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserMockup from "@/components/browser-mockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-surface/50 px-4 py-1.5 font-mono text-xs text-cyan">
              <Sparkles className="h-3.5 w-3.5" />
              Web Development · AI Solutions · Site Management
            </div>

            <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ice sm:text-5xl md:text-6xl">
              Your business deserves a website that{" "}
              <span className="text-cyan">actually brings customers in.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Zylo Tech builds fast, modern websites for restaurants, cafes,
              and local businesses — then keeps them running with AI tools
              and ongoing management, so you can focus on your customers,
              not your code.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="group bg-cyan text-ink hover:bg-cyan-dim font-medium"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-muted/30 text-ice hover:bg-surface hover:text-ice"
              >
                See Our Work
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-surface-raised pt-6">
              <Stat number="30+" label="Sites launched" />
              <Stat number="4.9/5" label="Client rating" />
              <Stat number="48hr" label="Avg. response time" />
            </div>
          </motion.div>

          {/* Right: Signature browser mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <BrowserMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-ice">{number}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}