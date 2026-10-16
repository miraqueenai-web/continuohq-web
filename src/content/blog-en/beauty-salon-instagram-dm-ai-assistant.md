---
title: "How can a beauty salon keep up with Instagram DMs? What can an AI assistant take on?"
seoTitle: "Instagram DM Auto-Replies for Beauty Salons"
description: "Price questions, booking requests and no-shows. Instagram DM auto-replies for beauty salons, Meta's rules and handing over to your team."
answer: "A beauty salon can keep up by handing repetitive DMs to an AI assistant built for the business. The assistant answers questions on price ranges, available times, the address and preparation, and creates the booking. On Instagram there is usually a 24-hour reply window after the customer writes. Skin reactions, medical aesthetics and complaints should always go to the team."
date: 2026-10-11
tr: "guzellik-salonu-instagram-dm-yapay-zeka"
draft: true
faqs:
  - q: "Do I need to tell customers they are messaging an assistant?"
    a: "The assistant writes from your salon's Instagram account. Meta requires you to disclose that the customer is talking to an automated system where the law requires it, and recommends doing so in other cases too. A short line at the start of the conversation is enough."
  - q: "Is it a problem if my Instagram account is a personal account?"
    a: "Yes. Instagram's messaging infrastructure works with professional accounts (business or creator accounts). You can switch your personal account to a professional account in Instagram's settings."
  - q: "Why should reminder messages be sent via WhatsApp rather than Instagram?"
    a: "On Instagram, a business can usually only message a customer within 24 hours of the customer's last message. Messaging outside this window is only possible in limited cases defined by Meta, and the one-time notification feature available on Messenger does not exist on Instagram. On WhatsApp, reminders can be sent outside the window to customers who have agreed to receive messages, using pre-approved template messages."
---

## What can the assistant handle in DMs?

Most messages arriving in a beauty or aesthetics clinic's Instagram inbox look alike: "How many sessions does laser hair removal take?", "Do you have anything free on Saturday?", "How long does gel polish last?", "Where are you, is there parking?" These questions usually arrive while the specialist is busy with a client. If the reply waits until the evening, the customer has often already messaged another salon.

An AI assistant set up for a beauty salon answers these repetitive questions using the salon's own information: services, session lengths, preparation before a treatment, address, opening hours and pricing policy. Once connected to your booking system, it shows available slots and creates the appointment. When a topic comes up that it does not know, or should not answer, it hands the conversation over to your team.

We describe the Instagram side of the assistant on our [Instagram DM Assistant](/en/ai-assistants/instagram-dm-assistant) page and the industry-specific set-up on our [Beauty & Aesthetics](/en/industries/beauty-aesthetics) page.

## An example DM conversation

It is 23:40, and a message arrives in reply to a story:

> **Customer:** Hi, how much is a medical facial?
>
> **Assistant:** Hello, I'm the salon's digital assistant. Our medical facial takes about 60 minutes. The price depends on the protocol chosen after a skin analysis; I can share the current range and this month's packages right away. Is this your first time?
>
> **Customer:** Yes, first time. Is the weekend possible?
>
> **Assistant:** Saturday at 11:00 and 15:30 look free. I can book one of them for you if you like. Just arrive 10 minutes early for the skin analysis before your appointment.

The assistant does four things here: it introduces itself, it does not leave the question unanswered, it moves the conversation towards a booking and it tells the customer the next step. The details in between (duration, protocol, arriving early) are information the salon itself provided. The assistant does not make these up; it says only what it has been given.

## How should you answer "price in DM" questions?

Writing "price in DM" on Instagram is a habit for many salons. For the customer, it means waiting for a reply. If the reply comes late, or is just a number, the conversation ends there.

A better approach works like this: the assistant states the price or range clearly, explains in one sentence what the price depends on and then immediately offers an available slot. You decide which services get an exact price, which get a range and which get a "confirmed after the analysis" answer. Discount and promotion decisions also stay with you. The assistant only mentions the promotions you have set up.

## What do Instagram's messaging rules say?

Automated replies on Instagram run through Meta's Instagram messaging infrastructure, which comes with some rules. Here is what you need to know before setting up an assistant:

