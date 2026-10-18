export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={`section-heading align-${align} ${light ? "heading-light" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
