import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-surface-raised py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-cyan text-ink font-display font-bold text-xl">
              Z
            </div>
            <div className="font-display text-2xl">
              <span className="text-ice">Zylo</span>
              <span className="text-cyan">Tech</span>
            </div>
          </div>

          <div className="text-center md:text-right text-muted">
            <p>© {currentYear} Zylo Tech. All rights reserved.</p>
            <p className="text-sm mt-1">
              Built by Okpe Joseph Ameh
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <Link href="#services" className="hover:text-cyan transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-cyan transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-cyan transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}