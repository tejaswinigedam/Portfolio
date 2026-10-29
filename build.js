// Portfolio site generator — writes index.html + case study pages from structured data.
const fs = require("fs");
const path = require("path");

const OUT = __dirname;
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const site = {
  name: "Tejaswini Gedam",
  role: "Product & UX Designer",
  tagline: "I design clear, human-centered products for complex, information-heavy workflows.",
  email: "tejugedam93@gmail.com",
  about: [
    "I'm a product designer who enjoys untangling messy, high-stakes workflows — tender management, clinical records, grading, healthcare staffing — and turning them into experiences that feel calm and obvious to use.",
    "Much of my recent work sits at the intersection of AI and human judgment: designing systems where automation genuinely reduces effort while keeping the person informed and in control of the decisions that matter.",
    "I've taken products from 0→1 as a founding designer and contributed to established teams — moving from research and problem validation through workflows, IA, and high-fidelity UI, working closely with PMs and engineers along the way.",
  ],
  approach: [
    { t: "Understand the real workflow", d: "I start with research — users, market, competitors — and map the end-to-end process before touching a screen. The design follows the workflow, not the other way around." },
    { t: "Reduce complexity, not control", d: "Especially with AI, I focus on where automation helps versus where the human must stay in charge. Clarity about what's done, pending, and needs attention beats raw feature count." },
    { t: "Structure information for findability", d: "In dense, data-heavy products, hierarchy and IA do the heavy lifting. I design so the right information surfaces at the right moment without overwhelming the user." },
    { t: "Ship with the team", d: "I iterate closely with product and engineering, pressure-testing designs against technical constraints so what ships stays true to the intent." },
  ],
  projects: [
    {
      id: "Meetup",
      title: "Meetup — UX Research for Indian Market Adoption",
      short: "A mixed-methods research study into why Meetup struggles to earn trust with users in India.",
      who: "Three segments of the Indian event-going public: people who discover events offline only, people who use other platforms (Instagram, Eventbrite, WhatsApp groups) but not Meetup, and current or past Meetup users.",
      problem: [
        "Meetup has not gained meaningful traction in India. New users struggle to navigate the app, can't tell which events or groups are credible, and hesitate to join communities of strangers. Existing users see inconsistent attendance, thin group diversity in their area, and engagement that doesn't hold.",
        "The goal was to uncover the specific barriers behind both patterns — new-user hesitation and existing-user drop-off — and identify where usability, trust, and clarity could be improved so more people in India could confidently adopt and keep using Meetup.",
      ],
      roleLead: "Primary Researcher & Moderator — I owned the study end to end: scoping, recruitment, moderation, synthesis, and reporting, as a solo researcher on an academic UX research course project.",
      role: [
        "Defined the research goals and problem statement, and mapped ~40 research questions against them before writing a single interview question.",
        "Ran a competitive study across 20 Indian and global event platforms to establish what \"credible\" looks like in this market.",
        "Designed the study protocol: participant segments, screener, discussion guide, and combined interview + think-aloud usability tasks.",
        "Recruited 8 participants across 3 segments through personal and community outreach, managing drop-offs and scheduling as an ongoing risk, not a fixed plan.",
        "Moderated 9 remote sessions (45–91 minutes each) over 4 days, adapting in real time to technical issues, interruptions, and participants who needed redirecting.",
        "Synthesized transcripts into 48 severity-rated usability and trust issues, then separated verbatim findings from the underlying insight behind each.",
        "Consolidated findings into prioritized, open-ended strategic directions across 5 thematic goals, and delivered a final report and presentation.",
      ],
      timeline: "3 weeks · Sep 2026",
      permission: "Academic course project (MDES UX) — participant data anonymized.",
      research: {
        hookTitle: "Why isn't Meetup catching on in India?",
        hookSub:
          "A solo, 9-session mixed-methods study — competitive analysis, interviews, and think-aloud usability testing across three user segments — that traced adoption failure down to specific trust and clarity breaks, then prioritized what to fix first.",
        snapshot: [
          { label: "Problem", cls: "problem", text: "New users can't tell which events or groups are credible; existing users churn — attendance is inconsistent and engagement doesn't hold." },
          { label: "Approach", cls: "focus", text: "Competitive study + 9 remote interview-and-usability sessions across 3 segments, synthesized into severity-rated findings." },
          { label: "Outcome", cls: "outcome", text: "48 rated usability/trust issues, consolidated into prioritized strategic directions across 5 research goals." },
        ],
        goals: [
          { n: "A", title: "Event attitudes & motivations", text: "How people in India perceive social/interest-based events — their motivations, expectations, and concerns about meeting strangers." },
          { n: "B", title: "Decision-making & trust", text: "How people discover, evaluate, and decide to join events, and what drives trust, hesitation, and willingness to participate." },
          { n: "C", title: "End-to-end event experience", text: "The full journey before, during, and after an event — what makes it feel appealing, safe, valuable, and worth repeating." },
          { n: "D", title: "Sustained engagement & user types", text: "What drives or prevents continued use, and how new, occasional, and long-term Meetup users differ." },
          { n: "E", title: "Meetup-specific opportunities", text: "Usability, trust, and clarity issues within the app itself, and where India-specific adoption opportunities sit." },
        ],
        segments: [
          { name: "Curious Event Explorers", desc: "Interested in events but have never used an online platform to find or join one — discover through friends, work, or college.", count: "2 participants" },
          { name: "Online Event Attenders", desc: "Actively use other platforms (Instagram, Eventbrite, BookMyShow, WhatsApp groups) to find events, but have never used Meetup.", count: "2 participants" },
          { name: "Meetup Users", desc: "Current or past Meetup users — some still active, some who drifted away from regular use.", count: "4 participants" },
        ],
        methods: [
          { name: "Semi-structured interviews", text: "Attitudes, motivations, concerns, and self-reported behavior around discovering and attending events." },
          { name: "Moderated usability testing", text: "Observed how participants explored, evaluated, and decided on events inside the live Meetup app." },
          { name: "Combined sessions", text: "Interview and usability testing run back-to-back with the same participant, to compare stated expectations against observed behavior." },
          { name: "Self-reported quantitative inputs", text: "Frequency and usage patterns captured as indicative signals only — not treated as statistically representative." },
        ],
        timelinePlanned: [
          "Day 1–2 — Finalize research plan, scope, and discussion guide",
          "Day 3 — Recruitment & scheduling",
          "Day 4–5 — Conduct usability + interview sessions",
          "Day 6 — Data synthesis",
          "Day 7 — Research report & recommendations",
        ],
        timelineActual:
          "9 sessions ran over 4 days in the first week of September 2026, 28 to 91 minutes each depending on engagement — including a technical pivot to desktop when a participant's phone couldn't share screen, and a follow-up session added for one participant.",
        competitive: [
          { name: "Eventbrite / Insider.in", note: "Smooth ticketing and professional, reliable payment flows set the bar for perceived legitimacy — but feel transactional, not community-driven." },
          { name: "Instagram / WhatsApp & Telegram groups", note: "Where Indian users actually discover and trust events — highly visual, peer-verified, instant — but has no formal RSVP or structure." },
          { name: "BookMyShow", note: "High brand trust and polish from ticketing entertainment at scale, which Meetup's newer, less-polished listings can't match on sight." },
          { name: "Misfits / Hurdle / WMS", note: "Small, activity-first hobby platforms — strong local relevance, but little reach or brand recognition outside their niche." },
        ],
        findingGroups: [
          {
            theme: "Brand identity & onboarding clarity",
            illo: `<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg">
              <rect x="36" y="20" width="128" height="150" rx="16" fill="none" stroke="var(--ink)" stroke-width="2"/>
              <rect x="52" y="42" width="96" height="60" rx="8" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
              <circle cx="100" cy="62" r="10" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"/>
              <rect x="66" y="78" width="68" height="5" rx="2.5" fill="var(--line)"/>
              <rect x="66" y="88" width="44" height="5" rx="2.5" fill="var(--line)"/>
              <rect x="60" y="112" width="88" height="26" rx="13" fill="var(--accent)"/>
              <text x="104" y="129" text-anchor="middle" font-family="var(--mono)" font-size="9" font-weight="700" fill="var(--accent-ink)">WHAT BRINGS YOU?</text>
              <rect x="52" y="146" width="96" height="14" rx="7" fill="none" stroke="var(--line)" stroke-width="1.5"/>
              <path d="M170 90 h56" stroke="var(--ink-soft)" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>
              <path d="M218 82 l8 8 -8 8" stroke="var(--ink-soft)" stroke-width="1.5" fill="none"/>
              <rect x="240" y="34" width="320" height="112" rx="14" fill="var(--paper)" stroke="var(--violet)" stroke-width="2"/>
              <path d="M254 34 l14 -14 v14 z" fill="var(--paper)" stroke="var(--violet)" stroke-width="2"/>
              <text x="266" y="72" font-family="var(--serif)" font-style="italic" font-size="22" fill="var(--ink)">"Is this a dating app?"</text>
              <text x="266" y="98" font-family="var(--mono)" font-size="11" fill="var(--ink-soft)">SWIPE-CARD IMAGERY + VAGUE INTENT COPY</text>
              <text x="266" y="116" font-family="var(--mono)" font-size="11" fill="var(--ink-soft)">READ AS A ROMANTIC-NETWORKING APP,</text>
              <text x="266" y="134" font-family="var(--mono)" font-size="11" fill="var(--violet)" font-weight="700">NOT AN EVENT-DISCOVERY PLATFORM</text>
            </svg>`,
            issues: [
              { quote: "Dating app kind of a thing? … I'm thinking now it [Meetup] is more like Bumble.", person: "Raghav", context: "First launch, before any onboarding step", severity: 5 },
              { quote: "I thought it's a dating app… Is this app for booking or for exploring events?", person: "Arpita", context: "Initial impression, app name + imagery", severity: 5 },
              { quote: "I thought the free option is compulsory and I have to pay only… I couldn't see that cross up there.", person: "Rohan / Raghav", context: "Meetup Plus paywall — close button nearly invisible", severity: 5 },
            ],
          },
          {
            theme: "Search & discovery relevance",
            illo: `<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg">
              <rect x="36" y="24" width="260" height="40" rx="20" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
              <circle cx="60" cy="44" r="7" fill="none" stroke="var(--ink-soft)" stroke-width="2"/>
              <path d="M65 49 l6 6" stroke="var(--ink-soft)" stroke-width="2"/>
              <text x="80" y="49" font-family="var(--mono)" font-size="14" fill="var(--ink)">"dance"</text>
              <path d="M166 64 v20" stroke="var(--ink-soft)" stroke-width="1.5" stroke-dasharray="4 4"/>
              <path d="M158 78 l8 10 8 -10" stroke="var(--ink-soft)" stroke-width="1.5" fill="none"/>
              <rect x="36" y="98" width="260" height="66" rx="10" fill="var(--paper)" stroke="var(--line)" stroke-width="1.5"/>
              <rect x="50" y="112" width="38" height="38" rx="6" fill="var(--line)"/>
              <text x="98" y="128" font-family="var(--font)" font-size="13" font-weight="700" fill="var(--ink)">Skating — Cubbon Park</text>
              <text x="98" y="146" font-family="var(--mono)" font-size="10" fill="var(--ink-soft)">SUGGESTED RESULT</text>
              <path d="M50 112 l38 38 M88 112 l-38 38" stroke="#b3261e" stroke-width="2"/>
              <rect x="340" y="60" width="260" height="70" rx="14" fill="var(--paper)" stroke="#b3261e" stroke-width="2"/>
              <text x="470" y="92" text-anchor="middle" font-family="var(--serif)" font-style="italic" font-size="22" fill="var(--ink)">0 of 12 relevant</text>
              <text x="470" y="114" text-anchor="middle" font-family="var(--mono)" font-size="10.5" fill="var(--ink-soft)">LITERAL KEYWORD MATCH FAILS —</text>
              <text x="470" y="130" text-anchor="middle" font-family="var(--mono)" font-size="10.5" fill="var(--ink-soft)">READS AS A BROKEN PRODUCT</text>
            </svg>`,
            issues: [
              { quote: "It was very weird to see salsa classes when I searched for train events… gave up on relevancy.", person: "Sai", context: "Searched \"trains\"", severity: 5 },
              { quote: "I search for organic food… it shows me New Delhi… I would have closed here in the first [go].", person: "Pranoy", context: "Searched \"organic food\"", severity: 5 },
              { quote: "Money has always been the primary filter for me… there's not a filter that's available here.", person: "Sai / Anushree", context: "Looking for a budget filter", severity: 5 },
            ],
          },
          {
            theme: "Trust & credibility signals",
            illo: `<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg">
              <rect x="36" y="30" width="230" height="130" rx="14" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
              <rect x="52" y="46" width="198" height="70" rx="8" fill="var(--line)"/>
              <rect x="52" y="126" width="130" height="10" rx="5" fill="var(--ink)"/>
              <rect x="52" y="142" width="80" height="8" rx="4" fill="var(--line)"/>
              <rect x="196" y="124" width="54" height="24" rx="12" fill="var(--accent)"/>
              <text x="223" y="140" text-anchor="middle" font-family="var(--mono)" font-size="10" font-weight="700" fill="var(--accent-ink)">FREE</text>
              <path d="M198 128 l50 18 M198 146 l50 -18" stroke="#b3261e" stroke-width="2"/>
              <path d="M280 96 h56" stroke="var(--ink-soft)" stroke-width="1.5" stroke-dasharray="4 4"/>
              <path d="M328 88 l8 8 -8 8" stroke="var(--ink-soft)" stroke-width="1.5" fill="none"/>
              <rect x="352" y="46" width="252" height="94" rx="14" fill="var(--paper)" stroke="#b3261e" stroke-width="2"/>
              <circle cx="386" cy="76" r="14" fill="none" stroke="#b3261e" stroke-width="2"/>
              <path d="M380 76 h12 M386 70 v12" stroke="#b3261e" stroke-width="2"/>
              <text x="414" y="72" font-family="var(--font)" font-size="14" font-weight="700" fill="var(--ink)">External link</text>
              <text x="414" y="90" font-family="var(--serif)" font-style="italic" font-size="17" fill="var(--ink)">₹899 to book</text>
              <text x="386" y="118" font-family="var(--mono)" font-size="10.5" fill="var(--ink-soft)">CARD SAYS FREE, LINK CHARGES —</text>
              <text x="386" y="132" font-family="var(--mono)" font-size="10.5" fill="#b3261e" font-weight="700">READS AS CLICKBAIT</text>
            </svg>`,
            issues: [
              { quote: "Now it's confusing that you were booking this via the app or you're booking this via the link… so it's sort of a click bait.", person: "Arpita", context: "Event card said \"Free\"; external link charged ₹899", severity: 5 },
              { quote: "I lose credibility of the platform immediately when I see visuals like this.", person: "Pranoy", context: "Unpolished event thumbnails while scanning a list", severity: 4 },
              { quote: "The last comment was on 9th February… I'm not sure if the group is even active or not.", person: "Rohan", context: "Judging whether a group was worth joining", severity: 4 },
            ],
          },
          {
            theme: "Data privacy & comfort",
            illo: `<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg">
              <rect x="36" y="40" width="270" height="104" rx="14" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
              <text x="56" y="68" font-family="var(--mono)" font-size="11" font-weight="700" letter-spacing="1" fill="var(--ink-soft)">DATE OF BIRTH</text>
              <rect x="56" y="80" width="230" height="36" rx="8" fill="var(--paper)" stroke="var(--line)" stroke-width="1.5"/>
              <text x="72" y="103" font-family="var(--mono)" font-size="15" fill="var(--ink)">01 / 01 / ----</text>
              <circle cx="256" cy="98" r="12" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"/>
              <path d="M251 98 a5 5 0 0 1 10 0 v4 h-10 z" fill="none" stroke="var(--ink-soft)" stroke-width="1.5"/>
              <path d="M330 92 h48" stroke="var(--ink-soft)" stroke-width="1.5" stroke-dasharray="4 4"/>
              <path d="M372 84 l8 8 -8 8" stroke="var(--ink-soft)" stroke-width="1.5" fill="none"/>
              <rect x="394" y="44" width="210" height="96" rx="14" fill="var(--paper)" stroke="var(--sky-deep)" stroke-width="2"/>
              <text x="499" y="80" text-anchor="middle" font-family="var(--serif)" font-style="italic" font-size="19" fill="var(--ink)">"Placeholder DOB"</text>
              <text x="499" y="102" text-anchor="middle" font-family="var(--mono)" font-size="10.5" fill="var(--ink-soft)">USERS ENTER FAKE DATA TO</text>
              <text x="499" y="118" text-anchor="middle" font-family="var(--mono)" font-size="10.5" fill="var(--ink-soft)">BYPASS A MANDATORY FIELD</text>
            </svg>`,
            issues: [
              { quote: "I am not comfortable giving my, you know, birthday information to anyone.", person: "Sai", context: "Mandatory date-of-birth field during onboarding", severity: 4 },
              { quote: "I would just give something like a placeholder 1st January… not actually my birthday.", person: "Sai", context: "Working around a mandatory field", severity: 4 },
              { quote: "Every single company or person is trying to get your phone number… you are going to be part of some scrap span groups.", person: "Raghav", context: "RSVP flow requesting contact details", severity: 4 },
            ],
          },
        ],
        insights: [
          { theme: "Trust & credibility", severity: 5, direction: "Signal reliability, authenticity, and quality through host, event, and peer validation — not just polish." },
          { theme: "Clarity of purpose / \"social bridge\"", severity: 5, direction: "Make event purpose and expected outcomes immediately understandable — users need a concrete reason to justify attending." },
          { theme: "RSVP / transactional ambiguity", severity: 5, direction: "Reduce uncertainty around commitment and attendance (native RSVP vs. external booking link) while keeping flexibility." },
          { theme: "Search & discovery relevancy", severity: 5, direction: "Improve relevance, filtering, and alignment with user intent — literal keyword mismatches actively damage credibility." },
          { theme: "Onboarding / brand identity", severity: 5, direction: "Communicate the platform's value proposition and purpose clearly, without the ambiguous social imagery that reads as a dating app." },
          { theme: "Safety signals", severity: 5, direction: "Increase perceived safety and comfort, particularly for first-time attendees and women going alone." },
          { theme: "Ecosystem integration", severity: 5, direction: "Connect Meetup to the WhatsApp/Instagram ecosystem it already competes with, rather than isolating the experience." },
        ],
        lessons: {
          methodology: [
            "Findings are the \"what\" (6/10 users misread search results); insights are the \"why\" (they trust literal keyword matching). Collapsing the two turns a quote into a false conclusion.",
            "Severity ratings (1–5) matter as much as the issues themselves — naming every problem isn't the same as knowing which one to fix first.",
            "Synthesis should start after the first few sessions, not after the last one — early patterns sharpened later interviews and kept the final analysis from feeling overwhelming.",
          ],
          market: [
            "Visual polish is the primary trust proxy in India — a stock photo or rough thumbnail reads as \"not legitimate,\" instantly.",
            "Distance and travel time beat price as the real dealbreaker in Indian metros — users calculate travel + food + ticket as one number before committing.",
            "Meetup is mostly used as a secondary logistical anchor, not primary discovery — the real discovery already happened on WhatsApp or Instagram.",
            "Success on the platform often causes churn: once a group works, people take it to a private WhatsApp thread and stop opening the app.",
          ],
          personal: [
            "Recruitment is a research risk to plan for, not a logistics detail to assume away — it took far longer than expected and needed buffer participants and parallel channels from day one.",
            "AI tools sped up structuring qualitative data but made semantic mismatches and lost nuance on conversational transcripts — researcher judgment stayed non-negotiable.",
          ],
        },
        takeaway:
          "The app wasn't failing to build community — it was failing to prove, in the first ten seconds, that the community was real. A search for \"dance\" that returns skating, a thumbnail that looks like stock art, an RSVP button next to an external payment link: none of these read as UI bugs to a first-time Indian user. They read as reasons not to trust the platform with an evening, or a phone number.",
      },
      scores: {
        "Interesting problem": 5,
        "Good UX thinking": 4,
        "Strong visuals": null,
        "Interesting process": 5,
        "Measurable impact": null,
      },
      notes: [
        "Interesting problem — Diagnosing why a global, well-funded platform fails to earn trust in a specific market, where the barrier isn't a missing feature but a credibility gap at nearly every decision point.",
        "Good UX thinking — Structured a 9-session mixed-methods study around explicit goals and research questions, and kept behavioral findings analytically separate from the insight behind them rather than treating a quote as a conclusion.",
        "Interesting process — Ran competitive analysis, recruitment, moderation, and synthesis solo, and treated recruitment delays and mid-session curveballs as research risk to manage rather than obstacles to the \"real\" work.",
      ],
    },
    {
      id: "BidFlow",
      title: "Designing the workflow behind AI-powered tender management",
      product: "BidFlow",
      scrollFx: true,
      productDesc: "AI-powered tender analysis and bid-management software",
      scope: "Product thinking, workflow design, information architecture, interaction design and UI",
      tags: [
        "0→1 Product Design",
        "Founding Designer",
        "AI-Native Design",
        "Designing for AI Limitations",
        "Human + AI Collaboration",
        "Enterprise UX",
        "Designing for Trust & Verification",
      ],
      images: {
        cover: "img/bidflow-dashboard.jpg",
        coverCaption: "The Opportunities dashboard — pipeline, deadline countdown, and the stage tracker that shows what's done, pending, and needs attention. (Client details anonymized.)",
        a: "img/bidflow-register.jpg",
        aCaption: "Registering a tender: a guided 7-step flow with “Register with AI” to read the bid document and pre-fill the details.",
        b: "img/bidflow-checklist.jpg",
        bCaption: "The checklist turns a tender into categorized, assignable tasks — each with an owner, due date, status, and linked file.",
      },
      short: "Designing BidFlow from 0→1 to help tender teams understand requirements, verify eligibility, and turn them into actionable work.",
      designed:
        "An AI-powered tender management system that helps companies move from a manual bid process to a smarter, more timely, automated, and accurate workflow. It helps teams manage tenders efficiently, reduce repetitive manual work, organize critical information, and ensure bids are completed accurately and on time.",
      who: "Companies and teams involved in tender and bid management — particularly those handling multiple tenders, documents, deadlines, and approval processes.",
      problem: [
        "Traditional tender and bid management involves a lot of manual work, scattered information, repetitive tasks, and tight deadlines. Teams must review large amounts of tender documentation, identify requirements, coordinate with stakeholders, and ensure every part of a bid is completed correctly and submitted on time.",
        "The goal was to design a centralized, AI-powered workflow that reduces manual effort, minimizes errors, improves visibility across the bidding process, and helps teams manage tenders more efficiently.",
      ],
      roleLead: "Founding Designer — I took the idea from an early concept to a structured, validated, and designed product, owning the full 0→1 process.",
      role: [
        "Conducting user and market research to understand the tender and bid management space.",
        "Performing competitor research and analysis to identify existing solutions, gaps, and opportunities.",
        "Converting research findings into key insights and product opportunities.",
        "Defining and mapping the end-to-end workflows required for the product.",
        "Exploring and structuring different use cases and scenarios for real-world bidding processes.",
        "Defining product features and functionality based on research and business requirements.",
        "Designing the overall UX and UI, from early concepts and IA to detailed product interfaces.",
        "Creating and iterating on user flows, wireframes, prototypes, and high-fidelity designs.",
        "Working closely with the Product Manager and Developers throughout development.",
        "Continuously refining the product based on feedback, technical constraints, and evolving requirements.",
      ],
      timeline: "7 months",
      permission: "",
      explainer: {
        snapshot: [
          { label: "Problem", cls: "problem", text: "Tender teams spent hours reading lengthy tender documents, cross-checking eligibility, gathering documents, and manually turning requirements into bid tasks. The process was fragmented, making it easy to miss requirements and slowing down decisions." },
          { label: "Solution", cls: "focus", text: "A unified bid workflow that uses AI to extract and organize tender requirements, surface eligibility gaps, and turn requirements into actionable tasks and document checklists, while keeping users in control of verification and decisions." },
          { label: "Impact", cls: "outcome", text: "The product moved from zero to its first customers, and the team observed a substantial reduction in the time from receiving a tender to preparing a proposal. A repeatable workflow now connects tender analysis to bid preparation." },
        ],
        scene: {
          context: {
            beat: "Context",
            heading: "First, what is a tender?",
            notes: [
              "Government / enterprise needs something",
              "Publishes a tender",
              "Companies compete to win the contract",
            ],
            closing:
              "The company I worked with helps businesses discover these opportunities and manage the work required to bid for them.",
          },
          team: {
            beat: "The team",
            heading: "So what does a tender team actually do?",
            steps: [
              { title: "Find an opportunity", text: "One tender document arrives on an otherwise empty desk." },
              { title: "Understand requirements", text: "Pages turn. Clauses get highlighted. Tabs mark the sections that matter." },
              { title: "Check eligibility", text: "A checklist appears beside the document, with conditions to verify." },
              { title: "Prepare the bid", text: "Requirements peel away from the document and become tasks: find the certificate, confirm the owner, get the signature." },
              { title: "Submit", text: "The team assembles the final documents, but the desk is still full of all the work it took to get there." },
            ],
            final:
              "The interesting part starts after a tender is found: the team has to turn a long document into a clear set of requirements, checks, documents and actions.",
          },
        },
        challenge: {
          beat: "The challenge",
          heading: "Turning a tender into an actionable plan",
          paragraphs: [
            "Preparing a tender response involved much more than reading a document and writing a proposal.",
            "Bid managers had to review lengthy tender documents, identify eligibility criteria, evaluate compliance against their company's capabilities, track deadlines, and identify every document required for submission.",
            "For each required document, they also needed to determine whether it already existed, where to source it, which team or person owned it, and whether it needed to be newly prepared, reviewed, signed or stamped. Much of this work involved manually reading, copying, organising and cross-checking information across documents and teams.",
          ],
          opportunityHeading: "The design opportunity",
          opportunityIntro:
            "The engineering team was building an AI agent to analyse tender documents. My challenge was to translate that analysis into an experience that helped bid managers make decisions and move work forward. Two questions guided the design:",
          questions: [
            "How might we make AI-extracted tender information understandable, verifiable and actionable?",
            "How might we help bid managers coordinate the work required to prepare a complete tender response?",
          ],
          closing:
            "The opportunity was not simply to automate document reading. It was to connect tender analysis to the entire preparation workflow.",
        },
        discovery: {
          beat: "Discovery",
          heading: "Understanding the bid manager's workflow",
          paragraphs: [
            "I examined tender documents and the activities involved in preparing a response to understand how information moved from the original tender into the team's day-to-day work.",
            "This helped frame the problem beyond document analysis. Extracted information needed to support several interconnected activities: eligibility assessment, compliance checks, document collection, task coordination and deadline management.",
          ],
          questionsHeading: "Key areas of investigation",
          questions: [
            "How could requirements be extracted and organised into a useful summary?",
            "How could bid managers verify extracted information against the original tender?",
            "How could the product distinguish between documents already available and those requiring further action?",
            "How could the analysis translate into a coordinated plan for completing the bid?",
          ],
          quotesHeading: "In their words",
          quotes: [
            {
              title: "Missing a clause because the requirement is buried in another section",
              role: "Tender analyst, Indian infrastructure company",
              quote: [
                "When I start analysing a tender, I usually read the NIT first, then the eligibility criteria, technical specifications, and commercial conditions. But the problem is that the requirements are not arranged in the order in which I need to understand them. I might read the experience criteria on page 20, and then find a condition related to that experience in an annexure on page 146.",
                "For example, the main section might say that bidders must have completed similar projects above a certain value. It sounds straightforward. But somewhere else, the tender defines what counts as a similar project, which completion period is acceptable, and what information the certificate must contain. If I read those sections several hours apart, I have to remember that they are connected.",
                "I end up searching the PDF repeatedly, checking the table of contents, following references, and rereading clauses just to make sure I have not missed a condition. Even after finishing the document, I am not always confident that I have found every requirement relevant to a particular eligibility criterion.",
              ],
              problem: "The document does not present related requirements together. The analyst must manually discover and connect clauses distributed across the document.",
            },
            {
              title: "Understanding what a clause actually means",
              role: "Bid manager, manufacturing MSME",
              quote: [
                "The hardest part is not always finding the clause. Sometimes I find it immediately, but I still don't know how it should be interpreted. A tender might use terms like ‘similar nature of work’, ‘successfully completed’, or ‘average annual turnover’ without making the practical meaning obvious in that particular context.",
                "For instance, if the tender asks for experience in similar work, does supplying the equipment alone count, or does the authority expect installation and commissioning as well? The answer may depend on the definition given somewhere else in the tender. I have to read the surrounding clauses and look for qualifications that change the meaning.",
                "I don't want a tool that simply highlights the sentence containing the word ‘experience’. I need help understanding the complete condition, including its exceptions, definitions, and references. Otherwise, I still have to do the same interpretation work manually.",
              ],
              problem: "Locating a clause is different from interpreting it in context. The challenge is understanding definitions, qualifiers, exceptions, and the precise scope of a requirement.",
            },
            {
              title: "Identifying contradictions between different sections",
              role: "Contracts analyst, Indian EPC contractor",
              quote: [
                "While reviewing a tender, I sometimes come across two clauses that appear to say different things. One section may specify a delivery period of 90 days, while another schedule appears to give 120 days. At first glance, it looks like a contradiction, but I cannot conclude that immediately. One might refer to delivery and the other to overall completion, or the clauses might genuinely be inconsistent.",
                "The difficulty is that I have to identify these differences myself. I search for the relevant terms, compare the surrounding paragraphs, and follow any references to the contract conditions. The wording may be different enough that a basic keyword search does not bring both clauses to my attention.",
                "What takes time is establishing whether two statements are actually inconsistent, whether one qualifies the other, or whether they apply to different circumstances. I would like to see potentially conflicting clauses together, with their exact locations, so I can examine them instead of discovering them accidentally during a second or third read.",
              ],
              problem: "The analyst must detect potential contradictions and distinguish genuine conflicts from requirements that apply in different contexts.",
            },
            {
              title: "Understanding which requirements are mandatory and which are not",
              role: "Technical bid analyst, electrical equipment supplier",
              quote: [
                "A tender can contain hundreds of technical requirements, and not every requirement has the same consequence. Some are mandatory eligibility conditions, some are technical pass/fail requirements, some contribute to evaluation scores, and others describe contractual obligations after award.",
                "When I read a clause, I have to establish what role it plays in the evaluation. If I interpret a scored feature as compulsory, I might incorrectly conclude that our product is ineligible. On the other hand, if I treat a mandatory condition as merely desirable, we could prepare a bid that fails technical evaluation.",
                "The difficulty is that these distinctions are not always presented in one consistent format. The document might describe a condition in the technical section and explain its evaluation consequence somewhere else. I need to connect the requirement to the relevant evaluation rules rather than classify it based on a single sentence.",
              ],
              problem: "Classifying requirements according to their actual role and consequences, using the complete tender rather than isolated wording.",
            },
            {
              title: "Cross-references make the meaning of a clause incomplete",
              role: "Tender consultant, government procurement bids",
              quote: [
                "Sometimes I read a technical specification that refers me to a particular schedule, and that schedule refers to an annexure or a separate standard. The original clause by itself does not contain enough information to understand the complete requirement.",
                "For example, a specification may mention compliance with a particular standard, but the detailed acceptance criteria or testing requirements are provided elsewhere. I have to follow the reference, locate the correct version of the referenced material, and determine whether there are further references within it.",
                "When there are many such references, it becomes difficult to keep track of what I have already checked and what remains unresolved. A clause can look simple until you follow all the references attached to it. I would like to see the connected provisions together without losing the exact source of each statement.",
              ],
              problem: "The analyst must follow chains of references across schedules, annexures, standards, and other incorporated documents.",
            },
            {
              title: "Comparing the original tender with corrigenda",
              role: "Senior tender executive, Indian engineering company",
              quote: [
                "When a corrigendum is issued, I cannot just read the amendment and assume I understand its impact. It might replace a sentence, change a numerical threshold, delete a condition, or revise a schedule. Sometimes it refers to a particular clause without reproducing the original wording.",
                "For example, if an eligibility threshold changes, I need to compare the amended clause with the original one and establish exactly what is different. If the corrigendum changes a technical specification, I need to locate the corresponding original requirement and understand whether any related provisions have also changed.",
                "We often end up opening two PDFs side by side and manually comparing the wording. That works for a small amendment, but it gets tedious when there are multiple corrigenda. The real problem is identifying what has changed in meaning, not just spotting different words.",
              ],
              problem: "Detecting changes between versions and tracing them to the original clauses they modify.",
            },
            {
              title: "Interpreting tables, footnotes, and complex eligibility formulas",
              role: "Tender analyst, Indian public-sector supplier",
              quote: [
                "Some of the most important conditions are inside tables rather than normal paragraphs. The eligibility criteria might be presented in a table with different thresholds for different categories, followed by footnotes explaining exceptions or special cases.",
                "For example, a turnover requirement may depend on the number of financial years considered, while the table footnote explains how a particular category of bidder is treated. If I extract the main table without its footnotes, I could end up interpreting the requirement incorrectly.",
                "Financial and technical criteria can also involve calculations, date ranges, units, or multiple conditions that must be satisfied together. I cannot just copy the numbers out of the document. I need to understand what each number represents and which conditions apply to it.",
              ],
              problem: "Correctly interpreting structured information, including table headers, footnotes, units, formulas, exceptions, and conditions that apply across rows.",
            },
            {
              title: "Knowing whether the document has been analysed completely",
              role: "Head of tendering, medium-sized Indian company",
              quote: [
                "After I finish reading a tender, I usually prepare a summary of the eligibility criteria, technical requirements, important dates, and contractual conditions. But I have no objective way to establish that the summary covers every important requirement in the original document.",
                "I can review the document twice and still wonder whether I missed a footnote, an exception, a declaration requirement, or a clause that was referenced elsewhere. The problem becomes more serious when the tender is long and several documents are issued together.",
                "When another person reviews my summary, they often go back to the original PDF and start checking the clauses independently. In practice, that means we are repeating much of the analysis instead of verifying a structured set of findings. I want to know not just what the analysis found, but also which sections have been reviewed, which references have been followed, and which issues remain uncertain.",
              ],
              problem: "There is no reliable measure of review completeness or clear distinction between verified findings, unresolved questions, and sections that have not yet been analysed.",
            },
          ],
        },
        jtbd: {
          beat: "Jobs to be done",
          heading: "Analysing a tender document",
          core: {
            when: "When a tender appears worth pursuing,",
            need: "I need to understand its requirements, evaluate them against my company's capabilities, and determine the work involved,",
            so: "so I can make an informed decision and know what it will take to prepare a compliant bid.",
          },
          steps: [
            {
              title: "Understand the tender and its scope",
              goal: "Build an accurate picture of what the buyer is asking for.",
              activities: [
                "Identify the type of tender and the organization issuing it.",
                "Understand the purpose and scope of the project.",
                "Identify the products, services, or work being requested.",
                "Understand the expected deliverables and technical specifications.",
                "Identify the locations, quantities, and project duration, where applicable.",
                "Understand contractual conditions and special requirements.",
                "Identify the structure of the document and locate relevant sections.",
                "Navigate between the main tender document, annexures, schedules, and referenced documents.",
                "Identify amendments or corrigenda that may change the original requirements.",
                "Clarify unfamiliar terminology or ambiguous instructions.",
              ],
              outcome: "Understand what the buyer expects and the boundaries of the work.",
            },
            {
              title: "Extract and interpret requirements",
              goal: "Identify exactly what the company must satisfy or provide.",
              activities: [
                "Locate eligibility and qualification criteria.",
                "Identify mandatory versus conditional requirements.",
                "Extract technical specifications and compliance conditions.",
                "Identify financial and commercial requirements.",
                "Find submission instructions and prescribed formats.",
                "Identify required declarations, certificates, and supporting documents.",
                "Extract submission deadlines, pre-bid meeting dates, and other important dates.",
                "Identify fees, earnest money deposit (EMD), and performance security requirements, where applicable.",
                "Understand the evaluation criteria and selection process.",
                "Identify requirements that depend on other clauses or documents.",
                "Check whether requirements have changed in a corrigendum.",
                "Verify extracted information against the original source.",
              ],
              outcome: "A structured, traceable understanding of the tender's requirements.",
            },
            {
              title: "Assess company eligibility",
              goal: "Determine whether the company satisfies the tender's qualification conditions.",
              activities: [
                "Check minimum turnover and financial criteria.",
                "Verify required years of experience.",
                "Compare past projects against experience requirements.",
                "Check technical qualifications, certifications, and registrations.",
                "Verify licenses or authorizations, where required.",
                "Review consortium, subcontracting, or partnership conditions, where applicable.",
                "Compare each requirement against available company credentials.",
                "Identify missing, expired, or insufficient evidence.",
                "Determine whether a requirement is clearly met, unmet, or uncertain.",
                "Identify conditions requiring clarification or additional verification.",
                "Assess whether the company can realistically satisfy the mandatory conditions.",
              ],
              outcome: "An evidence-based assessment of eligibility, including gaps and uncertainties.",
            },
            {
              title: "Evaluate the effort and implications of bidding",
              goal: "Understand what pursuing the tender would involve.",
              activities: [
                "Identify the volume and complexity of documentation required.",
                "Assess the technical capabilities and resources needed.",
                "Identify financial commitments, fees, deposits, or guarantees.",
                "Understand delivery timelines and contractual obligations.",
                "Identify requirements that may involve other departments or external parties.",
                "Estimate the effort required to prepare responses and supporting documents.",
                "Identify potential risks, dependencies, and restrictive conditions.",
                "Determine whether unresolved questions could affect the decision to bid.",
                "Weigh the opportunity against the effort and risks involved.",
              ],
              outcome: "Understand the practical implications of pursuing the opportunity.",
            },
            {
              title: "Identify documentation gaps",
              goal: "Establish what evidence and paperwork will be needed.",
              activities: [
                "List the documents explicitly required by the tender.",
                "Determine which documents are already available internally.",
                "Check whether existing certificates and credentials are current.",
                "Identify documents that need to be obtained from other departments.",
                "Identify documents that need drafting, updating, or customization.",
                "Determine whether a prescribed template or format must be followed.",
                "Identify supporting evidence needed for individual eligibility claims.",
                "Check whether multiple requirements depend on the same document.",
                "Flag unclear or conflicting documentation instructions.",
                "Identify gaps that could prevent the company from meeting mandatory conditions.",
              ],
              outcome: "A clear picture of what is available, missing, outdated, or needs further work.",
            },
            {
              title: "Translate the analysis into actionable next steps",
              goal: "Turn the findings into a plan for preparing the bid.",
              activities: [
                "Consolidate the requirements into a checklist.",
                "Link each requirement to its relevant source in the tender.",
                "Convert requirements into specific preparation tasks.",
                "Identify the documents and evidence needed for each task.",
                "Determine which tasks depend on other tasks being completed first.",
                "Identify the people or departments whose input is needed.",
                "Establish internal deadlines ahead of the official submission deadline.",
                "Highlight critical requirements that need early attention.",
                "Identify outstanding questions that must be resolved.",
                "Summarize the tender's key requirements, eligibility findings, and preparation needs.",
                "Establish what must happen next before the team can proceed confidently.",
              ],
              outcome: "A practical, organized action plan based on the tender analysis.",
            },
          ],
        },
        ideation: {
          beat: "Ideation",
          heading: "Four directions for connecting analysis to action",
          intro:
            "There was more than one way to turn tender analysis into something useful. These are the directions I weighed, each answering a different part of the bid manager's workload.",
          directions: [
            { key: "Direction A", name: "Automated tender summary", desc: "Extract key requirements, eligibility conditions, dates and submission criteria into a prioritised summary.", value: "Reduce the effort required to locate important information." },
            { key: "Direction B", name: "Eligibility and gap analysis", desc: "Compare tender requirements with company information to surface potential eligibility issues, compliance gaps and missing information.", value: "Help bid managers identify what needs attention before proceeding." },
            { key: "Direction C", name: "Automated checklist and document tracking", desc: "Generate a list of required documents and tasks, with follow-up actions based on document availability and preparation needs.", value: "Connect tender analysis with execution." },
            { key: "Direction D", name: "Timeline and bid coordination", desc: "Organise activities around deadlines, task ownership, reminders and submission milestones.", value: "Help teams coordinate the full preparation process." },
          ],
          evidence: "Add sketches, wireframes or alternatives explored",
        },
        decisions: {
          beat: "Design decisions",
          heading: "Three decisions that shaped the product",
          intro:
            "Three design challenges shaped how tender analysis became something a bid manager could trust and act on.",
          items: [
            {
              num: "Decision 01",
              title: "Making AI uncertainty visible",
              problem: "Tender documents didn't follow a single consistent template. Variations in structure and formatting meant the AI could miss information or extract it incorrectly.",
              response: "I introduced AI confidence scores to communicate the system's confidence in its extracted information.",
              tradeoff: "Confidence indicators could help users identify information that deserved closer attention, but they could not guarantee that an extraction was correct. The interface still needed to support verification.",
              shots: [{ ph: "Add the AI analysis screen showing confidence scores" }],
              caption: "AI analysis with confidence scores.",
            },
            {
              num: "Decision 02",
              title: "Keeping the original tender within reach",
              problem: "Even when the AI produced a useful analysis, bid managers still needed to check whether the information matched the original document.",
              response: "I designed a quick-access panel to make the analysis accessible alongside the source document, supporting a verification workflow without requiring users to rely solely on the AI's interpretation.",
              tradeoff: "Presenting the analysis more conveniently could reduce the effort of switching between views, but it did not remove the need for users to review the source.",
              shots: [
                { ph: "Add the quick-access panel screen" },
                { src: "img/bidflow-register.jpg", alt: "BidFlow Register opportunity screen with Open bid document and Register with AI actions" },
              ],
              caption: "The quick-access panel (to be added), and where analysis starts: “Register with AI” sits beside “Open bid document”.",
            },
            {
              num: "Decision 03",
              title: "Extending analysis into bid execution",
              problem: "Understanding a tender was only the beginning. Bid managers still had to identify missing documents, source existing ones, assign work and prepare new materials before the deadline.",
              response: "The product extended into document requirements, checklists, task management and timeline-related workflows, so the analysis led directly into the work of preparing the bid.",
              tradeoff: "A richer workflow could support more of the bid-preparation process, but it also introduced more information and coordination to manage. The design needed to make the next actions clear without overwhelming the user.",
              shots: [
                { src: "img/bidflow-dashboard.jpg", alt: "BidFlow Opportunities dashboard with stage tracker and deadline countdown" },
                { src: "img/bidflow-checklist.jpg", alt: "BidFlow checklist creator with categorized tasks, assignees, due dates and linked files" },
              ],
              caption: "The Opportunities dashboard tracks each bid's stage and deadline; the checklist creator turns requirements into categorized, assignable tasks with a due date and linked file. (Client details anonymized.)",
            },
          ],
        },
        outcome: {
          beat: "Outcomes",
          heading: "From document analysis to a broader bid-management workflow",
          paragraphs: [
            "The product was designed to bring together tender analysis and the activities required to prepare a response, rather than leaving bid managers to coordinate every step manually.",
            "During my time on BidFlow, the product progressed from zero customers to its first customers as early sales began, and the team observed a substantial reduction in the time required to move from receiving a tender to preparing a proposal.",
          ],
          cards: [
            { label: "Customers", text: "From zero customers to its first customers as early sales began.", value: "To be added" },
            { label: "Tender-to-proposal turnaround", text: "A substantial reduction in the time from receiving a tender to preparing a proposal, observed by the team.", value: "To be added" },
          ],
          note:
            "These are early product outcomes, not a controlled measurement of design impact. I would not attribute the turnaround improvement to any single feature.",
        },
      },
      story: {
        scene:
          "It's the morning a tender closes. A bid manager has three other tenders open in different tabs, a folder of PDFs still to read, and stakeholders who each own one section of the response. Somewhere in a hundred pages is a mandatory requirement that, if missed, disqualifies the whole bid — and the clock is the only thing moving quickly.",
        hope: "Submit a complete, compliant bid on time — and win the work.",
        fear: "Miss one buried requirement or one deadline, and months of effort are disqualified in a second.",
        but: "The information all exists — but it's scattered across documents, people, and deadlines that no one can see in one place.",
        whyTitle: "Winning should hinge on your proposal, not your paperwork",
        why:
          "Winning a bid should come down to the quality of your proposal — not your ability to manually wrangle documents, requirements, and dates. I wanted to move teams from a fragile manual process to one where nothing important could quietly slip.",
        how: [
          "Started by learning the real workflow — user, market, and competitor research — before designing a single screen, so the product followed how bids actually get made.",
          "Turned research into a clear map of the end-to-end process, then designed around three questions a team asks all day: what's done, what's pending, and what needs attention now.",
          "Placed AI where it removes repetitive reading and data-gathering — surfacing requirements and organizing information — while keeping people in charge of the judgment calls a bid depends on.",
          "As Founding Designer, owned the 0→1 arc end to end, pressure-testing every flow with the PM and developers so what shipped stayed true to the intent.",
        ],
        takeaway:
          "Structure the workflow around the deadline and the decision, and AI stops being a gimmick — it becomes the thing that catches what a tired human, at 4pm on submission day, would miss.",
        unsolved:
          "The real proof — win-rate lift, hours saved per bid, errors avoided — is still to be validated with live usage data.",
      },
      scores: {
        "Interesting problem": 5,
        "Good UX thinking": 5,
        "Strong visuals": 4,
        "Interesting process": 5,
        "Measurable impact": null,
      },
      notes: [
        "Interesting problem — Tender management involves multiple complex steps, large amounts of information, strict deadlines, and high accuracy. Designing a system that simplifies this while introducing AI automation was a meaningful UX challenge.",
        "Good UX thinking — The design focused on reducing complexity: helping users understand what needs to be done, what's complete, and what needs attention. Structured around the actual bid workflow to make it efficient and less error-prone.",
        "Strong visuals — Built to support a complex enterprise workflow while keeping the interface clean, structured, and scannable through hierarchy, spacing, and consistent components.",
        "Interesting process — Translating a traditionally manual, complex business process into a digital, AI-assisted workflow — deciding where automation genuinely helps while keeping users informed and in control.",
      ],
    },
    {
      id: "Educator AI Platform",
      comingSoon: true,
      title: "Educator AI Platform",
      short: "An AI-assisted grading platform that keeps instructors in control.",
      designed:
        "An AI-powered grading platform that helps instructors evaluate and grade student work more efficiently. The platform supports instructors throughout grading — reducing repetitive manual work while letting educators review, adjust, and make the final assessment decisions.",
      who: "Educators, instructors, teachers, and academic institutions who evaluate student work and manage grading at scale.",
      problem: [
        "Grading is time-consuming and repetitive, especially when instructors evaluate large numbers of submissions while maintaining consistency and quality.",
        "The challenge was to create an experience where AI could assist without taking control away from the instructor — making grading faster while giving educators the visibility and control to understand, review, and validate AI-generated assessments.",
      ],
      roleLead: "I worked closely with product, engineering, and cross-functional teams across the entire product journey — from early stages through the final experience.",
      role: [
        "Understanding the problem space and educator needs.",
        "Contributing to research and discovery around existing grading workflows.",
        "Exploring and defining user flows and end-to-end product workflows.",
        "Identifying and structuring core product features.",
        "Designing the overall UX and UI of the platform.",
        "Creating wireframes, prototypes, and high-fidelity designs.",
        "Designing how educators review, understand, modify, and validate AI suggestions.",
        "Collaborating closely with product managers and developers throughout.",
        "Iterating on designs based on feedback, technical constraints, and changing requirements.",
      ],
      timeline: "",
      permission: "",
      story: {
        scene:
          "It's the end of term, and an instructor is facing a stack of submissions and a weekend. By the fortieth paper the same feedback is being retyped, attention is fraying, and the grading is quietly drifting — the last student and the first are no longer being judged by quite the same standard.",
        hope: "Grade fairly and quickly — and get the weekend back.",
        fear: "That AI grades on their behalf and quietly takes over a judgment they're the ones accountable for.",
        but: "AI can draft an assessment in seconds — but a grade a teacher can't see inside of is a grade they can't stand behind.",
        whyTitle: "Give teachers their time back, not their judgment",
        why:
          "AI should give educators their time back without taking away the judgment that makes them the teacher. The goal was assistance, not autopilot.",
        how: [
          "Anchored the design in real grading workflows and educator needs, discovered through research rather than assumed.",
          "Designed the whole experience around a review → understand → modify → validate loop, so the instructor is always the one who decides.",
          "Made AI-generated assessments legible and actionable — you can see why a suggestion was made, and change it — instead of a score handed down as a black box.",
          "Kept the interface clean and consistently patterned so instructors can move through a large volume of work without losing the thread.",
        ],
        takeaway:
          "The win wasn't automating the grade — it was designing the handoff between AI and educator so the teacher stays in charge and still gets through the pile faster.",
        unsolved:
          "Real numbers — time saved per task, gains in grading consistency, instructor adoption — are still to be added from actual use.",
      },
      scores: {
        "Interesting problem": 5,
        "Good UX thinking": 5,
        "Strong visuals": 4,
        "Interesting process": 5,
        "Measurable impact": null,
      },
      notes: [
        "Interesting problem — Applying AI to a process that requires accuracy, consistency, and human judgment. Not simply automating grading, but designing an experience where AI meaningfully assists while instructors keep control of the final evaluation.",
        "Good UX thinking — Careful consideration of the relationship between AI recommendations and human decision-making, making AI results understandable and actionable while letting instructors review, edit, and validate — without feeling they'd lost control.",
        "Strong visuals — Clean, structured, professional experience for an education platform, with clear hierarchy and consistent interaction patterns to help instructors quickly parse submissions and AI assessments.",
        "Interesting process — Designing for an emerging AI-powered workflow rather than digitizing an existing one: exploring where AI adds value and finding the right balance between automation and human oversight.",
      ],
    },
    {
      id: "Wellytics",
      comingSoon: true,
      title: "Wellytics — AI-Powered EMR Platform",
      short: "An intelligent EMR that supports doctors across the whole patient-care journey.",
      designed:
        "An AI-powered Electronic Medical Record (EMR) platform that helps doctors manage the complete patient-care journey from a single system. Wellytics supports doctors during and after consultations by recording conversations, preparing clinical notes, highlighting insights, tracking vitals, organizing medical history, and managing prescriptions and medications — bringing fragmented clinical information into one intelligent, structured experience.",
      who: "Doctors, clinicians, and healthcare professionals who manage patient consultations, medical records, vitals, prescriptions, medications, and long-term patient care.",
      problem: [
        "Doctors work with large amounts of patient information while simultaneously listening to patients, documenting consultations, reviewing history, tracking vitals, and making clinical decisions. As records grow, important details get buried, and documenting every consultation becomes time-consuming.",
        "The challenge was to design a comprehensive, AI-powered EMR that reduces the documentation burden while making patient information more structured, accessible, and useful — supporting doctors across the entire consultation workflow and maintaining a clear longitudinal record.",
      ],
      roleLead: "I worked on the end-to-end product experience, collaborating closely with product and engineering to translate the concept into a comprehensive healthcare platform.",
      role: [
        "Understanding the doctor's consultation and patient-management workflow.",
        "Researching how medical information is recorded, accessed, and reviewed.",
        "Mapping end-to-end workflows across consultations, documentation, history, vitals, prescriptions, and medications.",
        "Structuring complex patient information into a clear, efficient information architecture.",
        "Exploring how AI could support doctors during and after consultations.",
        "Designing the AI-assisted consultation recording and note-generation experience.",
        "Surfacing critical insights and information that requires attention.",
        "Designing the patient-history experience to make long-term information easy to find.",
        "Designing workflows for vitals, prescriptions, and medications.",
        "Creating user flows, wireframes, prototypes, and high-fidelity UI, iterating with PMs and developers.",
      ],
      timeline: "",
      permission: "",
      story: {
        scene:
          "A patient is mid-sentence. The doctor is listening, thinking back to the last visit, and trying to remember where — across years of notes — an earlier lab result lived. Every minute spent typing is a minute not spent with the person in the chair, and the record only gets deeper from here.",
        hope: "Be fully present with the patient and still walk away with a clean, complete record.",
        fear: "Miss something buried in the history — or lose the evening catching up on documentation.",
        but: "The record already holds everything — but everything is not the same as findable.",
        whyTitle: "A record that behaves like a good colleague",
        why:
          "A medical record should behave like a good colleague: it remembers, it surfaces what matters right now, and it stays quiet about the rest. I wanted to pull fragmented clinical information into one calm, intelligent place.",
        how: [
          "Sat close to the real consultation and patient-management workflow, and how doctors actually record, access, and review information.",
          "Structured complex patient information into an architecture built for findability — designed around the doctor's moment, not around database sections.",
          "Used AI to carry the documentation load: recording the consultation, preparing notes, and surfacing the insights that need attention.",
          "Treated the core tension — information density vs. findability — as the central design problem, deciding what to show, when, and how to rank it.",
        ],
        takeaway:
          "Designing an EMR turned out to be less about storing more, and more about deciding what to show, when — so the doctor can find what matters without wading through everything else.",
        unsolved:
          "Impact on documentation time, note-creation speed, and information findability is still to be measured in practice.",
      },
      scores: {
        "Interesting problem": 5,
        "Good UX thinking": 5,
        "Strong visuals": 4,
        "Interesting process": 5,
        "Measurable impact": null,
      },
      notes: [
        "Interesting problem — Healthcare professionals work with large volumes of contextual information while making decisions efficiently. The challenge was rethinking the traditional EMR and exploring how AI could support doctors across consultation and long-term care.",
        "Good UX thinking — Strong information architecture and prioritization: making patient information structured, compartmentalized, and easy to find, surfacing what matters without overwhelming — designed around the doctor's workflow, not database sections.",
        "Strong visuals — A professional, calm, highly structured clinical interface with clear hierarchy between primary information, supporting details, insights, history, and actions.",
        "Interesting process — Designing an AI layer within a complex clinical workflow: determining where AI reduces documentation and cognitive effort, and deciding what to show, when, and how to organize it.",
      ],
    },
    {
      id: "Shift Management Platform",
      comingSoon: true,
      title: "Shift Management Platform",
      short: "A healthcare workforce platform for managing nurse shifts and staffing.",
      designed:
        "A healthcare workforce platform that helps hospitals and healthcare organizations manage nurse shifts, staffing requirements, schedules, and workforce operations more efficiently.",
      who: "Hospitals, healthcare organizations, staffing teams, and nurses involved in managing and fulfilling healthcare shifts.",
      problem: [
        "Managing healthcare shifts involves complex scheduling requirements, changing staffing needs, availability constraints, and coordination between multiple stakeholders.",
        "The challenge was to create a streamlined experience that made it easier to create, manage, find, and fulfill shifts, while giving users clear visibility into staffing information and shift status.",
      ],
      roleLead: "I worked on the end-to-end product design, collaborating with product managers, developers, and stakeholders to understand existing workflows and improve the overall experience.",
      role: [
        "Understanding the existing shift-management workflow.",
        "Mapping user journeys and identifying pain points.",
        "Designing shift creation and management workflows.",
        "Exploring different scheduling and staffing scenarios.",
        "Designing interfaces for shift availability, status, and management.",
        "Creating user flows, wireframes, prototypes, and high-fidelity UI.",
        "Collaborating with developers to ensure designs were feasible to implement.",
        "Iterating based on feedback and evolving product requirements.",
      ],
      timeline: "",
      permission: "",
      story: {
        scene:
          "A staffing coordinator is trying to cover tomorrow's night shift. Three nurses are qualified, one just called out, and the schedule lives half in a spreadsheet and half in people's heads. The gap is real; the picture of how to close it is not.",
        hope: "Every shift covered, no gaps, no last-minute scramble.",
        fear: "A hole discovered too late — or the same nurse accidentally booked twice.",
        but: "The constraints are knowable — but they shift hour to hour and live in too many places to hold at once.",
        whyTitle: "Coverage should be a decision, not a daily emergency",
        why:
          "Covering a shift should be a clear decision, not a daily emergency. I wanted staffing teams to see the state of their workforce at a glance and act on it with confidence.",
        how: [
          "Mapped the existing shift-management workflow and the points where it actually breaks down.",
          "Designed shift creation and management around clear status and visibility, so availability and gaps are obvious.",
          "Explored the messy real scenarios — changing needs, availability constraints, multiple stakeholders — rather than the happy path.",
          "Worked with developers to keep the design feasible, and iterated as requirements evolved.",
        ],
        takeaway:
          "When what's covered, open, and at risk is visible in one place, shift management stops being firefighting and becomes a decision.",
        unsolved:
          "Self-evaluation scores and outcome metrics are still to be added for this project.",
      },
      scores: {
        "Interesting problem": null,
        "Good UX thinking": null,
        "Strong visuals": null,
        "Interesting process": null,
        "Measurable impact": null,
      },
      notes: [
        "Interesting problem — Healthcare staffing involves complex scheduling and coordination, making shift management a challenging workflow to simplify.",
        "Good UX thinking — Focused on reducing complexity and making shift-related information easier to understand, manage, and act upon.",
        "Strong visuals — Designed to provide clear hierarchy and visibility across schedules, shift information, statuses, and actions.",
        "Interesting process — Understanding a complex operational workflow and translating it into a more structured digital experience.",
      ],
    },
    {
      id: "Nurse & Hospital Platform",
      comingSoon: true,
      title: "Nurse & Hospital Platform",
      short: "A two-sided marketplace connecting nurses with hospitals.",
      designed:
        "A two-sided healthcare staffing experience that connects nurses looking for opportunities with hospitals and healthcare organizations looking to fulfill their staffing needs.",
      who: "Two primary user groups — nurses looking for healthcare opportunities and shifts, and hospitals/organizations looking for qualified healthcare professionals.",
      problem: [
        "Nurses and hospitals have very different goals. Nurses need to discover relevant opportunities, understand requirements, and manage their applications and work. Hospitals need to identify suitable candidates, manage staffing requirements, and move efficiently through hiring and staffing.",
        "The challenge was to design experiences for both sides while ensuring the two workflows connect seamlessly within one ecosystem.",
      ],
      roleLead: "I worked across the product experience for both nurses and hospitals, contributing to the design of workflows and features for each user group.",
      role: [
        "Understanding the needs and pain points of both sides of the marketplace.",
        "Mapping user journeys for nurses and hospitals.",
        "Designing workflows for finding and managing opportunities.",
        "Designing experiences for hospitals to manage staffing requirements and candidates.",
        "Structuring information and interactions around different user needs.",
        "Creating user flows, wireframes, prototypes, and high-fidelity UI designs.",
        "Working closely with product managers and developers throughout.",
        "Iterating based on feedback, requirements, and implementation constraints.",
      ],
      timeline: "",
      permission: "",
      story: {
        scene:
          "A nurse scrolls listings that never quite say whether she qualifies. Across the same marketplace, a hospital posts a shift and waits, unsure who will actually show up. Two people looking for each other — and missing, because each is judging the match by information the other can't see.",
        hope: "The nurse finds the right opportunity; the hospital finds a qualified, reliable nurse.",
        fear: "The nurse wastes time on roles she can't take; the hospital gets no-shows or unqualified applicants.",
        but: "Both sides want the very same match — but they judge it by completely different information.",
        whyTitle: "The match has to be trustworthy at a glance — for both sides",
        why:
          "A two-sided staffing marketplace only works when each side can trust the match at a glance. I wanted the seam between nurse and hospital to feel effortless, not like two disconnected apps.",
        how: [
          "Understood the needs and pain points of both sides before designing either.",
          "Mapped both journeys — nurses finding and managing opportunities, hospitals managing requirements and candidates — and where they must connect.",
          "Structured information and interactions around each group's distinct goals while keeping one coherent ecosystem.",
          "Designed the connecting workflows so one side's clarity becomes the other side's trust.",
        ],
        takeaway:
          "The real design job wasn't either screen — it was the seam: making the information one side provides land as confidence for the other.",
        unsolved:
          "Self-evaluation scores and match/fulfilment outcomes are still to be added.",
      },
      scores: {
        "Interesting problem": null,
        "Good UX thinking": null,
        "Strong visuals": null,
        "Interesting process": null,
        "Measurable impact": null,
      },
      notes: [
        "Interesting problem — Designing for a two-sided healthcare ecosystem, where nurses and hospitals have different motivations, workflows, and information needs.",
        "Good UX thinking — Designing two connected journeys while ensuring each user group could accomplish its goals efficiently.",
        "Strong visuals — Clear information hierarchy and a consistent experience across different workflows and user types.",
        "Interesting process — Considering the needs of two different user groups simultaneously and understanding how their journeys connect.",
      ],
    },
    {
      id: "Nurse Compliance & Verification Platform",
      comingSoon: true,
      title: "Nurse Compliance & Verification Platform",
      short: "A transparent workflow for collecting and verifying nurse credentials.",
      designed:
        "A compliance and verification experience that helps healthcare organizations collect, review, verify, and manage nurse credentials and required documentation.",
      who: "Nurses, healthcare staffing teams, compliance teams, and healthcare organizations.",
      problem: [
        "Healthcare staffing requires nurses to meet various compliance and credentialing requirements. Managing documents, credentials, certifications, and verification statuses can become complex and time-consuming.",
        "The challenge was to create a workflow that made compliance requirements clear and easy for nurses to complete, while giving organizations better visibility into verification status and outstanding requirements.",
      ],
      roleLead: "I worked on the end-to-end UX/UI experience for the compliance and verification workflow.",
      role: [
        "Understanding the nurse compliance and credentialing journey.",
        "Mapping the different requirements and verification stages.",
        "Designing workflows for document and information submission.",
        "Creating clear ways for nurses to understand what is required, completed, pending, or missing.",
        "Designing experiences for teams reviewing and managing compliance information.",
        "Structuring complex information into a clear, understandable workflow.",
        "Creating user flows, wireframes, prototypes, and high-fidelity designs.",
        "Collaborating with product managers and developers to refine the experience.",
        "Iterating based on feedback, business requirements, and technical constraints.",
      ],
      timeline: "",
      permission: "",
      story: {
        scene:
          "A nurse is one document away from being cleared to work a shift — but doesn't know which document, or whether the one she uploaded last week was ever accepted. On the other side, a compliance reviewer stares at forty files with no clear queue and no easy way to say who's ready.",
        hope: "Get cleared to work quickly; keep the organization compliant.",
        fear: "A shift lost to a missing certificate — or an expired credential slipping quietly through.",
        but: "The requirements are fixed and knowable — but their status is invisible to the very people who need to act on it.",
        whyTitle: "A checklist you can finish, not a black box you wait on",
        why:
          "Compliance should feel like a checklist you can finish, not a black box you wait on. I wanted both nurses and reviewers to always know exactly where things stand.",
        how: [
          "Mapped the credentialing journey and its verification stages end to end.",
          "Designed submission workflows that make required, completed, pending, and missing unmistakable at a glance.",
          "Built the reviewer side to manage and verify documents without hunting through a pile.",
          "Structured document-heavy information into a clear, scannable flow, iterating with PMs and developers.",
        ],
        takeaway:
          "Making status visible on both sides turned a source of anxiety and waiting into a task people could simply complete.",
        unsolved:
          "Self-evaluation scores and verification-time metrics are still to be added.",
      },
      scores: {
        "Interesting problem": null,
        "Good UX thinking": null,
        "Strong visuals": null,
        "Interesting process": null,
        "Measurable impact": null,
      },
      notes: [
        "Interesting problem — Compliance and credential verification is highly structured but complex, involving multiple documents, requirements, and stakeholders.",
        "Good UX thinking — Making the compliance journey transparent so users understand what to provide, what's verified, and what still needs action.",
        "Strong visuals — Clarity, hierarchy, and status visibility, making document-heavy information easy to scan and understand.",
        "Interesting process — Translating a complex compliance workflow into a simpler experience while accounting for the different needs of nurses and verification teams.",
      ],
    },
  ],
};

