
import { useRef, useState } from "react";
import submitLead from "./submitData.js";

import {
  Award,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
} from "lucide-react";

import ServiceModalFrame from "./ServiceModalFrame.jsx";
import ServiceQuickForm from "./ServiceQuickForm.jsx";
import ServiceApplicationSuccess from "./ServiceApplicationSuccess.jsx";

import { getServiceDetails } from "../data/serviceDetails.js";
import { createLeadReference } from "../utils/leadReference.js";

export default function ServiceDetailsModal({ service, onClose }) {
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submittingRef = useRef(false);
  const details = getServiceDetails(service);

  const submit = async (data) => {
    if (submittingRef.current) return;

    submittingRef.current = true;
    setLoading(true);
    setError("");

    const reference = createLeadReference();

    try {
      const result = await submitLead({
        name: data.name,
        phone: data.mobile,
        service: data.service,
        leadId: reference,
        spreadsheetId: "1bDkl2CKBzHsuEoS0q98hGYFVDHXzgdNLU8bJGzdD_MU",
      });

      console.log("Lead submitted successfully:", result);

      setLead({
        ...data,
        reference,
        leadId: reference,
      });

    } catch (err) {
      console.error("Submission failed:", err);
      setError(err.message || "Submission failed. Please try again.");

    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <ServiceModalFrame
      className="service-modal-details"
      onClose={onClose}
    >
      {lead ? (
        <ServiceApplicationSuccess
          lead={lead}
          onClose={onClose}
        />
      ) : (
        <>
          <header className="service-detail-header">
            <span>
              <Award size={17} />
              OFFICIAL CA COMPLIANCE SERVICE
            </span>

            <h2 id="service-modal-title">{service.name}</h2>

            <div>
              <span>
                <Clock3 size={17} />
                Turnaround: {service.time}
              </span>
            </div>
          </header>

          <div className="service-detail-body">
            <p className="service-detail-lead">
              {details.description}
            </p>

            <div className="service-detail-guarantee">
              <ShieldCheck size={21} />
              <strong>
                NO ADVANCE PAYMENT REQUIRED — Pay only after verifying your work
                proof!
              </strong>
            </div>

            <section className="service-detail-section">
              <h3>
                <FileText size={18} />
                DOCUMENTS REQUIRED CHECKLIST
              </h3>

              <ul className="service-documents">
                {details.documents.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="service-detail-section">
              <h3>KEY BENEFITS</h3>

              <ul className="service-benefits">
                {details.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="service-process">
              <h3>SIMPLE 4-STEP PROCESS:</h3>

              <ol>
                {details.steps.map((item, index) => (
                  <li key={item}>
                    <b>{index + 1}</b>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <ServiceQuickForm
              service={service}
              onSubmit={submit}
              loading={loading}
              error={error}
            />
          </div>
        </>
      )}
    </ServiceModalFrame>
  );
}
