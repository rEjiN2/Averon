import type { Metadata } from "next";
import Image from "next/image";
import ContactImage from "../../../public/contact.jpg";

export const metadata: Metadata = {
  title: "Contact",
};

const contactCards = [
  {
    title: "Office Email",
    copy: "Use our direct mailbox for trading enquiries, spare part requests, and product sourcing discussions.",
    action: "hello@averonenertek.com",
    href: "mailto:hello@averonenertek.com",
  },
  {
    title: "Phone",
    copy: "Ideal for urgent supply enquiries, customer follow-up, and requirement discussions with our team.",
    action: "+971 50 000 0000",
    href: "tel:+971500000000",
  },
  {
    title: "Location",
    copy: "Share your client, project, or site requirement and we can align the right product sourcing support.",
    action: "Dubai, United Arab Emirates",
    href: "#",
  },
];

const enquiryChecklist = [
  "Product category or equipment type",
  "Material grade, size, or part specification",
  // "Required quantity and delivery schedule",
  // "Project, vessel, plant, or offshore application",
];

const supplyScope = [
  "Oil field and natural gas equipment",
  "Spare parts trading for industrial operations",
  // "Pipes, fittings, and specialised castings",
  // "Support for marine, onshore, and offshore clients",
];

export default function ContactPage() {
  const [officeEmail, ...secondaryCards] = contactCards;

  return (
    <>
      <section className="section page-hero contact-page-hero">
        <div className="container page-grid">
          <div className="reveal-up">
            <span className="eyebrow">Contact</span>
            <h1 className="page-title">
              Start your enquiry with <span>AVERON ENERTEK</span>
            </h1>
            <p className="page-lead contact-intro-copy">
              Contact us for oil field and natural gas equipment, spare parts trading,
              pipes, fittings, specialised castings, and supply enquiries for industrial,
              marine, and offshore applications.
            </p>

            {/* <article className="contact-card contact-card-feature reveal-up delay-1">
              <strong>{officeEmail.title}</strong>
              <p className="contact-copy">{officeEmail.copy}</p>
              <a className="contact-link" href={officeEmail.href}>
                {officeEmail.action}
              </a>
            </article> */}
            <div className="contact-support-grid">
              <article className="panel contact-note-card reveal-up delay-2">
                <span className="card-kicker">Supply Scope</span>
                <h2 className="card-title">What we can support through our trading network</h2>
                <ul className="contact-list">
                  {supplyScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              {/* <article className="panel contact-note-card contact-note-card-accent reveal-up delay-3">
                <span className="card-kicker">Before You Send</span>
                <h2 className="card-title">Helpful details that make your enquiry faster to process</h2>
                <ul className="contact-list">
                  {enquiryChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article> */}
            </div>
          </div>

          <aside className="panel reveal-up delay-1">
            <Image
              src={ContactImage}
              alt="Team of industrial supply professionals"
              className="panel-image"
              sizes="(max-width: 960px) 100vw, 42vw"
            />
            <span className="card-kicker">Reach Out</span>
            <p className="card-copy">
              Share your product requirement, part specification, or sourcing need and
              we can continue the discussion around supply availability and commercial support.
            </p>
          </aside>
        </div>
      </section>

      <section className="section contact-detail-section">
        <div className="container contact-layout">
          <div className="contact-side-stack">
            <article className="contact-card contact-card-feature reveal-up delay-1">
              <strong>{officeEmail.title}</strong>
              <p className="contact-copy">{officeEmail.copy}</p>
              <a className="contact-link" href={officeEmail.href}>
                {officeEmail.action}
              </a>
            </article>
            {/* <div className="contact-inline-grid"> */}
              {/* <article className="contact-card contact-card-feature reveal-up delay-1">
              <strong>{officeEmail.title}</strong>
              <p className="contact-copy">{officeEmail.copy}</p>
              <a className="contact-link" href={officeEmail.href}>
                {officeEmail.action}
              </a>
            </article> */}
              {secondaryCards.map((card, index) => (
                <article key={card.title} className={`contact-card reveal-up delay-${index + 1}`}>
                  <strong>{card.title}</strong>
                  <p className="contact-copy">{card.copy}</p>
                  <a className="contact-link" href={card.href}>
                    {card.action}
                  </a>
                </article>
              ))}
            {/* </div> */}
<article className="panel contact-note-card contact-note-card-accent reveal-up delay-3">
                <span className="card-kicker">Before You Send</span>
                <h2 className="card-title">Helpful details that make your enquiry faster to process</h2>
                <ul className="contact-list">
                  {enquiryChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            
          </div>

          <form className="contact-form reveal-up delay-2">
            <div className="form-header">
              <span className="card-kicker">Send A Message</span>
              <h2 className="card-title">Tell us what you need supplied</h2>
              <p className="contact-copy">
                Use the form below for equipment enquiries, spare part requests, and
                customer communication related to industrial, marine, and offshore supply needs.
              </p>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your full name" />
              </label>

              <label className="field">
                <span>Company</span>
                <input type="text" name="company" placeholder="Company name" />
              </label>

              <label className="field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>

              <label className="field">
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="+971 ..." />
              </label>

              <label className="field field-full">
                <span>Service Needed</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="oil-gas-equipment">Oil & Gas Equipment</option>
                  <option value="pipes-fittings">Pipes & Fittings</option>
                  <option value="specialised-castings">Specialised Castings</option>
                  <option value="general-trading">General Trading Enquiry</option>
                </select>
              </label>

              <label className="field field-full">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Share your equipment requirement, part details, or supply enquiry"
                />
              </label>
            </div>

            <button type="submit" className="submit-button">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
