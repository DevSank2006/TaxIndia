import ServiceDetailsModal from "./ServiceDetailsModal.jsx";
import ServiceApplyModal from "./ServiceApplyModal.jsx";

export default function ServiceActionModal({ service, mode, onClose }) {
  return mode === "details" ? (
    <ServiceDetailsModal
      key={`details-${service.name}`}
      service={service}
      onClose={onClose}
    />
  ) : (
    <ServiceApplyModal
      key={`apply-${service.name}`}
      service={service}
      onClose={onClose}
    />
  );
}
