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
      'Everyone talks about access like it is just about having an internet connection. But there is a quieter problem underneath that. If you are a student or early-career developer in Ethiopia right now, you are probably in a dozen Telegram groups. Opportunities come through those channels. AI competitions, research fellowships, training programs. But they come mixed with memes, announcements, arguments, spam, and a thousand other things fighting for your attention.',
      'You can not read everything. Nobody can. So you scroll quickly, and sometimes the thing that could have changed your path just disappears into the feed. The result is that finding opportunities becomes a game of luck. It depends on when you happen to open your phone, not on what you actually deserve.',
      'So I built a simple automated system. It watches specific Telegram channels, pulls new messages, and filters out only the useful ones. It looks for deadlines, links, descriptions, who the opportunity is for. Then it sends a clean summary to a single channel. Once a day. No noise. Just the stuff worth knowing about.',
      'The system runs by itself. I do not have to think about it. It just works while I am in class or asleep. No servers to manage, no manual work once it is running.',
      'The gap between people who catch opportunities and people who miss them is usually not intelligence or skill. It is systems. People with strong networks have friends forwarding them useful things or colleagues tagging them in posts. If you do not have that network yet, you are doing all the filtering yourself, at the mercy of your own attention at any given moment.',
      'Automating that layer is a small thing that adds up over time. You stop missing things. You start applying more. And over time that changes what becomes available to you. I built it for myself first. But the idea applies anywhere people are drowning in information and missing what they actually need.',
      'The people who win are not always the most qualified. They are often the most informed. And being most informed should not require being glued to your phone all day. Automation fixes that.',
    ],
  },
  {
    slug: 'one-day-ship-goha-et',
    title: 'One Day, One Ship: How goha.et Happened',
    date: 'JUN 2026',
    excerpt:
      'A site that tracks the Ethiopian AI ecosystem. Built from zero to live in a single day. Here is how and why.',
    status: 'Published',
    paragraphs: [
      'There is a version of this story where I waited. Where I planned more, designed more, asked for feedback, and eventually launched something two months later. But that is not what happened. goha.et went from idea to live site in one day. And that decision taught me more than any planning session ever could.',
      'The idea was simple. The Ethiopian AI space is growing fast. There are companies like iCog Labs, Addis AI, and Hasab AI. There is research coming out of AAU. There are tools and datasets being built. But there was no single place that showed everything in one view. If you wanted to know what was being built in AI in Ethiopia, you had to dig through scattered links, posts, and word of mouth.',
      'So I built a tracker. A page that lists companies, researchers, tools, and initiatives in Ethiopian AI. It updates itself automatically, so the information stays current without anyone manually editing it. I used the same tools I already knew and focused on getting it out the door instead of making it perfect.',
      'The whole thing went from nothing to live in one day. Concept, design, building, deployment. One sitting. Not because I am some kind of speed demon. But because I decided that done was better than perfect. A live site with rough edges teaches you more than a perfect design that nobody can see.',
      'The auto-update part is the most important. A static directory dies the moment you stop paying attention to it. But a site that pulls in new data on its own schedule stays alive. That is the difference between a project that works once and a tool that keeps working.',
      'I also think there is something honest about building this. The Ethiopian tech scene needs visibility infrastructure. You can not build on top of a scene you can not see. goha.et is a small contribution to making that scene more visible. It does not need to be a big company thing. It just needs to exist and stay up to date.',
      'There is a personal layer too. Around the same time I shipped this, I got rejected by one of the companies listed on the site. That stung. But building this reminded me that you do not need permission to contribute. You can build something useful whether or not someone hires you. The work itself is the point.',
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
      'The real benefit is freeing up your time. Not just a few minutes, but entire hours per week that were previously occupied by tasks that require low-level attention. When you automate a task that you do every day, you are not just saving that small block of time. You are eliminating the switching cost. The mental overhead.',
      'The organizations and individuals that adopt agentic workflows earliest will have a compounding advantage. Every day that passes, agents get smarter and the barriers to entry lower. Starting now means building the infrastructure early. Testing the workflows. Understanding failure modes.',
      'AI agents are not about replacing humans. They are about making humans more capable. You should start using them not because they are impressive but because they let you focus on what actually matters.',
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug)
}
