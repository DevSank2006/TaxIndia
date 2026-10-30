import { Check, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp.js";
import submitData from "./submitData.js"
import {useEffect} from "react"

export default function ServiceApplicationSuccess({ lead, onClose }) {
    



  return (
    <div className="service-success-view">
      <span className="service-success-icon">
        <Check size={34} />
      </span>
      <span className="service-modal-eyebrow">
        APPLICATION SUBMITTED SUCCESSFULLY
      </span>
      <h2 id="service-modal-title">Thank You, {lead.name}!</h2>
      <p>
        Your request for <strong>{lead.service}</strong> is ready for follow-up
        from our Senior Chartered Accountant team.
      </p>
      <dl className="service-lead-reference">
        <div>
          <dt>Lead Reference ID:</dt>
          <dd>{lead.leadId}</dd>
        </div>
        <div>
          <dt>Selected Service:</dt>
          <dd>{lead.service}</dd>
        </div>
        <div>
          <dt>Contact Phone:</dt>
          <dd>+91 {lead.mobile}</dd>
        </div>
      </dl>
      <a
        className="service-success-whatsapp"
        href={whatsappLink(
          `Hello TAX INDIA, I have submitted an online application for ${lead.service}. ` +
    `My Lead Reference ID is ${lead.reference}. Name: ${lead.name}, Phone: ${lead.mobile}. ` +
    `Please initiate process.`,
        )}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} /> CHAT ON WHATSAPP NOW ({lead.leadId})
      </a>
      <a className="service-success-call" href="tel:+917814006162">
        <Phone size={17} /> Call Senior CA (+91 7814006162)
      </a>
      <div className="service-success-promise">
        <ShieldCheck size={18} /> Remember: “No Advance Payment - First Work
        Then Payment”
      </div>
      <button className="service-success-done" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
