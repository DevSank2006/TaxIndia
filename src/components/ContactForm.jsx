import { useEffect, useState } from "react";
import { CheckCircle2, LockKeyhole,LoaderCircle } from "lucide-react";
import submitLead from "./submitData.js";
import { services } from "../data/services.js";
import { states } from "../data/content.js";
import { createLeadReference } from "../utils/leadReference.js";
import ServiceApplicationSuccess from "./ServiceApplicationSuccess.jsx";
export default function ContactForm({ selectedService }) {
  const [lead, setLead] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    service: selectedService || services[0].name,
    state: "Delhi",
    city: "",
    message: "",
  });
  useEffect(() => {
    if (selectedService)
      setValues((current) => ({ ...current, service: selectedService }));
  }, [selectedService]);
  const change = (event) =>
    setValues((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const submit = async (event) => {
event.preventDefault();
    setIsLoading(true)
  const leadData = {
    ...values,
    name: values.name.trim(),
    mobile: values.mobile.trim(),
    reference: createLeadReference(),
     spreadsheetId: "1bDkl2CKBzHsuEoS0q98hGYFVDHXzgdNLU8bJGzdD_MU",
  };
    
    
    try {
    await submitLead(leadData);

    setLead(leadData);
  } catch (error) {
    console.error("Google Sheets submission failed:", error);
    alert("Unable to submit your application. Please try again.");
  } finally {
    setIsLoading(false);
  }
  };
   

  if (lead)
    return (
      <div className="contact-form contact-form-success">
        <ServiceApplicationSuccess lead={lead} onClose={() => setLead(null)} />
      </div>
    );
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-title">
        <h3>Get Free CA Consultation &amp; Quote</h3>
        <p>
          Please provide basic details so our executive can reach you with exact
          document requirements.
        </p>
      </div>
      <div className="form-row">
        <label>
          FULL NAME *
          <input
            name="name"
            value={values.name}
            onChange={change}
            placeholder="e.g. Vikram Sharma"
            autoComplete="name"
            required
          />
        </label>
        <label>
          MOBILE NUMBER (WHATSAPP) *
          <div className="phone-input">
            <span>+91</span>
            <input
              name="mobile"
              value={values.mobile}
              onChange={change}
              placeholder="9876543210"
              autoComplete="tel-national"
              inputMode="numeric"
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number"
              required
            />
          </div>
        </label>
      </div>
      <div className="form-row">
        <label>
          SERVICE INTERESTED IN *
          <select name="service" value={values.service} onChange={change}>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} — ₹{service.price.toLocaleString("en-IN")}
              </option>
            ))}
            <option>Savings Account Opening</option>
            <option>Current Account for Business</option>
            <option>Business &amp; Unsecured Loans</option>
          </select>
        </label>
        <label>
          YOUR STATE
          <select name="state" value={values.state} onChange={change}>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          CITY / TOWN (OPTIONAL)
          <input
            name="city"
            value={values.city}
            onChange={change}
            placeholder="e.g. Mumbai / Jaipur"
          />
        </label>
        <label>
          ADDITIONAL MESSAGE / REMARK
          <input
            name="message"
            value={values.message}
            onChange={change}
            placeholder="e.g. Need GST for Flipkart"
          />
        </label>
      </div>
     <button
  type="submit"
  className="button button-lime contact-submit"
  disabled={isLoading}
>
  {isLoading ? (
    <>
      <LoaderCircle size={19} className="loading-spinner" />
      SUBMITTING...
    </>
  ) : (
    <>
      SUBMIT APPLICATION NOW <CheckCircle2 size={19} />
    </>
  )}
</button>
      <div className="contact-privacy">
        <LockKeyhole size={14} /> 100% Guaranteed Confidentiality · No Spam
        Policy · First Work Then Payment
      </div>
    </form>
  );
}
