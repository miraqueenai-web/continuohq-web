// Hizmet ve sektör içerikleri. Sayfalar, menü ve iç linkler buradan üretilir.

export type Faq = { q: string; a: string };
export type Step = { title: string; text: string };

export type Service = {
  slug: string;
  group: 'ai-asistanlar' | 'ai-donusumu';
  title: string;
  short: string;
  seoTitle: string;
  description: string;
  answer: string; // Başlığın altındaki 40-60 kelimelik net cevap (GEO)
  lead: string;
  benefits: { title: string; text: string }[];
  steps: Step[];
  faqs: Faq[];
  sectors: string[]; // ilgili sektör slug'ları
  related: string[]; // ilgili hizmet slug'ları
  guide?: Guide; // Ayrıntılı, kaynaklı anlatım (AI Dönüşümü hizmetleri)
};

export type GuideSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  paras?: string[]; // basit HTML (<b>, <a>) içerebilir
  cards?: { title: string; text: string }[];
  table?: { head: string[]; rows: string[][] };
  checklist?: string[]; // "<b>Başlık.</b> açıklama" biçiminde
  note?: string;
};
export type Guide = {
  updated: string; // YYYY-AA-GG
  sections: GuideSection[];
  sources: { title: string; url: string }[];
};

export type Sector = {
  slug: string;
  title: string;
  short: string;
  menuNote: string;
  seoTitle: string;
  description: string;
  answer: string;
  lead: string;
  image?: string;
  problems: { title: string; text: string }[];
  services: string[];
  faqs: Faq[];
};

export const groups = {
  'ai-asistanlar': {
    title: 'AI Asistanlar',
    guideTitle: 'AI asistan nedir? İşletmeler için kapsamlı rehber',
    menuNote: 'Hazır, hızlı kurulan asistanlar',
    seoTitle: 'AI Asistan Nedir? İşletmeler İçin Rehber | Continuo',
    description:
      'AI asistan nedir, klasik chatbottan farkı ne, WhatsApp ve Instagram kuralları neler? İşletmeler için güncel kaynaklarla kapsamlı rehber ve hizmetlerimiz.',
    answer:
      'AI asistan, işletmenizin bilgisiyle eğitilmiş ve müşterilerinize WhatsApp, Instagram veya web sitenizde 7/24 yanıt veren bir yapay zeka sistemidir. Sık sorulan soruları cevaplar, randevu alır, bilgi toplar; hassas ya da karmaşık bir konu açıldığında konuşmayı ekibinize devreder.',
    lead: 'Müşterileriniz cevap beklemez. Asistanınız işletmenizin bilgisiyle konuşur, kurallarınızla çalışır ve gerektiğinde konuşmayı ekibinize devreder.',
  },
  'ai-donusumu': {
    title: 'AI Dönüşümü',
    guideTitle: 'AI dönüşümü nedir? KOBİ\'ler için kapsamlı rehber',
    menuNote: 'İşletmenize özel kapsamlı çözümler',
    seoTitle: 'AI Dönüşümü Nedir? KOBİ Rehberi | Continuo',
    description:
      'AI dönüşümü nedir, nereden başlanır, iş akışı ile AI ajanı arasındaki fark ne? TÜİK, McKinsey ve Gartner verileriyle KOBİ\'ler için kapsamlı rehber.',
    answer:
      'AI dönüşümü, işletmenin tekrarlayan ve zaman alan süreçlerini yapay zeka ve otomasyonla yeniden kurgulamaktır. Hangi işin otomatikleşeceğini birlikte belirler, mevcut araçlarınıza bağlı sistemler kurar ve sonuçları kurulum öncesiyle kıyaslayarak ölçeriz.',
    lead: 'Mesajlaşmanın ötesinde: operasyon, insan kaynakları, raporlama, belge ve stok. Önce işinizi dinleriz, sonra size özel sistemi kurarız.',
  },
} as const;

