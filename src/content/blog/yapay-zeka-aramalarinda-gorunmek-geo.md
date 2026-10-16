---
title: "İşletmeniz ChatGPT ve Google'ın yapay zeka yanıtlarında nasıl görünür? Küçük işletmeler için GEO rehberi"
seoTitle: "GEO Nedir? Yapay Zeka Aramalarında Görünmek"
description: "ChatGPT, Gemini, Perplexity ve Google AI Overviews bilgiyi nereden alıyor? Küçük işletmeler için GEO'nun ne olduğunu, neyin işe yaradığını ve neyin abartıldığını anlattık."
answer: "Yapay zeka aramalarında görünmenin yolu sağlam bir SEO temelinden geçer. Google, AI Overviews ve AI Mode için ek bir teknik şart olmadığını, dizine eklenmiş ve snippet ile gösterilebilen sayfaların uygun olduğunu söylüyor. ChatGPT ve Perplexity'nin arama botlarına izin verin, Bing'e kaydolun, İşletme Profilinizi güncel tutun ve özgün içerik yazın."
date: 2026-10-16
draft: true
faqs:
  - q: "GEO ile SEO arasındaki fark nedir?"
    a: "SEO, sitenizin klasik arama sonuçlarında bulunmasını hedefler. GEO ise ChatGPT veya Google'ın yapay zeka yanıtları gibi sistemlerde kaynak olarak kullanılmayı hedefler. Google'ın 2026'da yayımladığı rehbere göre kendi yapay zeka özellikleri temel arama sistemlerinin üzerine kurulu olduğu için ikisinin temeli aynıdır."
  - q: "Sitemize llms.txt dosyası eklemeli miyiz?"
    a: "Zorunlu değil. Google, llms.txt dosyasının Google Arama'daki görünürlüğe ne katkı ne de zarar sağladığını belirtiyor. Eklemek isterseniz maliyeti düşüktür, ancak bir sıralama ya da alıntılanma avantajı beklemeyin."
  - q: "ChatGPT'de işletmemin önerilmesini garanti edebilir miyim?"
    a: "Hayır. Yapay zeka yanıtları soruya, kullanıcıya ve zamana göre değişir; hiçbir ajans veya araç bunu garanti edemez. Yapabileceğiniz şey, sitenizin bu sistemler tarafından taranabilir, anlaşılır ve güvenilir olmasını sağlamaktır."
---

## Kısa cevap: yapay zeka aramaları da önce sitenizi bulmak zorunda

Bir müşteriniz ChatGPT'ye "Safranbolu'da konağı andıran, kahvaltısı iyi bir butik otel önerir misin?" diye yazdığında, sistem çoğu zaman cevabı kendi hafızasından uydurmaz. Web'de arama yapar, bulduğu sayfaları okur ve yanıtını bunlara dayanarak kurar. Sizin otelinizin o listede olması için önce bu aramanın sitenizi bulabilmesi, sonra da sayfanızdaki bilgiyi anlayabilmesi gerekir.

GEO (Generative Engine Optimization) bu süreci kolaylaştırmak için yapılan işlerin genel adı. Kulağa yeni bir disiplin gibi gelse de işin büyük kısmı iyi yapılmış SEO ile örtüşüyor. Bu yazıda yapay zeka aramalarında görünmek için gerçekten işe yarayan adımları ve abartılan iddiaları ayırmaya çalıştık.

## GEO nedir, kavram nereden çıktı?

