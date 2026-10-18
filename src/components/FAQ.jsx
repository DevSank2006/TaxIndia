import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { faqs } from "../data/content.js";
export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-aside">
          <SectionHeading
            eyebrow="GOT QUESTIONS?"
            title="Frequently Asked Questions"
            description={
              "Everything you need to know about our online CA services and “No Advance Payment” policy."
            }
          />
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <article
              className={`faq-item ${active === i ? "faq-active" : ""}`}
              key={item.q}
            >
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
              >
                <span>{item.q}</span>
                <ChevronDown size={19} />
              </button>
              {active === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="faq-contact">
          <div>
            <b>Have a specific compliance question?</b>
            <p>Speak with our CA helpdesk directly on phone or WhatsApp.</p>
          </div>
          <a href="tel:+917814006162">
            <Phone size={17} /> Call +91 7814006162
          </a>
        </div>
      </div>
    </section>
  );
}
