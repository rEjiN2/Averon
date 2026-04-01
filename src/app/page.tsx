import type { Metadata } from "next";
import { GearHero } from "./_components/gear-hero";

export const metadata: Metadata = {
  title: "Home",
};

const heroStats = [
  {
    label: "Supply Focus",
    value: "Onshore",
    unit: "Offshore",
  },
  {
    label: "Client Base",
    value: "Marine",
    unit: "Industrial",
  },
];

const verticals = [
  {
    name: "Oil & Gas",
    title: "Oil field and natural gas equipment and spare parts trading support",
    copy: "Supply coverage for oil field and natural gas equipment, spare parts, and specialised items used in demanding operating environments.",
  },
  {
    name: "Marine",
    title: "Pipes, fittings, and specialised castings for marine operations",
    copy: "Trusted supply support for vessel maintenance, marine systems, and equipment requirements where durability and fit are essential.",
  },
  {
    name: "Industrial And Offshore",
    title: "Trading support for industrial and offshore equipment requirements",
    copy: "Serving industrial and offshore clients with dependable sourcing of pipes, fittings, castings, and related spare parts.",
  },
];

const advantages = [
  {
    title: "Pipes And Fittings Supply",
    copy: "Supplier of pipes, fittings, and related components aligned to project needs, replacement cycles, and operating demands.",
  },
  {
    title: "Specialised Castings",
    copy: "Specialised castings sourced for onshore, marine, and offshore industry requirements where quality and consistency build customer confidence.",
  },
  {
    title: "Customer Confidence",
    copy: "A marketing-focused digital presence built to communicate trust, capability, and reliable support to industrial, marine, and offshore clients.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="container hero-grid">
          <div className="hero-intro reveal-up">
            <div className="pulse-badge">
              <span className="pulse-dot" />
              <span>Onshore, Marine And Offshore Supply</span>
            </div>

            <h1 className="hero-title home-title">
              Trusted trading support for <span>industrial, marine and offshore clients.</span>
            </h1>

            <p className="lead home-lead">
              AVERON ENERTEK deals in oil field and natural gas equipment and spare
              parts trading, with supply support for pipes, fittings, and specialised
              castings serving industrial, marine, onshore, and offshore clients.
            </p>

            <div className="hero-stats">
              {heroStats.map((stat, index) => (
                <article key={stat.label} className={`hero-stat reveal-up delay-${index + 1}`}>
                  <p>{stat.label}</p>
                  <strong>
                    {stat.value}
                    <span>{stat.unit}</span>
                  </strong>
                </article>
              ))}
            </div>
          </div>

          <GearHero />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="eyebrow">Industry Verticals</span>
            <h2 className="section-title">
              Solutions aligned to <span>real operating sectors</span>
            </h2>
          </div>

          <div className="industry-grid">
            <article className="industry-feature reveal-up">
              <div className="industry-photo">
                <div className="industry-overlay">
                  <span className="card-kicker">Sector</span>
                  <h3 className="card-title">{verticals[0].name}</h3>
                  <p className="card-copy">{verticals[0].copy}</p>
                </div>
              </div>
            </article>

            <article className="industry-card industry-card-solid reveal-up delay-1">
              <span className="card-kicker">{verticals[1].name}</span>
              <h3 className="card-title">{verticals[1].title}</h3>
              <p className="card-copy">{verticals[1].copy}</p>
            </article>

            <article className="industry-card industry-card-wide reveal-up delay-2">
              <div>
                <span className="card-kicker">{verticals[2].name}</span>
                <h3 className="card-title">{verticals[2].title}</h3>
                <p className="card-copy">{verticals[2].copy}</p>
              </div>
              <div className="coil-visual" aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container">
          <div className="section-header section-centered reveal-up">
            <span className="eyebrow">Core Capabilities</span>
            <h2 className="section-title">
              Built to strengthen <span>customer confidence</span>
            </h2>
          </div>

          <div className="performance-grid">
            {advantages.map((item, index) => (
              <article key={item.title} className={`performance-item reveal-up delay-${index + 1}`}>
                <span className="performance-index">0{index + 1}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="glass-showcase reveal-up delay-2">
            <div className="glass-copy">
              <span className="card-kicker">Supply Overview</span>
              <h3 className="card-title">
                Reliable trading support for pipes, fittings, castings, and spare parts
              </h3>
              <p className="card-copy">
                Our business supports customers looking for dependable supply of oil
                field and natural gas equipment, spare parts, pipes, fittings, and
                specialised castings with a strong focus on reliability and customer confidence.
              </p>
            </div>

            <div className="glass-image-card" aria-hidden="true">
              <div className="glass-image glass-image-primary" />
              <div className="glass-float glass-image-secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel reveal-up">
            <div>
              <span className="card-kicker cta-kicker">Ready To Support</span>
              <h2 className="cta-title">Need trusted supply support for your next requirement?</h2>
              <p className="cta-copy">
                Connect with our team for oil field and natural gas equipment, spare
                parts trading, pipes, fittings, specialised castings, and urgent sourcing enquiries.
              </p>
            </div>

            <div className="cta-actions">
              <a href="mailto:hello@averonenertek.com" className="cta-button">
                Submit RFQ
              </a>
              <a href="tel:+971500000000" className="cta-link">
                Technical Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
