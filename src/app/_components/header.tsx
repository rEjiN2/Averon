"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  // { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="AVERON ENERTEK home">
          <Image
            className="brand-logo"
            src="/logo.svg"
            alt="AVERON ENERTEK logo"
            width={68}
            height={68}
            priority
          />
        </Link>

        <button
          type="button"
          className={`nav-toggle${isOpen ? " is-open" : ""}`}
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-shell${isOpen ? " is-open" : ""}`}>
          <nav id="primary-nav" className="nav" aria-label="Primary">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${isActive ? " is-active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="nav-link-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
