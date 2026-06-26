export const articles = [
  {
    slug: 'building-ai-for-under-served-languages',
    title: 'Building AI for Languages the Market Ignores',
    date: 'APR 2026',
    excerpt:
      'What it takes to build useful AI for people who are usually treated as edge cases by the mainstream market.',
    status: 'Published',
    paragraphs: [
      'Most AI products are built for users who already have strong digital infrastructure, strong purchasing power, and strong representation in training data. That leaves a huge gap for everyone else. If you are building for a language like Amharic, you start from a different reality. The tools are weaker, the data is thinner, and the defaults rarely fit.',
      'That is exactly why the problem matters. Language technology becomes most valuable when it reaches people who are not well served by the mainstream stack. Speech recognition is not impressive to me because it looks futuristic. It is useful because it can lower friction, widen access, and make software feel native to people who should not have to adapt themselves to English-first systems.',
      'The hard part is not only model quality. It is the full system around the model. You have to think about data collection, cleaning, deployment cost, latency, fallback behavior, and the way real users speak outside benchmark conditions. A demo can hide those issues. A real product cannot.',
      'Building in this space also changes how you think about ambition. The goal is not to copy what larger companies already did for bigger markets. The goal is to build tools that fit the constraints and opportunities of the people in front of you. That takes technical patience, product judgment, and respect for local context.',
      'I think the next wave of meaningful AI products will come from builders who understand a specific group deeply enough to serve them well. Not everyone needs to build for a billion users on day one. Sometimes the sharper path is to solve a real problem for people who have been overlooked for too long.',
      'That is the category of work I want to keep doing. I want to build AI that feels useful, local, and grounded in real conditions. If the market has ignored a language or a region, that should be seen as an opening, not a reason to look away.',
    ],
  },
  {
    slug: 'what-shipping-taught-me-early',
    title: 'What Shipping Early Has Taught Me',
    date: 'APR 2026',
    excerpt:
      'A few lessons from building before feeling fully ready, and why that has helped me grow faster than waiting for confidence.',
    status: 'Published',
    paragraphs: [
      'Shipping early has made me a better engineer than waiting ever could. When you publish something, even if it is rough, reality starts giving feedback immediately. You learn what breaks, what confuses people, what feels slow, and what you only believed worked because nobody had touched it yet.',
      'One of the biggest mindset shifts for me has been understanding the difference between building and finishing. Many people can start a project. Fewer people can take it through the boring parts: bug fixes, deployment, cleanup, copy, edge cases, and follow-up improvements after the first version goes live.',
      'Shipping also exposed where my confidence was fake. There were times I thought I understood a stack until I had to deploy it, connect services, handle state, or fix a failure under pressure. That kind of friction is frustrating in the moment, but it teaches much faster than passive learning.',
      'Another lesson is that taste matters, but proof matters more. A polished interface can get attention, but it does not earn trust by itself. Trust comes from whether the thing works, whether the links are real, whether the product has a clear purpose, and whether you can explain your decisions without hiding behind aesthetics.',
      'I do not think the answer is to ship carelessly. The answer is to ship honestly. Show what is real, keep improving it, and let each project teach you the next layer of the craft. That approach has helped me build momentum even while I am still early in my career.',
      'The builders I respect most are not the ones who always look finished. They are the ones who keep closing loops. They start, learn, revise, and ship again. That is the standard I want to keep moving toward.',
    ],
  },
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
]

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug)
}
