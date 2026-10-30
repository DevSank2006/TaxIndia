import { useState,useRef } from "react";
import { ArrowRight, ShieldCheck,LoaderCircle} from "lucide-react";
import ServiceModalFrame from "./ServiceModalFrame.jsx";
import ServiceApplicationSuccess from "./ServiceApplicationSuccess.jsx";
import submitData from "./submitData";
import { services } from "../data/services.js";
import { createLeadReference } from "../utils/leadReference.js";

export default  function ServiceApplyModal({ service, onClose }) {
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(false);
  const submittingRef = useRef(false);
const [error, setError] = useState("");
  const [fields, setFields] = useState({
    name: "",
    mobile: "",
    service: service.name,
  });
  const change = (event) =>
    setFields((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
 const submit = async (event) => {
  event.preventDefault();

  if (submittingRef.current) return;

  submittingRef.current = true;
  setLoading(true);
  setError("");

  try {
    const findService = services.find(
      (item) => item.name === fields.service
    );

    const price = findService?.price ?? service.price;
    const reference = createLeadReference();

    const leadData = {
      name: fields.name.trim(),
      phone: fields.mobile.trim(),
      service: fields.service,
      price,
      spreadsheetId: "1bDkl2CKBzHsuEoS0q98hGYFVDHXzgdNLU8bJGzdD_MU",
      leadId: reference,
    };

    const result = await submitData(leadData);

    if (!result.success) {
      throw new Error(result.message || "Submission failed.");
    }

    setLead({
  ...fields,
  name: fields.name.trim(),
  mobile: fields.mobile.trim(),
  price,
  leadId: reference,
});

  } catch (error) {
    console.error("Lead submission failed:", error);
    setError(
      error.message || "Unable to submit your request. Please try again."
    );

  } finally {
    submittingRef.current = false;
    setLoading(false);
  }
};




  return (
    <ServiceModalFrame className="service-modal-apply" onClose={onClose}>
      {lead ? (
        <ServiceApplicationSuccess lead={lead} onClose={onClose} />
      ) : (
        <>
          <span className="service-modal-eyebrow">
            NO ADVANCE MONEY - FIRST WORK THEN PAYMENT
          </span>
          <h2 id="service-modal-title">Apply for {fields.service}</h2>
          <p className="service-modal-description">
            Enter your details for instant CA consultation &amp; document
            checklist.
          </p>
          <form className="service-apply-form" onSubmit={submit}>
            <label>
              FULL NAME
              <input
                name="name"
                value={fields.name}
                onChange={change}
                placeholder="e.g. Ankit Sharma"
                autoComplete="name"
                required
              />
            </label>
            <label>
              MOBILE NUMBER (WHATSAPP) *
              <span className="service-mobile-field">
                <b>+91</b>
                <input
                  name="mobile"
                  value={fields.mobile}
                  onChange={change}
                  placeholder="9876543210"
                  autoComplete="tel-national"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                />
              </span>
            </label>
            <label>
              SELECTED SERVICE
              <select name="service" value={fields.service} onChange={change}>
                {services.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name} 
                  </option>
                ))}
                <option value="Savings / Current Account Opening">
                  Savings / Current Account Opening
                </option>
                
              </select>
            </label>
           
<button
  className="service-modal-primary"
  type="submit"
  disabled={loading}
>
  {loading ? (
    <>
      <LoaderCircle className="animate-spin" size={18} />
      <span>Submitting...</span>
    </>
  ) : (
    <>
      <span>Submit &amp; Call Me Back</span>
      <ArrowRight size={16} />
    </>
  )}
</button>

          </form>
          <div className="service-form-privacy">
            <ShieldCheck size={17} /> Zero advance payment · Guaranteed privacy
          </div>
        </>
      )}
    </ServiceModalFrame>
  );
}
