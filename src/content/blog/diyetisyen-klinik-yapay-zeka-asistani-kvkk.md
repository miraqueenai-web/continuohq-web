---
title: "Diyetisyenler yapay zeka asistanını nerede kullanabilir, nerede durdurmalı?"
seoTitle: "Diyetisyen Yapay Zeka Asistanı ve Sağlık Verisi KVKK"
description: "Diyetisyen ve küçük klinikler için yapay zeka asistanı: randevu ve bilgi işleri, uzmana devredilmesi gereken konular ve sağlık verisinde KVKK kuralları."
answer: "Diyetisyen yapay zeka asistanı randevu, hatırlatma, paket ve ücret bilgisi, ilk görüşme öncesi bilgilendirme gibi idari işleri üstlenebilir. Tanı, kişiye özel diyet planı, ilaç ve takviye soruları diyetisyene devredilmelidir. Sağlık verisi KVKK'da özel nitelikli kişisel veridir; asistan bu veriyi gereğinden fazla toplamamalı ve işleme şartlarına uygun kurulmalıdır."
date: 2026-10-13
draft: true
faqs:
  - q: "Asistan danışanıma diyet listesi hazırlayabilir mi?"
    a: "Hazırlamamalı. Kişiye özel beslenme planı, danışanın sağlık durumunu değerlendiren diyetisyenin işidir. Asistan bu tür talepleri alıp diyetisyene iletmeli ve danışanı randevuya yönlendirmelidir."
  - q: "Danışan WhatsApp'tan tahlil sonucunu gönderirse ne olur?"
    a: "Tahlil sonucu sağlık verisidir ve KVKK'da özel nitelikli kişisel veri sayılır. Asistanın bu tür içerikleri yorumlamaması, gerekiyorsa danışanı belgeyi görüşmede paylaşmaya yönlendirmesi ve konuşmayı diyetisyene devretmesi daha güvenli bir kurgudur."
  - q: "Yurt dışında çalışan bir yapay zeka hizmetini kullanmak mümkün mü?"
    a: "Mümkün olabilir, ancak 6698 sayılı Kanun'un 9. maddesindeki aktarım şartlarından birinin sağlanması gerekir: yeterlilik kararı, standart sözleşme gibi uygun bir güvence ya da sınırlı istisnai haller. Kurulumdan önce bu konuyu bir hukukçuyla netleştirmenizi öneririz."
---

## Asistan hangi işleri alabilir?

Bir diyetisyenin gününü en çok bölen mesajlar genellikle tıbbi değildir. "Salı öğleden sonra boşluğunuz var mı?", "Online görüşme yapıyor musunuz?", "Üç aylık paket ne kadar?", "Kontrol randevumu ertelemem lazım." Bu sorular gün içinde defalarca gelir ve çoğu, seans sırasında cevapsız kalır.

Diyetisyen yapay zeka asistanı bu idari tarafı üstlenmek için kurulur:

- Takvime bakıp randevu vermek, ertelemek, iptal etmek
- Randevudan önce hatırlatma göndermek
- Paket içerikleri, ücretler, adres, online görüşme koşulları gibi sabit bilgileri anlatmak
- İlk görüşmeye ne getirileceğini ve görüşmenin nasıl ilerlediğini açıklamak
- Sık sorulan soruları klinikle aynı dille yanıtlamak

Bu işler için asistanın sizin onayladığınız bilgilerle beslenmesi yeterlidir. Takviminize bağlanan bir [klinik randevu asistanı](/ai-asistanlar/randevu-rezervasyon) boş saatleri canlı görür ve randevuyu doğrudan oluşturur. Mesajların çoğu WhatsApp'tan geliyorsa kurulum [WhatsApp Asistanı](/ai-asistanlar/whatsapp-asistani) üzerinden yapılabilir.

## Nerede durmalı?

Tanı koymak, kişiye özel diyet veya tedavi önerisi vermek, ilaç ve takviye kullanımı hakkında yorum yapmak asistanın işi olmamalıdır. Bu sınırın gerekçesi araştırmalarda da görülüyor.

