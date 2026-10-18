export const phone = "+917814006162";
export function whatsappLink(
  message = "Hello TAX INDIA, I need assistance with online tax & business registration services.",
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
