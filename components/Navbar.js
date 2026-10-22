"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return function cleanup() {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  function getDesktopLinkClasses(route) {
    let base = "rounded px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold";
    if (pathname === route) {
      return base + " text-warm-gold font-semibold bg-[#2a2e2b]";
    }
    return base + " text-steel-grey hover:text-white hover:bg-[#282c29]";
  }

  function getMobileLinkClasses(route) {
    let base = "block rounded px-3 py-2 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold";
    if (pathname === route) {
      return base + " text-warm-gold font-semibold bg-[#2a2e2b]";
    }
    return base + " text-steel-grey hover:text-white hover:bg-[#282c29]";
  }

  function toggleMobileMenu() {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  }

  let mobileMenuElement = null;
  if (isMobileMenuOpen) {
    mobileMenuElement = (
      <div id="mobile-menu" className="border-t border-[#343834] bg-graphite px-6 py-4 md:hidden">
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={getMobileLinkClasses("/")}
          >
            Home
          </Link>
          <Link
            href="/features"
            onClick={() => setIsMobileMenuOpen(false)}
            className={getMobileLinkClasses("/features")}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className={getMobileLinkClasses("/pricing")}
          >
            Pricing
          </Link>
          <div className="pt-3">
            <Button
              href="/pricing#walkthrough"
              variant="primary"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a walkthrough
            </Button>
          </div>
        </nav>
      </div>
    );
  }

  let hamburgerBar1Class = "h-0.5 w-5 bg-white transition-transform";
  let hamburgerBar2Class = "h-0.5 w-5 bg-white transition-opacity mt-1";
  let hamburgerBar3Class = "h-0.5 w-5 bg-white transition-transform mt-1";

  if (isMobileMenuOpen) {
    hamburgerBar1Class = "h-0.5 w-5 bg-white transform rotate-45 translate-y-1.5";
    hamburgerBar2Class = "opacity-0";
    hamburgerBar3Class = "h-0.5 w-5 bg-white transform -rotate-45 -translate-y-1.5";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-steel-grey bg-graphite text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Simple text-based wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold"
        >
          <span className="text-xl font-bold tracking-tight text-white">
            Kanchan<span className="text-warm-gold">Flow</span>
          </span>
          <span className="hidden text-xs text-steel-grey sm:inline ml-1 border-l border-steel-grey pl-2 font-normal">
            Manufacturing CRM
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link href="/" className={getDesktopLinkClasses("/")}>
            Home
          </Link>
          <Link href="/features" className={getDesktopLinkClasses("/features")}>
            Features
          </Link>
          <Link href="/pricing" className={getDesktopLinkClasses("/pricing")}>
            Pricing
          </Link>
        </nav>

        {/* Primary Call to Action */}
        <div className="hidden items-center gap-3 md:flex">
          <Button href="/pricing#walkthrough" variant="primary">
            Book a walkthrough
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 flex-col items-center justify-center rounded border border-steel-grey p-2 text-white hover:bg-[#2d312e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold"
          >
            <span className={hamburgerBar1Class}></span>
            <span className={hamburgerBar2Class}></span>
            <span className={hamburgerBar3Class}></span>
          </button>
        </div>
      </div>

      {mobileMenuElement}
    </header>
  );
}
