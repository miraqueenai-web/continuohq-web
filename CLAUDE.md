# continuohq.com: çalışma kuralları

- **İki dil zorunlu.** Siteye eklenen ya da değiştirilen her içerik (sayfa, hizmet, sektör, blog yazısı, metin düzeltmesi) aynı işte İngilizceye de uygulanır; kullanıcıya sorulmaz.
  - Türkçe ↔ İngilizce adres eşleşmeleri `src/i18n.ts` içindeki `routePairs` listesindedir.
  - İngilizce blog yazıları `src/content/blog-en/` altındadır; her yazının `tr:` alanı Türkçe karşılığının slug'ıdır.
  - Veri: `src/data/services.ts` ↔ `src/data/en/services.ts`, `src/data/guides.ts` ↔ `src/data/en/guides.ts`.
- **Kaynak kuralı.** Her rakam ve iddia birincil, doğrulanabilir bir kaynağa dayanır ve sayfa açılarak doğrulanır. Doğrulanamayan bilgi yazılmaz. Satıcı verisi "şirket verisi" diye belirtilir. Uydurma müşteri, süre, fiyat yok.
  - kvkk.gov.tr ve mevzuat.gov.tr bu ortamdan açılmıyor; bu kaynaklar kullanıcının Chrome eklentisiyle doğrulatılır.
- **Yayın tarihi.** Blog yazısının tarihi, kullandığı en yeni kaynaktan önce olamaz; güncel bilgi içeren yazı bugünün tarihini alır.
- **Üslup.** Yapay zeka yazısı hissi yok: uzun tire (—) yok, "X değil, Y" kalıbı yok, abartılı kelimeler ve kendini savunan meta notlar yok.
- **Kişisel bilgiler.** Hukuki ad (`site.legalOwner`) yalnızca hukuki metinlerde; başka her yerde "Neslişah Gökkaya". KVKK metninde şirket türü yazılmaz.
- **DNS.** Google Workspace kayıtlarına (MX, SPF, DKIM, DMARC, google-site-verification) dokunulmaz; DNS kaydı silme/değiştirme öncesi kullanıcıya sorulur.
- **Yayın.** `main` dalına push = Netlify ile canlı. Push öncesi `npm run build` (link + SEO kontrolü) geçmelidir.
  - Netlify'da her üretim yayını 15 kredi harcar (ücretsiz plan: ayda 300 kredi ≈ 20 yayın). Değişiklikler biriktirilip bir iş bitince tek push ile gönderilir; küçük düzeltmeler için ayrı ayrı push yapılmaz.
