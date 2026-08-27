# Tejaswini Gedam — Portfolio

A simple, fast, static portfolio for a Product & UX Designer. Built with plain HTML/CSS (no build step required to view) plus a small Node generator that produces the case-study pages from a single data file.

## Structure

```
index.html            Home — hero, selected work, about, approach
styles.css            All styling (light + dark aware, responsive)
build.js              Generator: regenerates index.html + work/*.html from data
work/*.html           One page per case study (generated)
```

## Case studies

1. **Vbidd** — AI Bid Management System (Founding Designer)
2. **Educator AI Platform** — AI-assisted grading
3. **Wellytics** — AI-powered EMR platform
4. **Shift Management Platform** — healthcare workforce scheduling
5. **Nurse & Hospital Platform** — two-sided staffing marketplace
6. **Nurse Compliance & Verification Platform**

## Editing content

All content lives in the `site` object at the top of `build.js`. Edit text, scores,
timelines, or the "public display" permission there, then regenerate:

```bash
node build.js
```

Placeholders left intentionally open (per the source brief): several timelines,
public-display permissions, and the "Measurable impact" scores — fill these in as
real data becomes available.

## View locally

Just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy (GitHub Pages)

Push to `main`, then enable Pages → Deploy from branch → `main` / root.
The site is fully static, so no build is needed on the host.
