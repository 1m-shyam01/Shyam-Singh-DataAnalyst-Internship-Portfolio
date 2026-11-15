// Fill these in to show LinkedIn and email in the Contact section. Empty values stay hidden.
const CONFIG = { linkedin: "", email: "" };

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const SALES = [10.91, 11.51, 13.06, 12.22, 10.98, 12.91, 11.75, 9.45, 9.18, 12.5, 12.63, 12.3];   // ₹ million, from Task 1 Dataset.csv
const ORDERS = [81, 86, 89, 80, 85, 83, 83, 75, 79, 84, 77, 98];

(function () {
  // mobile menu
  const btn = document.querySelector('.menu'), nav = document.getElementById('nav');
  btn.addEventListener('click', () => { const o = nav.classList.toggle('is-open'); btn.setAttribute('aria-expanded', o); });
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', false); } });

  // contact links (only when configured)
  const list = document.getElementById('contact-list');
  const add = (href, text) => { const li = document.createElement('li'), a = document.createElement('a'); a.href = href; a.textContent = text; if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; } li.appendChild(a); list.appendChild(li); };
  if (CONFIG.linkedin) add(CONFIG.linkedin, 'LinkedIn');
  if (CONFIG.email) add('mailto:' + CONFIG.email, CONFIG.email);

  // monthly sales chart
  const el = document.getElementById('chart'), read = document.getElementById('chart-read');
  const W = 560, H = 300, L = 30, B = 28, T = 22, max = 14, n = SALES.length, bw = (W - L) / n;
  const hi = SALES.indexOf(Math.max(...SALES)), lo = SALES.indexOf(Math.min(...SALES));
  const y = v => T + (H - T - B) * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const mk = (t, a, txt) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); if (txt) e.textContent = txt; svg.appendChild(e); return e; };
  [0, 5, 10].forEach(g => { mk('line', { class: 'grid', x1: L, x2: W, y1: y(g), y2: y(g) }); mk('text', { x: L - 6, y: y(g) + 4, 'text-anchor': 'end' }, g); });
  const msg = i => `${MONTHS[i]}: ₹${SALES[i].toFixed(2)}M from ${ORDERS[i]} orders`;
  SALES.forEach((v, i) => {
    const x = L + i * bw + bw * 0.14, w = bw * 0.72;
    const r = mk('rect', { class: 'bar' + (i === hi ? ' is-peak' : ''), x, y: y(v), width: w, height: y(0) - y(v), rx: 2, tabindex: 0, role: 'img', 'aria-label': msg(i), style: `--i:${i}` });
    r.addEventListener('mouseenter', () => read.textContent = msg(i)); r.addEventListener('focus', () => read.textContent = msg(i));
    mk('text', { x: x + w / 2, y: H - 8, 'text-anchor': 'middle' }, MONTHS[i].slice(0, 3));
  });
  [[hi, 'Peak'], [lo, 'Low']].forEach(([i, t]) => mk('text', { class: 'tip', x: L + i * bw + bw / 2, y: y(SALES[i]) - 7, 'text-anchor': 'middle' }, `${t} ${SALES[i].toFixed(2)}`));
  el.appendChild(svg);
})();
