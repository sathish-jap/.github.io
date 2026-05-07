// ================================================================
// KOGNIVA.AI — UPCOMING SESSIONS DATA
// ================================================================
// Edit this file to manage what appears on the homepage.
//
// TO ADD A SESSION: Copy one session object and update values.
// TO REMOVE A SESSION: Delete the entire { ... } block.
// TO SHOW "NO UPCOMING SESSIONS": Set the array to empty: []
//
// Fields:
//   title       — Session name (shown as heading)
//   subtitle    — One-line descriptor
//   type        — "Weekend Cohort", "Live Session", "Workshop", etc.
//   audience    — Who it's for (shown as a tag)
//   dates       — Date string, e.g. "9–10 May 2026"
//   time        — Time + timezone, e.g. "10 AM – 12 PM UAE (GMT+4)"
//   duration    — e.g. "2 hrs/day · 4 hrs total"
//   price       — e.g. "AED 200" or "USD 100"
//   seatsLeft   — Number. Shows urgency indicator if ≤ 5.
//   registerUrl — Google Form or direct link
//   whatsappMsg — Pre-filled WhatsApp message text
//   highlights  — Array of 3–5 bullet strings
//   tag         — Small urgency tag (e.g. "Filling Fast"). Set null to hide.
// ================================================================

const UPCOMING_SESSIONS = [
  {
    id: 1,
    title: "Build a Working AI App Using Claude Code",
    subtitle: "Weekend Cohort · For IT Leaders & Managers",
    type: "Weekend Cohort",
    audience: "IT Leaders & Managers",
    dates: "9–10 May 2026",
    time: "10 AM – 12 PM UAE (GMT+4)",
    duration: "2 hrs/day · 4 hrs total",
    price: "AED 200",
    seatsLeft: 5,
    registerUrl: "https://forms.gle/TeBTQEZjVdeLxhaQ9",
    whatsappMsg: "Hello Sathish, I'm interested in the Claude Code weekend cohort (9–10 May)",
    highlights: [
      "Build a working AI chatbot from scratch — no coding required",
      "Live on Google Meet · Recording + PDF takeaway included",
      "Small cohort of 5 — direct access to Sathish",
      "100% refund if unsatisfied after Day 1"
    ],
    tag: "Filling Fast"
  }
  // Add more sessions below this line...
];
