import {
  X,
  CheckCircle,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { createPortal } from "react-dom";

const DEFAULT_SUPPORT_PHONE = "917814006162";

// Label on the left, value on the right (stays in one row even on small phones)
function DetailRow({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="shrink-0 text-[10px] font-semibold text-slate-500 sm:text-xs">
        {label}
      </span>

      <div className="min-w-0 break-words text-right text-[11px] sm:text-sm">
        {children}
      </div>
    </div>
  );
}

// Divider only shows on tablet and bigger, to save height on mobile
function Divider() {
  return <div className="hidden border-t border-slate-200 sm:block" />;
}

function SuccessIcon() {
  return (
    <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full border-4 border-emerald-50 bg-emerald-100 text-emerald-600 shadow-inner sm:mb-4 sm:h-16 sm:w-16">
      <CheckCircle className="h-6 w-6 animate-bounce sm:h-10 sm:w-10" />
    </div>
  );
}

export default function Thankyou({
  data,
  setIsSubmitted,
  supportPhone = DEFAULT_SUPPORT_PHONE,
  onClose,
}) {
  const whatsappMessage =
    `Hello TAX INDIA, I have submitted an online application for ${data.service}. ` +
    `My Lead Reference ID is ${data.leadId}. Name: ${data.name}, Phone: ${data.phone}. ` +
    `Please initiate process.`;

  const whatsappUrl = `https://wa.me/${supportPhone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const callUrl = `tel:+${supportPhone}`;

  function handleClose() {
    if (onClose) {
      onClose();
    } else if (setIsSubmitted) {
      setIsSubmitted(false);
    }
  }

  return createPortal(
    // Outer padding keeps clear space around the card on phones
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-md sm:p-5 md:p-8">
      {/* Card is narrower on mobile; max-h + scroll is only a safety net */}
      <div className="relative max-h-[calc(100dvh-48px)] w-full max-w-[300px] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-2xl min-[400px]:max-w-[320px] sm:max-h-none sm:max-w-md sm:overflow-visible sm:rounded-3xl sm:p-7 md:p-8">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close confirmation"
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-800 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <SuccessIcon />

        <span className="inline-block max-w-full rounded-full bg-orange-100 px-2.5 py-1 text-[8px] font-black uppercase leading-tight tracking-wider text-orange-800 sm:px-3 sm:text-[10px]">
          Application Submitted Successfully
        </span>

        <h3 className="mt-2 break-words text-base font-black text-blue-950 sm:mt-3 sm:text-2xl">
          Thank You, {data.name}!
        </h3>

        <p className="mx-auto mt-1 max-w-sm text-[10px] leading-snug text-slate-600 sm:mt-2 sm:text-sm sm:leading-relaxed">
          Your request for{" "}
          <strong className="text-slate-900">{data.service}</strong> has been
          assigned to our Senior Chartered Accountant team.
        </p>

        {/* Lead details */}
        <div className="my-3 space-y-1.5 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-left sm:my-5 sm:space-y-3 sm:rounded-2xl sm:p-4">
          <DetailRow label="Lead ID:">
            <span className="inline-block break-all rounded bg-blue-100 px-1.5 py-0.5 font-mono text-[11px] font-black text-blue-950 sm:px-2 sm:text-xs">
              {data.leadId}
            </span>
          </DetailRow>

          <Divider />

          <DetailRow label="Service:">
            <span className="font-bold text-slate-800">{data.service}</span>
          </DetailRow>

          <Divider />

          <DetailRow label="Phone:">
            <span className="font-bold text-slate-800">+91 {data.phone}</span>
          </DetailRow>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-2.5 py-2 text-[10px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-lg transition-colors hover:bg-emerald-700 sm:min-h-12 sm:gap-2 sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-xs"
          >
            <MessageSquare className="h-4 w-4 shrink-0" />
            <span className="min-w-0 break-words">Chat on WhatsApp Now</span>
          </a>

          <a
            href={callUrl}
            className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-2.5 py-2 text-[10px] font-bold leading-tight text-white transition-colors hover:bg-slate-950 sm:min-h-12 sm:gap-2 sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-xs"
          >
            <Phone className="h-4 w-4 shrink-0 text-orange-400" />
            <span>
              Call Senior CA (+{supportPhone.slice(0, 2)}{" "}
              {supportPhone.slice(2)})
            </span>
          </a>
        </div>

        {/* Footer note */}
        <div className="mt-3 flex items-start justify-center gap-1.5 border-t border-slate-100 pt-2.5 text-left text-[9px] font-semibold leading-snug text-emerald-700 sm:mt-5 sm:gap-2 sm:pt-4 sm:text-[11px]">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 sm:h-4 sm:w-4" />

          <span>Remember: "No Advance Payment - First Work Then Payment"</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