| Rule | What it means |
|---|---|
| Professional account required | The infrastructure works with Instagram business or creator accounts. |
| The customer writes first | A business can only message a customer after the customer has written to your account. |
| Reply window | In most cases you have 24 hours to reply to the customer's message. If the customer clicked an Instagram ad and wrote for the first time, this can extend to up to 7 days. |
| Human agent tag | If a member of the team is replying and needs more time, a separate 7-day window can be used. |
| Disclosing automation | Where the law requires it, the customer must be told they are talking to an automated system. Meta recommends this where it is not required too. |

This information comes from Meta's developer documentation ([Instagram message sending](https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/messaging-api), [Messenger Platform and Instagram messaging policy](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy)). Meta also states that using message tags outside their approved use cases may lead to restrictions on the account's ability to send messages.

For handing over to a person, Meta describes two routes: an inbox where the team replies, or the Handover Protocol, which passes the conversation from one app to another. In practice, this means that when the assistant hands over, your team sees the conversation where it left off.

We cover the rules on the WhatsApp side separately in our post on [rules for AI assistants on WhatsApp](/en/blog/whatsapp-ai-assistant-rules).

## Appointment reminders and the no-show problem

A customer who does not turn up means an empty chair and a lost hour. Reminder messages are the best-known fix. In two randomised trials at an NHS hospital in England, adding the cost of a missed appointment to the reminder SMS reduced the no-show rate from 11.1 per cent to 8.4 per cent ([PLOS ONE](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0137306)). The study was carried out in a hospital and the result cannot be transferred directly to salons. Even so, it shows that the way a message is written makes a difference.

Instagram's rules draw a line here. If the customer booked three days ago, the messaging window has usually closed. On Instagram, messaging outside the window is only possible in limited cases defined by Meta, and the one-time notification feature available on Messenger does not exist on Instagram. On WhatsApp, you can message customers who have agreed to receive messages outside the window, using template messages pre-approved by Meta ([WhatsApp template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview), [WhatsApp Business messaging policy](https://whatsappbusiness.com/policy/)). So the practical set-up is this: the booking is made on Instagram, the customer is asked for a phone number and permission for reminders, and the reminder, along with the option to cancel or reschedule, goes out on WhatsApp. We describe this flow on our [Appointments & Reservations](/en/ai-assistants/appointments-reservations) and [WhatsApp Assistant](/en/ai-assistants/whatsapp-assistant) pages.

## Which conversations must always go to the team?

In aesthetics and skincare, the cost of a wrong answer is far heavier than that of a wrong time slot. The assistant should stop replying and hand the conversation to the team when:

- The customer describes redness, itching, swelling, burns or an allergic reaction after a treatment
- Pregnancy, breastfeeding, medication or chronic illness comes up
- The customer asks whether fillers, botox or similar medical aesthetic procedures are suitable for them
- The customer is complaining or asking for a refund
- A discount outside your set pricing policy is requested

Some of these conversations involve health information. Under KVKK, Türkiye's personal data protection law, health data is special category personal data and its processing is subject to stricter conditions. The Personal Data Protection Board touched on this in a decision examining a gym that processed its members' blood group information without explicit consent ([KVKK, 2022/1357](https://www.kvkk.gov.tr/Icerik/7594/2022-1357)). A safer set-up is one where the assistant does not collect health information in DMs and refers such questions to a specialist.

## What to prepare before setting up

- The 20 most frequent questions from the last few months of DMs
- Your service list, session lengths and prices or price ranges
- Your booking system, specialists' working hours and cancellation policy
- A handover list: which topics go to which member of the team
- Your current average response time and monthly number of no-shows

The last item is the only way to see what has changed after set-up. If you start without measuring, you will have to guess whether the assistant is working by looking at the number of conversations.

## Sources

- Meta for Developers, "Send Messages", Instagram API with Instagram Login: [developers.facebook.com](https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/messaging-api)
- Meta for Developers, "Messenger Platform and IG Messaging API policy": [developers.facebook.com](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy)
- Meta for Developers, "Template fundamentals", WhatsApp Business Platform: [developers.facebook.com](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)
- WhatsApp Business Messaging Policy, WhatsApp: [whatsappbusiness.com](https://whatsappbusiness.com/policy/)
- Hallsworth et al., "Stating Appointment Costs in SMS Reminders Reduces Missed Hospital Appointments: Findings from Two Randomised Controlled Trials", PLOS ONE, 2015: [journals.plos.org](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0137306)
- Personal Data Protection Board, "23/12/2022 tarihli ve 2022/1357 sayılı Karar Özeti" (in Turkish): [kvkk.gov.tr](https://www.kvkk.gov.tr/Icerik/7594/2022-1357)
