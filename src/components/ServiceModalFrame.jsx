import { X } from "lucide-react";

export default function ServiceModalFrame({
  children,
  className = "",
  onClose,
  labelledBy = "service-modal-title",
}) {
  return (
    <div
      className="service-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className={`service-modal ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        <button
          className="service-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        {children}
      </section>
    </div>
  );
}
