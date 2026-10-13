# continuohq.com yayına alma adımları

Barındırma: **Netlify** (ücretsiz plan ticari kullanıma izin veriyor, form altyapısı dahil).
Alan adı DNS'i **Squarespace'te kalıyor**; Google Workspace e-posta kayıtlarına dokunulmuyor.

Aşağıdaki metin Claude in Chrome eklentisine tek seferde verilebilir. Eklenti her bölümün sonunda durup rapor verir.

---

## Eklentiye verilecek komut

```
Görevin continuohq.com web sitesini yayına almak. Dört bölüm var. Her bölümün sonunda dur, ekran görüntüsüyle bana rapor ver ve devam etmek için onayımı bekle. Herhangi bir DNS kaydını silmeden veya değiştirmeden önce mutlaka bana sor.

BÖLÜM 1 – Kaynak kontrolü (sadece oku, hiçbir şeyi değiştirme)
1. https://data.tuik.gov.tr adresinde 2 Ekim 2026 tarihli "Yapay Zeka" / "Girişimlerde Bilişim Teknolojileri Kullanım Araştırması" bültenini bul. Şu rakamların bültende geçip geçmediğini kontrol et ve bültenin tam linkini bana ver:
   - Yapay zeka kullanan girişim oranı: 2025'te %7,5, 2026'da %14
   - 10-49 çalışanlı girişimlerde %12,8; 250 ve üzeri çalışanlılarda %37,1
   - Kullanım amacı olarak pazarlama ve satış: %51
   - Kullanmayanların engeli olarak uzmanlık eksikliği: %72,3
2. https://www.whatsapp.com/legal/business-solution-terms sayfasının açıldığını ve içinde "AI Providers" (yapay zeka sağlayıcıları) bölümü olduğunu kontrol et.

BÖLÜM 2 – Netlify'da siteyi oluştur
1. https://app.netlify.com adresine git, "Sign up with GitHub" ile giriş yap (GitHub hesabı: miraqueenai-web).
2. "Add new site" > "Import an existing project" > GitHub'ı seç. Netlify'ın GitHub erişimi isterse yalnızca "continuohq-web" deposuna izin ver.
3. Depo olarak miraqueenai-web/continuohq-web, dal olarak main seç. Derleme ayarlarına dokunma; depodaki netlify.toml dosyası bunları belirliyor (komut: npm run build, klasör: dist). "Deploy" de.
4. Derleme bitince sitenin geçici adresini (xxxx.netlify.app) bana ver.
5. Site ayarlarında "Forms" bölümüne git, form algılamayı (Form detection) etkinleştir. "Form notifications" altında yeni form gönderimleri için e-posta bildirimi ekle: teklif@continuohq.com
6. Form algılama derlemeden sonra açıldıysa "Deploys" bölümünden "Trigger deploy" > "Deploy site" ile yeniden derle.

BÖLÜM 3 – Alan adını bağla
1. Netlify'da "Domain management" > "Add a domain" > continuohq.com yaz. Netlify'ın "Netlify DNS'e geç" önerisini KABUL ETME; "harici DNS kullan" seçeneğiyle devam et. www.continuohq.com'u da ekle; birincil alan adı continuohq.com olsun.
2. Netlify'ın gösterdiği DNS kayıtlarını not et (apex için A kaydı IP adresi, www için CNAME hedefi).
3. Squarespace'te Domains > continuohq.com > DNS Settings sayfasını aç. HİÇBİR ŞEYİ DEĞİŞTİRMEDEN önce tüm kayıtların ekran görüntüsünü al ve bana gönder.
4. Benim onayımla şunları yap:
   - Squarespace'in kendi web sitesine ait varsayılan kayıtları (Squarespace Defaults: @ için A kayıtları ve www için ext-cust.squarespace.com CNAME'i) kaldır.
   - @ için A kaydı ekle: Netlify'ın verdiği IP adresi.
   - www için CNAME ekle: Netlify'ın verdiği xxxx.netlify.app adresi.
   - Google Workspace kayıtlarına KESİNLİKLE DOKUNMA: MX kayıtları, google-site-verification TXT, v=spf1 içeren TXT, google._domainkey (DKIM), _dmarc ve Google ile ilgili diğer kayıtlar olduğu gibi kalmalı.
5. Netlify'a dön, "Verify DNS configuration" de. HTTPS sertifikası (Let's Encrypt) otomatik oluşur; birkaç dakika ile birkaç saat sürebilir. Sertifika hazır olunca https://continuohq.com ve https://www.continuohq.com adreslerini açıp ekran görüntüsü al.

BÖLÜM 4 – Arama motorlarına kayıt (site HTTPS ile açıldıktan sonra)
1. https://search.google.com/search-console adresinde "Mülk ekle" > "Alan adı" > continuohq.com. Google'ın verdiği TXT kaydını Squarespace DNS'ine ekle (mevcut kayıtlara dokunmadan), sonra "Doğrula" de.
2. Doğrulandıktan sonra "Site haritaları" bölümüne şu adresi gönder: https://continuohq.com/sitemap-index.xml
3. https://www.bing.com/webmasters adresinde "Google Search Console'dan içe aktar" seçeneğiyle siteyi ekle ve aynı site haritasını gönder.
```

---

## Yayından sonra yapılacaklar (Claude)
- Canlı sitede tüm sayfaları ve formu test etmek
- TÜİK bülteninin linkini blog yazılarına eklemek, rakam farkı varsa düzeltmek
- Google İşletme Profili (isteğe bağlı) ve ilk içerik takvimi
