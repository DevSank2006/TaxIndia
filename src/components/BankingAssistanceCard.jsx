import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function BankingAssistanceCard() {
  return (
    <aside className="banking-assistance">
      <span className="banking-assistance-icon">
        <ShieldCheck size={31} />
      </span>
      <div>
        <h3>Doorstep Executive &amp; Video KYC Available</h3>
        <p>
          Our CA team coordinates directly with bank managers to complete your
          account opening or loan disbursal right from your home or shop.
        </p>
      </div>
      <a href="tel:+917814006162">
        Call Banking Desk (+91 7814006162) <ArrowUpRight size={17} />
      </a>
    </aside>
  );
}
