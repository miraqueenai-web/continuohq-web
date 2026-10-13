# Continuo — Site İçi Linkleme Planı

Son güncelleme: 2026-10-13

Amaç: Ziyaretçiyi doğru sayfaya yönlendirmek; Google ve yapay zeka arama motorlarına sitenin konu yapısını net göstermek. Her sayfa en az bir yerden link almalı; hiçbir sayfa sahipsiz kalmamalı.

## Yapı (konu kümeleri)
- **Ana sayfa** → AI Asistanlar, AI Dönüşümü, Sektörler, Blog, Keşif görüşmesi.
- **AI Asistanlar** (sütun sayfa) ↔ WhatsApp Asistanı, Instagram DM Asistanı, Web Sitesi Asistanı, Randevu & Rezervasyon.
- **AI Dönüşümü** (sütun sayfa) ↔ Dönüşüm Danışmanlığı, Süreç Otomasyonları, AI Ajanları, Entegrasyonlar, Web Sitesi & Dijital Altyapı.
- **Sektörler** (sütun sayfa) ↔ Konaklama & Turizm, Güzellik & Estetik, Sağlık & Beslenme, Tüm Sektörler.
- Alt sayfalar kendi sütun sayfasına geri link verir.

## Çapraz linkler
- Her **sektör sayfası** → o sektörde en çok kullanılan 2–3 hizmet sayfası (ör. Konaklama → WhatsApp Asistanı, Randevu & Rezervasyon).
- Her **hizmet sayfası** → uygun olduğu sektör sayfaları + ilgili blog yazıları.
- Her **blog yazısı** → metin içinde en az 2 hizmet veya sektör sayfası + yazı sonunda "İlgili yazılar" (2–3 yazı) + keşif görüşmesi çağrısı.
- **KVKK ve çerez** sayfaları: altbilgiden ve formların yanından.

## İlk 3 blog yazısının hedef linkleri
1. WhatsApp yazısı → WhatsApp Asistanı, AI Asistanlar, KVKK Aydınlatma Metni.
2. Otel yazısı → Konaklama & Turizm, WhatsApp Asistanı, Randevu & Rezervasyon.
3. Başlangıç rehberi → AI Dönüşümü, Dönüşüm Danışmanlığı, Süreç Otomasyonları, Tüm Sektörler.

## Kurallar
- Bağlantı metni açıklayıcı olur: "WhatsApp asistanı nasıl kurulur", "buraya tıklayın" değil.
- Aynı sayfaya aynı yazıda en fazla bir kez metin içi link.
- Her sayfada içerik haritası (breadcrumb) ve BreadcrumbList yapısal verisi.
- Altbilgide tüm sütun sayfalara link.
- Kırık link kontrolü her yayından önce otomatik çalışır.
- URL'ler Türkçe ve kalıcı: `/ai-asistanlar/whatsapp-asistani`, `/sektorler/konaklama-turizm`, `/blog/<yazi-adi>`.
