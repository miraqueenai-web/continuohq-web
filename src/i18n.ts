// Dil altyapısı: dil URL'den anlaşılır (/en ile başlayan sayfalar İngilizce).
// Türkçe ve İngilizce sayfa adresleri aşağıdaki tabloda eşleştirilir (dil seçici ve hreflang için).

export type Lang = 'tr' | 'en';

export const langOf = (pathname: string): Lang => (/^\/en(\/|$|\.html)/.test(pathname) ? 'en' : 'tr');

// Türkçe adres -> İngilizce adres
export const routePairs: [string, string][] = [
  ['/', '/en'],
  ['/ai-asistanlar', '/en/ai-assistants'],
  ['/ai-asistanlar/whatsapp-asistani', '/en/ai-assistants/whatsapp-assistant'],
  ['/ai-asistanlar/instagram-dm-asistani', '/en/ai-assistants/instagram-dm-assistant'],
  ['/ai-asistanlar/web-sitesi-asistani', '/en/ai-assistants/website-assistant'],
  ['/ai-asistanlar/randevu-rezervasyon', '/en/ai-assistants/appointments-reservations'],
  ['/ai-donusumu', '/en/ai-transformation'],
  ['/ai-donusumu/donusum-danismanligi', '/en/ai-transformation/ai-consulting'],
  ['/ai-donusumu/surec-otomasyonlari', '/en/ai-transformation/process-automation'],
  ['/ai-donusumu/ai-ajanlari', '/en/ai-transformation/ai-agents'],
  ['/ai-donusumu/entegrasyonlar', '/en/ai-transformation/integrations'],
  ['/ai-donusumu/web-sitesi-dijital-altyapi', '/en/ai-transformation/website-digital-infrastructure'],
  ['/sektorler', '/en/industries'],
  ['/sektorler/konaklama-turizm', '/en/industries/hospitality-tourism'],
  ['/sektorler/guzellik-estetik', '/en/industries/beauty-aesthetics'],
  ['/sektorler/saglik-beslenme', '/en/industries/health-nutrition'],
  ['/sektorler/tum-sektorler', '/en/industries/all-industries'],
  ['/nasil-calisiriz', '/en/how-we-work'],
  ['/hakkimizda', '/en/about'],
  ['/iletisim', '/en/contact'],
  ['/randevu', '/en/book-a-call'],
  ['/kvkk-aydinlatma-metni', '/en/privacy-notice'],
  ['/cerez-politikasi', '/en/cookie-policy'],
  ['/yazar/neslisah-gokkaya', '/en/author/neslisah-gokkaya'],
  ['/blog', '/en/blog'],
  ...blogPairs(),
];

// Blog yazıları: İngilizce yazının `tr:` alanından Türkçe karşılığı okunur.
function blogPairs(): [string, string][] {
  const files = import.meta.glob('./content/blog-en/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  return Object.entries(files).flatMap(([file, raw]) => {
    const tr = raw.match(/^tr:\s*"?([^"\n]+)"?\s*$/m)?.[1];
    const en = file.split('/').pop()!.replace(/\.md$/, '');
    return tr ? [[`/blog/${tr}`, `/en/blog/${en}`] as [string, string]] : [];
  });
}

const norm = (p: string) => (p.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/');

// Bir sayfanın diğer dildeki karşılığı (yoksa null)
export function altPath(pathname: string): { lang: Lang; path: string } | null {
  const p = norm(pathname);
  const fromTr = routePairs.find(([tr]) => tr === p);
  if (fromTr) return { lang: 'en', path: fromTr[1] };
  const fromEn = routePairs.find(([, en]) => en === p);
  if (fromEn) return { lang: 'tr', path: fromEn[0] };
  return null;
}

// Verilen Türkçe adresin istenen dildeki karşılığı
export const link = (trPath: string, lang: Lang) => (lang === 'tr' ? trPath : (routePairs.find(([tr]) => tr === trPath)?.[1] ?? '/en'));

export const ui = {
  tr: {
    htmlLang: 'tr',
    locale: 'tr_TR',
    inLanguage: 'tr-TR',
    skip: 'İçeriğe geç',
    home: 'Ana sayfa',
    crumbs: 'Sayfa yolu',
    homeAria: 'Continuo ana sayfa',
    sectors: 'Sektörler',
    howWeWork: 'Nasıl Çalışırız',
    blog: 'Blog',
    about: 'Hakkımızda',
    contact: 'İletişim',
    corporate: 'Kurumsal',
    legal: 'Hukuki',
    privacy: 'KVKK Aydınlatma Metni',
    cookies: 'Çerez Politikası',
    bookShort: 'Keşif Görüşmesi',
    bookLong: 'Ücretsiz keşif görüşmesi',
    bookPlan: 'Keşif görüşmesi planlayın',
    writeUs: 'Bize yazın',
    waTalk: 'Asistanımızla konuşun',
    waTalkAria: 'WhatsApp asistanımızla konuşun',
    waWrite: "WhatsApp'tan yazın",
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    seeAll: 'Tümünü görün',
    homeOf: 'ana sayfası',
    langSwitch: 'English',
    langSwitchAria: 'Switch to English',
    footerTag: 'Yapay Zeka Ajansı. İşletmenize özel yapay zeka asistanları ve otomasyonlar.',
    inShort: 'Kısaca',
    explore: 'İnceleyin ›',
    discover: 'Keşfedin ›',
    faqEyebrow: 'SSS',
    faqTitle: 'Sık sorulan sorular',
    ctaTitle: 'İşinizi dinleyelim, birlikte planlayalım.',
    ctaText: '30 dakikalık ücretsiz keşif görüşmesinde süreçlerinizi konuşur, yapay zekanın işinizde en çok nerede zaman kazandıracağını birlikte belirleriz.',
    updated: 'Son güncelleme',
    preparedBy: 'Hazırlayan',
    onThisPage: 'Bu sayfada',
    sources: 'Kaynaklar',
  },
  en: {
    htmlLang: 'en',
    locale: 'en_US',
    inLanguage: 'en',
    skip: 'Skip to content',
    home: 'Home',
    crumbs: 'Breadcrumb',
    homeAria: 'Continuo home',
    sectors: 'Industries',
    howWeWork: 'How We Work',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    corporate: 'Company',
    legal: 'Legal',
    privacy: 'Privacy Notice',
    cookies: 'Cookie Policy',
    bookShort: 'Book a Call',
    bookLong: 'Free discovery call',
    bookPlan: 'Book a discovery call',
    writeUs: 'Message us',
    waTalk: 'Chat with our assistant',
    waTalkAria: 'Chat with our WhatsApp assistant',
    waWrite: 'Message us on WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    seeAll: 'See all',
    homeOf: 'overview',
    langSwitch: 'Türkçe',
    langSwitchAria: 'Türkçe sürüme geç',
    footerTag: 'AI Agency. AI assistants and automations built for your business.',
    inShort: 'In short',
    explore: 'Learn more ›',
    discover: 'Explore ›',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    ctaTitle: "Tell us about your business. We'll plan it together.",
    ctaText: 'In a free 30-minute discovery call, we talk through your processes and work out where AI would save you the most time.',
    updated: 'Last updated',
    preparedBy: 'Written by',
    onThisPage: 'On this page',
    sources: 'Sources',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
