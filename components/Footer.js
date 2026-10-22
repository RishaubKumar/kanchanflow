import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-steel-grey bg-graphite text-steel-grey">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand & Description */}
          <div>
            <div className="text-lg font-bold text-white">
              Kanchan<span className="text-warm-gold">Flow</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-steel-grey">
              KanchanFlow is a manufacturing CRM built for precision job shops, CNC machine units, and MSME contract fabricators. It streamlines quotations, drawing revision tracking, cost buildups, and shop-floor order pipelines.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:pl-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-warm-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="transition-colors hover:text-warm-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
                >
                  Features & Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-warm-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
                >
                  Pricing & Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Social and Support Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Connect & Support</h3>
            <p className="mt-3 text-sm text-steel-grey">
              Direct technical and sales engineering support for industrial manufacturing inquiries:
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@kanchanflow.com"
                  className="text-warm-gold transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
                >
                  contact@kanchanflow.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-grey transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
                >
                  LinkedIn (Company Updates)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-grey transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warm-gold"
                >
                  GitHub (Developer Docs)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-10 border-t border-[#343834] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#8A9089]">
          <p>&copy; 2026 KanchanFlow. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Tailored for Indian & Global MSME Manufacturing Workflows.</p>
        </div>
      </div>
    </footer>
  );
}