// Attach slugs
site.projects.forEach((p) => (p.slug = slugify(p.id)));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const stars = (n) =>
  n == null
    ? '<span class="score tbd">To be added</span>'
    : `<span class="score" aria-label="${n} out of 5">${"●".repeat(n)}${"○".repeat(5 - n)} <em>${n}/5</em></span>`;

const shotFigure = (shots, caption) => {
  const parts = shots.map((s) =>
    s.src
      ? `<img src="${s.src}" alt="${esc(s.alt)}" loading="lazy">`
      : `<div class="shot-ph"><span>${esc(s.ph)}</span></div>`
  );
  return `<figure class="shot${shots.length > 1 ? " grid-shots" : ""}">
      ${parts.join("")}
      <figcaption>${esc(caption)}</figcaption>
    </figure>`;
};

const sheetShape = `<path class="fg-paper" d="M0 0H34L44 10V58H0Z"/><path class="fg-line" d="M34 0V10H44"/><rect x="6" y="8" width="20" height="3" class="fg-v"/><path class="fg-soft2" d="M6 15H16 M6 21H38 M6 27H36 M6 33H40 M6 39H32 M6 45H38 M6 51H24"/>`;

const sceneOrigin = (notes) => `
    <div class="fig-a">
      <svg class="fig" viewBox="0 0 960 340" role="img" aria-label="An illustrated scene. A buyer's building publishes a tender document, which travels across to a business's desk.">
        <defs><pattern id="gridA" width="24" height="24" patternUnits="userSpaceOnUse"><path class="fg-grid" d="M24 0H0V24"/></pattern></defs>
        <rect width="960" height="340" fill="url(#gridA)"/>
        <line class="fg-soft" x1="30" y1="290" x2="930" y2="290"/>
        <path class="fg-soft" d="${Array.from({ length: 16 }, (_, i) => `M${30 + i * 60} 290v5`).join("")}"/>

        <path class="fg-paper" d="M90 170H210V290H90Z"/>
        <path class="fg-paper" d="M80 170L150 128L220 170Z"/>
        <path class="fg-line" d="M108 178V290M132 178V240M168 178V240M192 178V290"/>
        <path class="fg-paper" d="M136 290V240H164V290"/>
        <path class="fg-line" d="M82 290H218M86 284H214"/>
        <circle class="fg-line" cx="150" cy="152" r="6"/><circle class="fg-v" cx="150" cy="152" r="2"/>
        <path class="fg-soft" d="M90 304H210M90 301V307M210 301V307"/>
        <text class="fg-txt" x="150" y="324" text-anchor="middle">Buyer</text>

        <path class="fg-paper" d="M640 244H900V256H640Z"/>
        <path class="fg-line" d="M656 256V290M884 256V290"/>
        <path class="fg-paper" d="M800 256H884V290H800ZM800 273H884"/>
        <path class="fg-paper" d="M690 174H770V226H690Z"/>
        <path class="fg-line" d="M730 226V244M716 244H744"/>
        <path class="fg-soft2" d="M698 186H742M698 194H758M698 202H736"/><circle class="fg-b" cx="762" cy="182" r="2"/>
        <path class="fg-paper" d="M806 226H882V244H806Z"/>
        <path class="fg-soft" d="M640 304H900M640 301V307M900 301V307"/>
        <text class="fg-txt" x="770" y="324" text-anchor="middle">Business</text>

        <path id="tender-route" class="fg-route" d="M150 262C330 80 640 60 844 201"/>
        <circle class="fg-line" cx="150" cy="262" r="3"/><circle class="fg-line" cx="844" cy="201" r="3"/>

        <path class="fg-soft fl fl1" d="M140 46V124"/>
        <path class="fg-soft fl fl2" d="M478 46V112"/>
        <path class="fg-soft fl fl3" d="M708 46V166"/>

        <g id="tender-sheet" transform="translate(844 201) rotate(0) translate(-22 -29)">${sheetShape}</g>      </svg>
      <p class="fn fn1" style="left:14%"><b>1</b>${esc(notes[0])}</p>
      <p class="fn fn2" style="left:49%"><b>2</b>${esc(notes[1])}</p>
      <p class="fn fn3" style="left:73%"><b>3</b>${esc(notes[2])}</p>
    </div>`;

