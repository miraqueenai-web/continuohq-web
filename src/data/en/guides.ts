// Detailed, sourced write-ups for the AI Transformation service pages (English).
// Rule: every number and date is backed by an entry in "sources"; forecasts are labelled as forecasts.
import type { Guide } from '../services';

const a = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const guides: Record<string, Guide> = {
  'ai-consulting': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'why',
        eyebrow: 'Why consulting?',
        title: 'AI projects usually stumble because they start in the wrong place. The technology is rarely the problem.',
        intro: `Transformation consulting means understanding the work before choosing any tools. We decide up front which process to automate, how success will be measured and how each risk will be managed.`,
        paras: [
          `Gartner predicts that more than 40 percent of agentic AI projects will be canceled by the end of 2027. The reasons it gives are rising costs, unclear business value and inadequate risk controls.`,
          `In a 2025 MIT study, about 95 percent of organizations investing in generative AI saw no measurable impact on profit and loss within roughly six months. The study attributes this to tools that do not fit into the way work actually gets done.`,
          `McKinsey's 2025 research points the other way. The companies getting the most value from AI were about three times more likely than others to fundamentally redesign their workflows. That is what our consulting work does. We pick the right process, reshape it and measure the result.`,
        ],
      },
      {
        id: 'deliverables',
        eyebrow: 'What we deliver',
        title: 'What do you have at the end of the engagement?',
        intro: `You receive practical, measurable documents you can act on, rather than a list of general recommendations.`,
        cards: [
          { title: 'Process inventory', text: `A list of the tasks your teams repeat. Who does them, how often, how long they take and which systems are involved.` },
          { title: 'Prioritization', text: `An expected impact score and a feasibility score for each process. The first projects are chosen from this table.` },
          { title: 'Data and systems assessment', text: `Where the data needed for automation lives, how well organized it is and whether your systems can be connected.` },
          { title: 'Risk and compliance notes', text: `Steps that handle personal data, decisions that need human approval and the safeguards required under KVKK, Türkiye's data protection law.` },
          { title: 'Measurement plan', text: `The current baseline for each process (time, error rate, waiting) and the metric that will be used to judge success.` },
          { title: 'Roadmap', text: `Projects in order of priority, with the scope, estimated cost, required resources and decision points for each.` },
        ],
      },
      {
        id: 'selection',
        eyebrow: 'Prioritization',
        title: 'Which process should you start with?',
        intro: `When the first process goes well, every step after it gets much easier. These are the criteria we use to assess a process.`,
        table: {
          head: ['Criterion', 'Good first candidate', 'Leave for later'],
          rows: [
            ['Frequency', 'Repeats daily or weekly', 'Happens a few times a year'],
            ['Rules', 'Clear steps, few exceptions', 'Needs a different judgment every time'],
            ['Data', 'Digital and accessible', 'On paper or in people\'s heads'],
            ['Cost of errors', 'Mistakes are easy to spot and fix', 'Mistakes create financial, health or legal risk'],
            ['Measurability', 'Time and error rate can be measured', 'Results only show over several years'],
          ],
        },
      },
      {
        id: 'frameworks',
        eyebrow: 'Trusted frameworks',
        title: 'Which standards and frameworks do we rely on?',
        intro: `For small and mid-sized businesses, we turn international frameworks into a plain checklist. We do not offer certification. We use these frameworks to ask the right questions.`,
        paras: [
          `<b>NIST AI Risk Management Framework (AI RMF 1.0, January 2023):</b> Organizes risk into four functions: Govern, Map, Measure and Manage. In July 2024, NIST published an additional profile for risks specific to generative AI (NIST AI 600-1).`,
          `<b>ISO/IEC 42001:2023 (December 2023):</b> The first international standard published for AI management systems.`,
          `<b>KVKK Generative AI Guide (November 2025):</b> Guidance from Türkiye's Personal Data Protection Authority on generative AI and personal data. It covers legal basis, transparency, transfers abroad and security measures.`,
          `<b>Türkiye AI Action Plan (2026-2030):</b> Took effect on 18 August 2026, when it was published in the Official Gazette by Presidential Circular. The plan follows on from the 2024-2025 National AI Strategy Action Plan.`,
        ],
      },
    ],
    sources: [
      { title: 'Gartner, over 40% of agentic AI projects will be canceled by end of 2027 (25 June 2025)', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027' },
      { title: 'MIT Project NANDA, The GenAI Divide 2025 (news coverage)', url: 'https://rcpmag.com/Articles/2025/08/25/Only-1-in-20-AI-Investments-Deliver-ROI.aspx' },
      { title: 'McKinsey, The State of AI 2025', url: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-state-of-ai-2025' },
      { title: 'NIST, AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
      { title: 'IEC Webstore, ISO/IEC 42001:2023', url: 'https://webstore.iec.ch/publication/90574' },
      { title: 'KVKK, Üretken Yapay Zekâ ve Kişisel Verilerin Korunması Rehberi (Generative AI and Personal Data Protection Guide, November 2025), news and summary (in Turkish)', url: 'https://www.alomaliye.com/2025/11/24/sorularla-uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi/' },
      { title: 'DHA, Türkiye AI Action Plan 2026-2030 takes effect (in Turkish)', url: 'https://www.dha.com.tr/gundem/turkiye-yapay-zeka-eylem-plani-2026-2030-yururluge-girdi-2928899' },
    ],
  },

  'process-automation': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'what-it-is',
        eyebrow: 'The basics',
        title: 'What is process automation, and how does it differ from traditional automation?',
        intro: `Process automation means software carries out the steps of a task on its own. With AI added, automation can also read, classify and summarize, in addition to following fixed rules.`,
        table: {
          head: ['', 'Rule-based automation', 'Robotic process automation (RPA)', 'AI-powered automation'],
          rows: [
            ['How does it work?', 'Predefined "if this happens, do that" rules', 'A software robot copies the repetitive on-screen steps an employee performs', 'On top of rules, AI understands text, documents and requests'],
            ['Where it is strong', 'Structured data, clear rules', 'Legacy software with no API', 'Unstructured data such as emails, PDFs and forms'],
            ['Where it is weak', 'Exceptions', 'Can break when the screen changes', 'Needs human approval when things are unclear'],
            ['Example', 'Adding a row to a spreadsheet when a form comes in', 'Entering the same data into an old program every day', 'Reading an invoice and posting the amount and due date to the accounting system'],
          ],
        },
        note: `Solutions that turn information in documents into structured data are also called intelligent document processing (IDP).`,
      },
      {
        id: 'anatomy',
        eyebrow: 'How it works',
        title: 'The six parts of an automation',
        intro: `Whatever tool it is built with, a reliable automation is made of the same building blocks.`,
        cards: [
          { title: 'Trigger', text: `The event that starts the automation. A new email, a submitted form, a new order in the system, or a set time such as every Monday morning.` },
          { title: 'Data retrieval and reading', text: `The required information is pulled from the relevant system. Documents such as PDFs, invoices or emails are read with AI.` },
          { title: 'Decision and classification', text: `The request type, priority or the person to route it to is determined. Clear rules handle what they can, and AI handles the rest.` },
          { title: 'Action', text: `Creating a record, preparing a report, sending a notification or passing data to another system.` },
          { title: 'Human approval', text: `Approval is required before irreversible steps involving money, contracts or formal correspondence with customers.` },
          { title: 'Logging and error handling', text: `Every run is logged. If a step fails, the automation stops and alerts the person responsible.` },
        ],
      },
      {
        id: 'examples',
        eyebrow: 'Use cases',
        title: 'Which tasks can be automated?',
        intro: `The examples below are the repetitive tasks we see most often in small and mid-sized businesses.`,
        table: {
          head: ['Area', 'Today', 'With automation'],
          rows: [
            ['Operations', 'Orders are copied from email into a spreadsheet by hand', 'Each order is recorded on arrival and a task is opened for the right person'],
            ['Documents and invoices', 'Incoming invoices are opened one by one and keyed into accounting', 'The invoice is read, the amount and due date are extracted and sent for approval'],
            ['Reporting', 'A report is built from several spreadsheets every week', 'Data is collected and a summary report arrives by email every Monday'],
            ['Human resources', 'Leave requests and staff paperwork are scattered across emails', 'Requests flow through one process, with approval and filing automated'],
            ['Stock and supply', 'Shortages are noticed only when stock runs out', 'An alert and a draft order are prepared when an item hits its critical level'],
            ['Customer follow-up', 'Follow-ups after a quote are forgotten', 'A reminder is created if no reply arrives within a set time'],
          ],
        },
      },
      {
        id: 'potential',
        eyebrow: 'The numbers',
        title: 'How much of the work can be automated?',
        intro: `According to a 2023 McKinsey report, generative AI and other technologies have the potential to automate work activities that take up 60 to 70 percent of employees' time today. The previous estimate was about 50 percent.`,
        paras: [
          `This is technical potential, and the real share varies from business to business. The same report finds that about three quarters of the value generative AI could create falls in four areas: customer operations, marketing and sales, software engineering, and R&D.`,
          `In Türkiye, 2026 data from TÜİK (the Turkish Statistical Institute) shows that 51 percent of enterprises using AI use it for marketing and sales, and 43.4 percent use it for production and service processes. See our ${a('/en/ai-transformation', 'AI Transformation guide')} for details.`,
        ],
      },
      {
        id: 'principles',
        eyebrow: 'Build principles',
        title: 'Checklist for a reliable automation',
        intro: `Tool choice depends on the systems you use and where the data needs to be kept. Automations can be built on platforms such as n8n, Make, Zapier or Microsoft Power Automate, or with custom software. Whichever you choose, these principles stay the same.`,
        checklist: [
          `<b>Write the process down first.</b> Every step of the task to be automated should be documented, including the exceptions.`,
          `<b>Measure today.</b> Record time and error rate before you build anything.`,
          `<b>Set approval points.</b> Human approval before every irreversible step.`,
          `<b>Grant the least access.</b> The automation should reach only the data it needs for its job.`,
          `<b>Make errors visible.</b> A failed run should never pass silently. The person responsible should be notified.`,
          `<b>Assign an owner.</b> Every automation needs a named owner inside the business.`,
        ],
      },
    ],
    sources: [
      { title: 'McKinsey, The economic potential of generative AI (June 2023)', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier' },
      { title: 'TÜİK, Yapay Zekâ İstatistikleri 2026 (Artificial Intelligence Statistics 2026, 2 October 2026, in Turkish)', url: 'https://veriportali.tuik.gov.tr/tr/press/62066' },
      { title: 'Foreks / AA, TÜİK 2026 data on AI use by purpose (in Turkish)', url: 'https://www.foreks.com/haber/detay/6ac0f13524008d7d4373b88a/AA/tr/turkiye-yapay-zekayi-en-cok-bilisimde-en-az-insaatta-kullaniyor-03-10-26/' },
    ],
  },

  'ai-agents': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'what-it-is',
        eyebrow: 'The basics',
        title: 'What exactly is an AI agent?',
        intro: `Anthropic, the developer of the Claude models, defines agents as systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks.`,
        paras: [
          `Workflows sit on the other side. In a workflow, the model and tools follow predefined steps. Anthropic's advice is clear: find the simplest solution possible, and only increase complexity when needed. Often that can mean building no agent at all.`,
          `According to the agent-building guide OpenAI published in 2025, an agent has three core components: the <b>model</b> (the AI that does the reasoning), <b>tools</b> (the systems the agent can use) and <b>instructions</b> (the rules that define how the agent behaves).`,
        ],
      },
      {
        id: 'structure',
        eyebrow: 'Building blocks',
        title: 'How an agent is set up',
        intro: `To trust an agent, the rules around it matter as much as the model.`,
        cards: [
          { title: 'Data tools', text: `The sources the agent gathers information from. CRM records, spreadsheets, PDF documents, web search.` },
          { title: 'Action tools', text: `The operations through which the agent actually changes something. Drafting an email, updating a record, handing a conversation to a person.` },
          { title: 'Instructions', text: `The task definition, steps, tone and hard limits. Well-written instructions are the single biggest factor in how an agent behaves.` },
          { title: 'Guardrails', text: `Layered controls that block off-topic requests, personal data leaks and risky operations.` },
          { title: 'Handoff to a person', text: `Control passes to a person when the agent fails repeatedly, or before an irreversible, high-risk action.` },
          { title: 'Logging and review', text: `Every step the agent takes is logged and reviewed at regular intervals, and the instructions are improved.` },
        ],
      },
      {
        id: 'patterns',
        eyebrow: 'The right pattern',
        title: 'Not every job needs an agent. Five common patterns',
        intro: `Anthropic notes that most systems that succeed in businesses are built with simple, composable patterns instead of complex frameworks. Here are those patterns and how they look in a business.`,
        table: {
          head: ['Pattern', 'What does it do?', 'Business example'],
          rows: [
            ['Prompt chaining', 'Splits a task into sequential steps, with each step using the output of the one before', 'Read the request, identify missing information, draft a quote'],
            ['Routing', 'Classifies incoming work by type and sends it to the right flow', 'Sorting incoming email into sales, support or accounting flows'],
            ['Parallelization', 'Runs parts of a task at the same time, or gets several views on the same task', 'Checking a contract from different angles at once'],
            ['Orchestrator-workers', 'One model breaks the work into subtasks and combines the results', 'Compiling market research from many sources'],
            ['Evaluator-optimizer', 'One model produces, another evaluates against criteria and asks for fixes', 'Reviewing quote text against company style rules'],
          ],
        },
      },
      {
        id: 'realistic',
        eyebrow: 'Realistic expectations',
        title: 'What can go wrong in agent projects?',
        intro: `Gartner predicts that more than 40 percent of agentic AI projects will be canceled by the end of 2027. It also warns about a market trend it calls "agent washing", where existing assistants, RPA products and chatbots are rebranded as "agents". According to Gartner, only about 130 of the thousands of vendors promoting themselves in this space are truly agentic.`,
        checklist: [
          `<b>Start with a narrow task.</b> "Draft a quote from an incoming request" is a better starting point than "manage sales".`,
          `<b>Start with one agent.</b> Move to setups where several agents work together only when you really need them.`,
          `<b>Limit permissions.</b> The agent should access only the tools its task requires.`,
          `<b>Approve everything that goes out.</b> Customer emails, payments and record deletions should require human approval.`,
          `<b>Track costs.</b> Agents call the model at every step, so cost per task should be monitored.`,
          `<b>If a simple solution works, skip the agent.</b> For a task with clear rules, ${a('/en/ai-transformation/process-automation', 'process automation')} is cheaper and more reliable.`,
        ],
      },
    ],
    sources: [
      { title: 'Anthropic, "Building effective agents" (December 2024)', url: 'https://www.anthropic.com/research/building-effective-agents' },
      { title: 'OpenAI, "A practical guide to building agents" (April 2025, PDF)', url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf' },
      { title: 'Gartner, agentic AI projects and "agent washing" (25 June 2025)', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027' },
    ],
  },

  integrations: {
    updated: '2026-10-15',
    sections: [
      {
        id: 'methods',
        eyebrow: 'The basics',
        title: 'How do systems connect to each other?',
        intro: `Integration means two pieces of software exchange data without a person in the middle. The right method depends on what the target system offers and how current the data needs to be.`,
        table: {
          head: ['Method', 'How does it work?', 'When is it a good fit?'],
          rows: [
            ['API', 'One system queries or sends data to another under defined rules', 'Reading prices, stock or availability in real time, and creating records'],
            ['Webhook', 'When an event happens, the system notifies the other side on its own, so there is no need to keep asking "is there anything new?"', 'Events such as a new order, a new booking or a payment confirmation'],
            ['File transfer', 'CSV or Excel files are exchanged at set intervals', 'Legacy systems with no API, daily batch transfers'],
            ['MCP', 'An open protocol that gives AI applications a standard way to connect to tools and data sources', 'Secure access for assistants and agents to several systems'],
          ],
        },
      },
      {
        id: 'mcp',
        eyebrow: 'A new standard',
        title: 'Why does the Model Context Protocol (MCP) matter?',
        intro: `On 25 November 2024, Anthropic announced MCP as an open standard for connecting AI to tools and data. It spread quickly.`,
        paras: [
          `OpenAI added MCP support to its agent-building tools in March 2025. Microsoft announced MCP support for Windows at its Build conference in May 2025, and Google announced its support in 2025. On 9 December 2025, Anthropic handed MCP over to the Agentic AI Foundation, set up under the Linux Foundation.`,
          `For you, this means an MCP connection built for one of your systems can also be used with other AI models. That reduces dependence on a single provider and speeds up new connections.`,
        ],
      },
      {
        id: 'systems',
        eyebrow: 'Commonly connected systems',
        title: 'Which systems do we connect to?',
        intro: `We can work with most systems that offer an official connection point (API) or webhooks. We check whether your system can be connected during the discovery phase.`,
        cards: [
          { title: 'CRM', text: `Requests collected by the assistant become customer records, and quote and follow-up steps are visible in the CRM.` },
          { title: 'Accounting and e-invoicing', text: `Invoices and collections are posted to your accounting software. We check e-invoice (e-Fatura) and e-archive (e-Arşiv) rules against the current regulations of the Revenue Administration (GİB). For example, from 1 January 2026, taxpayers in the e-archive scheme must issue invoices to recipients who are not e-invoice users as e-archive invoices, regardless of the amount.` },
          { title: 'Booking and hotel management', text: `The assistant reads availability from the property management system, channel manager or booking engine, and creates the booking directly.` },
          { title: 'Calendar', text: `Appointments are booked through Google Calendar or Outlook, and reminders are sent automatically.` },
          { title: 'E-commerce', text: `Order, stock and shipping information flows to the assistant and to reports.` },
          { title: 'Spreadsheets and documents', text: `Google Sheets, Excel and cloud storage. The foundation of reporting and archiving flows.` },
        ],
      },
      {
        id: 'security',
        eyebrow: 'Security',
        title: 'Our security principles for integrations',
        intro: `An integration is a door opened between two systems. It should be open only as far as needed.`,
        checklist: [
          `<b>Least privilege.</b> The connection accesses only the data the task requires, and starts read-only where possible.`,
          `<b>Protected secrets.</b> API keys are stored in an encrypted environment, never in code or spreadsheets.`,
          `<b>Logging.</b> You can trace which data was sent to which system and when.`,
          `<b>Error alerts.</b> The person responsible is notified when a connection drops or data fails to transfer.`,
          `<b>KVKK.</b> We document which system processes personal data. If data is transferred to a service abroad, KVKK's rules on cross-border transfers are followed.`,
        ],
      },
    ],
    sources: [
      { title: 'Red Hat, "What is a webhook?"', url: 'https://www.redhat.com/en/topics/automation/what-is-a-webhook' },
      { title: 'Anthropic, Introducing the Model Context Protocol (November 2024)', url: 'https://www.anthropic.com/news/model-context-protocol' },
      { title: 'Anthropic, donating MCP to the Agentic AI Foundation (December 2025)', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation' },
      { title: 'GovInfoSecurity, OpenAI, Google and Microsoft adopt the MCP standard (2025)', url: 'https://www.govinfosecurity.com/ai-giants-adopt-anthropics-standard-to-connect-apps-agents-a-28052' },
      { title: 'Paraşüt, e-Fatura geçiş zorunluluğu şartları (e-invoice transition requirements, in Turkish)', url: 'https://www.parasut.com/blog/e-fatura-gecis-zorunlulugu-sartlari' },
      { title: 'Gelir İdaresi Başkanlığı (Revenue Administration, GİB)', url: 'https://www.gib.gov.tr' },
    ],
  },

  'website-digital-infrastructure': {
    updated: '2026-10-15',
    sections: [
      {
        id: 'seo-geo',
        eyebrow: 'The basics',
        title: 'SEO and GEO rest on the same foundation',
        intro: `SEO aims to get your site ranked high in search engines such as Google. GEO (Generative Engine Optimization) aims to get it cited as a source in ChatGPT, Gemini or Google's AI answers.`,
        paras: [
          `Google's "AI features and your website" document for site owners says there are no additional technical requirements to appear in AI features such as AI Overviews and AI Mode. The page needs to be indexed by Google and eligible to be shown in search with a snippet. Standard SEO best practices still apply.`,
          `For GEO, we build content that AI can easily understand and quote. Each page opens with a short, clear answer to the question, uses sourced figures, shows author information and has consistent internal links.`,
        ],
      },
      {
        id: 'speed',
        eyebrow: 'Technical foundation',
        title: 'Speed and user experience: Core Web Vitals',
        intro: `Google's Core Web Vitals are made up of three metrics. For a site to count as "good", these thresholds must be met for at least 75 percent of visits.`,
        table: {
          head: ['Metric', 'What does it measure?', '"Good" threshold'],
          rows: [
            ['LCP (Largest Contentful Paint)', 'How long it takes for the main content of the page to appear', '2.5 seconds or less'],
            ['INP (Interaction to Next Paint)', 'How quickly the page responds to clicks and taps', '200 milliseconds or less'],
            ['CLS (Cumulative Layout Shift)', 'How much content shifts while the page loads', '0.1 or less'],
          ],
        },
        note: `INP replaced the older FID metric on 12 March 2024.`,
      },
      {
        id: 'facts',
        eyebrow: 'Where things stand',
        title: 'The facts about structured data and AI files',
        intro: `There are plenty of inflated promises on this topic. Here is what is actually known.`,
        paras: [
          `<b>Structured data (schema.org):</b> Tells search engines and AI systems, in machine-readable form, what your page is about. However, Google stopped showing FAQ rich results for all sites from 7 May 2026, and HowTo rich results were removed back in 2023. So we use structured data to help your content be understood correctly. We do not sell it as a way to get stars or expandable questions in search results.`,
          `<b>llms.txt:</b> A file format proposed by Jeremy Howard in September 2024 that summarizes a site's content for AI systems. It remains a community proposal, and Google states that it does not use the file in Search. Because it costs little to add, we include it on the sites we build, but we do not promise any ranking advantage.`,
        ],
      },
      {
        id: 'deliverables',
        eyebrow: 'What we deliver',
        title: 'What comes standard on the sites we build?',
        intro: `We build on the same infrastructure we use for this site.`,
        checklist: [
          `<b>Fast, static infrastructure.</b> Pages are prebuilt and open with no server wait.`,
          `<b>Mobile-first design.</b> Designed on the assumption that most visitors arrive on a phone.`,
          `<b>Technical SEO.</b> Sitemap, canonical URLs, a clean heading structure and broken link checks.`,
          `<b>Question-and-answer content.</b> A clear 40-60 word answer at the top of every page.`,
          `<b>Structured data.</b> Organization, service, article and author information.`,
          `<b>Search consoles.</b> Google Search Console and Bing Webmaster Tools setup, plus sitemap submission.`,
          `<b>KVKK and cookie texts.</b> Privacy notice and cookie policy.`,
          `<b>Assistant-ready.</b> A ${a('/en/ai-assistants/website-assistant', 'website assistant')} and booking flows are easy to add.`,
        ],
      },
    ],
    sources: [
      { title: 'Google Search Central, AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
      { title: 'web.dev, Defining the Core Web Vitals metrics thresholds', url: 'https://web.dev/articles/defining-core-web-vitals-thresholds' },
      { title: 'web.dev, INP becomes a Core Web Vital (March 2024)', url: 'https://web.dev/blog/inp-cwv-launch' },
      { title: 'Google Search Central Blog, changes to HowTo and FAQ rich results (August 2023)', url: 'https://developers.google.com/search/blog/2023/08/howto-faq-changes' },
      { title: 'Search Engine Journal, Google drops FAQ rich results (2026)', url: 'https://www.searchenginejournal.com/google-drops-faq-rich-results/574429/' },
      { title: 'llmstxt.org, the llms.txt proposal (September 2024)', url: 'https://llmstxt.org/' },
    ],
  },
};
