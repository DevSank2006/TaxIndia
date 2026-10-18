import { Star } from "lucide-react";
export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card-head">
        <span className="review-stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
        <span className="review-date">{review.date}</span>
      </div>
      <p className="review-quote">“{review.quote}”</p>
      <div className="review-service">
        <b>Service: {review.service}</b>
      </div>
      <div className="review-person">
        <span>
          <b>{review.name}</b>
          <small>{review.role}</small>
        </span>
        <span className="verified">VERIFIED CLIENT</span>
      </div>
    </article>
  );
}