const sceneDesk = () => `
        <svg class="fig" viewBox="0 0 520 420" role="img" aria-label="A top-down view of a desk that fills with work as a single tender document is read, checked and broken into tasks.">
          <g class="dg fade s5"><path class="fg-paper" d="M300 24h20v20h-20z"/><path class="fg-soft" d="M312 24v8h8"/><path class="fg-paper" d="M328 28h20v20h-20z"/><path class="fg-paper" d="M356 24h20v20h-20z"/><path class="fg-y" d="M300 24h20v20h-20z"/><path class="fg-s" d="M328 28h20v20h-20z"/><path class="fg-vt" d="M356 24h20v20h-20z"/></g>

          <g transform="translate(58 62) scale(4.4)">
            <g class="dg fade s2"><path class="fg-paper" d="M0 0H34L44 10V58H0Z" transform="translate(4 -4)"/><path class="fg-paper" d="M0 0H34L44 10V58H0Z" transform="translate(2 -2)"/></g>
            <g class="s1">${sheetShape}</g>
            <g class="dg fade s2"><rect class="fg-y" x="5" y="25.5" width="33" height="3"/><rect class="fg-s" x="5" y="37.5" width="28" height="3"/><rect class="fg-vt" x="5" y="49.5" width="20" height="3"/>
              <rect class="fg-y" x="44" y="15" width="4" height="5"/><rect class="fg-s" x="44" y="29" width="4" height="5"/><rect class="fg-vt" x="44" y="43" width="4" height="5"/></g>
          </g>

          <g class="dg s3">
            <rect x="290" y="60" width="200" height="170" rx="4" class="fg-paper"/>
            <path class="fg-soft" d="M290 86H490"/>
            <text class="fg-txt" x="304" y="78">Eligibility</text>
            <rect x="304" y="102" width="12" height="12" class="fg-line"/><path class="fg-ok" d="M307 108l3 3 5-6"/><path class="fg-soft2" d="M326 108H460"/>
            <rect x="304" y="130" width="12" height="12" class="fg-line"/><path class="fg-ok" d="M307 136l3 3 5-6"/><path class="fg-soft2" d="M326 136H440"/>
            <rect x="304" y="158" width="12" height="12" class="fg-line"/><circle class="fg-y" cx="310" cy="164" r="3.5"/><path class="fg-soft2" d="M326 164H452"/>
            <rect x="304" y="186" width="12" height="12" class="fg-line"/><circle class="fg-v" cx="310" cy="192" r="3.5"/><path class="fg-soft2" d="M326 192H430"/>
            <rect x="304" y="212" width="12" height="12" class="fg-line"/><path class="fg-soft2" d="M326 218H446"/>
            <path class="fg-route" d="M252 140C272 140 270 108 290 108"/>
          </g>

          <g class="dg fade s4">
            <path class="fg-route c-y" d="M222 181C262 181 262 267 290 267"/>
            <path class="fg-route c-s" d="M200 234C250 234 262 309 290 309"/>
            <path class="fg-route c-v" d="M178 286C240 286 262 351 290 351"/>
          </g>
          <g class="dg fade s4">
            <g class="chip" style="--cd:0ms"><rect x="290" y="250" width="200" height="34" rx="4" class="fg-paper"/><rect x="290" y="250" width="5" height="34" class="fg-y"/><text class="fg-txt2" x="308" y="271">Find certificate</text><circle class="fg-line" cx="470" cy="267" r="7"/></g>
            <g class="chip" style="--cd:120ms"><rect x="290" y="292" width="200" height="34" rx="4" class="fg-paper"/><rect x="290" y="292" width="5" height="34" class="fg-s"/><text class="fg-txt2" x="308" y="313">Confirm owner</text><circle class="fg-line" cx="470" cy="309" r="7"/></g>
            <g class="chip" style="--cd:240ms"><rect x="290" y="334" width="200" height="34" rx="4" class="fg-paper"/><rect x="290" y="334" width="5" height="34" class="fg-v"/><text class="fg-txt2" x="308" y="355">Get signature</text><circle class="fg-line" cx="470" cy="351" r="7"/></g>
          </g>

          <g class="dg s5">
            <path class="fg-line" d="M70 340V332H240V340M80 332V325H230V332"/>
            <path class="fg-paper" d="M58 400V350L66 342H104L112 350H252V400Z"/>
            <text class="fg-txt" x="72" y="382">Submission</text>
            <circle class="fg-ok-c" cx="232" cy="376" r="9"/><path class="fg-ok" d="M227 376l3.5 3.5 6-7"/>
            <circle class="fg-line" cx="470" cy="388" r="11"/><path class="fg-line" d="M481 384a5 5 0 0 1 0 9"/>
          </g>
          <path class="fg-soft" d="M300 402H380M300 399V405M380 399V405"/>
          <text class="fg-txt" x="340" y="395" text-anchor="middle">10 cm</text>
        </svg>`;

