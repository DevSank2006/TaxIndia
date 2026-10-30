import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services, categories } from "../data/services.js";
import ServiceActionModal from "./ServiceActionModal.jsx";

export default function Services({ onApply }) {
  const [active, setActive] = useState("All Services");
  const [query, setQuery] = useState("");
  const [dialog, setDialog] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [more, setMore] = useState(true);


  const visible = useMemo(
    () =>
      services.filter(
        (s) =>
          (active === "All Services" || s.category === active) &&
          s.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [active, query],
  );
  const apply = (service) => {
    console.log(service)
    onApply(service.name);
    setDialog({ service, mode: "apply" });
  };
  const cards=showAll?services:services.slice(0,8);
  console.log(cards)
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="TRANSPARENT AFFORDABLE PRICING"
          title="Our Online Tax & Business Services"
          description={
            <>
              Select your required service below. Enjoy{" "}
              <strong>No Advance Payment</strong> — Pay only after work
              completion and satisfaction!
            </>
          }
        />
        <div className="service-toolbar">
          <div className="category-tabs">
            {categories.map((c, i) => (
              <button
                key={c}
                className={active === c ? "active" : ""}
                onClick={() => setActive(c)}
              >
                {c}
                {i === 0 && <span>{services.length}</span>}
              </button>
            ))}
          </div>
          <label className="service-search">
            <Search size={17} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services"
            />
          </label>
        </div>
        <div className=" grid grid-cols-4 gap-3 max-[1050px]:grid-cols-2 max-[640px]:grid-cols-1 ">
          {visible.length ? (
            cards.map((service) => (
              <ServiceCard
                key={service.name}
                service={service}
                onDetails={(service) => setDialog({ service, mode: "details" })}
                onApply={apply}
              />
            ))
          ) : (
            <div className="empty-results">
              No matching services. Try a different search.
            </div>
          )}


          {more ?<div
  onClick={() => {
    setShowAll(true);
    setMore(false);
  }
    

  }
 className="flex w-15 cursor-pointer items-center justify-center gap-0.5 rounded-lg ml-1 h-6 bg-[linear-gradient(90deg,#ff7000,#ff9800)] text-sm font-semibold text-white transition hover:opacity-90"
>
  <span className="font-semibold">Other</span> <ArrowRight size={16} />
</div>:""}
      

        </div>
        <div className="services-note">
          <span>Need help choosing?</span>
          <a href="#contact">
            Talk to our team <ArrowRight size={15} />
          </a>
        </div>
      </div>
      {dialog && (
        <ServiceActionModal
          service={dialog.service}
          mode={dialog.mode}
          onClose={() => setDialog(null)}
          onApply={apply}
        />
      )}
    </section>
  );
}