Terim, Princeton ve başka üniversitelerden araştırmacıların hazırladığı "GEO: Generative Engine Optimization" makalesiyle yaygınlaştı. Pranjal Aggarwal ve arkadaşlarının makalesi KDD 2024 konferansında yayımlandı ([arXiv](https://arxiv.org/abs/2311.09735)). Araştırmacılar içerikte yapılan değişikliklerin yapay zeka yanıtlarındaki görünürlüğü yüzde 40'a kadar artırabildiğini ölçtü. En iyi sonucu kaynak göstermek, alıntı eklemek ve istatistik eklemek verdi; anahtar kelime doldurmak ise işe yaramadı. Makale bu etkinin alana göre değiştiğini de vurguluyor. Yüzde 40 bir üst sınır, her siteye vaat edilebilecek bir ortalama sayılmamalı.

## Bu sistemler bilgiyi nereden alıyor?

Her yapay zeka aracı web'e kendi yolundan ulaşıyor. Küçük bir işletme için bilmeniz gereken özet şu:

| Sistem | Bilgiyi nereden buluyor? | Sizin yapmanız gereken |
|---|---|---|
| Google AI Overviews ve AI Mode | Google'ın kendi arama dizini | Sayfalarınızın Google'da dizine eklenmesi |
| ChatGPT arama | OpenAI'nin OAI-SearchBot tarayıcısı | robots.txt'de OAI-SearchBot'a izin vermek |
| Perplexity | PerplexityBot tarayıcısı | robots.txt'de PerplexityBot'a izin vermek |
| Microsoft Copilot | Bing dizini | Bing Webmaster Tools'a kaydolmak |
| Yerel aramalar | Google İşletme Profili ve web'deki diğer kaynaklar | Profili eksiksiz ve güncel tutmak |

**Google** bu konuda net konuştu. Search Central'daki "AI features and your website" belgesine göre bir sayfanın AI Overviews veya AI Mode'da bağlantı olarak gösterilmesi için ek bir teknik şart yok. Sayfanın dizine eklenmiş ve snippet ile gösterilmeye uygun olması yeterli. Google ayrıca bu özelliklerin bir soruyu yanıtlarken birden fazla ilgili arama yaptığını ("query fan-out") ve bu yüzden klasik aramaya göre daha geniş bir kaynak yelpazesi gösterebildiğini anlatıyor ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)).

15 Mayıs 2026'da yayımlanan ayrı bir rehberde Google bir adım daha ileri gitti: kendi yapay zeka özellikleri temel sıralama ve kalite sistemlerinin üzerine kurulu olduğu için SEO geçerliliğini koruyor. Rehber, başka yerde bulunmayan özgün içeriği en önemli öneri olarak öne çıkarıyor ([Google Search Central Blog](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing), [rehber](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

**ChatGPT** tarafında OpenAI, arama sonuçları için OAI-SearchBot adlı tarayıcıyı kullanıyor. OpenAI'nin dokümanına göre bu bota robots.txt üzerinden kapalı olan siteler ChatGPT'nin arama yanıtlarında gösterilmiyor. Model eğitimi için kullanılan GPTBot ayrı bir bot. Yani içeriğinizin eğitimde kullanılmasını istemiyorsanız GPTBot'u engelleyip OAI-SearchBot'a izin verebilirsiniz.([OpenAI, Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots)).

**Perplexity** de benzer bir ayrım yapıyor. PerplexityBot, siteleri Perplexity'nin arama sonuçlarında göstermek ve bağlantı vermek için tarıyor ve şirkete göre temel model eğitimi için kullanılmıyor ([Perplexity Docs](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)).

**Bing** ise Copilot'un ve Bing'deki yapay zeka özetlerinin temelini oluşturuyor. Microsoft, 10 Şubat 2026'da Bing Webmaster Tools'a "AI Performance" adlı bir rapor ekledi. Bu rapor sitenizin Copilot'ta, Bing'in yapay zeka özetlerinde ve bazı iş ortağı entegrasyonlarında hangi sayfalarıyla kaynak gösterildiğini listeliyor. Microsoft aynı yazıda IndexNow ile içerik eklendiğinde veya güncellendiğinde arama motorlarını haberdar etmenin, yapay zeka yanıtlarının sayfanın güncel halini kullanmasına yardımcı olduğunu belirtiyor ([Bing Webmaster Blog](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/)).

## Yerel işletmeler için Google İşletme Profili

