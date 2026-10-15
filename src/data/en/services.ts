// English service and sector content. Pages, menus and internal links are generated from here.

import type { Service, Sector } from '../services';

export const groups = {
  'ai-asistanlar': {
    title: "AI Assistants",
    guideTitle: "What is an AI assistant? A complete guide for businesses",
    menuNote: "Ready-made assistants, quick to set up",
    seoTitle: "What Is an AI Assistant? A Guide for Businesses | Continuo",
    description:
      "What is an AI assistant, how is it different from a classic chatbot, and what are the WhatsApp and Instagram rules? A sourced guide for businesses.",
    answer:
      "An AI assistant is an artificial intelligence system trained on your business information. It replies to your customers on WhatsApp, Instagram or your website, 24/7. It answers common questions, books appointments and collects details. When a sensitive or complex topic comes up, it hands the conversation to your team.",
    lead: "Messages do not keep office hours. Your assistant works from the information you give it, follows your rules and hands the conversation to your team when needed.",
  },
  'ai-donusumu': {
    title: "AI Transformation",
    guideTitle: "What is AI transformation? A complete guide for SMEs",
    menuNote: "Comprehensive solutions built for your business",
    seoTitle: "What Is AI Transformation? A Guide for SMEs | Continuo",
    description:
      "What is AI transformation, where do you start, and how does a workflow differ from an AI agent? A guide for SMEs with data from TÜİK, McKinsey and Gartner.",
    answer:
      "AI transformation means redesigning the repetitive, time-consuming processes in a business with artificial intelligence and automation. We decide together which tasks to automate, build systems connected to the tools you already use, and measure the results against how things worked before.",
    lead: "Beyond messaging: operations, HR, reporting, documents and stock. We listen to how your business works first, then build a system made for you.",
  },
} as const;

