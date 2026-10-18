import {
  ArrowUpRight,
  Clock3,
  ReceiptText,
  FileText,
  Calculator,
  Landmark,
  BadgeCheck,
  CreditCard,
  Shield,
  KeyRound,
  Users,
  Rocket,
  Building2,
  Globe2,
  IndianRupee,
} from "lucide-react";
const icons = {
  receipt: ReceiptText,
  file: FileText,
  calculator: Calculator,
  landmark: Landmark,
  badge: BadgeCheck,
  "credit-card": CreditCard,
  shield: Shield,
  key: KeyRound,
  users: Users,
  rocket: Rocket,
  building: Building2,
  globe: Globe2,
  "indian-rupee": IndianRupee,
};

export default function ServiceCard({ service, onDetails, onApply }) {
  const Icon = icons[service.icon] || FileText;
  return (
    <article className="service-card  ">
      {service.label && <span className="service-label ">{service.label}</span>}
      <div className="service-card-top">
        <span className="service-icon">
          <Icon size={21} />
        </span>
        <span className="service-price">
          <b>₹ {service.price.toLocaleString("en-IN")}</b>
          <del>₹{service.oldPrice.toLocaleString("en-IN")}</del>
        </span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>

      <div className="service-time">
        <Clock3 size={14} />
        <span>Typical turnaround</span>
        <b>{service.time}</b>
      </div>
      <div className="service-card-bottom">
        <button className="service-details" onClick={() => onDetails(service)}>
          Details
        </button>
        <button className="service-apply" onClick={() => onApply(service)}>
          Apply Now <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}
