import { useState } from "react";
import { Bot, Send, Phone, Sparkles, UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const prompts = [
  "Is GST registration mandatory for Amazon/Flipkart sellers?",
  "Which ITR form should I file for freelancing income?",
  "What documents are needed for FSSAI Food License?",
  "How does the “No Advance Payment” feature work?",
];
const replies = [
  "GST requirements depend on your turnover, products and the marketplace rules. Share your business details with a CA to confirm what applies to you.",
  "The right ITR form depends on your income sources and eligibility. A tax professional can review your details and help identify the correct form.",
  "FSSAI requirements vary with your food business type and scale. Our team can help you understand the document checklist and application process.",
  "Our team reviews the service and fee with you first, then completes the agreed work. Payment is collected after the work is complete and you have reviewed it.",
];

export default function Advisor() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ask = (text) => {
    if (!text.trim()) return;
    const index = messages.length % replies.length;
    setMessages([...messages, { q: text, a: replies[index] }]);
    setInput("");
  };

  return (
    <section className="section advisor-section" id="ai-advisor">
      <div className="container">
        <SectionHeading
          eyebrow="POWERED BY GEMINI AI"
          title="TAX INDIA AI Tax & Compliance Assistant"
          description="Instant answers for your Indian Tax, GST, Income Tax, and Business Registration queries."
        />
        <div className="advisor-layout">
          <div className="advisor-copy">
            <span className="advisor-label">
              <Sparkles size={14} /> TAX INDIA AI ADVISOR
            </span>
            <h3>Online · 24/7 Tax Help</h3>
            <p>
              Namaste! Ask about GST registration, ITR filing, FSSAI food
              licenses, trademark or Pvt Ltd incorporation.
            </p>
            <a href="tel:+917814006162" className="advisor-call">
              <Phone size={17} />
              <span>
                <small>Call Human CA</small>
                <b>+91 7814006162</b>
              </span>
            </a>
          </div>
          <div className="chat-card">
            <div className="chat-header">
              <span className="bot-avatar">
                <Bot size={20} />
              </span>
              <div>
                <b>
                  TAX INDIA AI Advisor <i className="online-dot" />
                </b>
                <small>Online · 24/7 Tax Help</small>
              </div>
              <a className="chat-human" href="tel:+917814006162">
                <Phone size={16} /> Call Human CA
              </a>
            </div>
            <div className="chat-messages">
              <div className="welcome-row">
                <span className="bot-avatar">
                  <Bot size={19} />
                </span>
                <div className="chat-bubble bot-bubble">
                  Namaste! I am your TAX INDIA AI Tax &amp; Compliance
                  Assistant. Ask me anything about GST registration, ITR filing,
                  FSSAI food license, Trademark, or Pvt Ltd incorporation!
                </div>
              </div>
              {messages.map((m, i) => (
                <div key={i} className="chat-exchange">
                  <div className="chat-bubble user-bubble">
                    <UserRound size={14} />
                    {m.q}
                  </div>
                  <div className="chat-bubble bot-bubble">{m.a}</div>
                </div>
              ))}
            </div>
            <div className="suggested-prompts">
              {prompts.map((p) => (
                <button key={p} onClick={() => ask(p)}>
                  {p}
                  <span>↗</span>
                </button>
              ))}
            </div>
            <form
              className="chat-input"
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
            >
              <input
                aria-label="Ask a question"
                placeholder="Ask a question about GST, ITR, FSSAI, Registration..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button aria-label="Send question" type="submit">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
