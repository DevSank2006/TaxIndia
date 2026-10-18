import { useMemo, useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { estimateIncomeTax } from "../utils/tax.js";

const money = (value) =>
  `₹${Math.round(Number(value) || 0).toLocaleString("en-IN")}`;

export default function Calculator() {
  const [mode, setMode] = useState("income");
  const [income, setIncome] = useState(850000);
  const [invest, setInvest] = useState(150000);
  const [health, setHealth] = useState(25000);
  const [gstAmount, setGstAmount] = useState(18000);
  const [rate, setRate] = useState(18);
  const [gstMode, setGstMode] = useState("exclusive");

  const estimate = useMemo(
    () =>
      estimateIncomeTax({
        income,
        investment: invest,
        health,
        incomeType: "salary",
      }),
    [income, invest, health],
  );
  const recommendation =
    estimate.newTax === estimate.oldTax
      ? "Both regimes have the same estimated tax."
      : estimate.newTax < estimate.oldTax
        ? "New Tax Regime saves you more tax!"
        : "Old Tax Regime saves you more tax!";

  const enteredGstAmount = Math.max(0, Number(gstAmount) || 0);
  const taxableAmount =
    gstMode === "inclusive"
      ? enteredGstAmount / (1 + Number(rate) / 100)
      : enteredGstAmount;
  const gstValue =
    gstMode === "inclusive"
      ? enteredGstAmount - taxableAmount
      : (taxableAmount * Number(rate)) / 100;
  const totalWithGst =
    gstMode === "inclusive" ? enteredGstAmount : taxableAmount + gstValue;

  return (
    <section className="section calculator-section" id="calculators">
      <div className="container calculator-layout">
        <div className="calculator-intro">
          <SectionHeading
            eyebrow={
              <>
                <CalculatorIcon aria-hidden="true" />
                <span>FREE CA CALCULATORS</span>
              </>
            }
            title="Smart Tax & Business Calculators"
            description="Calculate your exact Income Tax, GST breakdown, or company setup cost instantly."
          />
        </div>

        <div
          className="calc-tabs"
          role="tablist"
          aria-label="Choose a calculator"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "income"}
            className={mode === "income" ? "active" : ""}
            onClick={() => setMode("income")}
          >
            Income Tax (ITR) Calculator
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "gst"}
            className={mode === "gst" ? "active" : ""}
            onClick={() => setMode("gst")}
          >
            GST Tax Calculator
          </button>
        </div>

        <div className="calculator-card">
          {mode === "income" ? (
            <div className="calc-split">
              <div className="calc-fields">
                <h3>Enter Income &amp; Deductions</h3>
                <label htmlFor="annual-income">
                  Annual Gross Salary / Business Income (₹)
                </label>
                <input
                  id="annual-income"
                  type="number"
                  min="0"
                  step="1000"
                  value={income}
                  onChange={(event) => setIncome(event.target.value)}
                />

                <label htmlFor="section-80c">
                  Section 80C Investments (LIC, PPF, EPF - Max ₹1.5L)
                </label>
                <input
                  id="section-80c"
                  type="number"
                  min="0"
                  max="150000"
                  step="1000"
                  value={invest}
                  onChange={(event) => setInvest(event.target.value)}
                />

                <label htmlFor="section-80d">
                  Section 80D Health Insurance (Max ₹50,000)
                </label>
                <input
                  id="section-80d"
                  type="number"
                  min="0"
                  max="50000"
                  step="500"
                  value={health}
                  onChange={(event) => setHealth(event.target.value)}
                />
              </div>

              <div className="calc-result-column">
                <div className="tax-results">
                  <div>
                    <span>New Tax Regime Tax:</span>
                    <b>{money(estimate.newTax)}</b>
                  </div>
                  <div>
                    <span>Old Tax Regime Tax:</span>
                    <b className="old-regime-tax">{money(estimate.oldTax)}</b>
                  </div>
                  <p>💡 Recommendation: {recommendation}</p>
                </div>
                <a href="#contact" className="calc-cta">
                  File Your ITR with Expert CA (Starts ₹299)
                </a>
              </div>
            </div>
          ) : (
            <div className="calc-split gst-split">
              <div className="calc-fields">
                <h3>Enter Amount &amp; Rate</h3>
                <label htmlFor="gst-base-amount">Amount (₹)</label>
                <input
                  id="gst-base-amount"
                  type="number"
                  min="0"
                  step="100"
                  value={gstAmount}
                  onChange={(event) => setGstAmount(event.target.value)}
                />

                <label htmlFor="gst-rate">GST Rate (%)</label>
                <select
                  id="gst-rate"
                  value={rate}
                  onChange={(event) => setRate(Number(event.target.value))}
                >
                  <option value={5}>5% (Essential Goods)</option>
                  <option value={12}>12% (Standard Goods)</option>
                  <option value={18}>18% (Services, IT, Standard)</option>
                  <option value={28}>28% (Luxury Goods)</option>
                </select>

                <div
                  className="gst-mode-options"
                  role="radiogroup"
                  aria-label="GST amount mode"
                >
                  <label className={gstMode === "exclusive" ? "selected" : ""}>
                    <input
                      type="radio"
                      name="gst-mode"
                      value="exclusive"
                      checked={gstMode === "exclusive"}
                      onChange={() => setGstMode("exclusive")}
                    />
                    <span>GST Exclusive (Add GST)</span>
                  </label>
                  <label className={gstMode === "inclusive" ? "selected" : ""}>
                    <input
                      type="radio"
                      name="gst-mode"
                      value="inclusive"
                      checked={gstMode === "inclusive"}
                      onChange={() => setGstMode("inclusive")}
                    />
                    <span>GST Inclusive (Remove GST)</span>
                  </label>
                </div>
              </div>

              <div className="calc-result-column">
                <div className="tax-results gst-results">
                  <div>
                    <span>Net Amount:</span>
                    <b>{money(taxableAmount)}</b>
                  </div>
                  <div>
                    <span>CGST ({rate / 2}%):</span>
                    <b>{money(gstValue / 2)}</b>
                  </div>
                  <div>
                    <span>SGST ({rate / 2}%):</span>
                    <b>{money(gstValue / 2)}</b>
                  </div>
                  <div className="gst-total-row">
                    <span>Total Gross Invoice Amount:</span>
                    <b>{money(totalWithGst)}</b>
                  </div>
                </div>
                <a href="#contact" className="calc-cta gst-apply">
                  Apply for GST Registration (Only ₹399)
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