export const services: Service[] = [
  {
    slug: "whatsapp-assistant",
    group: 'ai-asistanlar',
    title: "WhatsApp Assistant",
    short: "24/7 message replies",
    seoTitle: "WhatsApp AI Assistant | 24/7 Replies for Your Business",
    description:
      "A WhatsApp AI assistant built for your business. It answers customer questions 24/7, takes appointments and bookings, and hands over to your team when needed.",
    answer:
      "A WhatsApp assistant is an AI assistant that runs on the WhatsApp Business infrastructure and is trained on your business information. It answers questions about prices, availability and other common topics straight away, takes appointments or reservations, and passes the conversation to someone on your team when needed.",
    lead: "A question sent at night should not have to wait until morning. Your assistant replies to customers straight away, in your business's own voice.",
    benefits: [
      { title: "Open outside working hours", text: "Messages that arrive in the evening, at weekends or on holidays still get a reply." },
      { title: "Speaks with your business information", text: "It is trained on your services, pricing policy and rules. It is not a general chatbot." },
      { title: "Ready to hand over to a person", text: "When a sensitive, complex or emotional topic comes up, the conversation moves to your team." },
    ],
    steps: [
      { title: "Discovery", text: "We go through your most frequent questions and your current message flow together." },
      { title: "Knowledge base", text: "We turn your service, price and policy information into a format the assistant can use." },
      { title: "Setup", text: "We connect it to your WhatsApp Business account and set the handover rules." },
      { title: "Measurement", text: "We compare response time and conversion with the figures before setup, and make improvements every month." },
    ],
    faqs: [
      { q: "Does WhatsApp allow AI assistants?", a: "Yes. Assistants used for a business's own customer service, appointment and order processes are allowed. On the WhatsApp Business Platform, Meta has restricted only general-purpose chatbots similar to ChatGPT. The assistants we build are specific to your business." },
      { q: "Can I use my existing WhatsApp number?", a: "In most cases, yes. If your number is on the WhatsApp Business app, it may be possible to connect it to the official platform while you keep using the app. If not, the number needs to be moved to the WhatsApp Business Platform. In the discovery call we work out the best route for your number together." },
      { q: "What happens if the assistant gives a wrong answer?", a: "The assistant only answers with information you have approved, and when it is unsure it hands the conversation to your team. We review conversations regularly and update the knowledge base." },
      { q: "How is personal data protected?", a: "We set it up in line with KVKK (Türkiye's data protection law). That means a privacy notice, explicit consent where required, and processing only the data that is needed. We take extra precautions for special categories of data such as health information." },
    ],
    sectors: ["hospitality-tourism", "beauty-aesthetics", "health-nutrition"],
    related: ["appointments-reservations", "instagram-dm-assistant"],
  },
  {
    slug: "instagram-dm-assistant",
    group: 'ai-asistanlar',
    title: "Instagram DM Assistant",
    short: "Instant replies to messages and comments",
    seoTitle: "Instagram DM Assistant | Instant AI Replies to Messages",
    description:
      "Instant AI replies to Instagram DMs and comments: price questions, appointment requests and product details. Built for your business, with handover to your team.",
    answer:
      "An Instagram DM assistant uses AI to reply to direct messages sent to your business account and to the comments you choose. It answers questions like “How much is it?” or “Do you have any availability?” within seconds and guides interested people towards booking or buying.",
    lead: "Every post that says “DM for prices” brings in dozens of messages. Your assistant replies to all of them straight away, with the same care.",
    benefits: [
      { title: "Messages don't wait", text: "Even at busy times, DMs get a reply without delay, so fewer messages go unanswered." },
      { title: "Moves people towards a sale", text: "It takes the conversation on to the booking, reservation or order step." },
      { title: "In your brand voice", text: "It writes in your account's style, matching your preferences for tone and emoji." },
    ],
    steps: [
      { title: "Discovery", text: "We look at the types of message your account receives most." },
      { title: "Planning", text: "We define the reply flows and the steps that guide people onward." },
      { title: "Setup", text: "We connect it to your Instagram business account through the official platform." },
      { title: "Measurement", text: "We track the reply rate and how many conversations turn into appointments, and improve both." },
    ],
    faqs: [
      { q: "Are automated replies on Instagram allowed?", a: "Yes. Assistants built on Meta's official messaging platform that serve the business's own customers comply with the rules." },
      { q: "Can it reply to comments too?", a: "It can reply to comments on posts you choose, or invite the person to continue the conversation by DM. You decide which comments it responds to." },
      { q: "Does it work with a personal account?", a: "No. You need an Instagram business or creator account. We can make the switch together." },
    ],
    sectors: ["beauty-aesthetics", "hospitality-tourism"],
    related: ["whatsapp-assistant", "website-assistant"],
  },
  {
    slug: "website-assistant",
    group: 'ai-asistanlar',
    title: "Website Assistant",
    short: "A representative who talks on your site",
    seoTitle: "Website AI Assistant | A 24/7 Representative on Your Site",
    description:
      "An AI assistant for your website. It answers visitor questions, points people to the right service, and collects contact details and appointment requests.",
    answer:
      "A website assistant is an AI assistant that talks with visitors in a chat window in the corner of your site. It answers questions about your services, guides visitors to the right page or to booking, and collects contact details from people who are interested.",
    lead: "If visitors cannot find an answer on your site, they leave. Your assistant greets them, listens and guides them to the right next step.",
    benefits: [
      { title: "Turns visitors into customers", text: "It answers visitor questions instantly and takes their contact details." },
      { title: "Sends people to the right page", text: "It works out what someone is looking for and takes them to the relevant service or product page." },
      { title: "In many languages", text: "It can reply to international visitors in their own language." },
    ],
    steps: [
      { title: "Discovery", text: "We identify the questions your visitors ask and your goals for the site." },
      { title: "Training", text: "We train the assistant on your site content and any extra information you provide." },
      { title: "Setup", text: "We add it to your site with a single line of code, styled to match your design." },
      { title: "Measurement", text: "We report on conversations and the enquiries collected, and keep improving." },
    ],
    faqs: [
      { q: "Which websites does it work with?", a: "It can be added to almost any site, including WordPress, Wix, Shopify and Squarespace." },
      { q: "Will it slow down my site?", a: "The assistant is added so that it loads after the page. After setup we run a speed test to check that it does not affect loading time." },
      { q: "Where do the collected enquiries go?", a: "They can be sent to your email, your WhatsApp or the customer relationship management (CRM) system you use." },
    ],
    sectors: ["hospitality-tourism", "health-nutrition"],
    related: ["whatsapp-assistant", "website-digital-infrastructure"],
  },
  {
    slug: "appointments-reservations",
    group: 'ai-asistanlar',
    title: "Appointments & Reservations",
    short: "Calendar, reminders, cancellations",
    seoTitle: "Appointment and Booking Automation | AI Assistant",
    description:
      "Take appointments and bookings automatically with AI: availability checks, reminder messages, cancellations and refilling slots that become free.",
    answer:
      "Appointment and reservation automation lets customers book by message, so you no longer need to check the calendar yourself. The assistant suggests available times, adds the booking to your calendar, sends reminders and offers cancelled slots to customers who are waiting for one.",
    lead: "Arranging times by phone, sending reminders, keeping track of cancellations. You no longer need to deal with any of it yourself.",
    benefits: [
      { title: "Booked by message", text: "The customer picks a suitable time by message and the appointment goes straight into your calendar." },
      { title: "Fewer no-shows", text: "Reminders make forgotten appointments less likely. On WhatsApp, reminders are sent with the customer's permission, using Meta's approved, paid template messages." },
      { title: "Cancellations put to use", text: "A cancelled slot can be offered to customers on the waiting list." },
    ],
    steps: [
      { title: "Discovery", text: "We look at your booking rules, appointment lengths and the calendar you use." },
      { title: "Integration", text: "We connect to Google Calendar or the booking system you use." },
      { title: "Setup", text: "We open the booking flow on WhatsApp, Instagram or your website." },
      { title: "Measurement", text: "We track occupancy and cancellation rates and fine-tune reminder timing." },
    ],
    faqs: [
      { q: "Which calendars and booking systems does it work with?", a: "Google Calendar above all, and most booking and hotel management systems that offer an API. We check the system you use during the discovery call." },
      { q: "Can it take a deposit or prepayment?", a: "With a suitable payment provider, a payment link can be sent during booking." },
      { q: "Can it manage calendars for several staff members?", a: "Yes. Each specialist's calendar and service durations can be set up separately." },
    ],
    sectors: ["beauty-aesthetics", "health-nutrition", "hospitality-tourism"],
    related: ["whatsapp-assistant", "integrations"],
  },
  {
    slug: "ai-consulting",
    group: 'ai-donusumu',
    title: "AI Consulting",
    short: "We plan where to start",
    seoTitle: "AI Transformation Consulting | A Roadmap for Your Business",
    description:
      "An AI roadmap for your business. Together we decide which processes to automate, in what order, and what you can expect to gain from each.",
    answer:
      "AI transformation consulting is a structured piece of work in which we review your processes and identify where AI will be most useful. At the end you receive a prioritised roadmap, with the cost and expected gain of each item set out clearly.",
    lead: "There are many places to use AI, but you cannot start on all of them at once. First we work out where you should begin.",
    benefits: [
      { title: "Clear priorities", text: "We put the processes that will pay back fastest at the top of the list." },
      { title: "Realistic expectations", text: "We set the cost, timeline and measurement method of each step from the start." },
      { title: "Together with your team", text: "We plan the change by talking with your staff and ask for their views from the very beginning." },
    ],
    steps: [
      { title: "Interviews", text: "We talk with management and the team and listen to how work gets done." },
      { title: "Process map", text: "We identify the steps that are repetitive, time-consuming or prone to error." },
      { title: "Roadmap", text: "We present a plan covering priorities, costs and timeline." },
      { title: "First step", text: "If you wish, we put the first project into practice together." },
    ],
    faqs: [
      { q: "What do I receive at the end of the consulting work?", a: "A roadmap containing your process map, a prioritised list of steps to automate, an estimated cost and timeline for each step, and how results will be measured." },
      { q: "Do I need technical knowledge?", a: "No. You tell us about your business and we take care of the technical side." },
      { q: "Is it suitable for small businesses?", a: "Yes. We adjust the scope of the work to the size of your business." },
    ],
    sectors: ["all-industries"],
    related: ["process-automation", "ai-agents"],
  },
  {
    slug: "process-automation",
    group: 'ai-donusumu',
    title: "Process Automation",
    short: "Operations, HR, reporting, stock",
    seoTitle: "Process Automation: Operations, HR, Reporting and Stock",
    description:
      "Automate repetitive work with automations built for your business: operations, HR, reporting, document management, procurement and stock tracking.",
    answer:
      "Process automation hands the repetitive tasks your team does by hand every day, such as preparing reports, processing forms and documents, and tracking stock, over to software and AI. That leaves your team free to spend its time on the work that really matters.",
    lead: "Filling in the same spreadsheet, writing the same email, searching for the same document every day. Let this work get done without waiting for you.",
    benefits: [
      { title: "Operations", text: "Order, task and notification flows are linked up, so manual copying stops." },
      { title: "HR and documents", text: "Recruitment, leave and staff paperwork are organised in a single flow." },
      { title: "Reporting and stock", text: "Summary reports are built from scattered data, and you are warned about stock shortages in advance." },
    ],
    steps: [
      { title: "Process analysis", text: "We write out the task to be automated together, step by step." },
      { title: "Design", text: "We decide which tools to connect and where approval is needed." },
      { title: "Setup and testing", text: "We build the automation and test it with real data." },
      { title: "Measurement", text: "We track the time saved and the error rate." },
    ],
    faqs: [
      { q: "Which processes can be automated?", a: "Any rule-based, repetitive process can be a candidate, including reporting, data transfer, form and document processing, notifications, stock and order tracking, and recruitment steps." },
      { q: "Do I need to change the software I use now?", a: "Usually not. We work by connecting the tools you already use." },
      { q: "What happens if an automation makes a mistake?", a: "We add human approval at critical steps and make sure every automation alerts you if something goes wrong." },
    ],
    sectors: ["all-industries", "hospitality-tourism"],
    related: ["integrations", "ai-agents"],
  },
  {
    slug: "ai-agents",
    group: 'ai-donusumu',
    title: "AI Agents",
    short: "Systems that carry out work on their own",
    seoTitle: "AI Agents | AI That Works on Its Own for Your Business",
    description:
      "AI agents that plan and carry out multi-step work on their own, for tasks such as research, preparing quotes, reporting and customer follow-up.",
    answer:
      "An AI agent is an AI system that breaks a goal into several steps and carries them out on its own. For example, it can read an incoming request, prepare a draft quote, gather the information it needs from different sources and send the result to you for approval.",
    lead: "It does more than answer a question. It carries the work through from start to finish and brings the result to you for approval.",
    benefits: [
      { title: "Multi-step work", text: "It takes on chains of tasks such as gathering information, comparing options and preparing drafts." },
      { title: "You approve", text: "Important decisions and anything sent outside the business go through your approval first." },
      { title: "Works with your tools", text: "It gets work done using tools such as email, calendars, spreadsheets and your CRM." },
    ],
    steps: [
      { title: "Task definition", text: "We set out clearly the work the agent will take on and its limits." },
      { title: "Permissions", text: "We decide which tools it can access and where it must ask for approval." },
      { title: "Setup and testing", text: "We test the agent with real examples and adjust its behaviour." },
      { title: "Monitoring", text: "We keep a record of what it does and review it regularly." },
    ],
    faqs: [
      { q: "What is the difference between an AI agent and a chatbot?", a: "A chatbot answers questions. An AI agent plans its own steps towards a goal and uses tools to do the work, for example gathering information, preparing a draft or creating a record." },
      { q: "Can an agent get out of control?", a: "We limit the tools the agent can access and the actions it can take. Every action that goes outside the business needs approval first." },
      { q: "What kind of work is it suited to?", a: "Rule-based work with several steps, such as preparing quotes and reports, research, customer follow-up and sorting incoming requests." },
    ],
    sectors: ["all-industries"],
    related: ["process-automation", "ai-consulting"],
  },
  {
    slug: "integrations",
    group: 'ai-donusumu',
    title: "Integrations",
    short: "CRM, accounting, booking systems",
    seoTitle: "AI Integrations: CRM, Accounting and Booking Systems",
    description:
      "We connect your AI assistants and automations to your CRM, accounting, booking and hotel management systems.",
    answer:
      "Integration lets AI systems exchange data with the software you use, such as your CRM, accounting, booking or hotel management system. The assistant then works with up-to-date information, and the appointments or requests it takes go straight into your system.",
    lead: "Information the assistant collects should not get stuck in one place. It should flow straight into the systems you use.",
    benefits: [
      { title: "Up-to-date information", text: "The assistant reads prices, stock and availability live from your systems." },
      { title: "No manual copying", text: "Requests, appointments and customer records are created automatically." },
      { title: "A single view", text: "Data from separate systems comes together in one place." },
    ],
    steps: [
      { title: "Inventory", text: "We map the systems you use and how data moves between them." },
      { title: "Connection", text: "We set up secure connections through official access points (APIs)." },
      { title: "Testing", text: "We test data transfer with real scenarios." },
      { title: "Monitoring", text: "We monitor the health of the connections and let you know if there is a problem." },
    ],
    faqs: [
      { q: "Which systems can you integrate with?", a: "Most CRM, accounting, e-commerce, booking and hotel management systems that offer an API. We check your system during the discovery call." },
      { q: "Is my data safe?", a: "We access only the data that is needed, with only the permissions that are needed, and we set up connections in line with KVKK (Türkiye's data protection law)." },
    ],
    sectors: ["hospitality-tourism", "all-industries"],
    related: ["appointments-reservations", "process-automation"],
  },
  {
    slug: "website-digital-infrastructure",
    group: 'ai-donusumu',
    title: "Website & Digital Infrastructure",
    short: "SEO and GEO-ready websites",
    seoTitle: "SEO and GEO-Ready Business Websites and Infrastructure",
    description:
      "Fast, mobile-friendly business websites and digital infrastructure, optimised for Google and for AI search engines (SEO and GEO).",
    answer:
      "We build fast, mobile-friendly websites designed to be easier to find both on Google and in AI search tools such as ChatGPT and Gemini. SEO aims to move your site up in search results. GEO aims to have it cited as a source in AI-generated answers.",
    lead: "Your customers ask ChatGPT and similar tools as well as Google. Your site needs to show up in both places.",
    benefits: [
      { title: "SEO and GEO from the start", text: "Technical setup, content structure and structured data are in place from day one." },
      { title: "Fast and simple", text: "A design made for your brand that loads quickly and is easy to use on mobile." },
      { title: "Ready for an assistant", text: "A website assistant and booking flows can be added easily." },
    ],
    steps: [
      { title: "Discovery", text: "We study your target audience, your competitors and how people search." },
      { title: "Design", text: "We finalise a design made for your brand together." },
      { title: "Development", text: "We build the site on an SEO and GEO-ready foundation." },
      { title: "Launch and tracking", text: "We register the site with search consoles and track the results." },
    ],
    faqs: [
      { q: "What is GEO?", a: "GEO (Generative Engine Optimization) is optimisation aimed at getting your content cited as a source in AI answers, such as those from ChatGPT, Gemini and Google's AI Overviews." },
      { q: "Can you rebuild my existing site?", a: "Yes. We can move your site to a new platform while taking care to preserve your existing content and search rankings, using redirects and technical SEO." },
    ],
    sectors: ["all-industries"],
    related: ["website-assistant", "ai-consulting"],
  },
];

