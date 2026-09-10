// Portfolio site generator — writes index.html + case study pages from structured data.
const fs = require("fs");
const path = require("path");

const OUT = __dirname;
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const site = {
  name: "Tejaswini Gedam",
  role: "Product & UX Designer",
  tagline: "I design clear, human-centered products for complex, information-heavy workflows — often with AI woven in.",
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
      id: "Vbidd",
      title: "Vbidd — AI Bid Management System",
      short: "A 0→1, AI-powered tender & bid management platform. Founding Designer.",
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

const head = (title, rel = "") => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(site.name)} — ${esc(site.role)}. ${esc(site.tagline)}">
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
  .map(
    (p, i) => `
    <a class="card" href="work/${p.slug}.html" style="--i:${i}">
      <div class="card-media" data-key="${esc(p.id[0])}"><span>${esc(p.id.split(" ")[0])}</span></div>
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.short)}</p>
        <span class="card-cta">View case study →</span>
      </div>
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
    <h1>${esc(site.tagline)}</h1>
    <div class="hero-actions">
      <a class="btn" href="#work">See my work</a>
      <a class="btn ghost" href="mailto:${site.email}">Get in touch</a>
    </div>
  </section>

  <section id="work" class="section">
    <div class="section-head">
      <h2>Selected work</h2>
      <p>Six products across enterprise, education, and healthcare — most involving AI, complex workflows, and dense information.</p>
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

// ---------- case studies ----------
const workDir = path.join(OUT, "work");
fs.mkdirSync(workDir, { recursive: true });

site.projects.forEach((p, idx) => {
  const prev = site.projects[(idx - 1 + site.projects.length) % site.projects.length];
  const next = site.projects[(idx + 1) % site.projects.length];

  const scoreRows = Object.entries(p.scores)
    .map(([k, v]) => `<div class="score-row"><span>${esc(k)}</span>${stars(v)}</div>`)
    .join("");

  const meta = [
    p.timeline ? ["Timeline", p.timeline] : null,
    ["Role", p.roleLead.split(" — ")[0].split(".")[0]],
    p.permission ? ["Public display", p.permission] : null,
  ].filter(Boolean);

  const s = p.story;
  const page = `${head(`${p.title} — ${site.name}`, "../")}
<body>
${nav("../")}
<main class="case">
  <a class="back" href="../index.html#work">← All work</a>
  <header class="case-hero" data-key="${esc(p.id[0])}">
    <p class="eyebrow">Case study</p>
    <h1>${esc(p.title)}</h1>
    <p class="lede">${esc(p.short)}</p>
    <div class="meta">${meta
      .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join("")}</div>
  </header>

  <figure class="shot hero-shot">
    <div class="shot-ph" data-key="${esc(p.id[0])}"><span>Add cover image — <code>${p.slug}-cover.jpg</code></span></div>
    <figcaption>Cover / hero shot</figcaption>
  </figure>

  <div class="sheet">
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
      <div class="shot-ph" data-key="${esc(p.id[0])}"><span>Screen 1 — <code>${p.slug}-1.jpg</code></span></div>
      <div class="shot-ph" data-key="${esc(p.id[0])}"><span>Screen 2 — <code>${p.slug}-2.jpg</code></span></div>
      <figcaption>Selected screens &amp; flows</figcaption>
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
  </section>
  </div>

  <nav class="case-nav">
    <a href="${prev.slug}.html">← ${esc(prev.title)}</a>
    <a href="${next.slug}.html">${esc(next.title)} →</a>
  </nav>
</main>
${footer("../")}
</body></html>`;

  fs.writeFileSync(path.join(workDir, `${p.slug}.html`), page);
});

console.log("Generated index.html and", site.projects.length, "case studies.");
