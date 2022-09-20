---
date: 2020-07-25
title: "(Archive) Want to Subscribe? Use RSS!"
draft: false
---
<p>
The best way to keep up with what I'm doing is to periodically check for updates, much like how you periodically run <code>pacman -Syu</code> on your Arch Linux machine. However, the more people you keep up with and the more individual websites you have to visit, the more of a pain this process becomes. Enter RSS feeds.
</p>

<h3>Why Use RSS?</h3>

<p>
RSS feeds functions like social media without the bad parts. Rather than having information centralized in one place (and therefore susceptible to being controlled), all you have to do is add a bunch of RSS feeds (urls) to your RSS reader of choice, and it will aggregate the content for you for easy viewing. This way, you don't have to individually check a bunch of sites, all you have to do is refresh your RSS reader and it will pull all the updates to the feeds you've subscribed to automatically.
</p>

<p>
Of course, it's completely private since all RSS readers do is check for updates to a certain url on someone's page. You can use RSS feeds to replace all sorts of things! For example, you can find RSS feeds for 

<ul type="disc">
<li type="disc">Youtube Channels</li>
<li>Individual Subreddits</li>
<li>Twitter Feeds</li>
<li>Public Facebook Pages</li>
<li>Instagram Feeds</li>
<li>Github Repository Updates</li>
</ul>

and of course, blogs! No longer will you have to subject yourself to involuntary surveillance if all you wanted to do was see what someone is up to— which was the original premise of social media anyway, before the mass centralization of internet content. 
</p>

<h3>Recommendations for an RSS Feed Reader</h3>

<p>
The RSS reader I'm currently using is <a href="https://wiki.archlinux.org/index.php/Newsboat">Newsboat</a> (terminal based, of course), with vim bindings from Luke Smith's config. I'm currently still working on setting everything up, but you can view my progress on <a href="https://github.com/simonxiang1/dotfiles/tree/master/.config/newsboat">GitHub</a> or my <a href="https://git.simonxiang.xyz/dotfiles/file/.config/newsboat/config.html">Git server.</a> Note that for Newsboat to start, you'll need to add at least one RSS feed to your <code>~/.config/newsboat/url</code> file. 
</p>

<p>
Of course, if you're not a fan of terminal based applications, there are graphical RSS readers as well. I haven't used any of them, but the popular choices seem to be <a href="https://www.ghacks.net/2019/07/06/newsflow-is-a-free-customizable-rss-reader-app-for-windows-10/">Newsflow (Windows)</a> and <a href="https://jangernert.github.io/FeedReader/">FeedReader (Unix based systems)</a>.
</p>
