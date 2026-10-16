---
title: "Where can dietitians use an AI assistant, and where should it stop?"
seoTitle: "AI Assistants for Dietitians and Health Data Under KVKK"
description: "AI assistants for dietitians and small clinics: booking and information tasks, topics to hand to the specialist, and KVKK rules on health data."
answer: "An AI assistant for dietitians can take on admin tasks such as bookings, reminders, package and fee information, and briefing clients before the first consultation. Diagnosis, personalised diet plans, and medication and supplement questions should go to the dietitian. Health data is special category data under KVKK; the assistant should collect no more than necessary and meet the processing conditions."
date: 2026-10-13
tr: "diyetisyen-klinik-yapay-zeka-asistani-kvkk"
draft: true
faqs:
  - q: "Can the assistant prepare a diet plan for my client?"
    a: "It should not. A personalised nutrition plan is the job of the dietitian who assesses the client's health. The assistant should take such requests, pass them to the dietitian and direct the client to book an appointment."
  - q: "What happens if a client sends test results on WhatsApp?"
    a: "Test results are health data and count as special category personal data under KVKK. A safer set-up is for the assistant not to interpret such content, to ask the client to share the document during the consultation if needed, and to hand the conversation to the dietitian."
  - q: "Is it possible to use an AI service that runs abroad?"
    a: "It may be possible, but one of the transfer conditions in Article 9 of Law No. 6698 must be met: an adequacy decision, an appropriate safeguard such as standard contractual clauses, or limited exceptional cases. We recommend clarifying this with a lawyer before set-up."
---

## Which tasks can the assistant take on?

The messages that interrupt a dietitian's day most are usually not medical. "Do you have a slot on Tuesday afternoon?", "Do you do online consultations?", "How much is the three-month package?", "I need to move my follow-up appointment." These questions come in many times a day, and most go unanswered during sessions.

An AI assistant for dietitians is set up to take on this administrative side:

- Checking the calendar to book, reschedule and cancel appointments
- Sending reminders before appointments
- Explaining fixed information such as package contents, fees, the address and terms for online consultations
- Explaining what to bring to the first consultation and how it runs
- Answering frequently asked questions in the clinic's own tone

For these tasks, it is enough to give the assistant information you have approved. A [clinic booking assistant](/en/ai-assistants/appointments-reservations) connected to your calendar sees free slots live and creates appointments directly. If most messages come in on WhatsApp, the set-up can run through the [WhatsApp Assistant](/en/ai-assistants/whatsapp-assistant).

## Where should it stop?

Making a diagnosis, giving personalised diet or treatment advice, and commenting on medication and supplement use should not be the assistant's job. Research also shows why this line matters.

