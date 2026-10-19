import { ShieldCheck } from "lucide-react";

export default function Logo({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#top"
      aria-label="TAX INDIA home"
    >
      <span className="brand-mark">
        <b>TI</b>
      </span>
      <span className="brand-copy">
        <strong>
          TAX <em>INDIA</em>
        </strong>
        <small>INDIA'S NO.1 TAX &amp; BUSINESS COMPANY</small>
      </span>
    </a>
  );
}
