import {
  ArrowRight,
  CircleCheck,
  Wallet,
  BriefcaseBusiness,
  Banknote,
  QrCode,
} from "lucide-react";
// Keep the illustrations aligned with the service represented by each card.
const icons = [Wallet, BriefcaseBusiness, Banknote, QrCode];
export default function BankingCard({ item, index, onApply }) {
  const Icon = icons[index];
  return (
    <article className="banking-card group">
      <div className="banking-card-content">
        <div className="banking-card-head">
          <span className="bank-icon">
            <Icon size={24} strokeWidth={2} />
          </span>
          <span className="bank-eyebrow">{item.tag}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <ul>
          {item.points.map((point) => (
            <li key={point}>
              <CircleCheck size={16} strokeWidth={2} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bank-partners">
          <small>Partner Banks &amp; Institutions:</small>
          <div>
            {item.partners.map((bank) => (
              <span key={bank}>{bank}</span>
            ))}
          </div>
        </div>
      </div>
      <button className="bank-apply" onClick={() => onApply(item.title)}>
        <span>Apply for {item.title}</span>
        <ArrowRight size={16} />
      </button>
    </article>
  );
}