export const services: Service[] = [
  {
    slug: 'whatsapp-asistani',
    group: 'ai-asistanlar',
    title: 'WhatsApp Asistanı',
    short: '7/24 mesaj yanıtlama',
    seoTitle: 'WhatsApp Yapay Zeka Asistanı | İşletmenize Özel 7/24 Yanıt',
    description:
      'İşletmenize özel WhatsApp yapay zeka asistanı: müşteri sorularını 7/24 yanıtlar, randevu ve rezervasyon alır, gerektiğinde konuşmayı ekibinize devreder.',
    answer:
      'WhatsApp asistanı, WhatsApp Business altyapısı üzerinde çalışan ve işletmenizin bilgisiyle eğitilmiş bir yapay zeka asistanıdır. Fiyat, müsaitlik ve sık sorulan soruları anında yanıtlar, randevu veya rezervasyon alır; gerektiğinde konuşmayı ekibinizden birine aktarır.',
    lead: 'Gece gelen soru sabahı beklemesin. Asistanınız müşterilerinize işletmenizin diliyle, saniyeler içinde yanıt verir.',
    benefits: [
      { title: 'Mesai dışında da açık', text: 'Akşam, hafta sonu ve tatil günlerinde gelen mesajlar cevapsız kalmaz.' },
      { title: 'İşletmenizin bilgisiyle konuşur', text: 'Hizmetleriniz, fiyat politikanız ve kurallarınızla eğitilir; genel bir sohbet botu değildir.' },
      { title: 'İnsana devir hazır', text: 'Hassas, karmaşık ya da duygusal bir konu açıldığında konuşma ekibinize geçer.' },
    ],
    steps: [
      { title: 'Keşif', text: 'En sık gelen soruları ve mevcut mesaj akışınızı birlikte inceleriz.' },
      { title: 'Bilgi bankası', text: 'Hizmet, fiyat ve kural bilgilerinizi asistanın kullanacağı yapıya dönüştürürüz.' },
      { title: 'Kurulum', text: 'WhatsApp Business hesabınıza bağlar, devir kurallarını ayarlarız.' },
      { title: 'Ölçüm', text: 'Yanıt süresi ve dönüşümü kurulum öncesiyle kıyaslar, her ay iyileştiririz.' },
    ],
    faqs: [
      { q: 'WhatsApp yapay zeka asistanlarına izin veriyor mu?', a: 'Evet, işletmenin kendi müşteri hizmeti, randevu ve sipariş süreçleri için kullanılan asistanlara izin veriliyor. Meta, WhatsApp Business platformunda yalnızca genel amaçlı, ChatGPT benzeri sohbet botlarını kısıtladı. Kurduğumuz asistanlar işletmenize özeldir.' },
      { q: 'Mevcut WhatsApp numaramı kullanabilir miyim?', a: 'Çoğu durumda evet. Numaranın WhatsApp Business platformuna taşınması gerekir; keşif görüşmesinde numaranızın durumuna göre en uygun yolu birlikte belirleriz.' },
      { q: 'Asistan yanlış bir cevap verirse ne olur?', a: 'Asistan yalnızca sizin onayladığınız bilgilerle yanıt verir ve emin olmadığı durumda konuşmayı ekibinize devreder. Konuşmaları düzenli olarak inceleyip bilgi bankasını güncelleriz.' },
      { q: 'Kişisel veriler nasıl korunuyor?', a: 'Kurulumu KVKK\'ya uygun kurgularız: aydınlatma metni, gerekli durumlarda açık rıza ve yalnızca gerekli verinin işlenmesi. Sağlık gibi özel nitelikli veriler için ek önlemler alırız.' },
    ],
    sectors: ['konaklama-turizm', 'guzellik-estetik', 'saglik-beslenme'],
    related: ['randevu-rezervasyon', 'instagram-dm-asistani'],
  },
  {
    slug: 'instagram-dm-asistani',
    group: 'ai-asistanlar',
    title: 'Instagram DM Asistanı',
    short: 'Mesaj ve yorumlara anında dönüş',
    seoTitle: 'Instagram DM Asistanı | Yapay Zeka ile Anında Mesaj Yanıtı',
    description:
      'Instagram DM ve yorumlara yapay zeka ile anında yanıt: fiyat soruları, randevu talepleri ve ürün bilgisi. İşletmenize özel, gerektiğinde ekibinize devir.',
    answer:
      'Instagram DM asistanı, işletme hesabınıza gelen direkt mesajları ve belirlediğiniz yorumları yapay zeka ile yanıtlayan bir sistemdir. "Fiyat nedir?", "Randevu var mı?" gibi soruları saniyeler içinde cevaplar, ilgilenen kişiyi randevuya veya satışa yönlendirir.',
    lead: '"Fiyat DM\'den" yazan her gönderi bir soru dalgası getirir. Asistanınız hepsine aynı özenle, anında yanıt verir.',
    benefits: [
      { title: 'Hiçbir mesaj kaybolmaz', text: 'Yoğun dönemlerde de her DM yanıtlanır, potansiyel müşteri beklemez.' },
      { title: 'Satışa yönlendirir', text: 'Sohbeti randevu, rezervasyon veya sipariş adımına taşır.' },
      { title: 'Marka dilinizle', text: 'Hesabınızın üslubuyla, emoji ve ton tercihlerinize uygun yazar.' },
    ],
    steps: [
      { title: 'Keşif', text: 'Hesabınıza en çok gelen mesaj türlerini inceleriz.' },
      { title: 'Kurgu', text: 'Yanıt akışlarını ve yönlendirme adımlarını belirleriz.' },
      { title: 'Kurulum', text: 'Instagram işletme hesabınıza resmi altyapı üzerinden bağlarız.' },
      { title: 'Ölçüm', text: 'Yanıt oranı ve randevuya dönüşümü takip eder, iyileştiririz.' },
    ],
    faqs: [
      { q: 'Instagram\'da otomatik yanıt kurallara uygun mu?', a: 'Evet, Meta\'nın resmi mesajlaşma altyapısı üzerinden kurulan ve işletmenin kendi müşterilerine hizmet veren asistanlar kurallara uygundur.' },
      { q: 'Yorumlara da yanıt verebilir mi?', a: 'Belirlediğiniz gönderilerdeki yorumlara yanıt verebilir veya yorum yapanı DM\'e yönlendirebilir. Hangi yorumlara dokunulacağını siz belirlersiniz.' },
      { q: 'Kişisel hesapla çalışır mı?', a: 'Hayır, bir Instagram işletme veya içerik üreticisi hesabı gerekir. Geçişi birlikte yapabiliriz.' },
    ],
    sectors: ['guzellik-estetik', 'konaklama-turizm'],
    related: ['whatsapp-asistani', 'web-sitesi-asistani'],
  },
  {
    slug: 'web-sitesi-asistani',
    group: 'ai-asistanlar',
    title: 'Web Sitesi Asistanı',
    short: 'Sitenizde konuşan temsilci',
    seoTitle: 'Web Sitesi Yapay Zeka Asistanı | Sitenizde 7/24 Temsilci',
    description:
      'Web sitenize yapay zeka asistanı: ziyaretçi sorularını yanıtlar, doğru hizmete yönlendirir, iletişim bilgisi ve randevu toplar.',
    answer:
      'Web sitesi asistanı, sitenizin köşesindeki sohbet penceresinde ziyaretçilerle konuşan bir yapay zeka asistanıdır. Hizmetleriniz hakkındaki soruları yanıtlar, ziyaretçiyi doğru sayfaya veya randevuya yönlendirir ve ilgilenen kişilerin iletişim bilgisini toplar.',
    lead: 'Ziyaretçi sitenizde sorusuna cevap bulamazsa çıkıp gider. Asistanınız onu karşılar, dinler ve doğru adıma taşır.',
    benefits: [
      { title: 'Ziyaretçiyi müşteriye çevirir', text: 'Soru soran ziyaretçiye anında yanıt verir ve iletişim bilgisini alır.' },
      { title: 'Doğru sayfaya yönlendirir', text: 'Ne aradığını anlayıp ilgili hizmet veya ürün sayfasına götürür.' },
      { title: 'Her dilde', text: 'Yabancı ziyaretçilere kendi dillerinde yanıt verebilir.' },
    ],
    steps: [
      { title: 'Keşif', text: 'Sitenizin ziyaretçi sorularını ve hedeflerinizi belirleriz.' },
      { title: 'Eğitim', text: 'Asistanı site içeriğiniz ve ek bilgilerinizle eğitiriz.' },
      { title: 'Kurulum', text: 'Sitenize tek satır kodla ekleriz; tasarımınıza uyumlu görünür.' },
      { title: 'Ölçüm', text: 'Konuşmaları ve toplanan talepleri raporlar, iyileştiririz.' },
    ],
    faqs: [
      { q: 'Hangi sitelerle çalışır?', a: 'WordPress, Wix, Shopify, Squarespace dahil hemen her siteye eklenebilir.' },
      { q: 'Sitemi yavaşlatır mı?', a: 'Hayır, asistan sayfa yüklendikten sonra devreye girer ve sitenin açılış hızını etkilemeyecek şekilde eklenir.' },
      { q: 'Toplanan talepler nereye gider?', a: 'E-postanıza, WhatsApp\'ınıza veya kullandığınız müşteri yönetim sistemine (CRM) iletilebilir.' },
    ],
    sectors: ['konaklama-turizm', 'saglik-beslenme'],
    related: ['whatsapp-asistani', 'web-sitesi-dijital-altyapi'],
  },
  {
    slug: 'randevu-rezervasyon',
    group: 'ai-asistanlar',
    title: 'Randevu & Rezervasyon',
    short: 'Takvim, hatırlatma, iptal yönetimi',
    seoTitle: 'Randevu ve Rezervasyon Otomasyonu | Yapay Zeka Asistanı',
    description:
      'Randevu ve rezervasyonları yapay zeka ile otomatik alın: müsaitlik kontrolü, hatırlatma mesajları, iptal ve boşalan saatlerin yeniden doldurulması.',
    answer:
      'Randevu ve rezervasyon otomasyonu, müşterilerinizin mesajlaşarak randevu almasını, size takvimden müsaitlik kontrolü yapmadan bunun gerçekleşmesini sağlar. Asistan uygun saatleri önerir, randevuyu takviminize işler, hatırlatma gönderir ve iptal olan saatleri bekleyen müşterilere teklif eder.',
    lead: 'Telefonla saat ayarlamak, hatırlatma atmak, iptalleri takip etmek. Bunların hepsi kendiliğinden yürüsün.',
    benefits: [
      { title: 'Takvim kendiliğinden dolar', text: 'Müşteri uygun saati mesajlaşarak seçer, randevu takviminize düşer.' },
      { title: 'Daha az gelmeyen müşteri', text: 'Otomatik hatırlatmalar randevunun unutulmasını azaltır.' },
      { title: 'Boş saat kalmaz', text: 'İptal olan saat, bekleme listesindeki müşterilere otomatik teklif edilir.' },
    ],
    steps: [
      { title: 'Keşif', text: 'Randevu kurallarınızı, sürelerinizi ve kullandığınız takvimi inceleriz.' },
      { title: 'Entegrasyon', text: 'Google Takvim veya kullandığınız rezervasyon sistemine bağlarız.' },
      { title: 'Kurulum', text: 'WhatsApp, Instagram veya web sitesi üzerinden randevu akışını açarız.' },
      { title: 'Ölçüm', text: 'Doluluk ve iptal oranlarını izler, hatırlatma zamanlarını iyileştiririz.' },
    ],
    faqs: [
      { q: 'Hangi takvim ve rezervasyon sistemleriyle çalışır?', a: 'Google Takvim başta olmak üzere, API sunan çoğu rezervasyon ve otel yönetim sistemiyle entegre edilebilir. Kullandığınız sistemi keşif görüşmesinde kontrol ederiz.' },
      { q: 'Kapora veya ön ödeme alınabilir mi?', a: 'Uygun ödeme altyapısıyla randevu sırasında ödeme bağlantısı gönderilebilir.' },
      { q: 'Birden fazla çalışanın takvimini yönetebilir mi?', a: 'Evet, her uzmanın kendi takvimi ve hizmet süreleri ayrı ayrı tanımlanabilir.' },
    ],
    sectors: ['guzellik-estetik', 'saglik-beslenme', 'konaklama-turizm'],
    related: ['whatsapp-asistani', 'entegrasyonlar'],
  },
  {
    slug: 'donusum-danismanligi',
    group: 'ai-donusumu',
    title: 'Dönüşüm Danışmanlığı',
    short: 'Nereden başlanacağını planlarız',
    seoTitle: 'Yapay Zeka Dönüşüm Danışmanlığı | İşletmeler İçin Yol Haritası',
    description:
      'İşletmeniz için yapay zeka yol haritası: hangi süreçlerin otomatikleşeceğini, önceliklerini ve beklenen kazanımları birlikte belirleriz.',
    answer:
      'Yapay zeka dönüşüm danışmanlığı, işletmenizin süreçlerini inceleyip yapay zekanın en çok değer katacağı noktaları belirlediğimiz bir çalışmadır. Sonunda öncelik sırasına konmuş, maliyeti ve beklenen kazanımı belli bir yol haritası elde edersiniz.',
    lead: 'Yapay zeka her işe yarar gibi görünür, ama her işe aynı anda başlanmaz. Önce nereden başlayacağınızı netleştiririz.',
    benefits: [
      { title: 'Net öncelikler', text: 'En hızlı geri dönüş sağlayacak süreçleri ilk sıraya koyarız.' },
      { title: 'Gerçekçi beklenti', text: 'Her adımın maliyetini, süresini ve ölçüm yöntemini baştan belirleriz.' },
      { title: 'Ekibinizle birlikte', text: 'Değişimi çalışanlarınızla konuşarak kurgularız; kimse dışarıda kalmaz.' },
    ],
    steps: [
      { title: 'Görüşmeler', text: 'Yönetim ve ekiple görüşür, iş akışlarını dinleriz.' },
      { title: 'Süreç haritası', text: 'Tekrarlayan, zaman alan ve hataya açık adımları çıkarırız.' },
      { title: 'Yol haritası', text: 'Öncelik, maliyet ve takvimi içeren planı sunarız.' },
      { title: 'İlk adım', text: 'İsterseniz ilk projeyi birlikte hayata geçiririz.' },
    ],
    faqs: [
      { q: 'Danışmanlık sonunda ne teslim alırım?', a: 'Süreç haritanızı, otomatikleşecek adımların öncelik listesini, her adım için tahmini maliyet ve süreyi ve ölçüm yöntemini içeren bir yol haritası.' },
      { q: 'Teknik bilgi gerekiyor mu?', a: 'Hayır. Siz işinizi anlatırsınız, teknik tarafı biz çeviririz.' },
      { q: 'Küçük işletmeler için uygun mu?', a: 'Evet. Çalışmanın kapsamını işletmenizin büyüklüğüne göre ayarlarız.' },
    ],
    sectors: ['tum-sektorler'],
    related: ['surec-otomasyonlari', 'ai-ajanlari'],
  },
  {
    slug: 'surec-otomasyonlari',
    group: 'ai-donusumu',
    title: 'Süreç Otomasyonları',
    short: 'Operasyon, İK, raporlama, stok',
    seoTitle: 'Süreç Otomasyonu: Operasyon, İK, Raporlama ve Stok',
    description:
      'Tekrarlayan iş süreçlerini otomatikleştirin: operasyon, insan kaynakları, raporlama, belge yönetimi, tedarik ve stok takibi için işletmenize özel otomasyonlar.',
    answer:
      'Süreç otomasyonu, ekibinizin her gün elle yaptığı tekrarlayan işleri, örneğin rapor hazırlamayı, form ve belge işlemeyi, stok takibini, yazılımların ve yapay zekanın kendiliğinden yürütmesini sağlar. Böylece ekibiniz zamanını asıl işine ayırır.',
    lead: 'Her gün aynı tabloyu doldurmak, aynı e-postayı yazmak, aynı belgeyi aramak. Bu işler artık kendiliğinden yürüsün.',
    benefits: [
      { title: 'Operasyon', text: 'Sipariş, görev ve bildirim akışları birbirine bağlanır, elle aktarım biter.' },
      { title: 'İK ve belgeler', text: 'İşe alım, izin ve personel evrakı tek bir akışta düzenlenir.' },
      { title: 'Raporlama ve stok', text: 'Dağınık verilerden özet raporlar hazırlanır, stok eksikliği önceden haber verilir.' },
    ],
    steps: [
      { title: 'Süreç analizi', text: 'Otomatikleşecek işi adım adım birlikte yazarız.' },
      { title: 'Tasarım', text: 'Hangi araçların bağlanacağını ve nerede onay gerektiğini belirleriz.' },
      { title: 'Kurulum ve test', text: 'Otomasyonu kurar, gerçek verilerle test ederiz.' },
      { title: 'Ölçüm', text: 'Kazanılan zamanı ve hata oranını takip ederiz.' },
    ],
    faqs: [
      { q: 'Hangi süreçler otomatikleştirilebilir?', a: 'Kurallı ve tekrarlayan her süreç aday olabilir: raporlama, veri aktarımı, form ve belge işleme, bildirimler, stok ve sipariş takibi, işe alım adımları.' },
      { q: 'Mevcut yazılımlarımı değiştirmem gerekir mi?', a: 'Genellikle hayır. Kullandığınız araçları birbirine bağlayarak çalışırız.' },
      { q: 'Otomasyon hata yaparsa ne olur?', a: 'Kritik adımlarda insan onayı koyarız ve her otomasyonun hata durumunda size haber vermesini sağlarız.' },
    ],
    sectors: ['tum-sektorler', 'konaklama-turizm'],
    related: ['entegrasyonlar', 'ai-ajanlari'],
  },
  {
    slug: 'ai-ajanlari',
    group: 'ai-donusumu',
    title: 'AI Ajanları',
    short: 'Kendi başına iş yürüten sistemler',
    seoTitle: 'AI Ajanları | İşletmeniz İçin Kendi Başına Çalışan Yapay Zeka',
    description:
      'Birden fazla adımı kendi başına planlayıp yürüten yapay zeka ajanları: araştırma, teklif hazırlama, raporlama ve müşteri takibi gibi işler için.',
    answer:
      'AI ajanı, kendisine verilen bir hedefi birden fazla adıma bölerek kendi başına yürüten bir yapay zeka sistemidir. Örneğin gelen bir talebi okuyup teklif taslağı hazırlayabilir, gerekli bilgiyi farklı kaynaklardan toplayabilir ve onayınıza sunabilir.',
    lead: 'Tek bir soruya cevap vermenin ötesinde: bir işi baştan sona yürüten, sonucu size onaya getiren dijital çalışma arkadaşları.',
    benefits: [
      { title: 'Çok adımlı işler', text: 'Bilgi toplama, karşılaştırma, taslak hazırlama gibi zincirleme işleri üstlenir.' },
      { title: 'Onay sizde', text: 'Önemli kararlar ve dışarıya giden her şey önce sizin onayınızdan geçer.' },
      { title: 'Araçlarınızla çalışır', text: 'E-posta, takvim, tablo ve CRM gibi araçlarınızı kullanarak iş yapar.' },
    ],
    steps: [
      { title: 'Görev tanımı', text: 'Ajanın üstleneceği işi ve sınırlarını netleştiririz.' },
      { title: 'Yetkiler', text: 'Hangi araçlara erişeceğini ve nerede onay isteyeceğini belirleriz.' },
      { title: 'Kurulum ve test', text: 'Ajanı gerçek örneklerle test eder, davranışını ayarlarız.' },
      { title: 'İzleme', text: 'Yaptığı işleri kayıt altına alır, düzenli olarak gözden geçiririz.' },
    ],
    faqs: [
      { q: 'AI ajanı ile chatbot arasındaki fark nedir?', a: 'Chatbot sorulara yanıt verir. AI ajanı ise bir hedefe ulaşmak için adımları kendi planlar ve araçları kullanarak iş yapar; örneğin bilgi toplar, taslak hazırlar, kayıt oluşturur.' },
      { q: 'Ajan kontrolden çıkabilir mi?', a: 'Ajanın erişebileceği araçları ve yapabileceği işlemleri sınırlarız. Dışarıya giden her işlem için onay adımı koyarız.' },
      { q: 'Hangi işler için uygundur?', a: 'Teklif ve rapor hazırlama, araştırma, müşteri takibi, gelen talepleri sınıflandırma gibi kurallı ama çok adımlı işler için.' },
    ],
    sectors: ['tum-sektorler'],
    related: ['surec-otomasyonlari', 'donusum-danismanligi'],
  },
  {
    slug: 'entegrasyonlar',
    group: 'ai-donusumu',
    title: 'Entegrasyonlar',
    short: 'CRM, muhasebe, rezervasyon sistemleri',
    seoTitle: 'Yapay Zeka Entegrasyonları: CRM, Muhasebe, Rezervasyon',
    description:
      'Yapay zeka asistanlarınızı ve otomasyonlarınızı CRM, muhasebe, rezervasyon ve otel yönetim sistemlerinize bağlıyoruz.',
    answer:
      'Entegrasyon, yapay zeka sistemlerinin kullandığınız yazılımlarla, örneğin CRM, muhasebe, rezervasyon veya otel yönetim sistemiyle veri alışverişi yapmasını sağlar. Böylece asistan güncel bilgiyle konuşur, aldığı randevu ya da talep doğrudan sisteminize işlenir.',
    lead: 'Asistanın aldığı bilgi bir yerde kalmasın. Kullandığınız sistemlere doğrudan aksın.',
    benefits: [
      { title: 'Güncel bilgi', text: 'Asistan fiyat, stok ve müsaitliği sistemlerinizden canlı okur.' },
      { title: 'Elle aktarım yok', text: 'Talepler, randevular ve müşteri kayıtları otomatik oluşur.' },
      { title: 'Tek görünüm', text: 'Dağınık sistemlerdeki veriler bir araya gelir.' },
    ],
    steps: [
      { title: 'Envanter', text: 'Kullandığınız sistemleri ve veri akışını çıkarırız.' },
      { title: 'Bağlantı', text: 'Resmi bağlantı noktaları (API) üzerinden güvenli bağlantı kurarız.' },
      { title: 'Test', text: 'Veri aktarımını gerçek senaryolarla test ederiz.' },
      { title: 'İzleme', text: 'Bağlantıların sağlığını izler, sorunlarda haber veririz.' },
    ],
    faqs: [
      { q: 'Hangi sistemlerle entegrasyon yapılabilir?', a: 'API sunan çoğu CRM, muhasebe, e-ticaret, rezervasyon ve otel yönetim sistemiyle. Sisteminizin durumunu keşif görüşmesinde kontrol ederiz.' },
      { q: 'Verilerim güvende mi?', a: 'Yalnızca gerekli verilere, gerekli yetkiyle erişiriz ve bağlantıları KVKK\'ya uygun kurgularız.' },
    ],
    sectors: ['konaklama-turizm', 'tum-sektorler'],
    related: ['randevu-rezervasyon', 'surec-otomasyonlari'],
  },
  {
    slug: 'web-sitesi-dijital-altyapi',
    group: 'ai-donusumu',
    title: 'Web Sitesi & Dijital Altyapı',
    short: 'SEO ve GEO uyumlu siteler',
    seoTitle: 'SEO ve GEO Uyumlu Kurumsal Web Sitesi ve Altyapı',
    description:
      'Hızlı, mobil uyumlu, Google ve yapay zeka arama motorları için optimize edilmiş (SEO ve GEO) kurumsal web siteleri ve dijital altyapı.',
    answer:
      'Hem Google\'da hem de ChatGPT, Gemini gibi yapay zeka arama motorlarında bulunabilen, hızlı ve mobil uyumlu web siteleri kuruyoruz. SEO, sitenizin arama sonuçlarında yükselmesini; GEO ise yapay zeka cevaplarında kaynak olarak gösterilmesini hedefler.',
    lead: 'Müşterileriniz artık yalnızca Google\'da değil, yapay zekaya sorarak da arıyor. Siteniz iki yerde de bulunmalı.',
    benefits: [
      { title: 'SEO ve GEO baştan', text: 'Teknik altyapı, içerik yapısı ve yapısal veri ilk günden kurulur.' },
      { title: 'Hızlı ve sade', text: 'Hızlı açılan, mobilde rahat kullanılan, markanıza özel tasarım.' },
      { title: 'Asistana hazır', text: 'Web sitesi asistanı ve randevu akışları kolayca eklenir.' },
    ],
    steps: [
      { title: 'Keşif', text: 'Hedef kitlenizi, rakiplerinizi ve arama davranışlarını inceleriz.' },
      { title: 'Tasarım', text: 'Markanıza özel tasarımı birlikte netleştiririz.' },
      { title: 'Geliştirme', text: 'Siteyi SEO ve GEO uyumlu altyapıyla kurarız.' },
      { title: 'Yayın ve takip', text: 'Arama konsollarına kaydeder, sonuçları izleriz.' },
    ],
    faqs: [
      { q: 'GEO nedir?', a: 'GEO (Generative Engine Optimization), içeriğinizin ChatGPT, Gemini ve Google\'ın yapay zeka özetleri gibi yapay zeka cevaplarında kaynak olarak gösterilmesi için yapılan optimizasyondur.' },
      { q: 'Mevcut sitemi yenileyebilir misiniz?', a: 'Evet. Mevcut içeriğinizi ve arama sıralamanızı koruyarak siteyi yeni altyapıya taşıyabiliriz.' },
    ],
    sectors: ['tum-sektorler'],
    related: ['web-sitesi-asistani', 'donusum-danismanligi'],
  },
];

