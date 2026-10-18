export function createLeadReference() {
  const suffix = `${Date.now().toString().slice(-5)}${Math.floor(Math.random() * 90 + 10)}`;
  return `TXI-${suffix}`;
}
