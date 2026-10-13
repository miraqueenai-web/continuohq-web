// Yayın öncesi SEO kontrolü: başlık, açıklama, canonical, tek H1, görsel alt metni, yapısal veri.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const dist = new URL('../dist/', import.meta.url).pathname;
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && !p.endsWith('404.html') && files.push(p); });
walk(dist);
const problems = [], titles = new Map(), descs = new Map();
for (const f of files) {
  const h = readFileSync(f, 'utf8'), page = f.replace(dist, '/');
  const t = h.match(/<title>([^<]*)<\/title>/)?.[1];
  const d = h.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!t) problems.push(`${page}: başlık yok`); else { if (t.length > 75) problems.push(`${page}: başlık uzun (${t.length})`); titles.set(t, [...(titles.get(t) || []), page]); }
  if (!d) problems.push(`${page}: açıklama yok`); else { if (d.length < 70 || d.length > 175) problems.push(`${page}: açıklama uzunluğu ${d.length}`); descs.set(d, [...(descs.get(d) || []), page]); }
  if (!/<link rel="canonical" href="https:\/\/continuohq\.com/.test(h)) problems.push(`${page}: canonical yok`);
  const h1 = (h.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) problems.push(`${page}: ${h1} adet H1`);
  for (const [img] of h.matchAll(/<img [^>]*>/g)) if (!/alt="[^"]+"/.test(img)) problems.push(`${page}: alt metni olmayan görsel`);
  for (const [, j] of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(j); } catch { problems.push(`${page}: bozuk yapısal veri`); } }
  if (!/<html lang="tr"/.test(h)) problems.push(`${page}: dil etiketi yok`);
}
for (const [t, p] of titles) if (p.length > 1) problems.push(`Aynı başlık: "${t}" → ${p.join(', ')}`);
for (const [d, p] of descs) if (p.length > 1) problems.push(`Aynı açıklama → ${p.join(', ')}`);
console.log(`${files.length} sayfa kontrol edildi.`);
if (problems.length) { console.log(problems.join('\n')); process.exit(1); }
console.log('SEO kontrolü tamam: sorun yok.');
