import type { Metadata } from "next";
import Image from "next/image";
import  About2 from "../../../public/portfolio.jpg";

export const metadata: Metadata = {
  title: "Portfolio",
};

const portfolioItems = [
  {
    kicker: "Marine",
    title: "Pipes, fittings, and spare parts for marine systems",
    copy: "Supply support for vessel-related maintenance, equipment continuity, and component replacement across marine operating environments.",
  },
  {
    kicker: "Onshore",
    title: "Industrial equipment and spare parts for onshore applications",
    copy: "Trading support for industrial customers requiring dependable sourcing of equipment, pipes, fittings, and specialised components.",
  },
  {
    kicker: "Oil & Gas",
    title: "Oil field and natural gas equipment and spare parts trading",
    copy: "Serving the oil and gas segment with product sourcing aligned to operating requirements, maintenance needs, and customer confidence.",
  },
  {
    kicker: "Castings",
    title: "Specialised castings for demanding industrial environments",
    copy: "Supply support for specialised castings required across onshore, marine, and offshore industry applications.",
  },
  {
    kicker: "Offshore",
    title: "Offshore supply support built around reliability and response",
    copy: "Supporting offshore clients with dependable sourcing where quality, timing, and supplier confidence directly affect operations.",
  },
  {
    kicker: "Logistics",
    title: "Commercially responsive sourcing and delivery support",
    copy: "Helping customers secure urgent and planned supply requirements with clear communication and dependable turnaround.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-grid">
          <div className="reveal-up">
            <span className="eyebrow">Portfolio</span>
            <h1 className="page-title">
              A supply portfolio built around <span>customer confidence</span>
            </h1>
            <p className="page-lead">
              Our portfolio showcases the sectors and product categories AVERON ENERTEK
              is positioned to serve across onshore, marine, offshore, and industrial markets.
            </p>
          </div>

          <aside className="panel reveal-up delay-1">
           <Image
              src={About2}
              alt="Team of industrial supply professionals"
              className="panel-image"
              style={{borderRadius : "20px", marginBottom:"1rem"}}
              sizes="(max-width: 960px) 100vw, 42vw"
            />
            <span className="card-kicker">What We Deliver</span>
            <p className="card-copy">
              Oil field and natural gas equipment, pipes, fittings, specialised castings,
              and spare parts supplied with a strong focus on trust, fit, and reliable support.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {portfolioItems.map((item, index) => (
              <article key={item.title} className={`card reveal-up delay-${(index % 3) + 1}`}>
                <span className="card-kicker">{item.kicker}</span>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel reveal-up">
            <div>
              <span className="card-kicker cta-kicker">Portfolio Enquiry</span>
              <h2 className="cta-title">Need a specific part or trading support scope?</h2>
              <p className="cta-copy">
                Share your equipment requirement, spare part request, or casting and
                fitting enquiry and our team can align the right supply support.
              </p>
            </div>

            <div className="cta-actions">
              <a href="mailto:hello@averonenertek.com" className="cta-button">
                Send Requirement
              </a>
              <a href="/contact" className="cta-link">
                Contact Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
