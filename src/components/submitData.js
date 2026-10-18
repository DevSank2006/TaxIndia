
const GOOGLE_SHEETS_API_URL =
  "https://script.google.com/macros/s/AKfycbwISZFC4NXLB-k9PrgwIGE2PAXJAFVnjfZwVwQhrtWL5W8TmNgIkxY1mBLDbKg6pjtg5Q/exec";

export default async function submitLead(formData) {
  const response = await fetch(GOOGLE_SHEETS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  console.log("Google Apps Script response:", result);

  return result;
}
