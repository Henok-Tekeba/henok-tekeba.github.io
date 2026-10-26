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
    slug: 'one-day-ship-goha-et',
    title: 'How goha.et Happened — And What Is Still Missing',
    date: 'JUN 2026',
    excerpt:
      'The Ethiopian AI ecosystem is missing things. Especially benchmarks. Here is why I built goha.et — and why someone should build the rest.',
    status: 'Published',
    paragraphs: [
      'People tell me they heard I built goha.et in one day. I want to be honest: that is not the real story. The first version went up fast, yes. But that was just the start. I have been working on it again and again since then. Fixing bugs. Adding new companies. Updating the data. Checking that the auto update still works. A project like this does not get finished in one day. It gets worked on, many times, over a long stretch.',
      'Let me start with the problem. The Ethiopian AI space is growing fast. There are companies like iCog Labs, Addis AI, and Hasab AI. There is research coming out of Addis Ababa University. There are tools and datasets being built. But there is no single place that shows all of it. If you want to know what is being built in AI in Ethiopia, you have to dig through scattered links, posts, and word of mouth. Most people never find anything.',
      'And there is something even more important missing: benchmarks. A benchmark is a shared test that shows how good a model really is. If a company says their model understands Amharic better than everyone else, how do we check that? Where is the public test? Where is the leaderboard? Right now, there is almost nothing. Everyone is guessing. Without benchmarks, "our model is the best" is just marketing.',
      'So I built goha.et. A simple site that lists the companies, researchers, tools, and initiatives in Ethiopian AI. It updates itself automatically, so the information stays fresh without anyone editing it by hand. My thinking was simple: you cannot build on top of a scene you cannot see. One clear page, open to everyone, is a small fix for a real gap.',
      'But goha.et only solves part of the problem. The benchmarks part is bigger than one person with a side project. It needs shared tests, agreement on what to measure, and people willing to submit their models. So here is my honest suggestion: someone should build it. If you are reading this and you have the skills, please build the Ethiopian AI benchmark. I would use it the same day it launches. The whole ecosystem would use it.',
      'I also want to be honest about something personal. Part of why I built this is FOMO. I am in my 20s, and everyone around me seems to be doing something. Building startups. Winning hackathons. Shipping AI agents. Launching products. Some days it feels like everybody is moving forward except me. Scrolling and watching them made it worse. Building something — even small — made it better. goha.et came out of that feeling. It is not a perfect reason, but it is a real one.',
      'If you take one thing from this: you do not need permission, and you do not need to be perfect. You also do not need to pretend it took one day. Real projects take many sessions, many fixes, and a lot of patience. Start small. Keep showing up. And build the thing that is missing — because if you do not, you will keep waiting for someone else to do it.',
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
]

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug)
}