"Yakınımda", "Kadıköy'de" ya da "Safranbolu'da" diye başlayan aramalarda İşletme Profili belirleyici. Google, yerel sonuçların çoğunlukla üç etkene göre belirlendiğini söylüyor: alaka düzeyi, mesafe ve belirginlik. Belirginlik, işletmenizin ne kadar bilindiğini anlatıyor ve işletmenize bağlantı veren web sitelerinin sayısı, aldığınız yorumlar ve puanlar gibi bilgilere dayanıyor ([Google İşletme Profili Yardım](https://support.google.com/business/answer/7091?hl=tr)). Çalışma saatleri, adres ve telefonun profilde, sitenizde ve dizinlerde aynı olması bu yüzden önemli.

## Abartılan konular: llms.txt ve yapısal veri

**llms.txt** için Google'ın tutumu açık. Mayıs 2026 rehberinde llms.txt dosyası oluşturmanın Google Arama'daki görünürlüğe ne katkı ne de zarar sağladığı yazıyor. Aynı rehber içeriği yapay zeka için küçük parçalara bölmenin veya ayrıca "yapay zeka dostu" metin yazmanın gereksiz olduğunu da söylüyor ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

**Yapısal veri** (schema.org) sayfanızın neyi anlattığını makinelerin anlayacağı dilde söyler ve kullanmaya değer. Ancak Google 7 Mayıs 2026'dan itibaren SSS zengin sonuçlarını göstermeyi tamamen bıraktı ([Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)). Yapısal veriyi arama sonucunda görsel bir ek kazanmak için kullanmanın alanı daralıyor; asıl faydası içeriğin doğru anlaşılması.

## Tıklamalar azalıyor mu?

Bu konuda en çok atıf yapılan veri Pew Research Center'dan. Mart 2025'te 900 ABD'li yetişkinin tarama verilerini inceleyen araştırmaya göre, arama sonucunda yapay zeka özeti çıktığında kullanıcılar ziyaretlerin yüzde 8'inde bir sonuca tıkladı. Özet çıkmayan aramalarda bu oran yüzde 15'ti. Özetin içindeki kaynak bağlantılarına tıklama ise ziyaretlerin yalnızca yüzde 1'inde görüldü ([Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)).

Küçük bir işletme için bunun anlamı şu: yapay zeka yanıtında adınızın geçmesi tek başına ziyaret getirmeyebilir. Kullanıcı sitenize geldiğinde aradığını hemen bulmalı, size kolayca ulaşabilmeli. Gelen ziyaretçiyi gece gündüz karşılamak için bir [web sitesi asistanı](/ai-asistanlar/web-sitesi-asistani) bu boşluğu doldurabilir.

## Küçük işletme siteleri için kontrol listesi

- Google Search Console'a kaydolun, site haritanızı gönderin ve önemli sayfaların dizinde olduğunu kontrol edin.
- Bing Webmaster Tools'a kaydolun; siteniz destekliyorsa IndexNow'u açın.
- robots.txt dosyanızda OAI-SearchBot ve PerplexityBot'un engellenmediğinden emin olun.
- Google İşletme Profilinizi eksiksiz doldurun; adres, telefon ve saatleri her yerde aynı yazın.
- Her önemli sayfanın başına, sayfanın cevapladığı soruya kısa ve net bir yanıt koyun.
- Fiyat, kapasite, konum gibi somut bilgileri metin olarak yazın; yalnızca görselin içinde bırakmayın.
- Rakam kullanıyorsanız kaynağını belirtin. GEO makalesindeki en etkili yöntemlerden biri buydu.
- Kurum, hizmet ve yerel işletme bilgileri için yapısal veri ekleyin.
- Bing'in AI Performance raporunu ara ara kontrol edin.

Bu adımların teknik kısmını [Web Sitesi & Dijital Altyapı](/ai-donusumu/web-sitesi-dijital-altyapi) sayfamızda daha ayrıntılı anlattık. Yapay zekayı işinizin başka alanlarında nasıl kullanabileceğinizi merak ediyorsanız [Yapay Zeka Dönüşümü](/ai-donusumu) sayfamıza, hiç başlamadıysanız [küçük işletmeler yapay zekaya nereden başlamalı](/blog/kucuk-isletmeler-yapay-zekaya-nereden-baslamali) yazımıza göz atabilirsiniz.

## Kaynaklar

- "AI features and your website", Google Search Central: [developers.google.com](https://developers.google.com/search/docs/appearance/ai-features)
- "A new resource for optimizing for generative AI in Google Search", Google Search Central Blog, 15 Mayıs 2026: [developers.google.com](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing)
- "Optimizing your website for generative AI features on Google Search", Google Search Central, 2026: [developers.google.com](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- "Overview of OpenAI Crawlers", OpenAI: [developers.openai.com](https://developers.openai.com/api/docs/bots)
- "Perplexity Crawlers", Perplexity: [docs.perplexity.ai](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- "Introducing AI Performance in Bing Webmaster Tools Public Preview", Bing Webmaster Blog, 10 Şubat 2026: [blogs.bing.com](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/)
- "Google Drops FAQ Rich Results", Search Engine Journal, 2026: [searchenginejournal.com](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)
- "Google'da yerel sıralamanızı iyileştirme", Google İşletme Profili Yardım: [support.google.com](https://support.google.com/business/answer/7091?hl=tr)
- "Google users are less likely to click on links when an AI summary appears in the results", Pew Research Center, 22 Temmuz 2025: [pewresearch.org](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)
- Aggarwal ve ark., "GEO: Generative Engine Optimization", KDD 2024: [arxiv.org](https://arxiv.org/abs/2311.09735)
