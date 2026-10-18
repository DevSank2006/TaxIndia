import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import ReviewCard from "./ReviewCard.jsx";
import { reviews } from "../data/content.js";
const stats = [
  ["12.5 Lakh+", "Happy Customers"],
  ["99.8%", "Approval Success Rate"],
  ["50,000+", "Companies Incorporated"],
  ["₹120+ Cr", "TDS Refund Processed"],
];
export default function Reviews() {
  return (
    <section className="section reviews-section" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="100% REAL CUSTOMER REVIEWS"
          title="Trusted by 12.5+ Lakh Businesses Across India"
          description="Read real feedback from shopkeepers, startup founders, freelancers, and business owners who used TAX INDIA online."
        />
        <div className="review-stats">
          {stats.map(([value, label]) => (
            <div key={label}>
              <b>{value}</b>
              <small>{label}</small>
            </div>
          ))}
        </div>
        <div className="review-rating-summary">
          <span>★★★★★</span>
          <b>4.9/5</b>
          <small>Client satisfaction</small>
        </div>
        <div className="review-grid min-[490px]:max-[790px]:!grid min-[490px]:max-[790px]:!grid-cols-1 ">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
        <div className="reviews-bottom">
          <span>
            <Check size={15} /> Feedback shared by our clients
          </span>
          <a href="#contact">
            Share your experience <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
