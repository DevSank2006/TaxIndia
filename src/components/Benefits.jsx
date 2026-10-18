import {
  BadgeIndianRupee,
  Clock3,
  DollarSign,
  UserRoundCheck,
  LockKeyhole,
  ShieldCheck ,
  Lock ,
  Zap
} from "lucide-react";
const items = [
  {
    icon: DollarSign ,
    title: "No Advance Payment",
    text: "First work completed, then you pay. Zero financial risk!",
  },
  {
    icon: Zap,
    title: "Fastest Turnaround",
    text: "GST & Registrations delivered in 24 to 48 Hours.",
  },
  {
    icon: ShieldCheck,
    title: "Senior CA Support",
    text: "Every file handled & verified by experienced CAs.",
  },
  {
    icon: Lock,
    title: "100% Confidential",
    text: "Encrypted document storage & strict privacy guarantee.",
  },
];
export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container benefit-grid !grid !grid-cols-1 !w-full !gap-y-5 !px-4 md:!grid-cols-2 lg:!grid-cols-4">
        {items.map(({ icon: Icon, title, text }, i) => (
          <article className="benefit-item" key={title}>
            <span className={`benefit-icon benefit-icon-${i}`}>
              <Icon size={21} />
            </span>
            <div>
              <h3 className="!text-[14px] !font-bold">{title}</h3>
              <p className="!text-[12px]">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
