// Derleme sonrası kırık iç link kontrolü: dist içindeki her href="/..." bir sayfaya karşılık gelmeli.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const dist = new URL('../dist/', import.meta.url).pathname;
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk(dist);
const exists = (path) => {
  const clean = path.split('#')[0].split('?')[0];
  if (clean === '/' || clean === '') return true;
  const base = join(dist, clean);
  return existsSync(base) && statSync(base).isFile() || existsSync(base + '.html') || existsSync(join(base, 'index.html'));
};
const broken = [];
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) if (!exists(href)) broken.push(`${f.replace(dist, '/')} -> ${href}`);
}
if (broken.length) { console.error('Kırık iç linkler:\n' + [...new Set(broken)].join('\n')); process.exit(1); }
console.log(`Link kontrolü tamam: ${files.length} sayfa, kırık iç link yok.`);
