
const GOOGLE_SHEETS_API_URL =
  "https://script.google.com/macros/s/AKfycbzab8K6LZeFKwcYsuyqkQ3UMMzjKWC-0dM96u7P1s7mq_VUGoNs2tsaRTJXwgKr5F4JzA/exec";

export default async function submitLead(formData) {
  const response = await fetch(GOOGLE_SHEETS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(formData),
  });

  const responseText = await response.text();
  console.log("HTTP status:", response.status);
  console.log("Apps Script raw response:", responseText);

  let result;

  try {
    result = JSON.parse(responseText);
  } catch {
    throw new Error("Apps Script returned a non-JSON response.");
  }

  if (!response.ok || result.success !== true) {
    throw new Error(
      result.message || `Request failed: HTTP ${response.status}`
    );
  }

  return result;
}
