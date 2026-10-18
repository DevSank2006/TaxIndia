const progressiveTax = (amount, slabs) =>
  slabs.reduce((total, slab) => {
    const taxableInSlab = Math.max(0, Math.min(amount, slab.to) - slab.from);
    return total + taxableInSlab * slab.rate;
  }, 0);

const withCess = (amount) => Math.round(amount * 1.04);

export function estimateIncomeTax({
  income,
  investment,
  health,
  incomeType = "salary",
}) {
  const gross = Math.max(0, Number(income) || 0);
  const deduction80C = Math.min(150000, Math.max(0, Number(investment) || 0));
  const deduction80D = Math.min(50000, Math.max(0, Number(health) || 0));
  const newStandard = incomeType === "salary" ? 75000 : 0;
  const oldStandard = incomeType === "salary" ? 50000 : 0;
  const newTaxable = Math.max(0, gross - newStandard);
  const oldTaxable = Math.max(
    0,
    gross - oldStandard - deduction80C - deduction80D,
  );
  const newRaw = progressiveTax(newTaxable, [
    { from: 0, to: 400000, rate: 0 },
    { from: 400000, to: 800000, rate: 0.05 },
    { from: 800000, to: 1200000, rate: 0.1 },
    { from: 1200000, to: 1600000, rate: 0.15 },
    { from: 1600000, to: 2000000, rate: 0.2 },
    { from: 2000000, to: 2400000, rate: 0.25 },
    { from: 2400000, to: Infinity, rate: 0.3 },
  ]);
  const newAfterRebate =
    newTaxable <= 1200000
      ? Math.max(0, newRaw - 60000)
      : Math.min(newRaw, 60000 + newTaxable - 1200000);
  const oldRaw = progressiveTax(oldTaxable, [
    { from: 0, to: 250000, rate: 0 },
    { from: 250000, to: 500000, rate: 0.05 },
    { from: 500000, to: 1000000, rate: 0.2 },
    { from: 1000000, to: Infinity, rate: 0.3 },
  ]);
  const oldAfterRebate =
    oldTaxable <= 500000 ? Math.max(0, oldRaw - 12500) : oldRaw;
  return {
    newTax: withCess(newAfterRebate),
    oldTax: withCess(oldAfterRebate),
    newTaxable,
    oldTaxable,
  };
}
