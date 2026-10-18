import { ArrowRight, LockKeyhole } from "lucide-react";
import { services } from "../data/services.js";
import Thankyou from "./Thankyou.jsx"
import { useState } from "react";
import submitData from "./submitData.js"
import { LoaderCircle } from "lucide-react";

export default function LeadForm({compact=false,isSubmitted,setIsSubmitted }) {
   
   const[serviceData,setServiceData]=useState({})
   const [isLoading, setIsLoading] = useState(false);
   const[supportPhone,setSupportPhone]=useState("917814006162")

    if (isSubmitted) {
    return <Thankyou data={serviceData} setIsSubmitted={setIsSubmitted}  supportPhone={supportPhone}/>
    ;
  }
  return (
    <form
      className={`lead-form ${compact ? "lead-form-compact" : ""}`}
      onSubmit={async (e) => {
        e.preventDefault();
        if(isLoading) return;
     const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const randomTxi=Math.floor(10000 + Math.random() * 90000);
    
       const leadData={
        name:data.fullName,
        service:data.service,
        leadId:`TXI-${randomTxi}`,
        phone:data.phone
       } 

      try {
         
          setIsLoading(true);
    await submitData(leadData);

    setServiceData(leadData);
    setIsSubmitted(true);
  } catch (error) {
    console.error("Google Sheets submission failed:", error);
    alert("Unable to submit your request. Please try again.");
  }finally{
     setIsLoading(false);
  };
      }}
    >
      <div className="form-kicker">70% SPECIAL DISCOUNT</div>
      <h3>{compact ? "Request a quick callback" : "Fast Track Application"}</h3>
      <p>
        Enter details to get an instant CA Callback &amp; Quote. No payment
        needed upfront!
      </p>
      
<label>
  YOUR FULL NAME
  <input
    type="text"
    name="fullName"
    placeholder="e.g. Ramesh Kumar"
    required
  />
</label>

<label>
  MOBILE NUMBER (WHATSAPP) *
  <div className="phone-input">
    <span>+91</span>
   <input
  type="tel"
  name="phone"
  placeholder="9876543210"
  required
  maxLength={10}
  pattern="[0-9]{10}"
  title="Enter exactly 10 digits"
/>
  </div>
</label>

<label>
  SELECT SERVICE REQUIRED
  <select name="service" defaultValue="GST Registration">
    {services.map((s) => (
      <option key={s.name} value={s.name}>
        {s.name} (Starts ₹{s.price})
      </option>
    ))}
    <option value="Savings / Current Account Opening">
      Savings / Current Account Opening
    </option>
    <option value="Business Loan / Mudra Loan">
      Business Loan / Mudra Loan
    </option>
  </select>
</label>

     
<button
  type="submit"
  className="button button-primary form-submit"
  disabled={isLoading}
>
  {isLoading ? (
    <>
      <LoaderCircle size={17} className="animate-spin" />
      SUBMITTING...
    </>
  ) : (
    <>
      SUBMIT &amp; CALL ME BACK <ArrowRight size={17} />
    </>
  )}
</button>
      <div className="form-assurance">
        <LockKeyhole size={14} /> NO ADVANCE PAYMENT — First Work Then Payment
        &nbsp; · &nbsp; 🔒 100% Confidential &amp; Confidentiality Assured
      </div>
    </form>
  );
}
