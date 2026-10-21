import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import Logo from "./Logo.jsx";
import { whatsappLink } from "../utils/whatsapp.js";
const popular = [
  "GST Registration",
  "GST Return Filing",
  "ITR Filing",
  "MSME Registration",
  "Food License (FSSAI)",
  "PAN Card",
];
const business = [
  "Trademark Registration",
  "Digital Signature Certificate",
  "PF & ESI Registration",
  "Startup India",
  "Company Registration",
  "Import Export Code",
];
export default function Footer() {
  return (
    <footer className="site-footer  ">
      <div className="footer-main">
        <div className="container !mx-auto  !flex !w-full !px-4 !flex-wrap !items-start !gap-8 ">
          <div className="footer-about ">
            <Logo light />
            <p>
              Thoughtful tax, compliance and business support to help you build
              with confidence.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
            <div className="footer-promise">
              ✦ &nbsp; First work, then payment.
            </div>
          </div>
         <div className="flex  justify-start flex-wrap gap-y-4 gap-x-12  md:flex-1 lg:justify-evenly "> <div className="footer-column  flex flex-wrap">
            <h4>POPULAR SERVICES</h4>
            {popular.map((s, i) => (
              <a key={s} href="#services">
                {s} <span className="ml-0.5">₹{[399, 199, 299, 299, 399, 399][i]}</span>
              </a>
            ))}
          </div>
          <div className="footer-column ">
            <h4>BUSINESS SUPPORT</h4>
            {business.map((s) => (
              <a key={s} href="#services">
                {s}
              </a>
            ))}
            <a href="#banking">Banking & payments</a>
          </div>
          <div className="footer-column  footer-contact">
            <h4 className="px-4">GET IN TOUCH</h4>
            <a href="tel:+917814006162">
              <Phone size={15} />
              +91 78140 06162
            </a>
            <a href={whatsappLink()}>
              <MessageCircle size={15} />
              WhatsApp support
            </a>
            <a href="mailto:support@taxindia.online">
              <Mail size={15} />
              support@taxindia.online
            </a>
            <span>
              <MapPin size={15} />
              New Delhi, India
            </span>
            <a className="footer-contact-cta" href="#contact">
              Request a callback <ArrowUpRight size={15} />
            </a>
          </div></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} TAX INDIA. All rights reserved.
          </span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Disclaimer</a>
          </div>
          <span className="footer-disclaimer">
            Independent tax and business services support platform.
          </span>
        </div>
        
          <div className="text-xs !w-full pb-2  !mx-auto  flex gap-x-1 pl-2 md:pl-6 lg:pl-12">


            <div className="font-semibold pt-1 pl-6 text-[#a1a1a1]">This website is developed by</div>
            <a
  href="https://anantplus.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold pt-1 text-[#dbdbdd]"
  
>
  Anantplus
</a>
          </div>
           
         
           
          
      </div>
    </footer>
  );
}
