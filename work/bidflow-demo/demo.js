/* Bid flow — interactive prototype.
   Everything here is fictional. The "AI" is scripted: it just reveals pre-written extraction results. */
(function () {
  'use strict';

  /* ---------- sample data ---------- */
  var TEAM = ['Asha', 'Ben', 'Chen', 'Dara'];
  var TENDERS = [
    {
      id: 'harborview', tag: 'Clean tender', pages: 48, days: 18, value: '£14.2m over 5 years',
      name: 'Municipal Waste & Recycling Collection', buyer: 'Harborview City Council', ref: 'HC-2026-014',
      sections: [
        { title: '1 · Overview', clauses: [
          { id: 'c1', n: '1.1', t: 'Harborview City Council invites tenders for the collection of household waste and recycling across Zones A–D for an initial term of five (5) years, with an option to extend for two further periods of twelve (12) months each.' },
          { id: 'c2', n: '1.2', t: 'Tenders must be submitted through the council’s e-procurement portal no later than 12:00 noon on the closing date. Late submissions will not be considered.' },
          { id: 'c3', n: '1.3', t: 'Clarification questions must be raised in writing no later than ten (10) working days before the closing date.' } ] },
        { title: '2 · Eligibility', clauses: [
          { id: 'c4', n: '2.1', t: 'The tenderer must have achieved an annual turnover of not less than £4,000,000 in each of the last two financial years.' },
          { id: 'c5', n: '2.2', t: 'The tenderer must hold public liability insurance of not less than £10,000,000 per claim and employer’s liability insurance of £5,000,000.' },
          { id: 'c6', n: '2.3', t: 'The tenderer must hold a current ISO 14001 certification, or equivalent environmental management accreditation, covering waste collection.' },
          { id: 'c7', n: '2.4', t: 'The tenderer must provide three (3) references for contracts of comparable scale delivered within the last five years.' } ] },
        { title: '3 · Technical', clauses: [
          { id: 'c8', n: '3.1', t: 'All collection vehicles must meet Euro VI emission standards. At least 30% of the fleet allocated to the contract should be electric or hybrid by contract year three.' },
          { id: 'c9', n: '3.2', t: 'Missed collections must be remedied within 24 hours of notification. Performance of 99.5% successful first-time collections is required.' },
          { id: 'c10', n: '3.3', t: 'The tenderer must provide a mobilisation plan demonstrating readiness to commence services within 90 days of award.' } ] },
        { title: '4 · Commercial', clauses: [
          { id: 'c11', n: '4.1', t: 'Prices must be fixed for the first 24 months and thereafter indexed annually to CPI, capped at 4%.' },
          { id: 'c12', n: '4.2', t: 'A performance bond of 10% of annual contract value shall be provided prior to contract commencement.' },
          { id: 'c13', n: '4.3', t: 'The council may terminate for convenience on 6 months’ written notice. Liquidated damages of £250 per missed collection apply beyond the agreed tolerance.' } ] }
      ],
      reqs: [
        { id: 'r1', cat: 'Contractual', short: 'Confirm 5-year term + two 12-month extensions', t: 'Initial term of 5 years, with two 12-month extension options', c: 'c1', conf: 'high' },
        { id: 'r2', cat: 'Dates', short: 'Submit via e-portal before 12:00 on closing day', t: 'Submit via the e-procurement portal by 12:00 noon on the closing date', c: 'c2', conf: 'high' },
        { id: 'r3', cat: 'Dates', short: 'Send clarification questions in time', t: 'Raise clarification questions at least 10 working days before closing', c: 'c3', conf: 'high' },
        { id: 'r4', cat: 'Eligibility', short: 'Evidence turnover ≥ £4m for two years', t: 'Annual turnover of at least £4m in each of the last two financial years', c: 'c4', conf: 'high' },
        { id: 'r5', cat: 'Eligibility', short: 'Provide insurance certificates', t: 'Public liability £10m per claim and employer’s liability £5m', c: 'c5', conf: 'high' },
        { id: 'r6', cat: 'Eligibility', short: 'Provide ISO 14001 (or equivalent) certificate', t: 'Current ISO 14001 or equivalent covering waste collection', c: 'c6', conf: 'med', note: '“equivalent accreditation” is not defined. Consider asking the council which standards they accept.' },
        { id: 'r7', cat: 'Eligibility', short: 'Collect three comparable references', t: 'Three references for comparable contracts delivered in the last five years', c: 'c7', conf: 'high' },
        { id: 'r8', cat: 'Technical', short: 'Write fleet plan (Euro VI, 30% electric/hybrid by year 3)', t: 'Euro VI fleet, with at least 30% electric or hybrid by contract year three', c: 'c8', conf: 'high' },
        { id: 'r9', cat: 'Technical', short: 'Define service-level response for missed collections', t: '99.5% first-time collection and missed collections remedied within 24 hours', c: 'c9', conf: 'med', note: 'Two separate measures are combined in one clause. Treat them as two service levels.' },
        { id: 'r10', cat: 'Technical', short: 'Write 90-day mobilisation plan', t: 'Mobilisation plan to start services within 90 days of award', c: 'c10', conf: 'high' },
        { id: 'r11', cat: 'Contractual', short: 'Build pricing schedule (24-month fix, then CPI, cap 4%)', t: 'Prices fixed for 24 months, then CPI-indexed with a 4% cap', c: 'c11', conf: 'high' },
        { id: 'r12', cat: 'Contractual', short: 'Arrange performance bond (10% of annual value)', t: 'Performance bond of 10% of annual contract value before commencement', c: 'c12', conf: 'high' },
        { id: 'r13', cat: 'Contractual', short: 'Review termination terms and liquidated damages', t: 'Termination for convenience on 6 months’ notice; £250 liquidated damages per missed collection beyond tolerance', c: 'c13', conf: 'low', note: '“Agreed tolerance” is not defined anywhere in the document, so the real financial exposure cannot be calculated.' }
      ],
      elig: [
        { r: 'r4', need: 'Turnover ≥ £4m, last 2 years', have: '£5.2m and £5.6m', state: 'met' },
        { r: 'r5', need: 'Public liability £10m · Employer’s liability £5m', have: 'Public liability £5m · Employer’s liability £5m', state: 'gap', fix: 'Public liability is £5m short of the requirement.' },
        { r: 'r6', need: 'ISO 14001 covering waste collection', have: 'ISO 14001 held. Scope excludes collection services.', state: 'unclear', fix: 'Certificate scope may not cover collection.' },
        { r: 'r7', need: 'Three comparable references (5 years)', have: 'Two references on file', state: 'gap', fix: 'One reference short.' },
        { r: 'r12', need: 'Performance bond facility ≈ £1.4m', have: '£2.0m bond facility', state: 'met' }
      ],
      docs: ['Audited accounts (2 years)', 'Insurance certificates', 'ISO 14001 certificate', 'Three reference letters', 'Fleet transition plan', 'Mobilisation plan', 'Pricing schedule', 'Performance bond letter']
    },
    {
      id: 'northfield', tag: 'Messy tender', pages: 112, days: 11, value: '£6.8m over 4 years',
      name: 'Medical Consumables Framework', buyer: 'Northfield Health Trust', ref: 'NHT/MC/0457',
      sections: [
        { title: '1 · Introduction', clauses: [
          { id: 'd1', n: '1.1', t: 'Northfield Health Trust (“the Trust”) intends to establish a multi-supplier framework for medical consumables across Lots 1–5 for a period of four years.' },
          { id: 'd2', n: '1.4', t: 'The closing date for submissions is Friday at 12 noon. Tenders received after this time may be rejected at the Trust’s discretion.' } ] },
        { title: '2 · Supplier requirements', clauses: [
          { id: 'd4', n: '2.1', t: 'Suppliers must demonstrate financial standing satisfactory to the Trust; a minimum turnover of £1.5m is expected.' },
          { id: 'd5', n: '2.3', t: 'Products must be CE/UKCA marked and suppliers must hold ISO 13485 certification where applicable.' },
          { id: 'd6', n: '2.5', t: 'Suppliers shall maintain adequate insurance cover as set out in Schedule 4.' } ] },
        { title: '3 · Delivery & service', clauses: [
          { id: 'd7', n: '3.2', t: 'Deliveries must be made within 48 hours of order for stock items and 5 working days for non-stock items.' },
          { id: 'd8', n: '3.4', t: 'Suppliers shall provide product samples on request within 10 working days.' },
          { id: 'd9', n: '3.6', t: 'The Trust expects continuous improvement in sustainability, including reduction of single-use plastics where clinically appropriate.' } ] },
        { title: '4 · Commercial', clauses: [
          { id: 'd10', n: '4.1', t: 'Prices shall remain firm for the framework duration save for exceptional circumstances approved by the Trust.' },
          { id: 'd11', n: '4.2', t: 'Payment terms are 60 days from receipt of a valid invoice.' } ] },
        { title: 'Appendix B · Portal notes', clauses: [
          { id: 'd3', n: 'B.7', t: 'Note: the closing date shall be the Monday following the date stated in Section 1 to allow for portal maintenance.' } ] }
      ],
      reqs: [
        { id: 'q1', cat: 'Dates', short: 'Ask the Trust to confirm the closing date', t: 'Closing date is Friday 12 noon (§1.4) or the following Monday (Appendix B.7)', c: 'd2', also: ['d3'], conf: 'low', note: 'Two clauses give different closing dates. Raise a clarification question and plan for the earlier date until it is confirmed.' },
        { id: 'q2', cat: 'Contractual', short: 'Confirm framework scope (Lots 1–5, 4 years)', t: 'Multi-supplier framework, Lots 1–5, four-year term', c: 'd1', conf: 'high' },
        { id: 'q3', cat: 'Eligibility', short: 'Evidence turnover ≥ £1.5m', t: 'Minimum turnover of £1.5m “expected”', c: 'd4', conf: 'med', note: 'Phrased as an expectation, not a hard requirement. Confirm whether it is pass/fail.' },
        { id: 'q4', cat: 'Eligibility', short: 'Provide CE/UKCA declarations and ISO 13485', t: 'CE/UKCA marking and ISO 13485 certification where applicable', c: 'd5', conf: 'high' },
        { id: 'q5', cat: 'Eligibility', short: 'Obtain Schedule 4 and match insurance', t: 'Insurance cover “as set out in Schedule 4”', c: 'd6', conf: 'low', note: 'Schedule 4 is not included in the document pack. The required cover levels are unknown.' },
        { id: 'q6', cat: 'Technical', short: 'Confirm 48h / 5-day delivery capability', t: 'Delivery within 48 hours (stock) and 5 working days (non-stock)', c: 'd7', conf: 'high' },
        { id: 'q7', cat: 'Technical', short: 'Set up sample process (10 working days)', t: 'Provide product samples within 10 working days of request', c: 'd8', conf: 'high' },
        { id: 'q8', cat: 'Technical', short: 'Draft sustainability response', t: 'Continuous sustainability improvement, including less single-use plastic', c: 'd9', conf: 'low', note: 'No measurable target is given. The Trust may score this qualitatively.' },
        { id: 'q9', cat: 'Contractual', short: 'Check price-firm clause against supplier costs', t: 'Prices firm for the whole framework duration, with exceptions approved by the Trust', c: 'd10', conf: 'med', note: '“Exceptional circumstances” is undefined.' },
        { id: 'q10', cat: 'Contractual', short: 'Check payment terms against cash flow', t: 'Payment terms of 60 days from a valid invoice', c: 'd11', conf: 'high' }
      ],
      elig: [
        { r: 'q3', need: 'Turnover ≥ £1.5m', have: '£5.2m', state: 'met' },
        { r: 'q4', need: 'CE/UKCA and ISO 13485', have: 'CE/UKCA held. ISO 13485 not held.', state: 'gap', fix: 'ISO 13485 certificate needed for regulated products.' },
        { r: 'q5', need: 'Insurance per Schedule 4', have: 'Schedule not provided', state: 'unclear', fix: 'Cannot be checked until Schedule 4 is received.' }
      ],
      docs: ['Audited accounts', 'CE/UKCA declarations', 'ISO 13485 certificate', 'Insurance certificates', 'Delivery service statement', 'Sample handling policy', 'Pricing schedule', 'Sustainability statement']
    }
  ];
  var STEPS = ['Reading the document', 'Extracting requirements and deadlines', 'Checking eligibility against your company profile', 'Linking every item to its source clause'];
  var CATS = ['All', 'Dates', 'Eligibility', 'Technical', 'Contractual'];
  var FIX_OPTS = ['Unresolved', 'Will obtain / upgrade before submission', 'Cover with a partner or sub-contractor', 'Ask the buyer to clarify', 'Accept the risk'];

  /* ---------- state ---------- */
  var S = { stage: 'home', t: null, step: 0, tab: 'req', filter: 'All', sel: null, rs: {}, fix: {}, tasks: null, docs: {}, submitted: false, toast: '' };
  var app = document.getElementById('app');

  function byId(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i]; }
  function clauseOf(id) { var out; S.t.sections.forEach(function (s) { s.clauses.forEach(function (c) { if (c.id === id) out = c; }); }); return out; }
  function status(r) { return S.rs[r.id] || 'unreviewed'; }
  function dateIn(n) { var d = new Date(Date.now() + n * 86400000); return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function counts() {
    var reqs = S.t.reqs, rev = 0, dis = 0;
    reqs.forEach(function (r) { var s = status(r); if (s !== 'unreviewed') rev++; if (s === 'disputed') dis++; });
    var open = S.t.elig.filter(function (e) { return e.state !== 'met' && (!S.fix[e.r] || S.fix[e.r] === 'Unresolved'); }).length;
    var tasks = S.tasks ? S.tasks.length : 0, done = S.tasks ? S.tasks.filter(function (t) { return t.done; }).length : 0;
    var docs = S.t.docs.filter(function (d) { return S.docs[d]; }).length;
    return { total: reqs.length, rev: rev, dis: dis, open: open, tasks: tasks, done: done, docs: docs, ndocs: S.t.docs.length };
  }

  /* ---------- icons ---------- */
  var IC = {
    grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
    list: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 0 1 0 5.5M18 14.5c2 .7 3 2.7 3 5.5"/>',
    cal: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
    star: '<path d="M12 4l2.5 5 5.5.8-4 3.9.9 5.5L12 16.6 7.1 19.2l.9-5.5-4-3.9 5.5-.8z"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M16 16l4 4"/>',
    spin: '<circle cx="12" cy="12" r="8" stroke-dasharray="2 3"/>',
    ok: '<circle cx="12" cy="12" r="8"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    doc: '<path d="M7 4h7l4 4v12H7z"/><path d="M14 4v4h4"/>',
    xbox: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9l6 6M15 9l-6 6"/>',
    shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor" stroke="none"/>',
    build: '<rect x="6" y="3" width="12" height="18" rx="1"/><path d="M10 8h1M13 8h1M10 12h1M13 12h1M10 21v-4h4v4"/>'
  };
  function ic(n, cls) { return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + '</svg>'; }
  var WARN = '<svg class="ic warn" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l9 16H3z" fill="#f5a623" stroke="#f5a623" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 10v4M12 17v.1" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>';
  var META = { harborview: { cost: '£1,500', emd: '£140,000', imp: 'HIGH IMPORTANCE' }, northfield: { cost: '£900', emd: '£60,000', imp: 'MEDIUM IMPORTANCE' } };

  /* ---------- shell ---------- */
  function shell(inner) {
    var nav = ['grid', 'list', 'folder', 'users', 'cal', 'star'].map(function (n, i) { return '<span class="sbtn' + (i === 1 ? ' on' : '') + '" title="Demo only">' + ic(n) + '</span>'; }).join('');
    return '<div class="shell"><aside class="side"><span class="logo">B</span>' + nav + '</aside><div class="mainwrap">' +
      '<div class="appbar"><label class="search">' + ic('search') + '<input placeholder="Search" aria-label="Search (demo only)" disabled></label><span class="appright"><span class="bellbtn">' + ic('bell') + '</span><span class="avatar">TG</span></span></div>' +
      '<div class="sheet">' + inner + '</div></div></div>';
  }
  function tile(icon, label, val, on, action, id, cls) {
    return '<' + (action ? 'button' : 'div') + ' class="tile' + (on ? ' on' : '') + (cls ? ' ' + cls : '') + '"' + (action ? ' data-a="' + action + '" data-id="' + id + '"' : '') + '><span class="tl">' + ic(icon) + label + '</span><b>' + val + '</b></' + (action ? 'button' : 'div') + '>';
  }
  function stepper(labels, active) {
    return '<ol class="stepper">' + labels.map(function (l, i) { return '<li class="' + (i < active ? 'past' : i === active ? 'now' : '') + '"><i></i><span>' + l + '</span></li>'; }).join('') + '</ol>';
  }
  var STAGES = ['Initiated', 'Requirements reviewed', 'Eligibility resolved', 'Bid plan created', 'Tasks completed', 'Submitted'];
  function stageIdx() {
    var c = counts(), i = 0;
    if (c.rev === c.total) i = 1;
    if (i === 1 && c.open === 0) i = 2;
    if (i === 2 && S.tasks) i = 3;
    if (i === 3 && c.tasks && c.done === c.tasks) i = 4;
    if (S.submitted) i = 5;
    return i;
  }

  /* ---------- views ---------- */
  function home() {
    var opps = TENDERS.map(function (t) {
      var m = META[t.id];
      return '<article class="opp"><div class="opp-h"><b>' + t.name + '</b><span class="imp ' + (m.imp[0] === 'M' ? 'med' : '') + '">' + m.imp + '</span></div>' +
        '<div class="opp-b"><div class="opp-t"><b>' + t.buyer + '</b><span>' + t.ref + ' · ' + t.pages + ' pages</span><span class="pill ' + (t.tag === 'Messy tender' ? 'amber' : 'green') + '">' + t.tag + '</span></div>' +
        '<div class="kv"><div><span>Due date</span><b>' + dateIn(t.days) + '</b></div><div><span>Value</span><b>' + t.value + '</b></div><div><span>Bid cost</span><b>' + m.cost + '</b></div><div><span>EMD</span><b>' + m.emd + '</b></div></div>' +
        '<div class="ring"><b>' + t.days + '</b><span>DAYS LEFT</span></div></div>' +
        '<div class="opp-f">' + stepper(['Initiated', 'Approved', 'Checklist created', 'Checklist completed', 'Master file approved', 'Submitted'], 0) +
        '<button class="btn ai" data-a="analyse" data-id="' + t.id + '">' + ic('spark') + 'Register with AI</button></div></article>';
    }).join('');
    return shell('<div class="titlebar"><h2>Opportunities</h2><span class="links"><span>' + ic('plus') + 'Create checklist</span><span>' + ic('plus') + 'Register new opportunity</span></span></div>' +
      '<div class="tiles">' + tile('spin', 'Active', 0) + tile('ok', 'Submitted', S.submitted ? 1 : 0) + tile('clock', 'Pending for approval', TENDERS.length, true) + tile('doc', 'Drafts', 0) + tile('xbox', 'Rejected', 0) + '</div>' +
      '<div class="filters"><label class="search wide">' + ic('search') + '<input placeholder="Search for description or bid number" disabled></label>' + ['Account', 'Location', 'People', 'Value ⇅', 'Due date ⇅'].map(function (f) { return '<span class="fchip">' + f + (f.indexOf('⇅') < 0 ? ' ⌄' : '') + '</span>'; }).join('') + '</div>' +
      '<p class="hint">Sample opportunities (fictional). Choose <b>Register with AI</b> on either one to see the workflow. Uploading your own tender is disabled in this prototype.</p>' + opps);
  }

  function analysing() {
    var items = STEPS.map(function (s, i) {
      var c = i < S.step ? 'done' : i === S.step ? 'now' : '';
      return '<li class="' + c + '"><span class="num">' + (i < S.step ? '✓' : i + 1) + '</span>' + s + '</li>';
    }).join('');
    var cur = Math.min(S.step, STEPS.length - 1);
    return shell('<div class="reg"><aside class="regside"><h2>Register opportunity</h2><ol class="regsteps">' + items + '</ol></aside>' +
      '<section class="regmain"><div class="reghead"><span class="rico">' + ic('build') + '</span><div><span class="stp">STEP ' + (cur + 1) + '</span><b>' + STEPS[cur] + '</b></div>' +
      '<span class="regbtns"><span class="btn ghost sm off">Open bid document</span><span class="btn ai sm off">' + ic('spark') + 'Register with AI</span><span class="btn ghost sm off">Back</span><span class="btn soft sm off">Save draft</span></span></div>' +
      '<div class="regbody"><span class="label">' + S.t.ref + '</span><h2 style="margin:6px 0 16px">' + S.t.name + '</h2><div class="bar"><i style="width:' + Math.round(S.step / STEPS.length * 100) + '%"></i></div><p class="hint" style="margin-top:14px">The assistant is reading ' + S.t.pages + ' pages. Nothing is accepted until you review it.</p></div></section></div>');
  }

  function reqTab() {
    var sel = S.sel ? byId(S.t.reqs, S.sel) : null;
    var hl = sel ? [sel.c] : [], hl2 = sel && sel.also ? sel.also : [];
    var doc = S.t.sections.map(function (s) {
      return '<h4>' + s.title + '</h4>' + s.clauses.map(function (c) {
        var cls = hl.indexOf(c.id) > -1 ? ' hl' : hl2.indexOf(c.id) > -1 ? ' hl2' : '';
        return '<p class="clause' + cls + '" id="cl-' + c.id + '"><b>§' + c.n + '</b>' + c.t + '</p>';
      }).join('');
    }).join('');
    var chips = CATS.map(function (c) { return '<button class="chip ' + (S.filter === c ? 'on' : '') + '" data-a="filter" data-id="' + c + '">' + c + '</button>'; }).join('');
    var list = S.t.reqs.filter(function (r) { return S.filter === 'All' || r.cat === S.filter; }).map(function (r) {
      var st = status(r), cl = clauseOf(r.c);
      var stPill = st === 'confirmed' ? '<span class="pill green">Confirmed</span>' : st === 'disputed' ? '<span class="pill red">Disputed</span>' : '<span class="status">' + WARN + 'Needs review</span>';
      var confTxt = { high: 'High confidence', med: 'Medium confidence', low: 'Low confidence' }[r.conf];
      return '<div class="req ' + st + (S.sel === r.id ? ' sel' : '') + '" data-a="sel" data-id="' + r.id + '">' +
        '<div class="row"><span class="pill purple">' + r.cat + '</span>' + stPill + '<span class="conf ' + r.conf + '"><i></i>' + confTxt + '</span></div>' +
        '<p class="t">' + r.t + '</p>' +
        '<div class="row"><button class="src" data-a="sel" data-id="' + r.id + '">Source: §' + cl.n + (r.also ? ' + B.7' : '') + '</button></div>' +
        (r.note ? '<p class="note">' + WARN + '<span>' + r.note + '</span></p>' : '') +
        '<div class="acts"><button class="btn ok sm" data-a="rs" data-id="' + r.id + '" data-v="confirmed">Confirm</button><button class="btn bad sm" data-a="rs" data-id="' + r.id + '" data-v="disputed">Dispute</button>' +
        (st !== 'unreviewed' ? '<button class="btn ghost sm" data-a="rs" data-id="' + r.id + '" data-v="unreviewed">Undo</button>' : '') + '</div></div>';
    }).join('');
    return '<div class="split"><section class="group"><div class="gh"><span class="gico">' + ic('doc') + '</span><b>Tender document</b><span class="gmeta">Click a requirement to see its source</span></div><div class="doc">' + doc + '</div></section>' +
      '<section class="group"><div class="gh"><span class="gico">' + ic('list') + '</span><b>Extracted requirements</b><span class="chips">' + chips + '</span></div><div class="reqlist">' + list + '</div></section></div>';
  }

  function eligTab() {
    var rows = S.t.elig.map(function (e) {
      var r = byId(S.t.reqs, e.r), fx = S.fix[e.r] || 'Unresolved';
      var st = e.state === 'met' ? '<span class="pill green">Met</span>' : e.state === 'gap' ? '<span class="pill red">Gap</span>' : '<span class="status">' + WARN + 'Unclear</span>';
      var opts = FIX_OPTS.map(function (o) { return '<option' + (o === fx ? ' selected' : '') + '>' + o + '</option>'; }).join('');
      return '<div class="trow elig"><div class="cell"><b>' + r.short + '</b><small>§' + clauseOf(r.c).n + '</small></div><div class="cell">' + e.need + '</div><div class="cell">' + e.have + (e.fix ? '<small class="warn-t">' + e.fix + '</small>' : '') + '</div><div class="cell">' + st + '</div><div class="cell">' +
        (e.state !== 'met' ? '<select data-a="fix" data-id="' + e.r + '" aria-label="Resolution">' + opts + '</select>' : '<span class="muted">Nothing to do</span>') + '</div></div>';
    }).join('');
    return '<p class="hint" style="margin:0 0 14px">Each requirement is compared with a sample company profile. Anything not clearly met needs your decision before it counts as handled.</p>' +
      '<section class="group"><div class="gh"><span class="gico">' + ic('shield') + '</span><b>Eligibility</b><span class="gmeta">(' + counts().open + ' open)</span></div>' +
      '<div class="thead elig"><span>Requirement</span><span>Required</span><span>Your company</span><span>Status</span><span>Resolution</span></div>' + rows + '</section>';
  }

  function planTab() {
    if (!S.tasks) {
      var c = counts();
      return '<div class="empty"><span class="gico big">' + ic('list') + '</span><h2>Turn requirements into a bid plan</h2><p>Tasks are created from every requirement that you have not disputed. ' + (c.rev < c.total ? 'You still have ' + (c.total - c.rev) + ' requirements to review. You can generate the plan now and it will cover them all.' : 'All requirements are reviewed.') + '</p><button class="btn" data-a="gen">Generate bid plan</button></div>';
    }
    var groups = {};
    S.tasks.forEach(function (t, i) { t.i = i; (groups[t.cat] = groups[t.cat] || []).push(t); });
    var out = Object.keys(groups).map(function (cat) {
      var g = groups[cat], d = g.filter(function (t) { return t.done; }).length;
      var rows = g.map(function (t) {
        var st = t.done ? '<span class="status ok2">✓ Done</span>' : '<span class="status">' + WARN + 'To do</span>';
        return '<div class="trow plan ' + (t.done ? 'done' : '') + '"><div class="cell chk"><input type="checkbox" data-a="done" data-id="' + t.i + '"' + (t.done ? ' checked' : '') + ' aria-label="Mark done"><span class="tt">' + t.title + '</span></div>' +
          '<div class="cell"><select data-a="owner" data-id="' + t.i + '" aria-label="Assignee">' + TEAM.map(function (m) { return '<option' + (m === t.owner ? ' selected' : '') + '>' + m + '</option>'; }).join('') + '</select></div><div class="cell">' + t.due + '</div><div class="cell">' + st + '</div></div>';
      }).join('');
      return '<section class="group"><div class="gh"><span class="gico">' + ic(cat === 'Eligibility' ? 'shield' : cat === 'Dates' ? 'cal' : cat === 'Technical' ? 'list' : 'doc') + '</span><b>' + cat + '</b><span class="gmeta">(' + d + '/' + g.length + ' done)</span></div>' +
        '<div class="thead plan"><span>Task name</span><span>Assignee</span><span>Due date</span><span>Status</span></div>' + rows + '</section>';
    }).join('');
    var docs = S.t.docs.map(function (d) {
      return '<div class="trow docr"><div class="cell chk"><span class="tt">' + d + '</span></div><div class="cell">' + (S.docs[d] ? '<span class="file">PDF ' + d.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '') + '.pdf <button class="x" data-a="doc" data-id="' + esc(d) + '" aria-label="Remove file">×</button></span>' : '<span class="muted">No file linked</span>') + '</div>' +
        '<div class="cell">' + (S.docs[d] ? '<span class="status ok2">✓ Attached</span>' : '<button class="btn ghost sm" data-a="doc" data-id="' + esc(d) + '">Attach file</button>') + '</div></div>';
    }).join('');
    return out + '<section class="group"><div class="gh"><span class="gico">' + ic('folder') + '</span><b>Documents</b><span class="gmeta">(' + counts().docs + '/' + S.t.docs.length + ' linked · attaching is simulated)</span></div><div class="thead docr"><span>Document</span><span>Linked file</span><span></span></div>' + docs + '</section>';
  }

  function readyTab() {
    var c = counts();
    var checks = [
      [c.rev === c.total, 'Every requirement is reviewed (' + c.rev + ' of ' + c.total + ')'],
      [c.open === 0, 'Every eligibility gap has a resolution (' + c.open + ' open)'],
      [!!S.tasks, 'A bid plan has been generated'],
      [!!S.tasks && c.done === c.tasks, 'All tasks are done (' + c.done + ' of ' + c.tasks + ')'],
      [c.docs === c.ndocs, 'All documents are linked (' + c.docs + ' of ' + c.ndocs + ')']
    ];
    var ok = checks.every(function (x) { return x[0]; });
    var list = checks.map(function (x) { return '<li class="' + (x[0] ? 'okr' : 'nor') + '"><span class="num">' + (x[0] ? '✓' : '!') + '</span>' + x[1] + '</li>'; }).join('');
    return '<section class="group"><div class="gh"><span class="gico">' + ic('ok') + '</span><b>Ready to submit?</b></div><div class="gbody"><p class="hint" style="margin:0 0 14px">Submission unlocks only when a person has reviewed and resolved everything. The AI never submits on its own.</p><ol class="regsteps gate">' + list + '</ol>' +
      (S.submitted ? '<div class="result">Submitted (not really). This is the end of the prototype. Thanks for trying Bid flow.</div>' :
        '<button class="btn" data-a="submit"' + (ok ? '' : ' disabled') + '>Submit bid</button>' + (ok ? '' : ' <span class="muted" style="margin-left:10px">Finish the checks above first</span>')) + '</div></section>';
  }

  function work() {
    var c = counts();
    var body = S.tab === 'req' ? reqTab() : S.tab === 'elig' ? eligTab() : S.tab === 'plan' ? planTab() : readyTab();
    var ready = [c.rev === c.total, c.open === 0, !!S.tasks, !!S.tasks && c.done === c.tasks, c.docs === c.ndocs].filter(Boolean).length;
    return shell('<div class="titlebar"><div class="tback"><button class="iconbtn" data-a="home" aria-label="Back to opportunities">' + ic('back') + '</button><div><h2>' + S.t.name + '</h2><span class="sub">' + S.t.buyer + ' · ' + S.t.ref + ' · ' + S.t.value + ' · Closes ' + dateIn(S.t.days) + ' (' + S.t.days + ' days)</span></div></div></div>' +
      '<div class="tiles">' + tile('list', 'Requirements reviewed', c.rev + ' / ' + c.total, S.tab === 'req', 'tab', 'req') + tile('shield', 'Open eligibility gaps', c.open, S.tab === 'elig', 'tab', 'elig') +
      tile('ok', 'Tasks done', c.done + ' / ' + c.tasks, S.tab === 'plan', 'tab', 'plan') + tile('clock', 'Readiness checks', ready + ' / 5', S.tab === 'ready', 'tab', 'ready') + '</div>' +
      stepper(STAGES, stageIdx()) + '<div class="tabbody">' + body + '</div>');
  }

  function render() {
    var keep = {};
    ['.doc', '.reqlist'].forEach(function (s) { var e = app.querySelector(s); if (e) keep[s] = e.scrollTop; });
    var y = window.scrollY;
    app.innerHTML = S.stage === 'home' ? home() : S.stage === 'analysing' ? analysing() : work();
    Object.keys(keep).forEach(function (s) { var e = app.querySelector(s); if (e) e.scrollTop = keep[s]; });
    window.scrollTo(0, y);
    if (S.scrollTo) {
      var el = document.getElementById('cl-' + S.scrollTo), box = app.querySelector('.doc');
      if (el && box) box.scrollTop = el.offsetTop - box.offsetTop - 60;
      S.scrollTo = null;
    }
    var old = document.querySelector('.toast'); if (old) old.remove();
    if (S.toast) { var t = document.createElement('div'); t.className = 'toast'; t.textContent = S.toast; document.body.appendChild(t); }
  }
  function toast(msg) { S.toast = msg; render(); setTimeout(function () { S.toast = ''; var o = document.querySelector('.toast'); if (o) o.remove(); }, 2200); }

  /* ---------- actions ---------- */
  function analyse(id) {
    S.t = byId(TENDERS, id); S.stage = 'analysing'; S.step = 0;
    S.tab = 'req'; S.filter = 'All'; S.sel = null; S.rs = {}; S.fix = {}; S.tasks = null; S.docs = {}; S.submitted = false;
    render();
    var iv = setInterval(function () {
      S.step++;
      if (S.step >= STEPS.length) { clearInterval(iv); S.stage = 'work'; }
      render();
    }, 750);
  }
  function generate() {
    var offs = { Dates: 2, Eligibility: 5, Technical: 7, Contractual: 4 }, n = 0;
    S.tasks = S.t.reqs.filter(function (r) { return status(r) !== 'disputed'; }).map(function (r) {
      return { title: r.short, cat: r.cat, owner: TEAM[n++ % TEAM.length], due: dateIn(Math.max(1, S.t.days - offs[r.cat] - (n % 3))), done: false };
    });
    toast('Bid plan generated: ' + S.tasks.length + ' tasks');
  }

  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-a]'); if (!el || el.tagName === 'SELECT' || el.type === 'checkbox') return;
    var a = el.dataset.a, id = el.dataset.id;
    if (a === 'analyse') analyse(id);
    else if (a === 'home') { S.stage = 'home'; render(); }
    else if (a === 'tab') { S.tab = id; render(); }
    else if (a === 'filter') { S.filter = id; render(); }
    else if (a === 'sel') { if (e.target.closest('.acts')) return; S.sel = id; S.scrollTo = byId(S.t.reqs, id).c; render(); }
    else if (a === 'rs') { S.rs[id] = el.dataset.v; S.sel = id; render(); }
    else if (a === 'gen') generate();
    else if (a === 'doc') { S.docs[id] = !S.docs[id]; render(); }
    else if (a === 'submit') { S.submitted = true; render(); }
  });
  app.addEventListener('change', function (e) {
    var el = e.target, a = el.dataset.a; if (!a) return;
    if (a === 'fix') S.fix[el.dataset.id] = el.value;
    else if (a === 'done') S.tasks[+el.dataset.id].done = el.checked;
    else if (a === 'owner') S.tasks[+el.dataset.id].owner = el.value;
    render();
  });

  render();
})();