const storyScenes = (sc) => `
  <section class="case-block story-block" style="max-width:1040px">
    <p class="beat">${esc(sc.context.beat)}</p>
    <h2>${esc(sc.context.heading)}</h2>
    ${sceneOrigin(sc.context.notes)}
    <p class="fig-closing">${esc(sc.context.closing)}</p>
  </section>

  <section class="case-block story-block" style="max-width:1040px">
    <p class="beat">${esc(sc.team.beat)}</p>
    <h2>${esc(sc.team.heading)}</h2>
    <div class="story-desk">
      <div class="story-stage">
        <div class="desk-fig">${sceneDesk()}
        </div>
        <div class="desk-copy">
          <ol class="desk-steps">${sc.team.steps
            .map(
              (s, i) =>
                `<li class="ds"><span class="ds-n">0${i + 1}</span><div><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div></li>`
            )
            .join("")}</ol>
          <p class="desk-final">${esc(sc.team.final)}</p>
        </div>
      </div>
    </div>
  </section>
`;

const avatarSpecs = [
  { skin: "#e8c4a0", hair: "long", hairC: "#2b2b2b", glasses: true, top: "#8b5cf6" },
  { skin: "#d9a77f", hair: "short", hairC: "#2b2b2b", stache: true, top: "#3fb1d1" },
  { skin: "#c68b63", hair: "curly", hairC: "#2b2b2b", glasses: true, top: "#ffc63f" },
  { skin: "#e8c4a0", hair: "bun", hairC: "#5a4636", top: "#3b4ce0" },
  { skin: "#a9714b", hair: "bald", hairC: "#2b2b2b", beard: true, top: "#1f8f5a" },
  { skin: "#d9a77f", hair: "short", hairC: "#9a9a9a", glasses: true, tie: true, top: "#8a8a85" },
  { skin: "#c68b63", hair: "bob", hairC: "#2b2b2b", top: "#8b5cf6" },
  { skin: "#e8c4a0", hair: "long", hairC: "#5a4636", scarf: true, top: "#3fb1d1" },
];

