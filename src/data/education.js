// ─── EDUCATION DATA ───────────────────────────────────────────────────────
// Supports multiple entries (e.g. degree + master's later).
// Each entry renders as its own card in the Education section.
// Add entries to the array in reverse-chronological order (newest first).

export const EDUCATION = [
  {
  degree: "MSc Finance",
  institution: "University of Bath",
  dates: "2023 - 2025",
  grade: "Merit",

  modules: [
    "Investment and Portfolio Management",
    "Financial Engineering",
    "Risk Modelling and Analysis",
    "Introduction to Quantitative Finance",
    "Programming for Finance",
    "Econometrics and Data Analysis",
    "Financial Statement Analysis and Equity Valuation"
  ],

  certifications: [
    "Bloomberg Global Trading Challenge",
    "AmplifyME Global Markets Simulation",
    "AmplifyME M&A and IPO Simulation"
  ],
},
  {
    degree: "Bachelor of Business Administration",
    institution: "ICFAI Business School",
    dates: "2019 – 2022",
    grade: "First Class",
  
    modules: [
  "Financial Management",
  "Financial Accounting",
  "Security Analysis and Portfolio Management",
  "Derivatives"
],


    certifications: [
      "NISM Series Certification in Financial Markets",
  "Head of Operations, Arena Sports Club",
    ],
  },

  // ── ADD FURTHER EDUCATION ENTRIES BELOW ───────────────────────────────
  // {
  //   degree: "",
  //   institution: "",
  //   dates: "",
  //   grade: "",
  //   modules: [],
  //   dissertation: "",      // Set to "" or omit if not applicable
  //   certifications: [],
  // },
];
