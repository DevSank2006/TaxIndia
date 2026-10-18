import { Headset, Zap, LockKeyhole, Tag, DollarSign } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
const reasons = [
  [
    Headset,
    "Senior Expert CA Support",
    "Dedicated Chartered Accountant assigned to your file for personalized guidance and error-free tax compliance.",
    "#ff7300",
  ],
  [
    Zap,
    "Super Fast Service (24-48 Hrs)",
    "Fastest turnaround time in India for GST, MSME, FSSAI, and Company Registrations with real-time status updates.",
    "#ffa600",
  ],
  [
    LockKeyhole,
    "100% Secure & Confidential",
    "Bank-grade 256-bit encryption protects your personal PAN, Aadhaar, and business financial documents.",
    "#3688ff",
  ],
  [
    Tag,
    "Lowest & Transparent Price",
    "No hidden charges! Get government-approved filings starting at just ₹199 with full receipt transparency.",
    "#00bf8b",
  ],
];
export default function WhyUs() {
  return (
    <section className="section why-section " id="why-us">
      <div className="container">
        <SectionHeading
          eyebrow="INDIA'S MOST TRUSTED CA COMPANY"
          title="Why 12.5+ Lakh Customers Choose TAX INDIA"
          description={
            <>
              We built India's first client-friendly tax platform centered on{" "}
              <strong>Trust, Speed, and Zero Risk.</strong>
            </>
          }
          light
        />
        <div className="why-values">
          {reasons.map(([Icon, title, text, color]) => (
            <article key={title}>
              <span style={{ color }}>
                <Icon size={34} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="trust-promise">
          <div className="promise-content">
            <div className="promise-mark">
              <DollarSign size={32} />
            </div>
            <div className="promise-copy">
              <b>OUR TRUST COMMITMENT</b>
              <h3>“No Advance Payment — First Work Then Payment”</h3>
              <p>
                We prepare your GST or Tax file first, show you the ARN or draft
                filing proof, and accept payment only after you are 100%
                satisfied.
              </p>
            </div>
          </div>
          <a href="tel:+917814006162">Talk to CA (+91 7814006162)</a>
        </div>
      </div>
    </section>
  );
}