const avatar = (s) => {
  const hairBack =
    s.hair === "long" ? `<path class="av-l" fill="${s.hairC}" d="M24 42C22 20 58 20 56 42L58 66H22Z"/>`
    : s.hair === "bob" ? `<path class="av-l" fill="${s.hairC}" d="M24 44C22 20 58 20 56 44L55 52H25Z"/>`
    : "";
  const hairFront =
    s.hair === "short" ? `<path class="av-l" fill="${s.hairC}" d="M26 36C25 21 55 21 54 36C50 29 30 29 26 36Z"/>`
    : s.hair === "bun" ? `<circle class="av-l" cx="40" cy="17" r="6" fill="${s.hairC}"/><path class="av-l" fill="${s.hairC}" d="M26 36C25 21 55 21 54 36C50 29 30 29 26 36Z"/>`
    : s.hair === "curly" ? `<g class="av-l" fill="${s.hairC}"><circle cx="29" cy="30" r="6"/><circle cx="36" cy="25" r="6"/><circle cx="44" cy="25" r="6"/><circle cx="51" cy="30" r="6"/></g>`
    : s.hair === "long" || s.hair === "bob" ? `<path class="av-l" fill="${s.hairC}" d="M26 38C25 22 55 22 54 38C48 28 34 28 26 38Z"/>`
    : "";
  return `<svg class="avatar-ill" viewBox="0 0 80 80" aria-hidden="true">
    <circle cx="40" cy="40" r="39" fill="${s.top}" fill-opacity=".14" class="av-l"/>
    <g clip-path="url(#avclip)">
      ${hairBack}
      <path class="av-l" fill="${s.top}" fill-opacity=".55" d="M10 82C12 64 27 57 40 57C53 57 68 64 70 82Z"/>
      <path class="av-l" fill="${s.skin}" d="M35 48H45V59C45 62 35 62 35 59Z"/>
      ${s.scarf ? `<path class="av-l" fill="${s.top}" fill-opacity=".8" d="M30 57C34 62 46 62 50 57L52 64C46 68 34 68 28 64Z"/>` : ""}
      ${s.tie ? `<path class="av-l" fill="#8b5cf6" d="M38 59H42L43.5 72H36.5Z"/>` : ""}
      ${s.beard ? `<path class="av-l" fill="${s.hairC}" d="M26 40C27 56 53 56 54 40C50 48 30 48 26 40Z"/>` : ""}
      <ellipse class="av-l" fill="${s.skin}" cx="40" cy="38" rx="14" ry="16"/>
      ${s.beard ? `<path class="av-l" fill="${s.hairC}" d="M26 40C27 56 53 56 54 40C50 48 30 48 26 40Z"/>` : ""}
      ${hairFront}
      <circle cx="34.5" cy="38" r="1.3" fill="#2b2b2b"/><circle cx="45.5" cy="38" r="1.3" fill="#2b2b2b"/>
      ${s.glasses ? `<circle class="av-l" cx="34.5" cy="38" r="5" fill="none"/><circle class="av-l" cx="45.5" cy="38" r="5" fill="none"/><path class="av-l" d="M39.5 38H40.5"/>` : ""}
      ${s.stache ? `<path class="av-l" fill="${s.hairC}" d="M34 45C37 43 43 43 46 45C43 47 37 47 34 45Z"/>` : `<path class="av-l" fill="none" d="M37 46C39 47.5 41 47.5 43 46"/>`}
    </g>
    <circle cx="40" cy="40" r="39" fill="none" class="av-l"/>
  </svg>`;
};