Tayvan'da yapılan ve *Nutrients* dergisinde yayımlanan bir çalışmada 30 deneyimli diyetisyen, ChatGPT'nin üniversite öğrencilerine verdiği beslenme tavsiyelerini değerlendirdi. Yanıtlar okunabilirlikte iyi bulundu; anlaşılırlık, uygulanabilirlik ve eksiksizlik açısından zayıf kaldı. Beş senaryoda "tam başarı" oranı yüzde 7,5 ile yüzde 37,56 arasında değişti ([Nutrients](https://www.mdpi.com/2072-6643/16/12/1939)).

JMIR AI'da Ekim 2025'te yayımlanan başka bir çalışmada Microsoft Copilot'a 30 besin takviyesi hakkında 180 soru, üç farklı yanıt modunda soruldu. Doğruluk oranı modlara göre yüzde 31,7 ile yüzde 36,1 arasında kaldı. Yanıtlarda gösterilen kaynakların yüzde 72,7'si blog, satış sitesi ve sosyal medya gibi doğrulanmamış kaynaklardı ([JMIR AI](https://ai.jmir.org/2025/1/e78436)).

Dünya Sağlık Örgütü de sağlıkta büyük çok modlu modeller için Ocak 2024'te yayımladığı rehberde, bu modellerin yanlış, eksik veya önyargılı ifadeler üretebildiğini ve sağlık kararı veren kişilere zarar verebileceğini belirtiyor. Rehber hükümetler, teknoloji şirketleri ve sağlık hizmeti sunucuları için 40'tan fazla öneri içeriyor ([WHO](https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models)).

Pratikte bu, asistanın tıbbi bir soruyu tanıması ve kibarca devretmesi demek. Örnek bir konuşma:

> **Danışan:** Merhaba, perşembe günü randevum var ama saat 18:00'e alabilir miyiz? Bir de tiroid ilacım var, sabah kahvaltıdan ne kadar önce içmeliyim?
>
> **Asistan:** Merhaba, perşembe 18:00 müsait, randevunuzu bu saate aldım. Çarşamba akşamı size bir hatırlatma göndereceğim. İlaç kullanımıyla ilgili sorunuzu Diyetisyen Ayşe Hanım'a ilettim; size kendisi dönecek. İlacınızın kullanım şekli için doktorunuzun ya da eczacınızın önerisini esas almanızı rica ederiz.

Asistan randevu kısmını bitirdi, ilaç sorusuna cevap vermedi ve konuyu kayda geçirip uzmana bıraktı. Hangi ifadelerin devir gerektirdiğini (ilaç adları, tahlil, gebelik, yeme bozukluğu belirtileri, ağrı gibi) kurulumda birlikte yazmak gerekir.

## Sağlık verisi KVKK'da neden ayrı tutulur?

6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 6. maddesi sağlık verisini özel nitelikli kişisel veriler arasında sayıyor. Madde, 7499 sayılı Kanun'la değiştirildi ve yeni hâli 1 Haziran 2024'te yürürlüğe girdi. Güncel metne göre özel nitelikli verilerin işlenmesi kural olarak yasak; kanunda sayılan şartlardan biri varsa işlenebiliyor. Bu şartlardan biri ilgili kişinin açık rızası. Sağlık verisi için ayrıca, sır saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum ve kuruluşlarca kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi gibi amaçlarla işleme imkânı tanınıyor ([Kanun metni](https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf), [KVKK rehberi](https://www.kvkk.gov.tr/Icerik/8184/Ozel-Nitelikli-Kisisel-Verilerin-Islenmesine-Iliskin-Rehber)). Bu şartın sizin muayenehanenize ve asistan sağlayıcınıza nasıl uygulanacağı ayrı bir hukuki değerlendirme konusudur.

Açık rıza, Kanun'un 3. maddesinde "belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza" olarak tanımlanıyor. Aydınlatma yükümlülüğü (md. 10) ise rızadan bağımsız ([KVKK, Açık Rıza](https://www.kvkk.gov.tr/yayinlar/A%c3%87IK%20RIZA.pdf)). Kurul, kan grubu bilgisini açık rıza almadan işleyen bir spor salonuyla ilgili kararında aydınlatma ve açık rıza metinlerinin sözleşme metninin içine konmayıp ayrıca düzenlenmesi gerektiğini belirtti ([KVKK, 2022/1357](https://www.kvkk.gov.tr/Icerik/7594/2022-1357)). Asistanın sohbetin başında kısa bir bilgilendirme yapıp aydınlatma metninize bağlantı vermesi bu yüzden önemli.

En sade yaklaşım şu: asistan randevu için gereken bilgiden fazlasını istemez. Kilo, hastalık, tahlil gibi bilgiler görüşmede, diyetisyenin kendisine verilir.

## Veri yurt dışına çıkıyor mu?

Yapay zeka hizmetlerinin önemli bir kısmı yurt dışındaki sunucularda çalışıyor. Kanun'un 9. maddesi de 2024'te değişti. Kurum'un yurt dışına aktarım rehberine göre önce yeterlilik kararı olup olmadığına bakılıyor; karar yoksa standart sözleşme, bağlayıcı şirket kuralları gibi uygun güvencelerden biri gerekiyor; ikisi de yoksa yalnızca sınırlı, istisnai hallerde aktarım yapılabiliyor ([KVKK](https://www.kvkk.gov.tr/Icerik/8142/Kisisel-Verilerin-Yurt-Disina-Aktarilmasi-Rehberi)). Standart sözleşme kullanılırsa imzadan itibaren beş iş günü içinde Kurum'a bildirilmesi gerekiyor ([KVKK duyurusu](https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu)).

Kurum'un Kasım 2025'te yayımladığı "Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (15 Soruda)" da hukuki sebep, yurt dışı aktarım, şeffaflık ve güvenlik tedbirlerini üretken yapay zeka özelinde ele alıyor ([KVKK](https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda)). Sağlayıcınızı seçmeden önce okumaya değer.

Asistanın takvim, mesajlaşma ve danışan kayıt sisteminize nasıl bağlanacağı da veri akışını belirler. Bu kısmı [Entegrasyonlar](/ai-donusumu/entegrasyonlar) sayfamızda anlattık.

## Kurulumdan önce kontrol listesi

1. **Görev listesi yazın.** Asistanın yapacağı işleri tek tek sayın; listede olmayan her şey diyetisyene gider.
2. **Devir ifadelerini belirleyin.** İlaç, takviye, tahlil, gebelik, kronik hastalık, yeme bozukluğu belirtisi geçen mesajlar insana aktarılsın.
3. **Toplanan veriyi azaltın.** Randevu için ad, telefon ve tercih edilen saat çoğu zaman yeterli.
4. **Aydınlatma metnini güncelleyin.** Asistanın kullanıldığını ve verinin hangi amaçla işlendiğini yazın; gerekiyorsa açık rızayı ayrı alın.
5. **Sunucu konumunu sorun.** Veri nerede saklanıyor, yurt dışına çıkıyorsa hangi aktarım aracına dayanılıyor?
6. **Saklama süresini netleştirin.** Konuşma kayıtları ne kadar tutulacak, kim erişebilecek?
7. **Test edin.** Yayına almadan önce asistana bilerek tıbbi sorular sorun ve her birini devrettiğini görün.
8. **Hukuki kontrol yaptırın.** Aydınlatma metni, rıza akışı ve sağlayıcı sözleşmesini KVKK konusunda deneyimli bir hukukçuya gösterin.

Sağlık ve beslenme alanında asistanı nasıl kurguladığımızı [Sağlık & Beslenme](/sektorler/saglik-beslenme) sayfamızda bulabilirsiniz. Yapay zekaya ilk kez adım atıyorsanız [küçük işletmeler için başlangıç yazımız](/blog/kucuk-isletmeler-yapay-zekaya-nereden-baslamali) da yol gösterebilir.

## Kaynaklar

- 6698 sayılı Kişisel Verilerin Korunması Kanunu (güncel metin, 7499 sayılı Kanun değişiklikleriyle), Mevzuat Bilgi Sistemi: [mevzuat.gov.tr](https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf)
- Özel Nitelikli Kişisel Verilerin İşlenmesine İlişkin Rehber, Kişisel Verileri Koruma Kurumu: [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8184/Ozel-Nitelikli-Kisisel-Verilerin-Islenmesine-Iliskin-Rehber)
- Kişisel Verileri Koruma Kurulu, 23/12/2022 tarihli ve 2022/1357 sayılı Karar Özeti: [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/7594/2022-1357)
- Açık Rıza, Kişisel Verileri Koruma Kurumu yayını: [kvkk.gov.tr](https://www.kvkk.gov.tr/yayinlar/A%c3%87IK%20RIZA.pdf)
- Kişisel Verilerin Yurt Dışına Aktarılması Rehberi (Yayın No: 48), Kişisel Verileri Koruma Kurumu: [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8142/Kisisel-Verilerin-Yurt-Disina-Aktarilmasi-Rehberi)
- Yurt Dışına Kişisel Veri Aktarımında Kullanılacak Standart Sözleşmelerde Dikkat Edilmesi Gereken Hususlara İlişkin Kamuoyu Duyurusu, Kişisel Verileri Koruma Kurumu: [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu)
- Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (15 Soruda), Kişisel Verileri Koruma Kurumu, 24 Kasım 2025: [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda)
- "WHO releases AI ethics and governance guidance for large multi-modal models", Dünya Sağlık Örgütü, 18 Ocak 2024: [who.int](https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models)
- Liao, Chang, Lai, "Assessing the Quality of ChatGPT's Dietary Advice for College Students from Dietitians' Perspectives", Nutrients, Haziran 2024: [mdpi.com](https://www.mdpi.com/2072-6643/16/12/1939)
- Liu ve ark., "Evaluating the Reliability and Accuracy of an AI-Powered Search Engine in Providing Responses on Dietary Supplements", JMIR AI, 29 Ekim 2025: [ai.jmir.org](https://ai.jmir.org/2025/1/e78436)
