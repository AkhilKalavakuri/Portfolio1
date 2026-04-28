// ─── PROJECTS DATA ────────────────────────────────────────────────────────
// To add a new project: copy one object below, paste it at the end of the
// array, and fill in your details. The page renders them in order.
//
// riskTag options: "High" | "Medium" | "Low"
// recommendation options: "Approve" | "Approve with Conditions" | "Reject"

export const PROJECTS = [
  {
    title: "Pennine Foods Ltd — SME Term Loan Assessment",
    industry: "Food Manufacturing / SME",
    insight: "Structured £500k equipment finance approval with covenant breach identified under stress scenario",
    riskTag: "Low",
    modelLabel: "View Financial Model",
modelUrl: "https://docs.google.com/spreadsheets/d/1P9UIRa1EHxdiRJWkpGnQl2d53FpSelz_/edit?usp=sharing",

    summary:
      "Conducted a full credit assessment of a Leeds-based ambient food manufacturer with £8.6m revenue applying for a £500,000 5-year term loan at 7.25% fixed to fund automated production equipment. Analysed three years of audited FRS 102 accounts, built a three-statement model, and stress-tested projected cash flows across base and downside scenarios.",

    outcome:
      "Historic DSCR improved from 3.51x to 5.33x over the three-year review period against a 1.25x covenant. Downside stress test identified a covenant breach to 1.01x in FY2025, recovering to 2.12x in FY2026. Gross margin compression to 33.5% in FY2022 identified as the primary driver of below-benchmark net profit margin (4.8% vs 5% threshold).",

    tools: [
      "Excel modelling",
      "Three-statement modelling",
      "Ratio analysis",
      "DSCR analysis",
      "Stress testing",
      "Cash flow forecasting",
      "Credit memo writing",
    ],

    recommendation: "Approve with Conditions",

    keyRisks: [
      "Customer concentration: top 3 accounts = 74% of revenue — single loss drives FY2025 covenant breach to 1.01x",
      "Input cost inflation compressed gross margin by 2.0pp in FY2022; net margin fell to 4.8%, below the 5% benchmark",
      "Key-person dependency: MD holds all retailer relationships — key-man insurance required as hard drawdown condition",
      "100% LTV at inception on specialist equipment; forced-sale recovery estimated at c.£220k vs £320k mid-term balance",
    ],

    reasoning:
      "Facility approved subject to 1.25x annual DSCR covenant with 60-day cure and cash lock-up on breach, personal guarantees from all three directors, and key-man life insurance on MD. Base case DSCR of 3.61x (FY2025) provides 2.36x headroom above covenant. Existing leverage is low — net debt/EBITDA moves from 0.13x in FY2022 to net cash by FY2024.",
  },

  {
    title: "Premier Foods PLC — Corporate Credit Memorandum",
    industry: "Corporate / Branded FMCG",
    insight: "£330m Notes refinancing risk conditioned into £275m syndicated facility for FTSE-listed food group",
    riskTag: "Medium",
    modelLabel: "View Financial Model",

    summary:
      "Prepared a full corporate credit memorandum for Premier Foods PLC (FTSE 250, FY24/25 revenue £1.15bn), the UK's leading branded ambient food manufacturer (Mr Kipling, Bisto, Ambrosia, OXO). Assessed four years of audited financials, evaluated a complex capital structure comprising senior secured notes, a syndicated RCF and bridge facility, and modelled base and downside scenarios across a 3-year projection horizon.",

    outcome:
      "Net Debt/EBITDA of 0.7x at FY24/25 versus 3.0x policy ceiling — 2.3 turns of headroom. Trading profit interest cover of 10.2x in FY24/25. Downside stress (revenue -3%, margin -200bps) peaks leverage at 1.3x and minimum cover at ~5x — both comfortably inside policy thresholds. Approval conditioned on successful refinancing of £330m Senior Secured Notes due October 2026 prior to Term Loan drawdown.",

    tools: [
      "Corporate credit analysis",
      "Capital structure assessment",
      "Covenant modelling",
      "Base & downside scenario analysis",
      "Debt capacity analysis",
      "Credit memo writing",
      "Financial ratio analysis",
    ],

    recommendation: "Approve with Conditions",

    keyRisks: [
      "£330m Senior Secured Notes maturing October 2026 — refinancing risk mitigated by £275m committed bridge to November 2027",
      "UK retailer concentration — top grocers control majority of route to market, creating periodic margin pressure",
      "Input cost volatility across wheat, sugar, dairy and energy — mitigated by demonstrated track record of inflation pass-through",
      "Cadbury cake licence dependency — meaningful Sweet Treats revenue concentration; licence extended to 2028 only",
    ],

    reasoning:
      "Approved subject to successful refinancing of the £330m 2026 Notes prior to Term Loan drawdown, maximum Net Debt/EBITDA covenant of 3.5x, minimum interest cover of 3.0x, and cap on acquisitions exceeding £150m without majority lender consent. BB+ Stable ratings from S&P and Fitch, sub-1x leverage and £140m FY24/25 free cash flow confirm Premier as a high-quality defensive credit well within policy thresholds in both base and stress scenarios.",

    pdfLink: "/Premier_Foods_Credit_Memo.pdf",
  },

  // ── ADD NEW PROJECTS BELOW ─────────────────────────────────────────────
  // {
  //   title: "",
  //   industry: "",
  //   insight: "",
  //   riskTag: "High" | "Medium" | "Low",
  //   summary: "",
  //   outcome: "",
  //   tools: [],
  //   recommendation: "Approve" | "Approve with Conditions" | "Reject",
  //   keyRisks: [],
  //   reasoning: "",
  //   pdfLink: "",
  // },
];
