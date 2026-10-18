import { Phone, MessageCircle, ShieldCheck, Award } from "lucide-react";
import ContactForm from "./ContactForm.jsx";
import { whatsappLink } from "../utils/whatsapp.js";
export default function Contact({ selectedService }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-sidebar">
          <span className="contact-eyebrow">
            <Award size={15} /> DIRECT SENIOR CA CONSULTATION
          </span>
          <h2>Apply Online or Call Our Senior CA Team</h2>
          <p>
            Fill out this quick 30-second form to get a guaranteed callback
            within 15 minutes. No advance payment required — pay only after work
            is completed!
          </p>
          <a href="tel:+917814006162" className="contact-method">
            <span>
              <Phone size={19} />
            </span>
            <div>
              <small>CALL SENIOR CA HELPLINE</small>
              <b>+91 7814006162</b>
            </div>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="contact-method"
          >
            <span>
              <MessageCircle size={19} />
            </span>
            <div>
              <small>INSTANT WHATSAPP SUPPORT</small>
              <b>+91 7814006162</b>
            </div>
          </a>
          <div className="contact-promise">
            <ShieldCheck size={20} />
            <span>
              <b>TAX INDIA Trust Guarantee</b>
              <small>
                We strictly follow the “No Advance Payment” rule. Your trust
                &amp; privacy are 100% protected.
              </small>
            </span>
          </div>
        </div>
        <ContactForm selectedService={selectedService} />
      </div>
    </section>
  );
}