export const sectors: Sector[] = [
  {
    slug: 'konaklama-turizm',
    title: 'Konaklama & Turizm',
    short: 'Oteller, butik oteller, acenteler',
    menuNote: 'Oteller, butik oteller, acenteler',
    seoTitle: 'Oteller için Yapay Zeka Asistanı | Konaklama ve Turizm',
    description:
      'Oteller, butik oteller ve turizm acenteleri için yapay zeka asistanları: rezervasyon soruları, oda müsaitliği, transfer ve misafir talepleri 7/24, her dilde.',
    answer:
      'Konaklama işletmeleri için yapay zeka asistanı; rezervasyon, oda müsaitliği, fiyat, transfer ve misafir taleplerine WhatsApp, Instagram ve web sitesi üzerinden 7/24 ve misafirin kendi dilinde yanıt verir. Rezervasyonu sisteminize işler, özel talepleri resepsiyona devreder.',
    lead: 'Misafirleriniz farklı saat dilimlerinden, farklı dillerde yazıyor. Asistanınız gece gündüz, her dilde karşılar.',
    image: '/images/sektorler/konaklama.webp',
    problems: [
      { title: 'Gece gelen rezervasyon soruları', text: 'Sabaha kadar cevapsız kalan mesaj, rakip otele giden misafir demektir.' },
      { title: 'Tekrarlayan sorular', text: 'Check-in saati, otopark, kahvaltı, transfer. Resepsiyon aynı soruları her gün onlarca kez yanıtlıyor.' },
      { title: 'Dil engeli', text: 'Yabancı misafirlerle yazışmak zaman alıyor, yanlış anlaşılmalara yol açıyor.' },
    ],
    services: ['whatsapp-asistani', 'randevu-rezervasyon', 'web-sitesi-asistani', 'entegrasyonlar'],
    faqs: [
      { q: 'Otel yönetim sistemimle (PMS) entegre olabilir mi?', a: 'API sunan otel yönetim ve rezervasyon sistemleriyle entegre edilebilir. Kullandığınız sistemi keşif görüşmesinde kontrol ederiz.' },
      { q: 'Hangi dillerde yanıt verebilir?', a: 'Türkçe, İngilizce, Almanca, Rusça ve Arapça başta olmak üzere misafirin yazdığı dilde yanıt verebilir.' },
      { q: 'Asistan rezervasyon ve ödeme alabilir mi?', a: 'Otel yönetim sisteminize, kanal yöneticinize veya rezervasyon motorunuza bağlandığında evet: müsaitliği canlı kontrol eder, rezervasyonu doğrudan oluşturur, güvenli ödeme bağlantısıyla tahsilat yapar ve ekibinize bildirim gönderir. Kapsam, kullandığınız sistemlere göre belirlenir.' },
      { q: 'Özel talepler ne olur?', a: 'Asistan oda değişikliği ve özel istekleri alır, müsaitliği kontrol eder ve talebi ilgili bilgilerle birlikte ekibinize iletir. Şikâyetlerde ilk yanıtı verip konuşmayı resepsiyona devreder.' },
    ],
  },
  {
    slug: 'guzellik-estetik',
    title: 'Güzellik & Estetik',
    short: 'Güzellik merkezleri ve salonlar',
    menuNote: 'Merkezler ve salonlar',
    seoTitle: 'Güzellik Merkezleri için Yapay Zeka Asistanı',
    description:
      'Güzellik merkezleri ve salonlar için yapay zeka asistanı: Instagram ve WhatsApp mesajlarına anında yanıt, otomatik randevu, hatırlatma ve boş saatlerin doldurulması.',
    answer:
      'Güzellik merkezleri için yapay zeka asistanı, Instagram ve WhatsApp\'tan gelen fiyat ve randevu sorularını anında yanıtlar, uygun saatleri önerip randevuyu takviminize işler. Hatırlatma mesajları gönderir ve iptal olan saatleri bekleyen müşterilere teklif eder.',
    lead: 'Uzmanlarınız müşteriyle ilgilenirken telefon ve mesajlar beklemesin. Asistanınız randevu defterinizi yönetsin.',
    image: '/images/sektorler/guzellik.webp',
    problems: [
      { title: '"Fiyat ne kadar?" mesajları', text: 'Her gönderinin ardından gelen onlarca DM, işlem sırasında yanıtlanamıyor.' },
      { title: 'Gelmeyen randevular', text: 'Unutulan randevular boş kalan saat ve kayıp gelir demek.' },
      { title: 'Dağınık randevu defteri', text: 'Telefon, WhatsApp ve Instagram\'dan gelen randevular farklı yerlerde.' },
    ],
    services: ['instagram-dm-asistani', 'randevu-rezervasyon', 'whatsapp-asistani'],
    faqs: [
      { q: 'Hizmet ve fiyat listemi asistan mı bilecek?', a: 'Evet. Asistan, sizin onayladığınız hizmet, süre ve fiyat bilgileriyle eğitilir; fiyatı mesajda vermek istemezseniz yönlendirme yapacak şekilde de kurgulanabilir.' },
      { q: 'Birden fazla uzmanın takvimini yönetebilir mi?', a: 'Evet, her uzmanın hizmetleri ve çalışma saatleri ayrı tanımlanır.' },
      { q: 'Reklam kurallarına uygun mu?', a: 'Asistanın kullandığı ifadeleri sektörün reklam ve tanıtım kurallarına uygun şekilde birlikte belirleriz.' },
    ],
  },
  {
    slug: 'saglik-beslenme',
    title: 'Sağlık & Beslenme',
    short: 'Diyetisyenler ve danışmanlık merkezleri',
    menuNote: 'Diyetisyenler ve danışmanlık',
    seoTitle: 'Diyetisyenler için Yapay Zeka Asistanı ve Randevu',
    description:
      'Diyetisyenler ve sağlık danışmanlık merkezleri için yapay zeka asistanı: danışan randevuları, ön bilgilendirme ve takip mesajları. KVKK\'ya uygun kurgu.',
    answer:
      'Diyetisyenler ve danışmanlık merkezleri için yapay zeka asistanı; danışan randevularını alır, ilk görüşme öncesi bilgilendirme yapar ve takip mesajlarını zamanında gönderir. Sağlık verisi özel nitelikli kişisel veri olduğu için kurulum KVKK\'ya uygun kurgulanır; tıbbi tavsiye vermez.',
    lead: 'Danışanlarınızla ilgilenmeye daha çok zaman ayırın. Randevu, hatırlatma ve bilgilendirme asistanınızda.',
    image: '/images/sektorler/saglik.webp',
    problems: [
      { title: 'Seans arasında gelen mesajlar', text: 'Görüşme sırasında telefona bakamamak, yeni danışanın beklemesi demek.' },
      { title: 'Takip mesajları', text: 'Danışanlara düzenli hatırlatma ve motivasyon mesajı göndermek zaman alıyor.' },
      { title: 'Veri hassasiyeti', text: 'Sağlık bilgileri özel nitelikli veri; doğru kurgulanmalı.' },
    ],
    services: ['randevu-rezervasyon', 'whatsapp-asistani', 'web-sitesi-asistani'],
    faqs: [
      { q: 'Asistan danışanlara beslenme tavsiyesi verir mi?', a: 'Hayır. Asistan randevu, ücret, süreç gibi idari konularda yanıt verir; kişisel beslenme ve sağlık tavsiyesi diyetisyenin kendisine aittir. Bu tür sorular size devredilir.' },
      { q: 'KVKK\'ya uygun mu?', a: 'Kurulumu aydınlatma metni, açık rıza ve veri minimizasyonu ilkeleriyle kurgularız. Sağlık verisinin işlenmesi için hukuk danışmanınızla birlikte çalışmanızı öneririz.' },
      { q: 'Online görüşme bağlantısı gönderebilir mi?', a: 'Evet, randevu onayıyla birlikte görüşme bağlantısı otomatik gönderilebilir.' },
    ],
  },
  {
    slug: 'tum-sektorler',
    title: 'Tüm Sektörler',
    short: 'Listede yoksa size özel kurgularız',
    menuNote: 'Size özel kurgulayalım',
    seoTitle: 'Her Sektör için Yapay Zeka Otomasyonu',
    description:
      'Sektörünüz listede yok mu? Her işletmenin otomatikleşebilecek bir işi vardır. Süreçlerinizi anlatın, size özel yapay zeka asistanı ve otomasyon kurgulayalım.',
    answer:
      'Yapay zeka asistanları ve otomasyonlar yalnızca belirli sektörlere özel değildir. Müşterisiyle mesajlaşan, randevu alan, rapor hazırlayan veya tekrarlayan işleri olan her işletme fayda sağlayabilir. Keşif görüşmesinde sizin süreçlerinize uygun kurguyu birlikte çıkarırız.',
    lead: 'Her işletmenin otomatikleşebilecek bir işi vardır. Bize işinizi anlatın, size özel kurgulayalım.',
    problems: [
      { title: 'Müşteri iletişimi', text: 'Mesajlara yetişememek her sektörün ortak derdi.' },
      { title: 'Tekrarlayan işler', text: 'Raporlar, belgeler, veri aktarımı; ekip zamanının önemli kısmı burada geçiyor.' },
      { title: 'Dağınık bilgi', text: 'Bilgiler e-postada, tablolarda ve kişilerin aklında.' },
    ],
    services: ['donusum-danismanligi', 'surec-otomasyonlari', 'whatsapp-asistani', 'ai-ajanlari'],
    faqs: [
      { q: 'Benim sektörüm için de kurulum yapıyor musunuz?', a: 'Evet. Perakendeden eğitime, hukuktan üretime kadar farklı sektörlerdeki süreçler için kurgu yapabiliriz. Önce işinizi dinleriz.' },
      { q: 'Nereden başlamalıyım?', a: 'En çok zaman alan ve en sık tekrarlanan işten. Ücretsiz keşif görüşmesinde bunu birlikte belirleriz.' },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const sectorBySlug = (slug: string) => sectors.find((s) => s.slug === slug);
export const serviceUrl = (s: Service) => `/${s.group}/${s.slug}`;
export const sectorUrl = (s: Sector) => `/sektorler/${s.slug}`;
