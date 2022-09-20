---
date: 2020-08-25T20:57:00-05:00
title: "(Archive) Searx is a Completely Private Search Engine"
draft: false
---
<p>
There's a saying that "Google knows you better than you know yourself" (it probably isn't a saying, but I just said it, so it is). It's well known that search engines like Google build profiles about you from your searches. You may forget about the time you were reading Wikipedia articles about the SCP foundation or the Liberian Civil Wars, but Google never forgets. They remember every search since yesterday, a year ago, ten years ago: storing more information about you as a person than you ever could.
</p>

<p>
Innocuous questions drastically narrow down targets and provide a lot more personally identifiable information than you think: searching for a local restaurant gives away your location down to a few neighborhoods, your relationship status (depending on the type of restaurant), maybe narrows down the age range. A Chegg query instantly narrows down (almost certainly) the age range to about 16-24 years old. You're probably searching the internet (via Google) about all the hobbies and interests you have, and of course Google knows who you hang out with and what you do with your free time.
</p>

<p>
How do we privatize search engines to not profile you? An alternative would be DuckDuckGo and/or Startpage, but these services have their flaws: none of them are open source, meaning we just have to take their word on it that they aren't harvesting our data. The only way to be completely sure that you have the blinds down with search engines is the standard solution to everything: host it yourself.
</p>

<p>
Enter Searx. Searx is a completely <em>open-source</em> meta search engine: since it's open source, we know completely what it's up to. The "meta search" part means it anonymously runs your queries through several search engines and aggregates the results (eliminating the need to create your own search algorithm). How they anonymize your queries is by not sending cookies and generating a new browser profile for each session. This way, you can get your results from the sites you love (Google, Reddit, DuckDuckGo) without any of the tracking you hate.
</p>

<p>
In essence, Searx itself it just a piece of software that is activated and controlled by whoever is hosting it. So the only true way to be completely private is to host your own instance of it. However you could also use a <em>public instance</em>, which means you're relying on the administrator to not do anything malicious with your data. I host a public instance of Searx on my server, you can find it <a href="https://searx.simonxiang.xyz">here</a> or by clicking on the "search" link below my name on the homepage of this site. Since it's hosted on my server, it doesn't stop <em>me</em> from logging all your data. You just have to trust me on this one (just kidding, see the footnote on the main page).
</p>
