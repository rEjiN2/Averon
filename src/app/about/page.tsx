import type { Metadata } from "next";
import Image from "next/image";
import  About2 from "../../../public/service.jpg";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    kicker: "Mission",
    title: "Build customer confidence through dependable industrial supply support",
    copy: "AVERON ENERTEK is focused on marketing its capability clearly and earning customer trust through dependable trading support for industrial, marine, and offshore clients.",
  },
  {
    kicker: "Approach",
    title: "Supply the right equipment and spare parts for demanding sectors",
    copy: "We support customers with oil field and natural gas equipment, spare parts, pipes, fittings, and specialised castings suited to real operating requirements.",
  },
  {
    kicker: "Standard",
    title: "Operate with clarity, reliability, and commercial confidence",
    copy: "From first enquiry to final delivery, our emphasis is on transparent communication, dependable sourcing, and long-term business confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-grid">
          <div className="reveal-up">
            <span className="eyebrow">About Us</span>
            <h1 className="page-title">
              A trading company built around <span>trust and dependable supply</span>
            </h1>
            <p className="page-lead">
              AVERON ENERTEK serves industrial, marine, and offshore clients with a
              business focus on oil field and natural gas equipment and spare parts
              trading, including pipes, fittings, and specialised castings.
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
            <span className="card-kicker">Company Snapshot</span>
            <p className="card-copy">
              We position the company as a dependable supplier for onshore, marine,
              and offshore industry requirements, supporting both urgent and planned
              procurement needs.
            </p>
            <p className="card-copy">
              The website is designed to market the company professionally, communicate
              capability clearly, and strengthen customer confidence from the first visit.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title">
              Supply capability backed by <span>clear values</span>
            </h2>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <article key={value.title} className={`card reveal-up delay-${index + 1}`}>
                <span className="card-kicker">{value.kicker}</span>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-copy">{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
