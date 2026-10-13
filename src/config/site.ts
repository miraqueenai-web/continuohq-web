// Sitenin tek ayar dosyası. Numara, adres gibi bilgiler gelince yalnızca burası değişir.
export const site = {
  name: 'Continuo',
  legalOwner: 'Esma Nur Gökkaya Yolat', // Yalnızca hukuki metinlerde kullanılır
  founder: 'Neslişah Gökkaya',
  tagline: 'Yapay Zeka Ajansı',
  url: 'https://continuohq.com',
  description:
    'Continuo, işletmelere özel yapay zeka asistanları ve otomasyonlar kuran bir yapay zeka ajansıdır. WhatsApp, Instagram ve web sitesi asistanları; operasyon, İK ve raporlama otomasyonları.',
  locale: 'tr_TR',
  email: {
    info: 'info@continuohq.com',
    teklif: 'teklif@continuohq.com',
    destek: 'destek@continuohq.com',
  },
  bookingUrl: 'https://calendar.app.google/hxessB9rqXqeKSjz9',
  // Numara gelince "905xxxxxxxxx" biçiminde yazılır; boşken WhatsApp butonları iletişim sayfasına gider.
  whatsapp: '' as string,
  // Tebligat adresi gelince yazılır (KVKK metninde kullanılır).
  address: '' as string,
  // Netlify Forms: form "/" adresine gönderilir, bildirim e-postası Netlify panelinden ayarlanır.
  // Boş bırakılırsa form, ziyaretçinin e-posta uygulamasını açar.
  formEndpoint: '/' as string,
  areaServed: 'TR',
  social: [] as string[], // LinkedIn, Instagram profilleri açılınca eklenir
};

export const whatsappHref = (text = 'Merhaba, Continuo hakkında bilgi almak istiyorum.') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : '/iletisim';
