"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const previews = [
  {
    label: "Restaurant",
    accent: "#FF7A45",
    content: (
      <div className="space-y-3">
        <div className="h-24 rounded-md bg-gradient-to-br from-coral/30 to-surface" />
        <div className="h-3 w-2/3 rounded bg-ice/20" />
        <div className="h-3 w-1/2 rounded bg-ice/10" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-12 rounded bg-surface-raised" />
          <div className="h-12 rounded bg-surface-raised" />
          <div className="h-12 rounded bg-surface-raised" />
        </div>
      </div>
    ),
  },
  {
    label: "Café",
    accent: "#00F5FF",
    content: (
      <div className="space-y-3">
        <div className="h-24 rounded-md bg-gradient-to-br from-cyan/20 to-surface" />
        <div className="h-3 w-1/2 rounded bg-ice/20" />
        <div className="flex gap-2">
          <div className="h-16 w-1/2 rounded bg-surface-raised" />
          <div className="h-16 w-1/2 rounded bg-surface-raised" />
        </div>
      </div>
    ),
  },
  {
    label: "E-commerce",
    accent: "#FF7A45",
    content: (
      <div className="grid grid-cols-2 gap-2">
        <div className="h-20 rounded bg-surface-raised" />
        <div className="h-20 rounded bg-surface-raised" />
        <div className="h-3 w-full rounded bg-ice/20" />
        <div className="h-3 w-full rounded bg-ice/10" />
      </div>
    ),
  },
];

export default function BrowserMockup() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % previews.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const active = previews[index];

  return (
    <div className="relative mx-auto max-w-md rounded-xl border border-surface-raised bg-surface/60 shadow-glow-lg backdrop-blur">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-surface-raised px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-coral/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-ice/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/40" />
        </div>
        <div className="ml-3 flex-1 rounded bg-ink/60 px-3 py-1 font-mono text-[11px] text-muted">
          zylotech.com/{active.label.toLowerCase()}
        </div>
      </div>

      {/* Content area with scan line + crossfade */}
      <div className="relative h-64 overflow-hidden p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {active.content}
          </motion.div>
        </AnimatePresence>

        {/* Scanning line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden opacity-40">
          <div className="h-px w-full animate-scan bg-gradient-to-r from-transparent via-cyan to-transparent" />
        </div>
      </div>

      {/* Tab label */}
      <div className="flex items-center justify-between border-t border-surface-raised px-4 py-2.5">
        <span
          className="font-mono text-[11px] uppercase tracking-wide"
          style={{ color: active.accent }}
        >
          {active.label} site
        </span>
        <div className="flex gap-1">
          {previews.map((p, i) => (
            <span
              key={p.label}
              className={`h-1 w-4 rounded-full transition-colors ${
                i === index ? "bg-cyan" : "bg-surface-raised"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}