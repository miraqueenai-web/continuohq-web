# continuohq.com

Continuo yapay zeka ajansının web sitesi. Astro ile statik site olarak üretilir.

## Komutlar
- `npm install`: bağımlılıkları kurar
- `npm run dev`: yerel geliştirme sunucusu (http://localhost:4321)
- `npm run build`: siteyi `dist/` klasörüne üretir ve kırık iç link kontrolü yapar

## Nerede ne var
- `src/config/site.ts`: telefon, WhatsApp, adres, e-posta, randevu linki gibi tüm ayarlar
- `src/data/services.ts`: hizmet ve sektör içerikleri (menü, sayfalar, iç linkler ve `llms.txt` buradan üretilir)
- `src/content/blog/`: blog yazıları (Markdown; `draft: false` olmadan yayına çıkmaz)
- `src/styles/global.css`: tasarım (renkler, yazı tipleri, bileşenler)
- `docs/`: tasarım kararları, blog planı, site içi linkleme, hukuki metin taslakları
