import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageCircle,
  Menu,
  X,
  MessageSquare,
  Users,
  ChevronRight,
  Clock3,
} from "lucide-react";
import LeadForm from "./LeadForm.jsx";
import { whatsappLink } from "../utils/whatsapp.js";
import ServiceApplyMoal from "./ServiceApplyModal.jsx"
import { services } from "../data/services.js";
import { useState } from "react";


const PHONE_NUMBER = "917814006162";
const PHONE_DISPLAY = "+91 7814006162";

const WHATSAPP_MESSAGE =
  "Hello TAX INDIA, I need assistance with online tax & business registration services.";

const callUrl = `tel:+${PHONE_NUMBER}`;
const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Banking", href: "#banking" },
  { label: "Calculators", href: "#calculators" },
  { label: "AI Advisor", href: "#ai-advisor" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function Logo() {
  return (
    <a href="#" className="group flex items-center gap-2.5 sm:gap-3">
      <div className=" flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-lg font-black text-white shadow-lg transition-transform group-hover:scale-105 sm:h-11 sm:w-11 sm:text-xl ">
        <span className="text-orange-400">T</span>
        <span className="text-white">I</span>
      </div>

      <div className="">
        <div className="flex items-center gap-1.5">
          <span className="font-sans text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
            TAX <span className="text-orange-500">INDIA</span>
          </span>
          <ShieldCheck className="h-4 w-4 fill-emerald-100 text-emerald-600 sm:h-5 sm:w-5" />
        </div>

        <p className="-mt-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500 min-[400px]:text-[9px] sm:text-[10px]">
          India's No.1 Tax &amp; Business Company
        </p>
      </div>
    </a>
  );
}

// Desktop links with the orange underline on hover
function DesktopLinks() {
  return (
    <nav className="hidden items-center space-x-6 text-sm font-semibold text-slate-700 lg:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="group relative py-2 transition-colors hover:text-blue-900"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}

// Buttons on the right side (tablet and desktop)
function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 sm:flex ">
      <a
        href={callUrl}
        className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-800 transition-all hover:bg-slate-200 lg:flex"
      >
        <Phone className="h-4 w-4 text-blue-800" />
        <span>{PHONE_DISPLAY}</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg"
      >
        <MessageSquare className="h-4 w-4" />
        <span>WhatsApp</span>
      </a>

      <button
        type="button"
        className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:from-orange-600 hover:to-amber-700 hover:shadow-lg"
      >
        <span>Get Started</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// Dropdown menu shown on mobile and tablet
function MobileMenu({ onClose }) {
  return (
    <div className="border-t border-slate-100 bg-white shadow-lg lg:hidden">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <nav className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile buttons (tablet already has WhatsApp + Get Started in the header) */}
        <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 sm:hidden">
          <a
            href={callUrl}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-3 text-xs font-bold text-slate-800"
          >
            <Phone className="h-4 w-4 text-blue-800" />
            <span>Call Us</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3 text-xs font-bold text-white"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="col-span-2 flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-3 py-3 text-xs font-bold text-white"
          >
            <span>Get Started</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}


export default function Hero({isSubmitted,setIsSubmitted,showForm,setShowForm}) {
    const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

     if(showForm){
       return <ServiceApplyMoal service={services[0]}
       onClose={() => setShowForm(false)}/>
     }

  return (
    <div>
       <header className="fixed lg:top-6 z-40 bg-white shadow-sm w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between sm:h-[72px]">
          <Logo />

          <DesktopLinks />

          <DesktopActions />

          {/* Mobile + tablet: call icon (mobile only) and hamburger */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={callUrl}
              title="Call Us"
              className="rounded-lg bg-blue-50 p-2 text-blue-900 sm:hidden"
            >
              <Phone className="h-5 w-5" />
            </a>

            <button
              type="button"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2.5 text-slate-700 hover:text-blue-900 focus:outline-none"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={closeMenu} />}
    </header>
    <section className="hero-section">
      <div className="hero-grain" />
      <div className="container hero-layout">
        <div className="hero-copy ">
        


        <div className="flex flex-wrap items-center  justify-center gap-2 sm:gap-2.5 lg:justify-start mt-15">
  {/* Orange badge */}
  <span className="inline-flex max-w-full items-center justify-center gap-1.5 rounded-2xl border border-orange-500/40 bg-orange-500/20 px-2.5 py-1.5 text-center text-[10px] font-bold leading-tight text-orange-300 sm:rounded-full sm:px-3 sm:text-xs">
    <Sparkles className="h-3 w-3 shrink-0 text-orange-400 sm:h-3.5 sm:w-3.5" />
    <span>OFFER ONLY FEW TIME</span>
  </span>

  {/* Green badge */}
  <span className="inline-flex max-w-full items-center justify-center gap-1.5 rounded-2xl border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1.5 text-center text-[10px] font-bold leading-tight text-emerald-300 sm:rounded-full sm:px-3 sm:text-xs">
    <ShieldCheck className="h-3 w-3 shrink-0 text-emerald-400 sm:h-3.5 sm:w-3.5" />
    <span>NO ADVANCE MONEY - FIRST WORK THEN PAYMENT</span>
  </span>
</div>
          <h1>
            India's No.1 Online
            <br />
            <span>Tax &amp; Business Services</span>
            <br />
            Company
          </h1>
          <p className="hero-intro">
            Register your Business, File GST &amp; Income Tax, Get Food Licenses
            &amp; Business Loans online anywhere in India with expert Senior
            Chartered Accountants.
          </p>
          <div className="hero-stats">
            <div>
              <span className="hero-stat-label">
                <Users size={16} />
                <b>12.5+ LAKH</b>
              </span>
              <small>Trusted Customers</small>
            </div>
            <div>
              <span className="hero-stat-label">
                <ShieldCheck size={16} />
                <b>ZERO RISK</b>
              </span>
              <small>First Work Then Money</small>
            </div>
            <div>
              <span className="hero-stat-label">
                <Clock3 size={16} />d
                <b>24-48 HOURS</b>
              </span>
              <small>Fast Turnaround</small>
            </div>
          </div>
          <div className="hero-actions">
            <a onClick={()=>{setShowForm(true)}} className="button button-lime">
              GET STARTED NOW <ArrowRight size={17} />
            </a>
            <a
              className="hero-whatsapp"
              href={whatsappLink(
                "Hello TAX INDIA, I want to apply for GST Registration. Please contact me.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp Us Now
            </a>
          </div>
          <div className="hero-direct">
            <span>Direct Senior CA Helpline:</span>{" "}
            <a href="tel:+917814006162">
              <Phone size={15} /> +91 7814006162
            </a>
            <small>⭐ 4.9/5 Rating · Based on 85,000+ Verified Reviews</small>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <span>RK</span>
              <span>AS</span>
              <span>VM</span>
              <span>+12k</span>
            </div>
            <div>
              <div className="stars">
                ★★★★★ <b>4.9/5</b>
              </div>
              <small>Trusted by businesses across India</small>
            </div>
            <span className="proof-separator" />
            <div className="proof-shield">
              <ShieldCheck size={23} />
              <span>
                <b>Zero advance</b>
                <small>Pay after the work</small>
              </span>
            </div>
          </div>
        </div>
        <div className="hero-form-wrap">
          <div className="form-orbit orbit-one" />
          <div className="form-orbit orbit-two" />
          <LeadForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
        </div>
      </div>
      <div className="container hero-bottom"></div>
    </section>
    </div>
    
    
  );
}
