export const projects = [
  {
    slug: 'goha',
    name: 'Goha',
    tagline: 'A live tracker of the Ethiopian AI ecosystem: companies, tools, researchers, and initiatives, updating automatically.',
    year: '2024',
    role: 'Design & full stack engineer',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'GitHub Actions'],
    live: 'https://goha.et',
    icon: '/icons/xsplit.svg',
    screenshots: [],
    why: [
      'I kept learning about Ethiopian AI companies weeks after they launched — from a Telegram forward, a tweet, or a friend. The ecosystem existed, but nobody could see it. I wanted a single, living map of who is building what, who is researching what, and what is launching next.',
    ],
    problem: [
      'Building that map by hand would be stale within a week. The information lives in dozens of scattered sources — Telegram channels, social posts, company sites — with no structure and no canonical list. A tracker only stays useful if it updates itself daily, otherwise it becomes another dead directory.',
    ],
    architecture: [
      'Goha is a Next.js frontend over an Express API and a PostgreSQL schema that models companies, tools, researchers, and initiatives as separate, related entities. A GitHub Actions workflow runs the ingestion pipeline daily: it fetches sources, normalizes entries, deduplicates against what already exists, and writes updates into the database.',
      'The whole system was designed and shipped in one day. The interesting part was refusing to build anything that needs a human editor — every piece of content is either imported automatically or it does not belong on the site.',
    ],
    decisions: [
      {
        title: 'No human editor',
        detail: 'Every piece of content is imported automatically or it does not belong on the site. Human curation is the single point of failure that kills directories — refusing it is what keeps the map alive.',
      },
      {
        title: 'Entities as related tables, not one list',
        detail: 'Companies, tools, researchers, and initiatives are separate, related entities in PostgreSQL instead of rows in a single feed. The same normalized data can power any future view without a rebuild.',
      },
      {
        title: 'The ingestion pipeline is the product',
        detail: 'A GitHub Actions workflow fetches, normalizes, deduplicates, and writes on a schedule. Freshness is automated, not manual — the site updates itself while I sleep.',
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
      'I missed a hackathon the day after it closed. Not because I was not looking — because I was looking in the wrong place at the wrong time. Opportunities are announced across dozens of Telegram channels and buried in hundreds of messages a day.',
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
        detail: 'Every run can fail and rerun without duplicating or losing entries. If a source breaks, the next run picks up where the last one stopped — zero maintenance by design.',
      },
      {
        title: 'Code for structure, the model for judgment',
        detail: 'Scraping, deduplication, and normalization are deterministic code. The LLM is reserved for the one step that actually needs language understanding: summarizing.',
      },
    ],
  },
  {
    slug: 'shortlist',
    name: 'Shortlist',
    tagline: 'A scoring pipeline that pulls internships from dozens of company ATS boards daily, checks each posting for visa and location limits, and grades the fit against your skills. Runs on its own, zero maintenance.',
    year: '2026',
    role: 'Automation engineer',
    stack: ['Python', 'ATS APIs', 'LLM scoring', 'Scheduled jobs'],
    icon: '/icons/open-icons.svg',
    screenshots: [],
    why: [
      'Internship hunting is a search problem with invisible constraints. Most postings are wrong for you in ways the title never says: they cannot sponsor a visa, they require a location you are not in, or they want a stack you do not use.',
    ],
    problem: [
      'Companies post across dozens of different ATS boards with inconsistent formats. Reading each posting closely to extract eligibility takes longer than applying. The filter should happen before the human sees the list.',
    ],
    architecture: [
      'Every day the pipeline pulls postings from company ATS boards, parses each description for visa and location constraints, and scores fit against a skill profile.',
      'What comes out is a ranked shortlist instead of a feed. The scoring is deterministic where it can be and model-assisted where the text is ambiguous, and the whole thing runs unattended.',
    ],
    decisions: [
      {
        title: 'Filter before the human sees the list',
        detail: 'Visa and location constraints are parsed out of each posting before scoring even starts. Ineligible internships never reach the output, so reading time is spent only on postings worth applying to.',
      },
      {
        title: 'Deterministic where possible, model-assisted where ambiguous',
        detail: 'Explicit constraints are extracted with plain parsing; the LLM only grades the fit that text alone cannot settle. Cheap, repeatable logic does the heavy lifting.',
      },
      {
        title: 'A ranked shortlist, not a feed',
        detail: 'The output is ordered by fit against a skill profile, so the next action is obvious: apply top-down. The pipeline ends at a decision, not a dashboard.',
      },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug)
}
