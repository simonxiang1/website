---
date: 2020-07-18
title: "(Archive) Regrettably, This Site Runs Javascript"
draft: false
---
<p>
I'm really sad. I had a vision for a completely bloat-free website, but now I'm being plagued by the blight that is Javascript because I wanted pretty equations. Every single time someone loads my rolling blog page, it sends 40 something calls to the external MathJax server to generate the LaTeX equations, slowing down the load time by one or two seconds. Unacceptable! I want my stuff to load instantly all the time.
</p>

<p>
I've tried to host an instance of MathJax on my server before, but that means installing a bunch of bloat like Node.js on the server end. Plus, I'm not even sure it'll improve response times by that much. Image based solutions look absolutely horrible. Is there any clean solution to writing pretty equations in HTML? If anybody knows of one, please let a poor and struggling mathematician know.
</p>

<p>
Edit: An additional grievance: <code>\overbrace</code> and <code>\underbrace</code> will break MathJax. It doesn't even compile the rest of your document if you have one of these bad boys in your code! Someone please save me.
</p>