const quoteRail = (qs, heading) => `
    <div class="vq-wrap">
      <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><clipPath id="avclip"><circle cx="40" cy="40" r="39"/></clipPath></defs></svg>
      <div class="vq-bar"><p class="vq-label">${esc(heading)}</p>
        <div class="vq-nav"><button type="button" class="vq-btn" data-dir="-1" aria-label="Previous quote" hidden>&larr;</button><button type="button" class="vq-btn" data-dir="1" aria-label="Next quote" hidden>&rarr;</button></div>
      </div>
      <div class="vq-rail" tabindex="0" aria-label="User quotes, scroll horizontally">${qs
        .map((q, i) => {
          const first = q.quote[0];
          const rest = q.quote.slice(1);
          return `
        <article class="vq">
          <div class="vq-head">${avatar(avatarSpecs[i % avatarSpecs.length])}<div><p class="vq-n">0${i + 1}</p><p class="vq-role">${esc(q.role)}</p></div></div>
          <h4 class="vq-title">${esc(q.title)}</h4>
          <blockquote class="vq-body"><p>&ldquo;${esc(first)}</p><details><summary>Read more</summary>${rest
            .map((p, j) => `<p>${esc(p)}${j === rest.length - 1 ? "&rdquo;" : ""}</p>`)
            .join("")}</details></blockquote>
          <p class="vq-prob"><span>Specific analytical problem</span>${esc(q.problem)}</p>
        </article>`;
        })
        .join("")}</div>
    </div>`;

