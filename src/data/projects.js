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
      pdfLink: "/Premier_Foods_Credit_Memo.pdf",
  },

  {
    title: "Premier Foods PLC — Corporate Credit Memorandum",
    industry: "Corporate / Branded FMCG",
    insight: "£330m Notes refinancing risk conditioned into £275m syndicated facility for FTSE-listed food group",
    riskTag: "Medium",
    modelLabel: "URL for credit memo",
    modelUrl: "https://drive.google.com/file/d/1T2_lbdMEmHhqx14uZSER0m9AH3TBjoFP/view?usp=sharing",

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

    pdfLink: "https://drive.google.com/file/d/1T2_lbdMEmHhqx14uZSER0m9AH3TBjoFP/view?usp=sharing",
  },
  {
    title: "UK SME Loan Portfolio — Credit Risk Monitoring Dashboard",
    industry: "Banking / SME Lending",
    insight: "900-loan, £249m synthetic UK SME book — 2.7% NPL, 9.1% covenant breach rate, Construction & Real Estate flagged as top concentration risk",
    riskTag: "Medium",
    modelLabel: "",
    modelUrl: "https://docs.google.com/spreadsheets/d/136EyMh3ws4zJ8MB6mS-GSfTBiKSXIV6IatGkYXYeUWM/edit?usp=sharing",

    summary:
      "Personal project built on a calibrated synthetic dataset benchmarked to UK Finance, British Business Bank and Bank of England SME loan-level data — no real client engagement. Designed an Excel credit-risk monitoring dashboard for a 900-loan UK SME book (£249m outstanding, £375m committed). Single-page committee view with five KPIs, four charts (ageing, sector exposure, rating distribution, maturity wall) and a top-10 risk-ranked loan table.",

    outcome:
      "ortfolio NPL: 2.73% by exposure (23 of 900 loans). Covenant breach rate: 9.11% (82 loans) — the leading-indicator population. Highest-NPL sectors: Construction 4.35%, Real Estate 3.81%. Largest concentrations: Wholesale & Retail £44.9m (18%), Construction £37.4m (15%). Maturity wall front-loaded: £136.5m (55% of book) matures 2025–2028, peaking in 2027 at £37.3m. Top-10 risk-ranked loans dominated by CCC borrowers, totalling £8.9m exposure.",

    tools: [
      "Excel (Tables, PivotTables, structured references)",
      "SUMIFS / COUNTIFS / SUMPRODUCT",
      "KPI dashboard design",
      "NPL & covenant monitoring",
      "Days past due ageing",
      "Internal rating scales (BBB–CCC)",
      "Sector concentration analysis",
    ],

    recommendation: "Approve with Conditions",

    keyRisks: [
      "Sector concentration — Construction (£37.4m) and Real Estate (£30.6m) are the largest exposures and also the highest-NPL sectors (4.35% and 3.81%); combined £68m at elevated default rates",
      "Refinancing wall — £136.5m (55% of book) matures 2025–2028, peaking at £37.3m in 2027, creating material rate and liquidity risk at roll",
      "Covenant breach population — 82 loans (9.1%) in breach vs 2.7% headline NPL; early-warning population requires proactive engagement",
      "CCC rating tail — Top-10 risk-ranked loans concentrated in cyclical CCC borrowers (£8.9m), warranting a dedicated watchlist review",
    ],

    reasoning:
      "Headline NPL of 2.73% sits within the 2–3% range typical for UK SME books, and NPL behaves consistently with the rating model. However, sector concentration overlaps with the highest-NPL sectors (textbook concentration risk), the 9.1% covenant breach rate is 3x headline NPL, and 55% of the book matures within four years. Recommend temporary sector caps on Construction/Real Estate new business, targeted intervention on the 82 covenant-breached loans, and a treasury-led refinancing plan 12–24 months ahead of the 2026–2028 peak.",

    pdfLink: "https://docs.google.com/spreadsheets/d/136EyMh3ws4zJ8MB6mS-GSfTBiKSXIV6IatGkYXYeUWM/edit?usp=sharing",
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