export const sectors: Sector[] = [
  {
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    short: "Hotels, boutique hotels, travel agencies",
    menuNote: "Hotels, boutique hotels, travel agencies",
    seoTitle: "AI Assistant for Hotels | Hospitality and Tourism",
    description:
      "AI assistants for hotels, boutique hotels and travel agencies: booking questions, room availability, transfers and guest requests, 24/7, in the guest's language.",
    answer:
      "An AI assistant for hospitality businesses answers questions about bookings, room availability, prices, transfers and guest requests on WhatsApp, Instagram and your website, 24/7 and in the guest's own language. It records bookings in your system and passes special requests to reception.",
    lead: "Your guests write from different time zones and in different languages. Your assistant greets them day and night, in the language they write in.",
    image: '/images/sektorler/konaklama.webp',
    problems: [
      { title: "Booking questions at night", text: "A message left unanswered until morning can mean a guest who books with a competitor instead." },
      { title: "The same questions again and again", text: "Check-in time, parking, breakfast, transfers. Reception answers the same questions dozens of times a day." },
      { title: "Language barriers", text: "Writing back and forth with international guests takes time and can lead to misunderstandings." },
    ],
    services: ["whatsapp-assistant", "appointments-reservations", "website-assistant", "integrations"],
    faqs: [
      { q: "Can it integrate with my property management system (PMS)?", a: "It can integrate with hotel management and booking systems that offer an API. We check the system you use during the discovery call." },
      { q: "Which languages can it reply in?", a: "It can reply in the language the guest writes in, for example Turkish, English, German, Russian or Arabic." },
      { q: "Can the assistant take bookings and payments?", a: "Yes, once it is connected to your property management system, channel manager or booking engine. It checks availability live, creates the booking directly, takes payment through a secure payment link and notifies your team. The scope depends on the systems you use." },
      { q: "What happens with special requests?", a: "The assistant takes room changes and special requests, checks availability and passes the request to your team with the relevant details. With complaints, it gives a first reply and hands the conversation to reception." },
    ],
  },
  {
    slug: "beauty-aesthetics",
    title: "Beauty & Aesthetics",
    short: "Beauty centres and salons",
    menuNote: "Centres and salons",
    seoTitle: "AI Assistant for Beauty Centres and Salons",
    description:
      "An AI assistant for beauty centres and salons: instant replies to Instagram and WhatsApp messages, automatic booking, reminders and filling empty slots.",
    answer:
      "An AI assistant for beauty centres answers price and appointment questions from Instagram and WhatsApp instantly, suggests suitable times and adds bookings to your calendar. It sends reminder messages and offers cancelled slots to customers who are waiting for one.",
    lead: "While your specialists are with clients, calls and messages should not be left waiting. Let your assistant manage your appointment book.",
    image: '/images/sektorler/guzellik.webp',
    problems: [
      { title: "“How much is it?” messages", text: "The dozens of DMs that follow every post cannot be answered in the middle of a treatment." },
      { title: "Missed appointments", text: "Forgotten appointments mean empty slots and lost income." },
      { title: "A scattered appointment book", text: "Bookings made by phone, WhatsApp and Instagram end up in different places." },
    ],
    services: ["instagram-dm-assistant", "appointments-reservations", "whatsapp-assistant"],
    faqs: [
      { q: "Will the assistant know my services and prices?", a: "Yes. The assistant is trained on the services, durations and prices you approve. If you prefer not to give prices by message, it can be set up to guide the customer to the next step instead." },
      { q: "Can it manage the calendars of several specialists?", a: "Yes. Each specialist's services and working hours are set up separately." },
      { q: "Does it comply with advertising rules?", a: "We agree together on the wording the assistant uses, in line with the advertising and promotion rules for your sector." },
    ],
  },
  {
    slug: "health-nutrition",
    title: "Health & Nutrition",
    short: "Dietitians and consultancy centres",
    menuNote: "Dietitians and consultancy",
    seoTitle: "AI Assistant and Booking for Dietitians",
    description:
      "An AI assistant for dietitians and health consultancy centres: client appointments, pre-visit information and follow-ups, set up in line with KVKK.",
    answer:
      "An AI assistant for dietitians and consultancy centres books client appointments, shares information before the first session and sends follow-up messages on time. Health data is a special category of personal data, so the setup follows KVKK (Türkiye's data protection law). It does not give medical advice.",
    lead: "Spend more of your time with your clients. Appointments, reminders and information are handled by your assistant.",
    image: '/images/sektorler/saglik.webp',
    problems: [
      { title: "Messages during sessions", text: "If you cannot check your phone during a session, new clients are left waiting." },
      { title: "Follow-up messages", text: "Sending clients regular reminders and motivational messages takes time." },
      { title: "Sensitive data", text: "Health information is a special category of data and needs careful planning." },
    ],
    services: ["appointments-reservations", "whatsapp-assistant", "website-assistant"],
    faqs: [
      { q: "Does the assistant give clients nutrition advice?", a: "No. The assistant answers administrative questions about appointments, fees and the process. Personal nutrition and health advice is for the dietitian alone, so questions like these are passed to you." },
      { q: "Does it comply with KVKK (Türkiye's data protection law)?", a: "We plan the setup around a privacy notice, explicit consent and processing only the data that is needed. For processing health data, we recommend working with your legal adviser." },
      { q: "Can it send an online meeting link?", a: "Yes. A meeting link can be sent automatically with the appointment confirmation." },
    ],
  },
  {
    slug: "all-industries",
    title: "All Industries",
    short: "Not listed? We'll plan something for you",
    menuNote: "Let's plan for your business",
    seoTitle: "AI Automation for Every Industry",
    description:
      "Your industry isn't listed? Every business has work that can be automated. Tell us about your processes and we will plan an AI assistant and automations for you.",
    answer:
      "AI assistants and automations are not limited to particular industries. Any business that messages its customers, takes appointments, prepares reports or has repetitive tasks can benefit. In the discovery call we work out together the setup that suits your processes.",
    lead: "Every business has work that can be automated. Tell us about your business and we will plan a solution made for you.",
    problems: [
      { title: "Customer communication", text: "Struggling to keep up with messages is a problem in every industry." },
      { title: "Repetitive work", text: "Reports, documents, data transfer. A large share of the team's time goes here." },
      { title: "Scattered information", text: "Information sits in emails, spreadsheets and people's heads." },
    ],
    services: ["ai-consulting", "process-automation", "whatsapp-assistant", "ai-agents"],
    faqs: [
      { q: "Do you work with my industry too?", a: "Yes. We can design setups for processes in many industries, from retail and education to law and manufacturing. We start by listening to how your business works." },
      { q: "Where should I start?", a: "With the task that takes the most time and comes up most often. We identify it together in a free discovery call." },
    ],
  },
];