const explainer = (e) => `
  <section class="case-block" style="max-width:980px">
    <p class="beat">Project snapshot</p>
    <div class="snapshot">${e.snapshot
      .map((x) => `<div class="snapshot-item ${esc(x.cls)}"><span>${esc(x.label)}</span><p>${esc(x.text)}</p></div>`)
      .join("")}</div>
  </section>
${storyScenes(e.scene)}
  <section class="case-block" style="max-width:980px">
    <p class="beat">${esc(e.discovery.beat)}</p>
    <h2>${esc(e.discovery.heading)}</h2>
    ${e.discovery.paragraphs.map((x) => `<p>${esc(x)}</p>`).join("")}
    <h3 class="sub-head">${esc(e.discovery.questionsHeading)}</h3>
    <ul class="ticks">${e.discovery.questions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    ${quoteRail(e.discovery.quotes, e.discovery.quotesHeading)}
  </section>

  <section class="case-block">
    <p class="beat">${esc(e.challenge.beat)}</p>
    <h2>${esc(e.challenge.heading)}</h2>
    ${e.challenge.paragraphs.map((x) => `<p>${esc(x)}</p>`).join("")}
    <h3 class="sub-head">${esc(e.challenge.opportunityHeading)}</h3>
    <p>${esc(e.challenge.opportunityIntro)}</p>
    <ul class="ticks">${e.challenge.questions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <p class="context-note">${esc(e.challenge.closing)}</p>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">${esc(e.jtbd.beat)}</p>
    <h2>${esc(e.jtbd.heading)}</h2>
    <p class="jtbd-core"><span class="jc-k">Core job</span><span class="jc-w">${esc(e.jtbd.core.when)}</span> <span class="jc-n">${esc(e.jtbd.core.need)}</span> <span class="jc-s">${esc(e.jtbd.core.so)}</span></p>
    <div class="jt-grid">${e.jtbd.steps
      .map(
        (s, i) => `
      <article class="jt">
        <p class="jt-n">0${i + 1}</p>
        <h4>${esc(s.title)}</h4>
        <p class="jt-goal"><span>Goal</span>${esc(s.goal)}</p>
        <details><summary>${s.activities.length} activities</summary><ul class="ticks">${s.activities.map((a) => `<li>${esc(a)}</li>`).join("")}</ul></details>${s.outcome ? `
        <p class="jt-out"><span>Desired outcome</span>${esc(s.outcome)}</p>` : ""}
      </article>`
      )
      .join("")}</div>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">${esc(e.ideation.beat)}</p>
    <h2>${esc(e.ideation.heading)}</h2>
    <p>${esc(e.ideation.intro)}</p>
    <div class="rgrid-2">${e.ideation.directions
      .map(
        (d) =>
          `<div class="rcard c-violet"><p class="rk">${esc(d.key)}</p><h4>${esc(d.name)}</h4><p>${esc(d.desc)}</p><p class="rk" style="margin-top:12px">Potential value</p><p>${esc(d.value)}</p></div>`
      )
      .join("")}</div>
    <div class="proto-ph"><span>${esc(e.ideation.evidence)}</span></div>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">${esc(e.decisions.beat)}</p>
    <h2>${esc(e.decisions.heading)}</h2>
    <p>${esc(e.decisions.intro)}</p>
  </section>
${e.decisions.items
  .map(
    (d) => `
  <section class="case-block" style="max-width:980px">
    <p class="beat">${esc(d.num)}</p>
    <h2>${esc(d.title)}</h2>
    <dl class="decision">
      <div><dt>The problem</dt><dd>${esc(d.problem)}</dd></div>
      <div><dt>The design response</dt><dd>${esc(d.response)}</dd></div>
      <div><dt>The trade-off</dt><dd>${esc(d.tradeoff)}</dd></div>
    </dl>
    ${shotFigure(d.shots, d.caption)}
  </section>`
  )
  .join("")}

  <section class="case-block" style="max-width:980px">
    <p class="beat">${esc(e.outcome.beat)}</p>
    <h2>${esc(e.outcome.heading)}</h2>
    ${e.outcome.paragraphs.map((x) => `<p>${esc(x)}</p>`).join("")}
    <div class="rgrid-2">${e.outcome.cards
      .map(
        (c) =>
          `<div class="rcard c-blue"><p class="rk">${esc(c.label)}</p><p>${esc(c.text)}</p><p><span class="score tbd">${esc(c.value)}</span></p></div>`
      )
      .join("")}</div>
    <p class="context-note">${esc(e.outcome.note)}</p>
  </section>
`;

const research = (r, p) => `
  <section class="case-block hook">
    <p class="beat">The research</p>
    <h2 class="hook-title">${esc(r.hookTitle)}</h2>
    <p class="hook-sub">${esc(r.hookSub)}</p>
    <div class="snapshot">${r.snapshot
      .map((x) => `<div class="snapshot-item ${esc(x.cls)}"><span>${esc(x.label)}</span><p>${esc(x.text)}</p></div>`)
      .join("")}</div>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">Research goals</p>
    <h2>Five questions the study had to answer</h2>
    <div class="rgrid-3">${r.goals
      .map(
        (g) => `<div class="rcard c-sky"><p class="rk">Goal ${esc(g.n)}</p><h4>${esc(g.title)}</h4><p>${esc(g.text)}</p></div>`
      )
      .join("")}</div>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">Who I talked to</p>
    <h2>Three segments, deliberately different</h2>
    <div class="rgrid-3">${r.segments
      .map(
        (s) => `<div class="rcard c-violet"><p class="rk">${esc(s.count)}</p><h4>${esc(s.name)}</h4><p>${esc(s.desc)}</p></div>`
      )
      .join("")}</div>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">Method</p>
    <h2>How the study was run</h2>
    <div class="rgrid-2">${r.methods
      .map((m) => `<div class="rcard c-blue"><h4>${esc(m.name)}</h4><p>${esc(m.text)}</p></div>`)
      .join("")}</div>
    <div class="mtimeline">
      <p class="context-note" style="margin-top:24px"><strong>Planned protocol.</strong></p>
      ${r.timelinePlanned.map((t) => `<div class="mt-row"><span class="mt-day">→</span><span class="mt-text">${esc(t)}</span></div>`).join("")}
    </div>
    <p class="context-note"><strong>What actually happened.</strong> ${esc(r.timelineActual)}</p>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">Landscape</p>
    <h2>Where Meetup sits against 20 platforms Indian users already trust</h2>
    <div class="table-wrap"><table class="itable">
      <thead><tr><th>Platform</th><th>What it tells us</th></tr></thead>
      <tbody>${r.competitive
        .map((c) => `<tr><td><strong>${esc(c.name)}</strong></td><td>${esc(c.note)}</td></tr>`)
        .join("")}</tbody>
    </table></div>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">Findings</p>
    <h2>48 issues, in their own words</h2>
    ${r.findingGroups
      .map(
        (g) => `
    <h3 style="margin:28px 0 12px">${esc(g.theme)}</h3>
    ${g.illo ? `<div class="issue-illo">${g.illo}</div>` : ""}
    <div class="quote-grid">${g.issues
      .map(
        (i) => `
      <div class="quote-card">
        <blockquote>"${esc(i.quote)}"</blockquote>
        <span class="q-context">${esc(i.context)}</span>
        <span class="q-meta">— ${esc(i.person)}</span>
        <span class="severity" data-lvl="${esc(i.severity)}">Severity ${esc(i.severity)}</span>
      </div>`
      )
      .join("")}</div>`
      )
      .join("")}
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">Synthesis</p>
    <h2>What mattered most, prioritized</h2>
    <div class="table-wrap"><table class="itable">
      <thead><tr><th>Theme</th><th>Severity</th><th>Strategic direction</th></tr></thead>
      <tbody>${r.insights
        .map(
          (x) =>
            `<tr><td><strong>${esc(x.theme)}</strong></td><td><span class="severity" data-lvl="${esc(x.severity)}">${esc(x.severity)}</span></td><td>${esc(x.direction)}</td></tr>`
        )
        .join("")}</tbody>
    </table></div>
  </section>

  <section class="case-block" style="max-width:980px">
    <p class="beat">Reflection</p>
    <h2>Lessons learned</h2>
    <div class="rgrid-3">
      <div><p class="rk">Methodology</p><ul class="ticks">${r.lessons.methodology.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><p class="rk">The Indian event market</p><ul class="ticks">${r.lessons.market.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div><p class="rk">Personal</p><ul class="ticks">${r.lessons.personal.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
    </div>
  </section>

  <section class="case-block">
    <p class="beat">Where it landed</p>
    <h2>The takeaway</h2>
    <p class="takeaway">${esc(r.takeaway)}</p>
    <p class="context-note"><strong>What's next.</strong> Part two of this project picks up where the research stops — turning these findings into actual design fixes, coming soon.</p>
    <details class="role-full">
      <summary>The full scope of what I did</summary>
      <ul class="ticks">${p.role.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </details>
  </section>
`;

const head = (title, rel = "") => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(site.name)} — ${esc(site.role)}. ${esc(site.tagline)}">
<link rel="preload" as="font" type="font/woff2" href="${rel}fonts/instrument-serif-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${rel}fonts/space-mono-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${rel}fonts/bricolage-grotesque-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${rel}fonts/dm-sans-latin.woff2" crossorigin>
<link rel="stylesheet" href="${rel}fonts/fonts.css">
<link rel="stylesheet" href="${rel}styles.css">
</head>`;

const nav = (rel = "") => `
<header class="nav">
  <a class="brand" href="${rel}index.html">${esc(site.name)}</a>
  <nav>
    <a href="${rel}index.html#work">Work</a>
    <a href="${rel}index.html#about">About</a>
    <a href="mailto:${site.email}">Contact</a>
  </nav>
