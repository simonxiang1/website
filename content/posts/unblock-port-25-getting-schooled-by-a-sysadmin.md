---
date: 2020-08-28
title: "(Archive) Unblock Port 25: Getting Schooled by a sysadmin"
draft: false
---
<p>
If you didn't know, I host my own mail server here at mail.simonxiang.xyz (don't try to type that into your browser). Although setting it up is usually a long and forlorn process (or so I've heard), for me it was actually quite simple. There's a YouTuber out there that goes by <a href="https://lukesmith.xyz">Luke Smith</a> that wrote <a href="https://github.com/lukesmithxyz/emailwiz">a nice script</a> to easily set up mail on your new server. If you just read the <code>README</code> and make sure you have all the requirements set up on your domain registrar and VPS provider, it's a two minute process to run the script and be on your merry way with a fancy new email server.
</p>
<p>
However, after setting it up I couldn't send mail for some strange reason. After testing two possibilities (domain on a spam list, postfix configuration issue), my cocky self decided that I didn't mess up anywhere when installing and that my VPS provider, Vultr, had blocked the port that allows me to send email (port 25) so I couldn't use their VPS to send spam emails or something like that. So I sent them a slightly condescending support ticket that went something like this:
</p>
<blockquote>
<p>
Hello Vultr,
Can you unblock Port 25? I know y'all are blocking it because you think I'll send spam emails or something, but I promise I wont. 
</p>
<cite>Regards, </br>Simon</cite>
</blockquote>
<p>
In 57 seconds, a system administrator at Vultr responded with this (not verbatim):
</p>

<blockquote>
<p>
Hello Simon,
</br>
</br>
We're not blocking port 25 access. Check your instances firewall rules and listening services, you can do this by running <code>netstat -uplnt | less</code>. Furthermore, also run <code>iptables -L</code> for firewall rules, and <code>iptables -F</code> to flush rules from the chain: to test outbound port 25 access, run <code>telnet portquiz.net 25</code>. Thanks,
</p>
<cite>[omitted for privacy], </br> Systems Administrator</cite>
</blockquote>

<p>
After spending the last two months learning how to use Linux and setting up my own server, I thought I knew a lot of commands (I have a terminal "cheat sheet" that's 250+ lines long), and a lot about how Linux works in general.
</p>

<p>
Well, after reading his response, I felt like I knew nothing. It was a good return to reality: Ego is something that creeps into everything (especially when things are going well), and ego leads to complacency. Complacency leads to the slow decline of the quality of work you put out, whether it be personal, academic, or job related. Basically, it's good for us to feel like complete idiots sometimes— it's how we get better. 
</p>

<p>
(After this exchange, I added the three new commands he taught me and some more to a "systems administration" section of my terminal commands cheat sheet).
</p>

<p>
Anyways, that's it for now. We should all follow along with this motto (spoken by a very wise person):
</p>

<blockquote style="font-style: italic">
<p>
"I don't know everything, I just know what I know."
</p>
<cite style="font-style: normal">–HT</cite>
</blockquote>
