import BankingCard from "./BankingCard.jsx";
import BankingAssistanceCard from "./BankingAssistanceCard.jsx";
const options = [
  {
    tag: "INSTANT DIGITAL OPENING",
    title: "Savings Account Opening",
    text: "Instant digital savings account opening with zero balance options & attractive interest rates.",
    points: [
      "Zero balance or minimum balance options",
      "Free Virtual Debit Card + Platinum Physical Card",
      "High savings interest up to 7.25% p.a.",
      "Doorstep KYC or 5-minute Video KYC",
    ],
    partners: [
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra",
      "IndusInd Bank",
    ],
  },
  {
    tag: "PREFERRED FOR GST HOLDERS",
    title: "Current Account for Business",
    text: "Dedicated business current account linked with GST & Tax India portal for seamless transactions.",
    points: [
      "Free unlimited IMPS / NEFT / RTGS transactions",
      "Free Soundbox & POS Machine integration",
      "Customized overdraft (OD) & credit line",
      "Direct integration with GST return filing",
    ],
    partners: [
      "ICICI Bank",
      "HDFC Bank",
      "Axis Bank",
      "State Bank of India",
      "Yes Bank",
    ],
  },
  {
    tag: "COLLATERAL FREE UP TO ₹50 LAKHS",
    title: "Business & Unsecured Loans",
    text: "Quick collateral-free business loan up to ₹50 Lakhs with minimum documentation.",
    points: [
      "Flexible tenure from 12 to 60 months",
      "Attractive interest rates starting @ 1.25% per month",
      "Disposal within 48 hours directly into bank",
      "No property collateral needed for MSME registered businesses",
    ],
    partners: [
      "Bajaj Finance",
      "Tata Capital",
      "HDFC Bank",
      "L&T Finance",
      "IIFL",
    ],
  },
  {
    tag: "ZERO MDR REGIME OPTIONS",
    title: "Business Banking & Merchant POS",
    text: "QR Code, POS Card Swipe Machines, and Payment Gateway for retail shops & online stores.",
    points: [
      "Same-day instant payout to your bank account",
      "Supports Credit Card, Debit Card, UPI & EMI payments",
      "Smart audio notification speaker for store counter",
      "Integrated invoice billing software support",
    ],
    partners: [
      "Paytm Payments",
      "PhonePe Business",
      "Razorpay",
      "Pine Labs",
      "BharatPe",
    ],
  },
];
export default function Banking({ onApply }) {
  const apply = (name) => {
    onApply(name);
  };
  return (
    <section className="section banking-section" id="banking">
      <div className="container">
        <div className="section-heading banking-heading">
          <span className="eyebrow">EXECUTIVE BANKING PARTNERSHIPS</span>
          <h2>Banking &amp; Credit Solutions</h2>
          <p className="banking-tagline">
            “No need to visit the bank — we handle everything”
          </p>
          <p className="banking-intro">
            Get instant Current Accounts, Savings Accounts, Business Overdrafts
            &amp; Mudra Loans linked with your GST registration without standing
            in bank queues.
          </p>
        </div>
        <div className="banking-grid">
          {options.map((item, i) => (
            <BankingCard
              key={item.title}
              item={item}
              index={i}
              onApply={apply}
            />
          ))}
        </div>
        <BankingAssistanceCard />
      </div>
    </section>
  );
}
