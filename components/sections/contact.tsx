"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We'll get back to you soon.");
    // In real project, connect to Formspree, EmailJS or backend here
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ice mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-muted">
            Ready to get a professional website for your business?
          </p>
        </div>

        <div className="bg-ink border border-surface-raised rounded-3xl p-10 md:p-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-muted">Your Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-surface border-surface-raised text-ice"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-muted">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="bg-surface border-surface-raised text-ice"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-muted">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your business and what you need..."
                rows={6}
                required
                className="bg-surface border-surface-raised text-ice resize-y"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-cyan text-ink hover:bg-cyan/90 text-lg py-7"
            >
              Send Message – Get Free Quote
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-muted mt-8">
          Or reach out directly: zylo.tech.ai@gmail.com
        </p>
      </div>
    </section>
  );
}