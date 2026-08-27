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
<link rel="preconnect" href="https://fonts.googleapis.com">
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

  <section class="case-block">
    <h2>What I designed</h2>
    <p>${esc(p.designed)}</p>
  </section>

  <section class="case-block">
    <h2>Who it was for</h2>
    <p>${esc(p.who)}</p>
  </section>

  <section class="case-block">
    <h2>The problem</h2>
    ${p.problem.map((x) => `<p>${esc(x)}</p>`).join("")}
  </section>

  <section class="case-block">
    <h2>My role &amp; contribution</h2>
    <p class="role-lead">${esc(p.roleLead)}</p>
    <ul class="ticks">${p.role.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
  </section>

  <section class="case-block">
    <figure class="shot grid-shots">
      <div class="shot-ph" data-key="${esc(p.id[0])}"><span>Screen 1 — <code>${p.slug}-1.jpg</code></span></div>
      <div class="shot-ph" data-key="${esc(p.id[0])}"><span>Screen 2 — <code>${p.slug}-2.jpg</code></span></div>
      <figcaption>Selected screens &amp; flows</figcaption>
    </figure>
  </section>

  <section class="case-block">
    <h2>Reflection</h2>
    <ul class="reflect">${p.notes.map((x) => {
      const [h, ...rest] = x.split(" — ");
      return `<li><strong>${esc(h)}</strong>${rest.length ? " — " + esc(rest.join(" — ")) : ""}</li>`;
    }).join("")}</ul>
  </section>

  <section class="case-block scores">
    <h2>Self-evaluation</h2>
    <div class="score-card">${scoreRows}</div>
    <p class="fine">Measurable impact is intentionally left open — to be updated with real metrics as they become available.</p>
  </section>

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
