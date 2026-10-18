import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp.js";
export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with TAX INDIA on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WHATSAPP CA</span>
    </a>
  );
}
