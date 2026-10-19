import { Phone, MessageSquare } from "lucide-react";

const PHONE_NUMBER = "917814006162";
const PHONE_DISPLAY = "+91 7814006162";

const WHATSAPP_MESSAGE =
  "Hello TAX INDIA, I need assistance with online tax & business registration services.";

const callUrl = `tel:+${PHONE_NUMBER}`;
const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// One contact link (icon + short text on mobile, full text on bigger screens)
function ContactLink({
  href,
  icon: Icon,
  iconClass,
  hoverClass,
  shortText,
  fullText,
  external = false,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-1.5 whitespace-nowrap font-semibold transition-colors ${hoverClass}`}
    >
      <Icon className={`h-3.5 w-3.5 shrink-0 ${iconClass}`} />

      {/* Mobile: short text */}
      <span className="sm:hidden">{shortText}</span>

      {/* Tablet and up: full text */}
      <span className="hidden sm:inline">{fullText}</span>
    </a>
  );
}

export default function TopBar() {
  return (
    <div className="bg-slate-900 px-3 py-2 text-xs font-medium text-white sm:px-4 sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 md:flex-row md:gap-2 ">
        {/* Left: badge + message */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center md:justify-start md:text-left ">
          <span className="animate-pulse rounded bg-orange-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            No Advance Money
          </span>

          <span  className="text-[11px]  text-slate-200 sm:text-xs">
            ⚡ First Work, Then Payment
            <span className="hidden sm:inline">
              {" "}
              — 100% Work Satisfaction Guaranteed!
            </span>
          </span>
        </div>

        {/* Right: call + WhatsApp */}
        <div className="flex items-center gap-3 text-xs text-slate-300 sm:gap-4">
          <ContactLink
            href={callUrl}
            icon={Phone}
            iconClass="text-orange-400"
            hoverClass="hover:text-orange-400"
            shortText="Call Us"
            fullText={`Call: ${PHONE_DISPLAY}`}
          />

          <span className="text-slate-600">|</span>

          <ContactLink
            href={whatsappUrl}
            icon={MessageSquare}
            iconClass="text-green-400"
            hoverClass="hover:text-green-400"
            shortText="WhatsApp"
            fullText="WhatsApp Us"
            external
          />
        </div>
      </div>
    </div>
  );
}
