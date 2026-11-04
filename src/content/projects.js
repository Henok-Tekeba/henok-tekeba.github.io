export const projects = [
  {
    slug: 'goha',
    name: 'Goha',
    tagline: 'A live tracker of the Ethiopian AI ecosystem: companies, tools, researchers, and initiatives, updating automatically.',
    year: '2024',
    role: 'Design & full stack engineer',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'GitHub Actions'],
    live: 'https://goha.enoch.et',
    icon: '/icons/xsplit.svg',
    screenshots: ['/screenshots/goha.png'],
    why: [
      'I kept learning about Ethiopian AI companies weeks after they launched, from a Telegram forward, a tweet, or a friend. The ecosystem existed, but nobody could see it. I wanted a single, living map of who is building what, who is researching what, and what is launching next.',
    ],
    problem: [
      'Building that map by hand would be stale within a week. The information lives in dozens of scattered sources, Telegram channels, social posts, company sites, with no structure and no canonical list. A tracker only stays useful if it updates itself daily, otherwise it becomes another dead directory.',
    ],
    architecture: [
      'Goha is a Next.js frontend over an Express API and a PostgreSQL schema that models companies, tools, researchers, and initiatives as separate, related entities. A GitHub Actions workflow runs the ingestion pipeline daily: it fetches sources, normalizes entries, deduplicates against what already exists, and writes updates into the database.',
      'The whole system was designed and shipped in one day. The interesting part was refusing to build anything that needs a human editor, every piece of content is either imported automatically or it does not belong on the site.',
    ],
    decisions: [
      {
        title: 'No human editor',
        detail: 'Every piece of content is imported automatically or it does not belong on the site. Human curation is the single point of failure that kills directories, refusing it is what keeps the map alive.',
      },
      {
        title: 'Entities as related tables, not one list',
        detail: 'Companies, tools, researchers, and initiatives are separate, related entities in PostgreSQL instead of rows in a single feed. The same normalized data can power any future view without a rebuild.',
      },
      {
        title: 'The ingestion pipeline is the product',
        detail: 'A GitHub Actions workflow fetches, normalizes, deduplicates, and writes on a schedule. Freshness is automated, not manual, the site updates itself while I sleep.',
      },
    ],
  },
  {
    slug: 'pursuit',
    name: 'Pursuit',
    tagline: 'A calm workspace to track every internship application, email, and follow-up, so the next right action is always obvious.',
    year: '2026',
    role: 'Full stack engineer',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    live: 'https://pursuit.enoch.et',
    icon: '/icons/open-icons.svg',
    screenshots: ['/screenshots/pursuit.png'],
    why: [
      'Internship applications are relationship work. The value is not in how many rows you collect. It is in remembering who you spoke to, what you said, and when to follow up without sounding like a robot.',
    ],
    problem: [
      'Spreadsheets lose the human context. Follow-ups slip, threads get lost, and it is hard to see what is actually working. The search needs a system, not more rows.',
    ],
    architecture: [
      'A Next.js app backed by PostgreSQL where each application is one record holding company, role, contact, source, notes, and the emails sent. Follow-up cadence is set once and surfaced as due or overdue, with a timeline keeping the conversation intact.',
      'Response rate, interviews, offers, and follow-up effectiveness are tracked so the search can be adjusted with intent instead of guesswork.',
    ],
    decisions: [
      {
        title: 'One record per application',
        detail: 'Company, role, contact, source, notes, and sent emails live together, so the full context of an application is never split across tools.',
      },
      {
        title: 'Follow-ups that do not slip',
        detail: 'Set the cadence once. Pursuit surfaces what is due and what is overdue without turning the inbox into a guilt trip.',
      },
      {
        title: 'Signal over volume',
        detail: 'Response rate, interviews, offers, and follow-up effectiveness are tracked so the search is adjusted with intent, not by collecting more rows.',
      },
    ],
  },
  {
    slug: 'never-miss',
    name: 'Never Miss',
    tagline: 'A daily digest that scrapes, summarizes, and delivers opportunities before they close. Runs on its own, zero maintenance.',
    year: '2024',
    role: 'Automation engineer',
    stack: ['Python', 'Telegram Bot API', 'LLM summarization', 'Cron'],
    icon: '/icons/toolist.svg',
    screenshots: [],
    why: [
      'I missed a hackathon the day after it closed. Not because I was not looking, because I was looking in the wrong place at the wrong time. Opportunities are announced across dozens of Telegram channels and buried in hundreds of messages a day.',
    ],
    problem: [
      'Discovery is a timing problem. By the time a message surfaces, the deadline may already have passed. People do not need more notifications; they need the right ones, summarized, once a day.',
    ],
    architecture: [
      'A scheduled pipeline scrapes the sources, deduplicates and normalizes entries, summarizes them with an LLM, and delivers a single digest to Telegram every day.',
      'It is built to need zero maintenance: idempotent runs, deterministic state, and no human in the loop. If a source breaks, the next run picks up where the last one stopped.',
    ],
    decisions: [
      {
        title: 'One digest, not more notifications',
        detail: 'The problem was timing, so the fix is batching to the right moment: a single summarized delivery per day. More notifications would have been more noise, not more value.',
      },
      {
        title: 'Idempotent runs, deterministic state',
        detail: 'Every run can fail and rerun without duplicating or losing entries. If a source breaks, the next run picks up where the last one stopped, zero maintenance by design.',
      },
      {
        title: 'Code for structure, the model for judgment',
        detail: 'Scraping, deduplication, and normalization are deterministic code. The LLM is reserved for the one step that actually needs language understanding: summarizing.',
      },
    ],
  },
  {
    slug: 'omnirun',
    name: 'OmniRun',
    tagline: 'Preflight Hugging Face models against your hardware: memory fit, runtime support, and decode speed before you download weights.',
    year: '2026',
    role: 'Full stack engineer',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    live: 'https://omnirun.enoch.et',
    icon: '/icons/open-icons.svg',
    screenshots: ['/screenshots/omnirun.png'],
    why: [
      'Running open-source models locally is a guessing game. You download gigabytes of weights only to find out your GPU cannot fit them or the runtime does not support them. OmniRun checks fit before download.',
    ],
    problem: [
      'Model cards rarely state memory requirements clearly, and compatibility depends on hardware and runtime. Developers waste time and bandwidth on models that cannot run.',
    ],
    architecture: [
      'A client-side React app that estimates memory fit, runtime support, and decode speed for a given model and hardware profile before weights are downloaded. Everything runs in the browser, with no backend.',
    ],
    decisions: [
      {
        title: 'Preflight, not download',
        detail: 'Check memory fit, runtime support, and decode speed before any weights are fetched, so time and bandwidth are spent only on models that can actually run.',
      },
      {
        title: 'FITS, SUPPORTED, and VERIFIED stay separate',
        detail: 'A model can fit in memory but still be unsupported by your runtime, or supported but unverified for speed. Each signal is reported on its own so nothing is conflated.',
      },
      {
        title: 'Client-side only',
        detail: 'All estimation runs in the browser. No backend, no accounts, no data leaves the machine.',
      },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug)
}
