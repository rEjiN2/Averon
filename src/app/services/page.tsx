import type { Metadata } from "next";
import Image from "next/image";
import Service from "../../../public/service1.jpg";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    title: "Marine and Oil & Gas Spare Parts",
    copy: "Supply support for marine and oil and gas spare parts across active industrial, offshore, and vessel-facing operations.",
  },
  {
    title: "Precision machined and casted components",
    copy: "Sourcing support for precision machined and casted components where fit, durability, and consistency are essential.",
  },
  {
    title: "Custom made Pressure part components",
    copy: "Custom-made pressure part components supplied to match project specifications, operating demands, and replacement requirements.",
  },
  // {
  //   title: "Oil field and natural gas equipment trading",
  //   copy: "Supply support for oil field and natural gas equipment and spare parts across active industrial and energy-facing operations.",
  // },
  {
    title: "Pipes and fittings supply",
    copy: "Supplier of pipes and fittings aligned to project requirements, replacement schedules, and operational continuity.",
  },
  {
    title: "Specialised castings",
    copy: "Sourcing support for specialised castings used in onshore, marine, and offshore industry applications.",
  },
  {
    title: "Onshore industry supply support",
    copy: "Commercial supply assistance for industrial clients looking for reliable equipment, parts, and component sourcing.",
  },
  // {
  //   title: "Marine industry support",
  //   copy: "Serving marine customers with dependable sourcing for vessel-related equipment, maintenance parts, and specialised components.",
  // },
  // {
  //   title: "Offshore client support",
  //   copy: "Trading support for offshore operations where quality, timing, and supplier confidence are critical.",
  // },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-grid">
          <div className="reveal-up">
            <span className="eyebrow">Services</span>
            <h1 className="page-title">
              Trading solutions across <span>industrial, marine and offshore sectors</span>
            </h1>
            <p className="page-lead">
              Our service offering is focused on supplying the equipment, spare parts,
              pipes, fittings, and specialised castings customers need to keep their
              operations supported with confidence.
            </p>
          </div>

          <aside className="panel reveal-up delay-1">
            <Image
              src={Service}
              alt="Team of industrial supply professionals"
              className="panel-image"
              style={{borderRadius : "20px", marginBottom:"1rem"}}
              sizes="(max-width: 960px) 100vw, 42vw"
            />
            <span className="card-kicker">Service Focus</span>
            <p className="card-copy">
              Every service category is presented to strengthen customer confidence and
              communicate where AVERON ENERTEK can support real procurement requirements.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service, index) => (
              <article key={service.title} className={`card reveal-up delay-${(index % 3) + 1}`}>
                <h2 className="card-title">{service.title}</h2>
                <p className="card-copy">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
