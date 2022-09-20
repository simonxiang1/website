---
date: 2020-08-25T07:50:00-05:00
title: "(Archive) Destroying my Computer or: How I Learned to Stop Worrying and Love Linux"
draft: false
---
<p>
So for the last two weeks I haven't really been online, due to the fact that I messed up my computer beyond repair. For some reason it brings a strange sense of comfort that <em>I</em> was the one that bricked it, as opposed to Microsoft or something. Yay for user freedoms!
</p>

<p>
This is what happened— Google was being annoying as usual and sent me my photos with each day having its own directory or something like that, preventing me from using my file manager to quickly live preview the photos. So a lightbulb went off in my head: why not write a script to move every file out of the directories and into the main one! It went something like this:
</p>

<pre>
<code>
for d a directory; do 
    cd /. && mv *.* ../ 
done
</code>
</pre>

<p>
or something dumb like that (not sure if this was the actual syntax). <em>Please</em> don't run this on your home computer.
</p>

<p>
So it ended up moving <b>every</b> file out of its original directory up one level: I didn't realize this at first and ran it again with sudo to get rid of the error messages (big mistake!). As soon as I did this I lost control of my keyboard and it hit me that I was kind of screwed.
</p>

<p>
The <code>/boot</code> directory was gone, making it extremely difficult for me to go in with <code>grub</code> and rescue at least some files. It makes sense, because everything in a UNIX system is a file. Some of the error messages I got as I attempted to save my system were truly horrific: "<code>Kernel panic - not syncing: Attemped to kill initf</code>", "<code>Trying to continue (this will most likely fail) ... </code>", and my personal favorite, 
</p>

<pre>
<code>
ERROR: Failed to mount the root device.
Bailing out, you are on your own. Good luck.
</code>
</pre>

<p>
Absolutely terrifying.
</p>

<p>
I've spent the last two weeks or so offline. After spending the last two months actively installing my system, customizing my dotfiles, getting programs to work with each other, hosting software on my server, writing blog posts, etc, I decided to take a break.
</p>

<p>
At first I was kind of stressed out: "What about my dotfiles? My LaTeX notes? How will I keep my streak of green on GitHub? What am I going to do in my free time?" It was like quitting social media all over again. It's the fear of missing out: the fear that something online is happening and you're not part of it. It's also the fear of boredom: in a generation of cell phones and constant stimulation, there's no one thing that collectively scares us more than being bored.
</p>
<p>
In the end, I learned to stop worrying. No matter what your brain says, you really aren't missing out on anything: rather, spending more time online means missing out on more of life. I had a lot of fun doing things like working on my bike, meeting up with friends at parks, learning to write again with the proper grip. 
</p>

<p>
On boredom: Boredom is the driving force that spurs action, without boredom there is no progress. Solitude and boredom are concepts essential to our mental development that have been washed away by the passage of the Internet. As time went on, I slowly began to dread the day I would reinstall Arch and rejoin the virtual world.
</p>

<p>
As you can see, I've managed to reinstall my system and get access to my server again. It took about a week to get everything working. This time I documented all the commands I ran to set up all the software/fix all the bugs in a text file, so if I ever were to do this again, it would be as painless as 1-2-3. Well, that's about it for now— I've also moved into campus, so if anybody reading this is from UT Austin, let's get in touch. Cheers!
</p>
