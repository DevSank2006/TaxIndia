const gst = {
  description:
    "Get government GST registration for your business, shop, e-commerce store, or freelance firm. 100% online application with dedicated CA assistance.",
  documents: [
    "PAN Card & Aadhaar Card of Owner/Partners",
    "Electricity Bill / Rent Agreement of Business Address",
    "Bank Account Statement / Cancelled Cheque",
    "Passport size Photograph",
  ],
  benefits: [
    "Legal status to sell anywhere in India",
    "Eligible to claim Input Tax Credit (ITC)",
    "Mandatory for Amazon, Flipkart, & E-commerce",
    "Boosts customer trust & bank credit score",
  ],
};
const generic = (service) => ({
  description: service.description,
  documents: [
    "PAN Card and identity proof",
    "Address proof for applicant or business",
    "Recent photograph and contact details",
    "Supporting records relevant to this service",
  ],
  benefits: [
    "Guidance from a dedicated CA team",
    "Online application and status assistance",
    "Clear document checklist before processing",
    "No advance payment; pay after reviewing the work",
  ],
});
export function getServiceDetails(service) {
  const data = service.name === "GST Registration" ? gst : generic(service);
  const steps =
    service.name === "GST Registration"
      ? [
          "Fill quick details & upload basic documents",
          "CA reviews and prepares official filing",
          "Application submitted on GST Portal",
          "Receive GST Certificate & GSTIN (Pay afterwards)",
        ]
      : [
          "Fill quick details & upload basic documents",
          "CA reviews and prepares the official filing",
          "Application submitted to the relevant portal",
          `Receive your ${service.name} documents (pay afterwards)`,
        ];
  return { ...data, steps };
}
