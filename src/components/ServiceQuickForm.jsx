import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp.js";

export default function ServiceQuickForm({ service, onSubmit }) {
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSubmit({
      name: data.get("name").trim(),
      mobile: data.get("mobile").trim(),
      service: service.name,
    });
  };
  return (
    <form className="service-quick-form" onSubmit={submit}>
      <h3>APPLY FOR {service.name.toUpperCase()} NOW:</h3>
      <div className="service-quick-fields">
        <input
          name="name"
          placeholder="Full Name"
          aria-label="Full Name"
          required
        />
        <input
          name="mobile"
          placeholder="Mobile Number *"
          aria-label="Mobile Number"
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          title="Enter a valid 10-digit Indian mobile number"
          required
        />
      </div>
      <div className="service-quick-actions">
        <button type="submit">
          Submit &amp; Get Call <ArrowRight size={17} />
        </button>
        <a
          href={whatsappLink(
            `Hello TAX INDIA, I want to apply for ${service.name} (Offer Price ₹${service.price}). Please share process and required documents.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>
    </form>
  );
}
