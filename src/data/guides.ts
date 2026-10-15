// AI Dönüşümü hizmet sayfalarının ayrıntılı, kaynaklı anlatımları.
// Kural: Her rakam ve tarih "sources" listesindeki bir kaynağa dayanır; tahminler "öngörü" diye yazılır.
import type { Guide } from './services';

const a = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const guides: Record<string, Guide> = {
  'donusum-danismanligi': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'neden',
        eyebrow: 'Neden danışmanlık?',
        title: 'Yapay zeka projeleri çoğu zaman teknoloji yüzünden değil, yanlış yerden başlandığı için tökezler.',
        intro: `Dönüşüm danışmanlığı, araç seçmeden önce işi anlamaktır. Hangi sürecin otomatikleşeceğine, başarının nasıl ölçüleceğine ve hangi riskin nasıl yönetileceğine baştan karar verilir.`,
        paras: [
          `Gartner, ajan tabanlı yapay zeka projelerinin yüzde 40'tan fazlasının 2027 sonuna kadar iptal edileceğini öngörüyor. Gösterilen nedenler artan maliyetler, belirsiz iş değeri ve yetersiz risk kontrolü.`,
          `MIT'nin 2025 çalışmasında, üretken yapay zekaya yatırım yapan kuruluşların yaklaşık yüzde 95'i yaklaşık altı ay içinde ölçülebilir bir kâr-zarar etkisi göremedi. Çalışma bunu, araçların iş akışına uyum sağlamamasına bağlıyor.`,
          `Öte yandan McKinsey'in 2025 araştırmasında yapay zekadan en çok değer elde eden şirketler, iş akışlarını temelden yeniden tasarlamaya diğerlerinden yaklaşık üç kat daha yatkın çıktı. Danışmanlıkta yaptığımız da bu: doğru süreci seçmek, onu yeniden düzenlemek ve sonucu ölçmek.`,
        ],
      },
      {
        id: 'ciktilar',
        eyebrow: 'Teslim ettiklerimiz',
        title: 'Danışmanlık sonunda elinizde ne olur?',
        intro: `Çalışmanın sonunda genel öneriler değil, uygulanabilir ve ölçülebilir belgeler teslim alırsınız.`,
        cards: [
          { title: 'Süreç envanteri', text: `Ekiplerinizin tekrar ettiği işlerin listesi: kim yapıyor, ne sıklıkla, ne kadar sürüyor, hangi sistemler kullanılıyor.` },
          { title: 'Önceliklendirme', text: `Her süreç için beklenen etki ve uygulanabilirlik puanı. İlk yapılacak işler bu tabloya göre seçilir.` },
          { title: 'Veri ve sistem değerlendirmesi', text: `Otomasyon için gereken verinin nerede durduğu, ne kadar düzenli olduğu ve sistemlerinizin bağlantıya açık olup olmadığı.` },
          { title: 'Risk ve uyum notları', text: `Kişisel veri işleyen adımlar, insan onayı gereken kararlar ve KVKK açısından alınması gereken önlemler.` },
          { title: 'Ölçüm planı', text: `Her süreç için bugünkü durum (süre, hata oranı, bekleme) ve başarının hangi ölçütle değerlendirileceği.` },
          { title: 'Yol haritası', text: `Öncelik sırasına konmuş projeler, her birinin kapsamı, tahmini maliyeti, gereken kaynaklar ve karar noktaları.` },
        ],
      },
      {
        id: 'secim',
        eyebrow: 'Önceliklendirme',
        title: 'Hangi süreçle başlanmalı?',
        intro: `İlk süreç iyi gittiğinde sonraki adımlar çok daha kolay ilerler. Bir süreci değerlendirirken şu ölçütlere bakarız.`,
        table: {
          head: ['Ölçüt', 'İyi bir ilk aday', 'Sonraya bırakılmalı'],
          rows: [
            ['Sıklık', 'Her gün veya her hafta tekrarlanıyor', 'Yılda birkaç kez yapılıyor'],
            ['Kurallar', 'Adımları net, istisnası az', 'Her seferinde farklı karar gerektiriyor'],
            ['Veri', 'Dijital ve erişilebilir', 'Kâğıtta ya da kişilerin hafızasında'],
            ['Hata maliyeti', 'Hata kolayca fark edilip düzeltilebiliyor', 'Hata para, sağlık veya hukuki risk doğuruyor'],
            ['Ölçülebilirlik', 'Süre ve hata oranı ölçülebiliyor', 'Sonuç ancak yıllar içinde görülüyor'],
          ],
        },
      },
      {
        id: 'cerceveler',
        eyebrow: 'Güvenilir çerçeveler',
        title: 'Hangi standartlara ve çerçevelere dayanıyoruz?',
        intro: `Küçük ve orta ölçekli işletmeler için uluslararası çerçeveleri sade bir kontrol listesine dönüştürerek kullanırız. Sertifikasyon hizmeti vermiyoruz; bu çerçevelerden doğru soruları sormak için yararlanıyoruz.`,
        paras: [
          `<b>NIST Yapay Zeka Risk Yönetimi Çerçevesi (AI RMF 1.0, Ocak 2023):</b> Riskleri dört işlevde ele alır: yönetişim (Govern), haritalama (Map), ölçme (Measure) ve yönetme (Manage). NIST, Temmuz 2024'te üretken yapay zekaya özgü riskler için ek bir profil (NIST AI 600-1) yayımladı.`,
          `<b>ISO/IEC 42001:2023 (Aralık 2023):</b> Yapay zeka yönetim sistemleri için yayımlanan ilk uluslararası standart.`,
          `<b>KVKK Üretken Yapay Zeka Rehberi (Kasım 2025):</b> Kişisel Verileri Koruma Kurumu'nun üretken yapay zeka ve kişisel veriler üzerine yayımladığı rehber; hukuki dayanak, şeffaflık, yurt dışına aktarım ve güvenlik önlemlerini ele alır.`,
          `<b>Türkiye Yapay Zeka Eylem Planı (2026-2030):</b> Cumhurbaşkanlığı Genelgesi ile 18 Ağustos 2026'da Resmî Gazete'de yayımlanarak yürürlüğe girdi. Plan, 2024-2025 Ulusal Yapay Zeka Stratejisi Eylem Planı'nın devamı niteliğinde.`,
        ],
      },
    ],
    sources: [
      { title: 'Gartner, ajan tabanlı yapay zeka projelerinin %40\'tan fazlası 2027 sonuna kadar iptal edilecek (25 Haziran 2025)', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027' },
      { title: 'MIT Project NANDA, The GenAI Divide 2025 (haber)', url: 'https://rcpmag.com/Articles/2025/08/25/Only-1-in-20-AI-Investments-Deliver-ROI.aspx' },
      { title: 'McKinsey, The State of AI 2025', url: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-state-of-ai-2025' },
      { title: 'NIST, AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
      { title: 'IEC Webstore, ISO/IEC 42001:2023', url: 'https://webstore.iec.ch/publication/90574' },
      { title: 'KVKK, Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (Kasım 2025), haber ve özet', url: 'https://www.alomaliye.com/2025/11/24/sorularla-uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi/' },
      { title: 'DHA, Türkiye Yapay Zeka Eylem Planı 2026-2030 yürürlüğe girdi', url: 'https://www.dha.com.tr/gundem/turkiye-yapay-zeka-eylem-plani-2026-2030-yururluge-girdi-2928899' },
    ],
  },

  'surec-otomasyonlari': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'nedir',
        eyebrow: 'Temel kavram',
        title: 'Süreç otomasyonu nedir, klasik otomasyondan farkı ne?',
        intro: `Süreç otomasyonu, bir işin adımlarını yazılımların kendiliğinden yürütmesidir. Yapay zeka eklendiğinde otomasyon yalnızca kurala bağlı adımları değil, okumayı, sınıflandırmayı ve özetlemeyi de üstlenebilir.`,
        table: {
          head: ['', 'Kural tabanlı otomasyon', 'Robotik süreç otomasyonu (RPA)', 'Yapay zeka destekli otomasyon'],
          rows: [
            ['Nasıl çalışır?', 'Önceden yazılmış "şu olursa bunu yap" kuralları', 'Yazılım robotu, bir çalışanın ekranda yaptığı tekrarlayan adımları taklit eder', 'Kurallara ek olarak yapay zeka metni, belgeyi ve talebi anlar'],
            ['Güçlü olduğu yer', 'Yapılandırılmış veri, net kurallar', 'API sunmayan eski yazılımlar', 'E-posta, PDF, form gibi yapılandırılmamış veri'],
            ['Zayıf olduğu yer', 'İstisnalar', 'Ekran değişince bozulabilir', 'Belirsiz durumlarda insan onayı gerekir'],
            ['Örnek', 'Form gelince tabloya satır ekleme', 'Eski bir programa her gün aynı veriyi girme', 'Faturayı okuyup tutarı ve vadeyi muhasebe sistemine işleme'],
          ],
        },
        note: `Belgelerdeki bilgiyi yapılandırılmış veriye dönüştüren çözümlere akıllı belge işleme (IDP) de denir.`,
      },
      {
        id: 'anatomi',
        eyebrow: 'Nasıl çalışır?',
        title: 'Bir otomasyonun altı parçası',
        intro: `Hangi araçla kurulursa kurulsun, sağlam bir otomasyon aynı yapı taşlarından oluşur.`,
        cards: [
          { title: 'Tetikleyici', text: `Otomasyonu başlatan olay: yeni bir e-posta, doldurulan bir form, sisteme düşen bir sipariş ya da her pazartesi sabahı gibi bir zaman.` },
          { title: 'Veri alma ve okuma', text: `Gerekli bilgi ilgili sistemden çekilir; PDF, fatura veya e-posta gibi belgeler yapay zekayla okunur.` },
          { title: 'Karar ve sınıflandırma', text: `Talep türü, öncelik veya yönlendirilecek kişi belirlenir. Kurallar netse kurala, değilse yapay zekaya bırakılır.` },
          { title: 'Eylem', text: `Kayıt oluşturma, rapor hazırlama, bildirim gönderme veya başka bir sisteme veri aktarma.` },
          { title: 'İnsan onayı', text: `Para, sözleşme veya müşteriye giden resmi yazışma gibi geri alınamaz adımlardan önce onay istenir.` },
          { title: 'Kayıt ve hata yönetimi', text: `Her çalıştırma kayıt altına alınır. Bir adım başarısız olursa otomasyon durur ve sorumlu kişiye haber verir.` },
        ],
      },
      {
        id: 'ornekler',
        eyebrow: 'Uygulama alanları',
        title: 'Hangi işler otomatikleşebilir?',
        intro: `Aşağıdaki örnekler küçük ve orta ölçekli işletmelerde en sık karşılaştığımız tekrarlayan işlerdir.`,
        table: {
          head: ['Alan', 'Bugün', 'Otomasyonla'],
          rows: [
            ['Operasyon', 'Siparişler e-postadan tabloya elle aktarılıyor', 'Sipariş gelir gelmez kaydedilir, ilgili kişiye görev açılır'],
            ['Belge ve fatura', 'Gelen faturalar tek tek açılıp muhasebeye giriliyor', 'Fatura okunur, tutar ve vade çıkarılır, onaya sunulur'],
            ['Raporlama', 'Her hafta farklı tablolardan rapor hazırlanıyor', 'Veriler toplanır, özet rapor her pazartesi e-postayla gelir'],
            ['İnsan kaynakları', 'İzin talepleri ve personel evrakı e-postalarda dağınık', 'Talepler tek akışta toplanır, onay ve arşivleme otomatikleşir'],
            ['Stok ve tedarik', 'Stok eksikliği tükendiğinde fark ediliyor', 'Kritik seviyeye inen ürün için uyarı ve sipariş taslağı hazırlanır'],
            ['Müşteri takibi', 'Teklif sonrası dönüş unutuluyor', 'Belirlenen sürede yanıt gelmezse hatırlatma oluşturulur'],
          ],
        },
      },
      {
        id: 'potansiyel',
        eyebrow: 'Rakamlar',
        title: 'İşin ne kadarı otomatikleşebilir?',
        intro: `McKinsey'in 2023 tarihli raporuna göre, üretken yapay zeka ve diğer teknolojiler bugün çalışanların zamanının yüzde 60 ila 70'ini alan iş faaliyetlerini otomatikleştirme potansiyeline sahip. Önceki tahmin yaklaşık yüzde 50 idi.`,
        paras: [
          `Bu rakam teknik bir potansiyeldir; her işletmede bu kadarının otomatikleşeceği anlamına gelmez. Aynı rapora göre üretken yapay zekanın yaratabileceği değerin yaklaşık dörtte üçü dört alanda toplanıyor: müşteri operasyonları, pazarlama ve satış, yazılım geliştirme ve Ar-Ge.`,
          `Türkiye'de ise TÜİK'in 2026 verilerine göre yapay zeka kullanan girişimlerin yüzde 51'i onu pazarlama ve satış için, yüzde 43,4'ü üretim ve hizmet süreçleri için kullanıyor. Ayrıntılar için ${a('/ai-donusumu', 'AI Dönüşümü rehberimize')} göz atabilirsiniz.`,
        ],
      },
      {
        id: 'ilkeler',
        eyebrow: 'Kurulum ilkeleri',
        title: 'Sağlam bir otomasyon için kontrol listesi',
        intro: `Araç seçimi, kullandığınız sistemlere ve verinin nerede tutulması gerektiğine göre yapılır. n8n, Make, Zapier veya Microsoft Power Automate gibi platformlarla ya da özel yazılımla kurulabilir. Hangisi seçilirse seçilsin şu ilkeler değişmez.`,
        checklist: [
          `<b>Önce süreci yazın.</b> Otomatikleşecek işin her adımı, istisnalarıyla birlikte yazılı olmalı.`,
          `<b>Bugünü ölçün.</b> Süre ve hata oranı kurulumdan önce kaydedilmeli.`,
          `<b>Onay noktalarını belirleyin.</b> Geri alınamaz her adımdan önce insan onayı.`,
          `<b>En az yetki verin.</b> Otomasyon yalnızca işi için gereken verilere erişmeli.`,
          `<b>Hataları görünür kılın.</b> Başarısız bir çalıştırma sessizce geçmemeli, sorumlu kişiye bildirilmeli.`,
          `<b>Sahibini belirleyin.</b> Her otomasyonun işletmede bir sorumlusu olmalı.`,
        ],
      },
    ],
    sources: [
      { title: 'McKinsey, The economic potential of generative AI (Haziran 2023)', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier' },
      { title: 'TÜİK, Yapay Zekâ İstatistikleri 2026 (2 Ekim 2026)', url: 'https://veriportali.tuik.gov.tr/tr/press/62066' },
      { title: 'Foreks / AA, TÜİK 2026 yapay zeka kullanım amaçları', url: 'https://www.foreks.com/haber/detay/6ac0f13524008d7d4373b88a/AA/tr/turkiye-yapay-zekayi-en-cok-bilisimde-en-az-insaatta-kullaniyor-03-10-26/' },
    ],
  },

  'ai-ajanlari': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'nedir',
        eyebrow: 'Temel kavram',
        title: 'AI ajanı tam olarak nedir?',
        intro: `Claude modellerinin geliştiricisi Anthropic ajanı şöyle tanımlıyor: büyük dil modellerinin kendi süreçlerini ve araç kullanımlarını dinamik olarak yönettiği, görevi nasıl tamamlayacakları üzerindeki kontrolü ellerinde tuttuğu sistemler.`,
        paras: [
          `Bunun karşısında iş akışları vardır: model ve araçlar önceden çizilmiş adımları izler. Anthropic'in tavsiyesi açık: mümkün olan en basit çözümü bulmak ve karmaşıklığı yalnızca gerektiğinde artırmak. Bu da çoğu zaman hiç ajan kurmamak anlamına gelebilir.`,
          `OpenAI'ın 2025'te yayımladığı ajan geliştirme rehberine göre bir ajan üç temel parçadan oluşur: <b>model</b> (akıl yürüten yapay zeka), <b>araçlar</b> (ajanın kullanabildiği sistemler) ve <b>talimatlar</b> (ajanın nasıl davranacağını belirleyen kurallar).`,
        ],
      },
      {
        id: 'yapi',
        eyebrow: 'Yapı taşları',
        title: 'Bir ajanın çalışma düzeni',
        intro: `Bir ajana güvenebilmek için model kadar çevresindeki kurallar da önemlidir.`,
        cards: [
          { title: 'Veri araçları', text: `Ajanın bilgi topladığı kaynaklar: CRM kayıtları, tablolar, PDF belgeler, web araması.` },
          { title: 'Eylem araçları', text: `Ajanın gerçekten bir şeyi değiştiren işlemleri: e-posta taslağı yazmak, kayıt güncellemek, konuşmayı bir insana devretmek.` },
          { title: 'Talimatlar', text: `Görevin tanımı, adımları, üslup ve kesin yasaklar. İyi yazılmış talimat, ajan davranışının en önemli belirleyicisidir.` },
          { title: 'Güvenlik kuralları', text: `Konu dışı talepleri, kişisel veri sızıntısını ve riskli işlemleri engelleyen katmanlı kontroller.` },
          { title: 'İnsana devir', text: `Ajan tekrar tekrar başarısız olduğunda ya da geri alınamaz, yüksek riskli bir işlem öncesinde kontrol insana geçer.` },
          { title: 'Kayıt ve gözden geçirme', text: `Ajanın her adımı kayıt altına alınır, düzenli aralıklarla incelenir ve talimatlar iyileştirilir.` },
        ],
      },
      {
        id: 'desenler',
        eyebrow: 'Doğru desen',
        title: 'Her iş için ajan gerekmez: beş yaygın desen',
        intro: `Anthropic, işletmelerde başarılı olan sistemlerin çoğunun karmaşık yapılar yerine basit ve birleştirilebilir desenlerle kurulduğunu belirtiyor. Bu desenler ve işletmelerdeki karşılıkları:`,
        table: {
          head: ['Desen', 'Ne yapar?', 'İşletmedeki örneği'],
          rows: [
            ['Zincirleme adımlar', 'Bir işi sırayla ilerleyen adımlara böler; her adım bir öncekinin çıktısını kullanır', 'Talebi oku, eksik bilgiyi çıkar, teklif taslağı yaz'],
            ['Yönlendirme', 'Gelen işi türüne göre sınıflandırıp doğru akışa gönderir', 'Gelen e-postayı satış, destek veya muhasebe akışına ayırmak'],
            ['Paralel çalışma', 'Bir işin parçalarını aynı anda yürütür veya aynı işe birden fazla görüş alır', 'Bir sözleşmeyi farklı açılardan aynı anda kontrol etmek'],
            ['Yönetici ve çalışanlar', 'Bir model işi alt görevlere böler, sonuçları birleştirir', 'Çok kaynaklı bir pazar araştırmasını derlemek'],
            ['Değerlendirici ve iyileştirici', 'Bir model üretir, diğeri ölçütlere göre değerlendirip düzeltme ister', 'Teklif metnini kurumsal dil kurallarına göre gözden geçirmek'],
          ],
        },
      },
      {
        id: 'gercekci',
        eyebrow: 'Gerçekçi beklenti',
        title: 'Ajan projelerinde neler ters gidebilir?',
        intro: `Gartner, ajan tabanlı yapay zeka projelerinin yüzde 40'tan fazlasının 2027 sonuna kadar iptal edileceğini öngörüyor. Ayrıca piyasada "ajan aklama" denen bir eğilime dikkat çekiyor: mevcut asistanların, RPA ürünlerinin ve sohbet botlarının "ajan" olarak yeniden paketlenmesi. Gartner'a göre kendini bu alanda tanıtan binlerce sağlayıcıdan yalnızca yaklaşık 130'u gerçekten ajan tabanlı.`,
        checklist: [
          `<b>Dar bir görevle başlayın.</b> "Satışı yönet" değil, "gelen teklif talebinden taslak hazırla".`,
          `<b>Tek ajanla başlayın.</b> Birden fazla ajanın birlikte çalıştığı yapılara ancak gerçekten gerektiğinde geçin.`,
          `<b>Yetkileri sınırlayın.</b> Ajan yalnızca görevi için gereken araçlara erişmeli.`,
          `<b>Dışarıya giden her şey onaydan geçsin.</b> Müşteriye giden e-posta, ödeme veya kayıt silme insan onayıyla yapılmalı.`,
          `<b>Maliyeti izleyin.</b> Ajanlar her adımda model çağrısı yapar; iş başına maliyet takip edilmeli.`,
          `<b>Basit çözüm yetiyorsa ajan kurmayın.</b> Kuralları net bir iş için ${a('/ai-donusumu/surec-otomasyonlari', 'süreç otomasyonu')} daha ucuz ve daha güvenilirdir.`,
        ],
      },
    ],
    sources: [
      { title: 'Anthropic, "Building effective agents" (Aralık 2024)', url: 'https://www.anthropic.com/research/building-effective-agents' },
      { title: 'OpenAI, "A practical guide to building agents" (Nisan 2025, PDF)', url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf' },
      { title: 'Gartner, ajan tabanlı yapay zeka projeleri ve "agent washing" (25 Haziran 2025)', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027' },
    ],
  },

  entegrasyonlar: {
    updated: '2026-10-15',
    sections: [
      {
        id: 'yontemler',
        eyebrow: 'Temel kavram',
        title: 'Sistemler birbirine nasıl bağlanır?',
        intro: `Entegrasyon, iki yazılımın insan aracılığı olmadan veri alışverişi yapmasıdır. Doğru yöntem, bağlanacak sistemin sunduğu imkânlara ve verinin ne kadar güncel olması gerektiğine göre seçilir.`,
        table: {
          head: ['Yöntem', 'Nasıl çalışır?', 'Ne zaman uygun?'],
          rows: [
            ['API', 'Bir sistem diğerine belirli kurallarla soru sorar veya veri gönderir', 'Fiyat, stok, müsaitlik gibi bilginin anlık okunması ve kayıt oluşturma'],
            ['Webhook', 'Bir olay olduğunda sistem karşı tarafa kendiliğinden haber verir; sürekli "yeni bir şey var mı?" diye sormaya gerek kalmaz', 'Yeni sipariş, yeni rezervasyon, ödeme onayı gibi olaylar'],
            ['Dosya aktarımı', 'Belirli aralıklarla CSV veya Excel dosyası alınıp verilir', 'API sunmayan eski sistemler, günlük toplu aktarımlar'],
            ['MCP', 'Yapay zeka uygulamalarının araçlara ve veri kaynaklarına standart bir yolla bağlanmasını sağlayan açık protokol', 'Asistan ve ajanların birden fazla sisteme güvenli erişimi'],
          ],
        },
      },
      {
        id: 'mcp',
        eyebrow: 'Yeni standart',
        title: 'Model Context Protocol (MCP) neden önemli?',
        intro: `Anthropic, 25 Kasım 2024'te MCP'yi yapay zekayı araçlara ve verilere bağlamak için açık bir standart olarak duyurdu. Standart kısa sürede yaygınlaştı.`,
        paras: [
          `OpenAI, Mart 2025'te MCP desteğini ajan geliştirme araçlarına ekledi; Microsoft, Mayıs 2025'teki Build konferansında Windows için MCP desteğini duyurdu; Google da 2025'te desteğini açıkladı. Anthropic, 9 Aralık 2025'te MCP'yi Linux Foundation bünyesinde kurulan Agentic AI Foundation'a devretti.`,
          `Bu sizin için şu demek: bir sisteminiz için kurulan MCP bağlantısı, farklı yapay zeka modelleriyle de kullanılabilir. Bu, tek bir sağlayıcıya bağımlılığı azaltır ve yeni bağlantıların kurulmasını hızlandırır.`,
        ],
      },
      {
        id: 'sistemler',
        eyebrow: 'Sık bağlanan sistemler',
        title: 'Hangi sistemlere bağlanıyoruz?',
        intro: `Resmi bağlantı noktası (API) veya webhook sunan sistemlerin çoğuyla çalışabiliriz. Sisteminizin bağlantıya açık olup olmadığını keşif aşamasında kontrol ederiz.`,
        cards: [
          { title: 'CRM', text: `Asistanın topladığı talepler müşteri kaydına dönüşür; teklif ve takip adımları CRM'de görünür.` },
          { title: 'Muhasebe ve e-Fatura', text: `Faturalar ve tahsilatlar muhasebe yazılımına işlenir. e-Fatura ve e-Arşiv kurallarını Gelir İdaresi Başkanlığı'nın güncel düzenlemelerine göre kontrol ederiz; örneğin e-Arşiv kapsamındaki mükellefler için 1 Ocak 2026'dan itibaren e-Fatura mükellefi olmayanlara düzenlenen faturalar tutardan bağımsız olarak e-Arşiv fatura olmalıdır.` },
          { title: 'Rezervasyon ve otel yönetimi', text: `Asistan müsaitliği otel yönetim sisteminden, kanal yöneticisinden veya rezervasyon motorundan okur, rezervasyonu doğrudan oluşturur.` },
          { title: 'Takvim', text: `Google Takvim veya Outlook üzerinden randevu alınır, hatırlatmalar otomatik gönderilir.` },
          { title: 'E-ticaret', text: `Sipariş, stok ve kargo bilgisi asistana ve raporlara aktarılır.` },
          { title: 'Tablolar ve belgeler', text: `Google E-Tablolar, Excel ve bulut depolama; raporlama ve arşiv akışlarının temeli.` },
        ],
      },
      {
        id: 'guvenlik',
        eyebrow: 'Güvenlik',
        title: 'Entegrasyonlarda güvenlik ilkelerimiz',
        intro: `Bir entegrasyon, iki sistem arasında açılan bir kapıdır. Bu kapı yalnızca gerektiği kadar açık olmalı.`,
        checklist: [
          `<b>En az yetki.</b> Bağlantı yalnızca görev için gereken verilere erişir; mümkünse salt okunur başlar.`,
          `<b>Gizli anahtarların korunması.</b> API anahtarları kodda veya tablolarda değil, şifreli ortamda saklanır.`,
          `<b>Kayıt.</b> Hangi verinin ne zaman hangi sisteme aktarıldığı izlenebilir.`,
          `<b>Hata bildirimi.</b> Bağlantı koptuğunda veya veri aktarılamadığında sorumlu kişiye haber verilir.`,
          `<b>KVKK.</b> Kişisel verinin hangi sistemde işlendiği belgelenir; yurt dışındaki bir hizmete aktarım söz konusuysa KVKK'nın yurt dışına aktarım hükümleri gözetilir.`,
        ],
      },
    ],
    sources: [
      { title: 'Red Hat, "What is a webhook?"', url: 'https://www.redhat.com/en/topics/automation/what-is-a-webhook' },
      { title: 'Anthropic, Introducing the Model Context Protocol (Kasım 2024)', url: 'https://www.anthropic.com/news/model-context-protocol' },
      { title: 'Anthropic, MCP\'nin Agentic AI Foundation\'a devri (Aralık 2025)', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' },
      { title: 'GovInfoSecurity, OpenAI, Google ve Microsoft MCP standardını benimsedi (2025)', url: 'https://www.govinfosecurity.com/ai-giants-adopt-anthropics-standard-to-connect-apps-agents-a-28052' },
      { title: 'Paraşüt, e-Fatura geçiş zorunluluğu şartları', url: 'https://www.parasut.com/blog/e-fatura-gecis-zorunlulugu-sartlari' },
      { title: 'Gelir İdaresi Başkanlığı', url: 'https://www.gib.gov.tr' },
    ],
  },

  'web-sitesi-dijital-altyapi': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'seo-geo',
        eyebrow: 'Temel kavram',
        title: 'SEO ve GEO aynı temele dayanır',
        intro: `SEO, sitenizin Google gibi arama motorlarında üst sıralarda görünmesini; GEO (Generative Engine Optimization) ise ChatGPT, Gemini veya Google'ın yapay zeka yanıtlarında kaynak olarak gösterilmesini hedefler.`,
        paras: [
          `Google'ın site sahipleri için yayımladığı "AI features and your website" belgesine göre, AI Overviews ve AI Mode gibi yapay zeka özelliklerinde görünmek için ek bir teknik gereklilik yok. Sayfanın Google tarafından dizine eklenmiş ve arama sonucunda snippet ile gösterilmeye uygun olması gerekiyor; temel SEO uygulamaları burada da geçerli.`,
          `Bu yüzden GEO için kestirme bir yol vaat etmiyoruz. Yaptığımız şey, yapay zekanın kolayca anlayıp alıntılayabileceği içerik kurmaktır: her sayfanın başında soruya net bir kısa cevap, kaynağı belirtilmiş rakamlar, yazar bilgisi ve tutarlı site içi bağlantılar.`,
        ],
      },
      {
        id: 'hiz',
        eyebrow: 'Teknik temel',
        title: 'Hız ve kullanıcı deneyimi: Core Web Vitals',
        intro: `Google'ın Core Web Vitals ölçütleri üç ölçümden oluşur. Bir sitenin "iyi" sayılması için ziyaretlerin en az yüzde 75'inde bu eşiklerin karşılanması gerekir.`,
        table: {
          head: ['Ölçüt', 'Neyi ölçer?', '"İyi" eşiği'],
          rows: [
            ['LCP (Largest Contentful Paint)', 'Sayfanın ana içeriğinin ne kadar sürede göründüğü', '2,5 saniye veya daha az'],
            ['INP (Interaction to Next Paint)', 'Tıklama ve dokunuşlara sayfanın ne kadar hızlı tepki verdiği', '200 milisaniye veya daha az'],
            ['CLS (Cumulative Layout Shift)', 'Sayfa yüklenirken içeriğin ne kadar kaydığı', '0,1 veya daha az'],
          ],
        },
        note: `INP, 12 Mart 2024'te eski FID ölçütünün yerini aldı.`,
      },
      {
        id: 'gercekler',
        eyebrow: 'Güncel durum',
        title: 'Yapısal veri ve yapay zeka dosyaları hakkında gerçekler',
        intro: `Bu konuda abartılı vaatler çok; bilinen durumu aşağıda özetledik.`,
        paras: [
          `<b>Yapısal veri (schema.org):</b> Sayfanızın neyi anlattığını arama motorlarına ve yapay zeka sistemlerine makine diliyle bildirir. Ancak Google, SSS zengin sonuçlarını 7 Mayıs 2026'dan itibaren tüm siteler için göstermeyi bıraktı; adım adım anlatım (HowTo) zengin sonuçları ise 2023'te kaldırılmıştı. Bu yüzden yapısal veriyi "arama sonucunda yıldız ya da açılır soru gösterme" vaadiyle değil, içeriğin doğru anlaşılması için kullanırız.`,
          `<b>llms.txt:</b> Eylül 2024'te Jeremy Howard tarafından önerilen, sitenin içeriğini yapay zeka sistemlerine özetleyen bir dosya biçimi. Topluluk önerisi olarak kalıyor; Google bu dosyayı Arama'da kullanmadığını belirtiyor. Ekleme maliyeti düşük olduğu için sitelerde yer veriyoruz, ancak bir sıralama avantajı vaat etmiyoruz.`,
        ],
      },
      {
        id: 'icerik',
        eyebrow: 'Teslim ettiklerimiz',
        title: 'Kuracağımız sitelerde neler standart?',
        intro: `Bu sitede kullandığımız altyapıyı kuruyoruz.`,
        checklist: [
          `<b>Hızlı, statik altyapı.</b> Sayfalar önceden hazırlanır, sunucuda bekleme olmadan açılır.`,
          `<b>Mobil öncelikli tasarım.</b> Ziyaretçilerin çoğunun telefondan geldiği varsayımıyla tasarlanır.`,
          `<b>Teknik SEO.</b> Site haritası, kanonik adresler, düzgün başlık yapısı, kırık bağlantı kontrolü.`,
          `<b>Soru-cevap odaklı içerik.</b> Her sayfanın başında 40-60 kelimelik net bir cevap.`,
          `<b>Yapısal veri.</b> Kurum, hizmet, makale ve yazar bilgileri.`,
          `<b>Arama konsolları.</b> Google Search Console ve Bing Webmaster Tools kurulumu ve site haritası gönderimi.`,
          `<b>KVKK ve çerez metinleri.</b> Aydınlatma metni ve çerez politikası.`,
          `<b>Asistana hazır.</b> ${a('/ai-asistanlar/web-sitesi-asistani', 'Web sitesi asistanı')} ve randevu akışları kolayca eklenir.`,
        ],
      },
    ],
    sources: [
      { title: 'Google Search Central, AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
      { title: 'web.dev, Defining the Core Web Vitals metrics thresholds', url: 'https://web.dev/articles/defining-core-web-vitals-thresholds' },
      { title: 'web.dev, INP\'nin Core Web Vitals\'a katılması (Mart 2024)', url: 'https://web.dev/blog/inp-cwv-launch' },
      { title: 'Google Search Central Blog, HowTo ve FAQ zengin sonuç değişiklikleri (Ağustos 2023)', url: 'https://developers.google.com/search/blog/2023/08/howto-faq-changes' },
      { title: 'Search Engine Journal, Google SSS zengin sonuçlarını kaldırdı (2026)', url: 'https://www.searchenginejournal.com/google-drops-faq-rich-results/574429/' },
      { title: 'llmstxt.org, llms.txt önerisi (Eylül 2024)', url: 'https://llmstxt.org/' },
    ],
  },
};
