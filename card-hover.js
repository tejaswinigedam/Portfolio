// Card hover over the thumbnail: its solid colour spreads from the corner the cursor entered
// (soft many-lobed blob) and the cursor becomes a ring labelled "View case study".
(() => {
  const N = 11, pts = [];
  for (let i = 0; i <= 180; i++) {
    const t = i / 180 * Math.PI * 2, r = 1 + .07 * Math.sin(N * t) + .03 * Math.sin(3 * t + 1);
    pts.push(`${(Math.cos(t) * r).toFixed(4)} ${(Math.sin(t) * r).toFixed(4)}`);
  }
  const BLOB = `<svg viewBox="-1.1 -1.1 2.2 2.2" aria-hidden="true"><path d="M${pts.join('L')}Z"/></svg>`;

  const ring = document.createElement('div');
  ring.className = 'hring';
  ring.setAttribute('aria-hidden', 'true');
  ring.innerHTML = '<span>View case study</span>';
  document.body.append(ring);

  let cur = null;
  const move = e => { ring.style.translate = `${e.clientX}px ${e.clientY}px`; };
  addEventListener('pointermove', e => { if (cur) move(e); }, { passive: true });
  const leave = box => {
    box.classList.remove('hf-on');
    if (cur === box) { cur = null; ring.classList.remove('on'); }
  };
  addEventListener('scroll', () => { if (cur && !cur.matches(':hover')) leave(cur); }, { passive: true });

  document.querySelectorAll('.card .card-thumb').forEach(box => {
    const lay = document.createElement('span');
    lay.className = 'hfl';
    lay.innerHTML = BLOB;
    box.append(lay);
    box.addEventListener('pointerenter', e => {
      if (e.pointerType !== 'mouse') return;
      const r = box.getBoundingClientRect(),
        x = e.clientX - r.left < r.width / 2 ? 0 : 1,
        y = e.clientY - r.top < r.height / 2 ? 0 : 1,
        d = Math.hypot(r.width, r.height) * 1.25,
        s = lay.firstChild;
      s.style.width = s.style.height = 2 * d + 'px';
      s.style.left = (x * r.width - d) + 'px';
      s.style.top = (y * r.height - d) + 'px';
      box.classList.remove('hf-on'); void s.offsetWidth; box.classList.add('hf-on');
      cur = box;
      ring.style.transition = 'none'; move(e); void ring.offsetWidth; ring.style.transition = '';
      ring.classList.add('on');
    });
    box.addEventListener('pointerleave', () => leave(box));
  });
  document.body.classList.add('hov-fill');
})();