In a study carried out in Taiwan and published in *Nutrients*, 30 experienced dietitians assessed the nutrition advice ChatGPT gave to university students. The answers scored well on readability but were weak on clarity, applicability and completeness. Across five scenarios, the rate of "full success" ranged from 7.5 per cent to 37.56 per cent ([Nutrients](https://www.mdpi.com/2072-6643/16/12/1939)).

In another study published in JMIR AI in October 2025, Microsoft Copilot was asked 180 questions about 30 dietary supplements in three different response modes. Accuracy ranged from 31.7 per cent to 36.1 per cent depending on the mode. Of the sources cited in the answers, 72.7 per cent were unverified sources such as blogs, retail sites and social media ([JMIR AI](https://ai.jmir.org/2025/1/e78436)).

In guidance on large multi-modal models in health published in January 2024, the World Health Organization also states that these models can produce false, inaccurate or biased statements and could harm people making health decisions. The guidance contains more than 40 recommendations for governments, technology companies and healthcare providers ([WHO](https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models)).

In practice, this means the assistant should recognise a medical question and hand it over politely. An example conversation:

> **Client:** Hello, I have an appointment on Thursday, could we move it to 18:00? Also, I take thyroid medication. How long before breakfast should I take it in the morning?
>
> **Assistant:** Hello, Thursday at 18:00 is available and I've moved your appointment to that time. I'll send you a reminder on Wednesday evening. I've passed your question about your medication to our dietitian, Ayşe Hanım, who will get back to you herself. For how to take your medication, please follow the advice of your doctor or pharmacist.

The assistant completed the booking, did not answer the medication question, and logged the matter for the specialist. Which phrases should trigger a handover (medication names, test results, pregnancy, signs of an eating disorder, pain and so on) needs to be written together during set-up.

## Why is health data treated separately under KVKK?

Article 6 of Law No. 6698 on the Protection of Personal Data (KVKK, Türkiye's personal data protection law) lists health data among special categories of personal data. The article was amended by Law No. 7499, and the new version came into force on 1 June 2024. Under the current text, processing special category data is prohibited as a rule; it may be processed if one of the conditions listed in the law applies. One of these conditions is the explicit consent of the data subject. For health data, the law also allows processing by persons under a duty of confidentiality, or by authorised institutions and organisations, for purposes such as protecting public health, preventive medicine, medical diagnosis, and providing treatment and care services ([text of the law](https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf), [KVKK guide](https://www.kvkk.gov.tr/Icerik/8184/Ozel-Nitelikli-Kisisel-Verilerin-Islenmesine-Iliskin-Rehber)). How this condition applies to your practice and your assistant provider is a separate legal question.

Article 3 of the law defines explicit consent as "consent relating to a specific matter, based on information and given of free will". The duty to inform (Article 10) applies regardless of consent ([KVKK, Explicit Consent](https://www.kvkk.gov.tr/yayinlar/A%c3%87IK%20RIZA.pdf)). In its decision on a gym that processed blood group information without explicit consent, the Board stated that privacy notices and explicit consent texts should be prepared separately from the contract text ([KVKK, 2022/1357](https://www.kvkk.gov.tr/Icerik/7594/2022-1357)). This is why it matters that the assistant gives a short notice at the start of the chat and links to your privacy notice.

The simplest approach is this: the assistant asks for no more information than a booking requires. Details such as weight, illnesses and test results are given at the consultation, to the dietitian in person.

## Does the data leave Türkiye?

Many AI services run on servers abroad. Article 9 of the law also changed in 2024. According to the Authority's guide on transfers abroad, the first question is whether there is an adequacy decision; if there is none, an appropriate safeguard such as standard contractual clauses or binding corporate rules is needed; if neither is available, transfer is possible only in limited, exceptional cases ([KVKK](https://www.kvkk.gov.tr/Icerik/8142/Kisisel-Verilerin-Yurt-Disina-Aktarilmasi-Rehberi)). If standard contractual clauses are used, the Authority must be notified within five working days of signing ([KVKK announcement](https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu)).

The Authority's guide published in November 2025, "Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (15 Soruda)" (Generative AI and the Protection of Personal Data in 15 Questions), also covers legal grounds, transfers abroad, transparency and security measures specifically for generative AI ([KVKK](https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda)). It is worth reading before you choose a provider.

How the assistant connects to your calendar, messaging and client records also shapes the data flow. We cover this on our [Integrations](/en/ai-transformation/integrations) page.

## Checklist before set-up

1. **Write a task list.** List each job the assistant will do; anything not on the list goes to the dietitian.
2. **Define handover phrases.** Messages mentioning medication, supplements, test results, pregnancy, chronic illness or signs of an eating disorder should be passed to a person.
3. **Collect less data.** Name, phone number and preferred time are usually enough for a booking.
4. **Update your privacy notice.** State that an assistant is used and for what purpose data is processed; obtain explicit consent separately if required.
5. **Ask where the servers are.** Where is the data stored, and if it goes abroad, which transfer mechanism is it based on?
6. **Clarify the retention period.** How long will conversation logs be kept, and who can access them?
7. **Test it.** Before going live, deliberately ask the assistant medical questions and check that it hands over every one.
8. **Get a legal review.** Show your privacy notice, consent flow and provider contract to a lawyer experienced in KVKK.

You can see how we set up assistants in health and nutrition on our [Health & Nutrition](/en/industries/health-nutrition) page. If you are taking your first step into AI, our [guide for small businesses on where to start](/en/blog/where-small-businesses-should-start-with-ai) may also help.

## Sources

- 6698 sayılı Kişisel Verilerin Korunması Kanunu (current text, with amendments by Law No. 7499), Legislation Information System (in Turkish): [mevzuat.gov.tr](https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf)
- "Özel Nitelikli Kişisel Verilerin İşlenmesine İlişkin Rehber", Personal Data Protection Authority (in Turkish): [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8184/Ozel-Nitelikli-Kisisel-Verilerin-Islenmesine-Iliskin-Rehber)
- Personal Data Protection Board, "23/12/2022 tarihli ve 2022/1357 sayılı Karar Özeti" (in Turkish): [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/7594/2022-1357)
- "Açık Rıza", Personal Data Protection Authority publication (in Turkish): [kvkk.gov.tr](https://www.kvkk.gov.tr/yayinlar/A%c3%87IK%20RIZA.pdf)
- "Kişisel Verilerin Yurt Dışına Aktarılması Rehberi" (Publication No. 48), Personal Data Protection Authority (in Turkish): [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8142/Kisisel-Verilerin-Yurt-Disina-Aktarilmasi-Rehberi)
- "Yurt Dışına Kişisel Veri Aktarımında Kullanılacak Standart Sözleşmelerde Dikkat Edilmesi Gereken Hususlara İlişkin Kamuoyu Duyurusu", Personal Data Protection Authority (in Turkish): [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu)
- "Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (15 Soruda)", Personal Data Protection Authority, 24 November 2025 (in Turkish): [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda)
- "WHO releases AI ethics and governance guidance for large multi-modal models", World Health Organization, 18 January 2024: [who.int](https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models)
- Liao, Chang, Lai, "Assessing the Quality of ChatGPT's Dietary Advice for College Students from Dietitians' Perspectives", Nutrients, June 2024: [mdpi.com](https://www.mdpi.com/2072-6643/16/12/1939)
- Liu et al., "Evaluating the Reliability and Accuracy of an AI-Powered Search Engine in Providing Responses on Dietary Supplements", JMIR AI, 29 October 2025: [ai.jmir.org](https://ai.jmir.org/2025/1/e78436)
