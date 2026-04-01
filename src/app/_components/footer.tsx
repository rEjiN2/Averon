import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <div className="footer-grid">
          <div className="footer-block">
            <p className="footer-title">AVERON ENERTEK</p>
            <p className="footer-copy">
              Oil field and natural gas equipment and spare parts trading with supply
              support for pipes, fittings, specialised castings, and industrial client requirements.
            </p>
          </div>

          <div className="footer-block">
            <p className="footer-title">Quick Links</p>
            <div className="footer-links">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-block">
            <p className="footer-title">Contact</p>
            <div className="footer-links">
              <a className="footer-link" href="mailto:hello@averonenertek.com">
                hello@averonenertek.com
              </a>
              <a className="footer-link" href="tel:+971500000000">
                +971 50 000 0000
              </a>
              <span className="footer-note">Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <p className="footer-copy">(c) 2026 AVERON ENERTEK. All rights reserved.</p>
          <span className="footer-mini">Built to market trust and strengthen customer confidence</span>
        </div>
      </div>
    </footer>
  );
}
