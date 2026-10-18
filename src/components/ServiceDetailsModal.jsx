import { useState } from "react";
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

export default function ServiceDetailsModal({ service, onClose, onApply }) {
  const [lead, setLead] = useState(null);
  const details = getServiceDetails(service);
  const submit = (data) =>
    setLead({ ...data, reference: createLeadReference() });

  return (
    <ServiceModalFrame className="service-modal-details" onClose={onClose}>
      {lead ? (
        <ServiceApplicationSuccess lead={lead} onClose={onClose} />
      ) : (
        <>
          <header className="service-detail-header">
            <span>
              <Award size={17} /> OFFICIAL CA COMPLIANCE SERVICE
            </span>
            <h2 id="service-modal-title">{service.name}</h2>
            <div>
              <b>
                Fee: ₹{service.price.toLocaleString("en-IN")}{" "}
                <del>₹{service.oldPrice.toLocaleString("en-IN")}</del>
              </b>
              <span>
                <Clock3 size={17} /> Turnaround: {service.time}
              </span>
            </div>
          </header>
          <div className="service-detail-body">
            <p className="service-detail-lead">{details.description}</p>
            <div className="service-detail-guarantee">
              <ShieldCheck size={21} />
              <strong>
                NO ADVANCE PAYMENT REQUIRED — Pay only after verifying your work
                proof!
              </strong>
            </div>
            <section className="service-detail-section">
              <h3>
                <FileText size={18} /> DOCUMENTS REQUIRED CHECKLIST
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
            <ServiceQuickForm service={service} onSubmit={submit} />
          </div>
        </>
      )}
    </ServiceModalFrame>
  );
}
