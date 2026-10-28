export const articles = [
  {
    slug: 'i-built-a-bot-to-stop-missing-opportunities',
    title: 'I Built a Bot to Stop Missing Opportunities',
    date: 'JUN 2026',
    excerpt:
      'The frustration of finding out about opportunities after they close. So I built something to fix it.',
    status: 'Published',
    paragraphs: [
      'There is a specific kind of frustration that does not get talked about enough. It is the feeling you get when you find out about a hackathon, a grant, an internship, or a freelance gig the day after it closed. Not because you were not looking. Because you were looking in the wrong place, at the wrong time, scrolling past it in a sea of 200 other messages.',
      'I got tired of that. So I built something.',
      'Everyone talks about access like it is just about having an internet connection. But there is a quieter problem underneath that. If you are a student or early career developer in Ethiopia right now, you are probably in a dozen Telegram groups. Opportunities come through those channels. AI competitions, research fellowships, training programs. But they come mixed with memes, announcements, arguments, spam, and a thousand other things fighting for your attention.',
      'You can not read everything. Nobody can. So you scroll quickly, and sometimes the thing that could have changed your path just disappears into the feed. The result is that finding opportunities becomes a game of luck. It depends on when you happen to open your phone, not on what you actually deserve.',
      'So I built a simple automated system. It watches specific Telegram channels, pulls new messages, and filters out only the useful ones. It looks for deadlines, links, descriptions, who the opportunity is for. Then it sends a clean summary to a single channel. Once a day. No noise. Just the stuff worth knowing about.',
      'The system runs by itself. I do not have to think about it. It just works while I am in class or asleep. No servers to manage, no manual work once it is running.',
      'The gap between people who catch opportunities and people who miss them is usually not intelligence or skill. It is systems. People with strong networks have friends forwarding them useful things or colleagues tagging them in posts. If you do not have that network yet, you are doing all the filtering yourself, at the mercy of your own attention at any given moment.',
      'Automating that layer is a small thing that adds up over time. You stop missing things. You start applying more. And over time that changes what becomes available to you. I built it for myself first. But the idea applies anywhere people are drowning in information and missing what they actually need.',
      'The people who win are not always the most qualified. They are often the most informed. And being most informed should not require being glued to your phone all day. Automation fixes that.',
    ],
  },
  {
    slug: 'missing-benchmarks-ethiopian-ai',
    title: 'The Missing Benchmarks in Ethiopian AI',
    date: 'JUN 2026',
    excerpt:
      'Ethiopian AI is growing fast. Evaluation is not growing with it. Why benchmarks are the missing piece, and what it would take to build them.',
    status: 'Published',
    paragraphs: [
      'The Ethiopian AI space is growing fast. Companies like iCog Labs, Addis AI, and Hasab AI are shipping products. Researchers are publishing papers. New models for Amharic, Afaan Oromo, and Tigrinya show up every month. But almost none of it can be compared. We have no shared way to answer a basic question: which model actually works better?',
      'A benchmark is a shared test. Same data, same metric, same rules for everyone. In speech recognition, that means a fixed set of recordings and one score, usually word error rate. Run every model on the same test and you get numbers you can trust. Without it, every claim is just marketing. If a company says their model understands Amharic better than everyone else, there is no public test to check that. You either believe them or you do not.',
      'Right now, downloads are doing the job that benchmarks should do. People point to download counts as proof of quality. But downloads measure popularity, not accuracy. A model can rank high because it came first, or because it has a catchy name. That says nothing about how it handles noisy phone calls, mixed Amharic and English speech, or accents from different regions. Real use cases are exactly where untested models fail.',
      'This matters more here than it would in a bigger ecosystem. If a bank or a hospital wants to use Amharic speech recognition, where do they look? There is no leaderboard. They ask the vendor, and the vendor says they are the best. That is not evaluation. That is sales. Every serious buyer is left guessing, and every serious builder has no target to aim at.',
      'There are signs of progress. Benchmark papers for Ethiopian languages are starting to appear, like TeleASR-Amharic, which tests speech models on real telecommunication audio. But a few papers are not an ecosystem. Benchmarks need upkeep. They need public test sets, agreed metrics, versioning, and leaderboards that anyone can submit to. One paper does not replace all of that.',
      'What would it actually take? A public test set for each language, free to use. Agreed metrics so scores mean the same thing everywhere. A leaderboard that any team can submit to. And coverage beyond Amharic, because Afaan Oromo and Tigrinya deserve the same treatment. None of this is hard on its own. It is unglamorous work, and that is exactly why nobody has done it yet.',
      'I run a directory called Goha (goha.enoch.et) that indexes Ethiopian AI models, datasets, papers, and organizations. It tracks downloads and activity. But indexing is not evaluation. A list sorted by downloads is not a leaderboard sorted by accuracy. That second thing is still missing, and it is bigger than one side project.',
      'The ecosystem does not need more claims. It needs numbers everyone can check. Whoever builds the shared tests will give every Ethiopian AI team something real to aim at. Until then, the scene keeps growing, and nobody can prove that anyone is actually winning.',
    ],
  },
  {
    slug: 'why-you-should-start-using-ai-agents',
    title: 'Why You Should Start Using AI Agents',
    date: 'JUN 2026',
    excerpt:
      'AI agents are not a futuristic concept. They are already here, and they can do tasks for you. Here is why you should care.',
    status: 'Published',
    paragraphs: [
      'There is a shift happening in AI that is not getting enough attention. We have been using chatbots for a while now. You ask a question, it gives an answer. Simple, linear, useful. But AI agents are fundamentally different. Instead of waiting for your prompt to act, they can take initiative. That is a radically different model.',
      'Think about everything you do today that repeats. Filtering emails. Checking Telegram channels. Scraping prices. Monitoring opportunities. Updating a spreadsheet. Posting content. Following up with clients. Right now, you probably do these yourself. An agent is a piece of software that can do them for you, on its own schedule, following rules you set.',
      'The difference between a chatbot and an agent is autonomy. A chatbot reacts. An agent acts. It can have a memory. It can use tools. It can decide when to do something based on conditions you define. You tell it the goal and the rules, and it figures out the rest.',
      'Here is an example. Instead of checking Telegram manually every day, you tell an agent: "Watch these channels, find opportunities posted in the last 24 hours, filter by relevance, and send me a summary at 8 AM." The agent wakes up, does the work, and you wake up to a ready summary. No input from you. That is what makes it powerful.',
      'AI agents also handle stuff that changes. They can scrape a competitor\'s pricing page every hour and alert you when it drops below a threshold. They can track a GitHub repository and open an issue when a bug pattern appears. They can monitor API status pages and restart services without human intervention. These are all things that currently require human attention.',
      'For developers, the entry point is simpler than you think. The agentic frameworks are becoming more accessible. LangChain, CrewAI, AutoGen. You don\'t need a huge infrastructure. You can spin up an agent that uses GPT or Claude, give it access to an API or a browser, and let it do its thing.',
      'The real benefit is freeing up your time. Not just a few minutes, but entire hours per week that were previously occupied by tasks that require low level attention. When you automate a task that you do every day, you are not just saving that small block of time. You are eliminating the switching cost. The mental overhead.',
      'The organizations and individuals that adopt agentic workflows earliest will have a compounding advantage. Every day that passes, agents get smarter and the barriers to entry lower. Starting now means building the infrastructure early. Testing the workflows. Understanding failure modes.',
      'AI agents are not about replacing humans. They are about making humans more capable. You should start using them not because they are impressive but because they let you focus on what actually matters.',
    ],
  },
  {
    slug: 'asr-runtime-toolkit-making-open-source-speech-models-easier-to-run',
    title: 'ASR Runtime Toolkit: Making Open-Source Speech Models Easier to Run',
    date: 'OCT 2026',
    excerpt:
      'A toolkit to make running open-source speech recognition models more predictable, debuggable, and reproducible.',
    status: 'Published',
    paragraphs: [
      'Working with open-source speech recognition models should not require hours of debugging dependency conflicts before a single transcription can be generated.',
      'Yet models hosted on Hugging Face can require different versions of Python libraries, incompatible dependencies, specialized inference code, and runtime configurations that are not always clearly documented. A model that works in one environment may fail in another.',
      'ASR Runtime Toolkit (ART) is a project aimed at reducing this friction.',
      'What does it do?',
      'ART focuses on the engineering challenges involved in running unfamiliar Automatic Speech Recognition (ASR) models. Its goal is to make model execution more predictable through dependency compatibility checks, environment isolation, structured error reporting, and reproducible runtime configurations.',
      'Rather than treating every model failure as a debugging problem that must be solved from scratch, the toolkit aims to make failures easier to identify, understand, and resolve.',
      'Why does this matter?',
      'Reliable model execution is a prerequisite for meaningful experimentation. If a model cannot be loaded consistently, reproducing its results or comparing it with other models becomes difficult.',
      'This is especially relevant when working with underdocumented models and low-resource language technologies, including Amharic ASR. Researchers should be able to spend more time investigating model performance and less time reconstructing fragile software environments.',
      'The engineering approach',
      'The project focuses on four areas:',
      'Compatibility: identifying dependency requirements and potential conflicts.',
      'Isolation: keeping model-specific environments separate to reduce interference between projects.',
      'Diagnostics: making installation, import, and inference failures easier to understand.',
      'Reproducibility: preserving environment specifications and execution details so successful runs can be recreated.',
      'The long-term objective is to provide a repeatable workflow for investigating and running diverse open-source ASR models without assuming they all share the same software stack.',
      'Measuring success',
      'The toolkit\'s effectiveness should be demonstrated through controlled experiments, not claims alone. Relevant measurements include model execution success rate, time to first successful transcription, dependency conflicts detected, and environment reproducibility.',
      'These experiments will help determine where ART improves the workflow, where it still fails, and which limitations require further engineering.',
      'Why I am building it',
      'ART grew out of a practical problem encountered while exploring and running open-source ASR models for Ethiopian languages. The project is an opportunity to work on a less visible but important part of machine learning: the infrastructure that makes experimentation reliable.',
      'The broader goal is simple: make open-source speech models easier to run, easier to debug, and easier to reproduce.',
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug)
}
