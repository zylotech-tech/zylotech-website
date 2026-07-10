"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-raised bg-ink/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-cyan text-ink font-display font-bold text-xl">
              Z
            </div>
            <div>
              <span className="font-display text-2xl font-medium text-ice">Zylo</span>
              <span className="font-display text-2xl font-medium text-cyan">Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ice hover:text-cyan transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ice"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-surface-raised py-6">
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-ice hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-4" asChild>
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}