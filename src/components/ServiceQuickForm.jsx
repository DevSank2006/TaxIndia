
import { MessageCircle, ArrowRight, LoaderCircle } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp.js";

export default function ServiceQuickForm({
  service,
  onSubmit,
  loading,
  error,
}) {
  const submit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    await onSubmit({
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
          type="text"
          name="name"
          placeholder="Full Name"
          aria-label="Full Name"
          required
          disabled={loading}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number *"
          aria-label="Mobile Number"
          inputMode="numeric"
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          title="Enter a valid 10-digit Indian mobile number"
          required
          disabled={loading}
        />
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="service-quick-actions">
        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              SUBMITTING...
            </>
          ) : (
            <>
              Submit & Get Call
              <ArrowRight size={17} />
            </>
          )}
        </button>

        <a
          href={whatsappLink(
            `Hello TAX INDIA, I want to apply for ${service.name} (Offer Price ₹${service.price}). Please share process and required documents.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>
    </form>
  );
}