</header>`;

const footer = (rel = "") => `
<footer class="foot">
  <div>
    <h3>Let's talk</h3>
    <p>Open to product &amp; UX design opportunities.</p>
    <a class="btn" href="mailto:${site.email}">${site.email}</a>
  </div>
  <p class="fine">© ${new Date().getFullYear()} ${esc(site.name)} · Designed &amp; built as a living portfolio.</p>
</footer>`;

// ---------- index.html ----------
const cards = site.projects
  .map((p, i) =>
    p.comingSoon
      ? `
    <div class="card card-soon">
      <div class="card-media">0${i + 1}</div>
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.short)}</p>
      </div>
      <span class="card-cta">Case study coming soon</span>
    </div>`
      : `
    <a class="card" href="work/${p.slug}.html">
      <div class="card-media">0${i + 1}</div>
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.short)}</p>
      </div>
      <span class="card-cta">View case study →</span>
    </a>`
  )
  .join("");

const approach = site.approach
  .map(
    (a, i) => `<div class="pillar"><span class="num">0${i + 1}</span><h3>${esc(a.t)}</h3><p>${esc(a.d)}</p></div>`
  )
  .join("");

const index = `${head(`${site.name} — ${site.role}`)}
<body>
${nav()}
<main>
  <section class="hero">
    <p class="eyebrow">${esc(site.role)}</p>
    <h1>${esc(site.tagline).replace("human-centered", "<em>human-centered</em>")}</h1>
    <div class="hero-actions">
      <a class="btn" href="#work">See my work</a>
      <a class="btn ghost" href="mailto:${site.email}">Get in touch</a>
    </div>
  </section>

  <section id="work" class="section">
    <div class="section-head">
      <h2>Selected work</h2>
      <p>Seven projects across enterprise, education, healthcare, and UX research — most involving AI, complex workflows, and dense information.</p>
    </div>
    <div class="grid">${cards}</div>
  </section>

  <section id="about" class="section about">
    <div class="section-head"><h2>About</h2></div>
    <div class="about-grid">
      <div class="about-copy">${site.about.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <aside class="about-side">
        <h3>What I do</h3>
        <ul>
          <li>0→1 product design</li>
          <li>UX research &amp; workflow mapping</li>
          <li>Information architecture</li>
          <li>Designing for AI + human control</li>
          <li>Wireframes → high-fidelity UI</li>
          <li>Prototyping &amp; dev collaboration</li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="section approach">
    <div class="section-head"><h2>How I think &amp; solve problems</h2></div>
    <div class="pillars">${approach}</div>
  </section>
</main>
${footer()}
</body></html>`;

fs.writeFileSync(path.join(OUT, "index.html"), index);

const scrollFxScript = `
<script>
(function () {
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  var bar = d.createElement("div");
  bar.className = "read-progress";
  bar.setAttribute("aria-hidden", "true");
  d.body.appendChild(bar);
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  var figA = d.querySelector(".fig-a");
  var sheet = d.getElementById("tender-sheet");
  var route = d.getElementById("tender-route");
  var desk = d.querySelector(".story-desk");
  var steps = desk ? Array.prototype.slice.call(desk.querySelectorAll(".ds")) : [];
  var stage = desk ? desk.querySelector(".story-stage") : null;
  var live = !reduce && figA && sheet && route && desk && stage;
  if (live) { figA.classList.add("story-live"); desk.classList.add("story-live"); }

  function updateStory() {
    if (!live) return;
    var vh = window.innerHeight;
    var r = figA.getBoundingClientRect();
    var t = clamp((vh * 0.9 - (r.top + r.height / 2)) / (vh * 0.5), 0, 1);
    var e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    var pt = route.getPointAtLength(route.getTotalLength() * e);
    sheet.setAttribute("transform", "translate(" + pt.x + " " + pt.y + ") rotate(" + (-10 * (1 - e)) + ") translate(-22 -29)");
    sheet.style.opacity = clamp(t * 12, 0, 1);
    figA.classList.toggle("na-1", t > 0.02);
    figA.classList.toggle("na-2", t > 0.35);
    figA.classList.toggle("na-3", t > 0.8);

    var top = parseFloat(getComputedStyle(stage).top) || 0;
    var dr = desk.getBoundingClientRect();
    var total = desk.offsetHeight - stage.offsetHeight;
    var p = total > 0 ? clamp((top - dr.top) / total, 0, 1) : 0;
    var step = Math.min(5, Math.floor(p * 6));
    for (var n = 1; n <= 6; n++) desk.classList.toggle("on-" + n, n <= step + 1);
    var active = Math.min(step, steps.length - 1);
    steps.forEach(function (li, i) {
      li.classList.toggle("is-on", i === active);
      li.classList.toggle("is-done", i < active);
    });
  }

  var ticking = false;
  function paint() {
    var h = root.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ")";
    updateStory();
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
  window.addEventListener("resize", paint);
  paint();

  Array.prototype.forEach.call(d.querySelectorAll(".vq-wrap"), function (w) {
    var rail = w.querySelector(".vq-rail");
    var btns = w.querySelectorAll(".vq-btn");
    function sync() {
      btns[0].disabled = rail.scrollLeft < 4;
      btns[1].disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    }
    Array.prototype.forEach.call(btns, function (b) {
      b.hidden = false;
      b.addEventListener("click", function () {
        var card = rail.querySelector(".vq");
        var step = (card ? card.getBoundingClientRect().width : 320) + 16;
        rail.scrollBy({ left: step * Number(b.getAttribute("data-dir")), behavior: reduce ? "auto" : "smooth" });
      });
    });
    rail.addEventListener("scroll", sync, { passive: true });
    sync();
  });

  if (!("IntersectionObserver" in window)) return;

  var sections = Array.prototype.slice.call(d.querySelectorAll(".sheet .case-block"));

  if (!reduce) {
    var targets = d.querySelectorAll(".sheet .case-block:not(.story-block), .sheet .rcard, .sheet .annotation, .sheet .snapshot-item, .sheet .decision > div, .sheet .flow-step, .sheet .shot img, .sheet .shot-ph, .sheet .proto-ph, .sheet .context-note");
    var seen = new Map();
    Array.prototype.forEach.call(targets, function (el) {
      var key = el.parentNode;
      var n = seen.get(key) || 0;
      seen.set(key, n + 1);
      el.style.setProperty("--d", Math.min(n * 90, 450) + "ms");
      el.classList.add("rv");
    });
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("rv-in"); reveal.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    Array.prototype.forEach.call(targets, function (el) { reveal.observe(el); });
  }

  if (window.matchMedia && matchMedia("(min-width: 1280px)").matches) {
    var rail = d.createElement("nav");
    rail.className = "chapter-rail";
    rail.setAttribute("aria-label", "Case study sections");
    var links = [];
    sections.forEach(function (sec, i) {
      var beat = sec.querySelector(".beat");
      if (!beat) return;
      if (!sec.id) sec.id = "sec-" + (i + 1);
      var a = d.createElement("a");
      a.href = "#" + sec.id;
      a.setAttribute("aria-label", beat.textContent);
      var span = d.createElement("span");
      span.textContent = beat.textContent;
      a.appendChild(span);
      rail.appendChild(a);
      links.push({ sec: sec, a: a });
    });
    d.body.appendChild(rail);
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) { l.a.classList.toggle("on", l.sec === e.target); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    links.forEach(function (l) { spy.observe(l.sec); });
  }
})();
</script>`;

// ---------- case studies ----------
const workDir = path.join(OUT, "work");
fs.mkdirSync(workDir, { recursive: true });

const linkedProjects = site.projects.filter((p) => !p.comingSoon);

linkedProjects.forEach((p, idx) => {
  const prev = linkedProjects[(idx - 1 + linkedProjects.length) % linkedProjects.length];
  const next = linkedProjects[(idx + 1) % linkedProjects.length];

  const scoreRows = Object.entries(p.scores)
    .map(([k, v]) => `<div class="score-row"><span>${esc(k)}</span>${stars(v)}</div>`)
    .join("");

  const meta = [
    p.timeline ? ["Timeline", p.timeline] : null,
    ["Role", p.roleLead.split(" — ")[0].split(".")[0]],
    p.scope ? ["Scope", p.scope] : null,
    p.productDesc ? ["Product", p.productDesc] : null,
    p.permission ? ["Public display", p.permission] : null,
  ].filter(Boolean);

  const s = p.story;
  const page = `${head(`${p.product ? `${p.product} — ` : ""}${p.title} — ${site.name}`, "../")}
<body>
${nav("../")}
<main class="case">
  <a class="back" href="../index.html#work">← All work</a>
  <header class="case-hero" data-key="${esc(p.id[0])}">
    <p class="eyebrow">Case study${p.product ? ` · ${esc(p.product)}` : ""}</p>
    <h1>${esc(p.title)}</h1>
    <p class="lede">${esc(p.short)}</p>${p.tags ? `
    <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
    <div class="meta">${meta
      .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join("")}</div>
  </header>

  ${p.explainer || p.research ? "" : `<figure class="shot hero-shot">
    ${p.images && p.images.cover
      ? `<img src="${p.images.cover}" alt="${esc(p.title)} — product screenshot" loading="lazy">`
      : `<div class="shot-ph" data-key="${esc(p.id[0])}"><span>Add cover image — <code>${p.slug}-cover.jpg</code></span></div>`}
    <figcaption>${p.images && p.images.coverCaption ? esc(p.images.coverCaption) : "Cover / hero shot"}</figcaption>
  </figure>`}

  <div class="sheet">${p.explainer
    ? explainer(p.explainer)
    : p.research
    ? research(p.research, p)
    : `
  <section class="case-block scene">
    <p class="beat">One moment</p>
    <p class="scene-text">${esc(s.scene)}</p>
    <div class="hfb">
      <div class="hfb-item hope"><span>The hope</span><p>${esc(s.hope)}</p></div>
      <div class="hfb-item fear"><span>The fear</span><p>${esc(s.fear)}</p></div>
      <div class="hfb-item but"><span>But…</span><p>${esc(s.but)}</p></div>
    </div>
  </section>

  <section class="case-block">
    <p class="beat">Why — the belief</p>
    <h2>${esc(s.whyTitle)}</h2>
    <p>${esc(s.why)}</p>
    <p class="context-note"><strong>Who it was for.</strong> ${esc(p.who)}</p>
  </section>

  <section class="case-block">
    <p class="beat">How — the approach</p>
    <h2>The choices I made</h2>
    <p class="role-lead">${esc(p.roleLead)}</p>
    <ul class="ticks">${s.how.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
  </section>

  <section class="case-block">
    <p class="beat">What — the thing you can see</p>
    <h2>What I designed</h2>
    <p>${esc(p.designed)}</p>
    <figure class="shot grid-shots">
      ${p.images && p.images.a
        ? `<img src="${p.images.a}" alt="${esc(p.title)} — ${esc(p.images.aCaption || "screen")}" loading="lazy">`
        : `<div class="shot-ph" data-key="${esc(p.id[0])}"><span>Screen 1 — <code>${p.slug}-1.jpg</code></span></div>`}
      ${p.images && p.images.b
        ? `<img src="${p.images.b}" alt="${esc(p.title)} — ${esc(p.images.bCaption || "screen")}" loading="lazy">`
        : `<div class="shot-ph" data-key="${esc(p.id[0])}"><span>Screen 2 — <code>${p.slug}-2.jpg</code></span></div>`}
      <figcaption>${p.images && (p.images.aCaption || p.images.bCaption)
        ? esc([p.images.aCaption, p.images.bCaption].filter(Boolean).join("  ·  "))
        : "Selected screens &amp; flows"}</figcaption>
    </figure>
    <details class="role-full">
      <summary>The full scope of what I did</summary>
      <ul class="ticks">${p.role.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </details>
  </section>

  <section class="case-block">
    <p class="beat">Where it landed</p>
    <h2>The takeaway</h2>
    <p class="takeaway">${esc(s.takeaway)}</p>
    <p class="unsolved"><strong>Still unsolved.</strong> ${esc(s.unsolved)}</p>
  </section>

  <section class="case-block scores">
    <h2>Self-evaluation</h2>
    <div class="score-card">${scoreRows}</div>
    <p class="fine">Measurable impact is intentionally left open — to be updated with real metrics as they become available.</p>
  </section>`}
  </div>

  <nav class="case-nav">
    <a href="${prev.slug}.html">← ${esc(prev.title)}</a>
    <a href="${next.slug}.html">${esc(next.title)} →</a>
  </nav>
</main>
${footer("../")}${p.scrollFx ? scrollFxScript : ""}
</body></html>`;

  fs.writeFileSync(path.join(workDir, `${p.slug}.html`), page);
});

console.log("Generated index.html and", linkedProjects.length, "case studies.");
