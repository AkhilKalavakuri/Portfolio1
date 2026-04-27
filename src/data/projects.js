// ─── PROJECTS DATA ────────────────────────────────────────────────────────
// To add a new project: copy one object below, paste it at the end of the
// array, and fill in your details. The page renders them in order.
//
// riskTag options: "High" | "Medium" | "Low"
// recommendation options: "Approve" | "Monitor" | "Reject"

export const PROJECTS = [
  {
    title: "Pennine Foods Ltd — SME Term Loan Assessment",
    industry: "Food Manufacturing / SME",
    insight: "Structured £500k equipment finance approval with covenant breach identified under stress scenario",
    riskTag: "Low",

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
      "Facility approved subject to 1.25x annual DSCR covenant with 60-day cure and cash lock-up on breach, personal guarantees from all three directors, and key-man life insurance on MD. Base case DSCR of 3.61x (FY2025) provides 2.36x headroom above covenant. Existing leverage is low — net debt/EBITDA moves from 0.13x in FY2022 to net cash by FY2024..",
  },

  {
    title: "Manufacturing Company Debt Refinancing",
    industry: "Manufacturing / Mid-market",
    insight: "Free cash flow strength masked by capitalised R&D — adjusted EBITDA 23% lower",
    riskTag: "Medium",

    summary:
      "Evaluated a £6.8m term loan refinancing for a precision engineering firm serving the aerospace sector. The business presented strong headline EBITDA but required adjusted analysis to strip non-recurring items and capitalised development costs.",

    outcome:
      "Adjusted EBITDA of £1.2m vs. reported £1.56m. Leverage ratio of 5.7x adjusted (vs. 4.4x unadjusted). Interest coverage of 2.1x. Order book visibility of 14 months provided partial offset to leverage concerns.",

    tools: [
      "Excel modelling",
      "Ratio analysis",
      "Cash flow forecasting",
      "Financial statement analysis",
    ],

    recommendation: "Approve",

    keyRisks: [
      "Leverage elevated at 5.7x adjusted EBITDA — above preferred 5.0x threshold",
      "Customer concentration: top 3 clients account for 74% of revenue",
      "Capital-intensive model; maintenance capex of £380k p.a. constrains FCF",
    ],

    reasoning:
      "Recommend approval with conditions: 5.5x leverage covenant step-down schedule, quarterly management accounts, and cross-default clause. Strong order book and long-standing client relationships justify approval above standard leverage limit.",
  },

  {
    title: "Property Developer Bridging Facility",
    industry: "Real Estate / Development",
    insight: "LTV sensitivity analysis revealed 15% stress scenario breaches security cover",
    riskTag: "High",

    summary:
      "Assessed a £1.1m short-term bridging facility for a residential developer completing a 6-unit scheme in the South East. Exit route dependent on full unit sales within 9 months of practical completion.",

    outcome:
      "GDV of £2.4m at base case yields LTV of 45.8%. Under a 15% GDV stress (aligned to 2008 correction magnitude), LTV rises to 53.9% — breaching the 50% security covenant. Loan-to-cost of 68% remains within policy.",

    tools: [
      "Excel modelling",
      "Stress testing",
      "Cash flow forecasting",
      "Ratio analysis",
    ],

    recommendation: "Reject",

    keyRisks: [
      "Single exit route — no refinance fallback if sales velocity disappoints",
      "Developer has one prior project; limited track record at this scale",
      "GDV stress breach at 15% decline — below historical regional stress scenarios",
      "Planning uplift risk on two units still pending discharge of conditions",
    ],

    reasoning:
      "Decline in current structure. Would reconsider with GDV stress covenant reset to 55% LTV, phased drawdown tied to construction milestones, and QS monitoring. Alternatively, require presales of ≥2 units prior to first drawdown.",
  },

  {
    title: "Technology Start-up Venture Debt",
    industry: "Technology / VC-backed",
    insight: "Runway analysis showed 7-month buffer insufficient without Series B confirmation",
    riskTag: "Medium",

    summary:
      "Reviewed a £500k venture debt facility for a SaaS business with ARR of £820k, growing at 85% YoY. Business is pre-profit with VC backing from a Tier 2 fund. Repayment reliant on Series B close within 9 months.",

    outcome:
      "Monthly burn rate of £95k gives 8.4 months of runway at draw. ARR growth trajectory supports a £6–8m Series B valuation range. NRR of 118% indicates strong product-market fit. However, 3 of 5 largest customers are on month-to-month contracts.",

    tools: [
      "Cash flow forecasting",
      "Ratio analysis",
      "Financial statement analysis",
      "Stress testing",
    ],

    recommendation: "Approve",

    keyRisks: [
      "Repayment dependent on Series B close — binary risk event",
      "Month-to-month contracts for 41% of ARR creates churn exposure",
      "Burn rate increasing QoQ as headcount scales ahead of revenue",
    ],

    reasoning:
      "Approve with warrant coverage of 0.5% and Series B milestone covenant (close within 9 months or facility becomes immediately callable). Strong KPI profile and investor syndicate quality partially mitigate pre-profit risk.",
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
  //   recommendation: "Approve" | "Monitor" | "Reject",
  //   keyRisks: [],
  //   reasoning: "",
  // },
];
