---
date: 2020-07-11
title: "(Archive) Topological Continuity: Simplicity in Abstraction"
draft: false
---
<p>Abstraction is often looked down upon by engineers and physicists as something mathematicians do to make life harder for themselves, obfuscate simple things, and make math less applicable in real life.</p> 
<p>However, the opposite is actually true— restricting your viewpoint to one set or space (say, \( \mathbb{R}^n \)) makes things much more complicated than they have to be. <strong>Beauty and simplicity lie in levels of abstraction.</strong> Let's take a look at an example, some prerequisites include basic knowledge of metric spaces and topological spaces. </p>

<p>Here's the standard rigorous definition of continuity from Real Analysis. We say \( f: \mathbb{R} \to \mathbb{R} \) is <b>continuous</b> at \( x_0 \in \mathbb{R} \) if for all \( \epsilon > 0 \), there exists a \( \delta > 0 \) such that 

<p>
\[ 
    |x - x_0| < \delta \implies |f(x)-f(x_0)| < \epsilon 
\]
</p>

for all $x \in \mathbb{R}$. Of course the domain doesn't have to be $\mathbb{R}$, it can be any interval, say $A$. When a function is continuous for all $x_0 \in A$, it's <em>continuous on</em> $A$. If a function is continuous on its domain, we just say it's <em>continuous</em>.
</p>

<p> That probably triggered some flashbacks for some poor Calculus students learning about limits for the first time (I too, feared the epsilon-delta dynamic duo up until I took Analysis). It doesn't have to be this scary! Forget the strange Greek letters, let's make this definition more powerful and simple at the same time.</p>

<p> Observe that the absolute value signs are just measuring the <em>distance</em> between two points in $\mathbb{R}$, indeed, this seems like a job more suited for <b>metric spaces</b>. Let $\mathbb{R}$ be equipped with the standard metric $d$ such that $d: \mathbb{R} \times \mathbb{R} \to \mathbb{R}, \, d(x,y) = |x-y|$. You can easily check that $d$ satisfies the conditions for a metric, so $(\mathbb{R},d)$ is a metric space. Now let's rewrite our previous definition in metric terms: \(f: \mathbb{R} \to \mathbb{R} \) is continuous at \( x_0 \in \mathbb{R} \) if for all \( \epsilon > 0 \), there exists some \( \delta > 0 \) such that 
\[
    d(x, x_0) < \delta \implies d(f(x),f(x_0)) < \epsilon.
\]

<p>Recall the definition of an <em>open ball</em> in a metric space. Let $(X,d)$ be a metric space, $x_0 \in X, \gamma \gt 0$. Then we define an <u>open ball</u> as 
\[ B(x_0, \gamma) = \{ x \in X \mid d(x,x_0) < \gamma \}. \]
Intuitively, it's the set of all points a certain distance <em>gamma</em> away from another point $x_0$. Notice that the two expressions in the definition just refer to points $(x \in \mathbb{R})$ a certain positive distance $(\epsilon, \delta)$ away from another point $(x_0)$, hmmm...
\[
    d(x, x_0) < \delta \implies d(f(x),f(x_0)) < \epsilon
\]
implies that 
\[
    x \in B(x_0, \delta) \implies f(x) \in B(f(x_0), \epsilon)
\]
which subsequently implies
\[
    f\left[B(x_0, \delta) \right] \subset B(f(x_0),\epsilon).
\]
The last implication may seem somewhat arcane, but just look closer and you'll see it quickly follows from the definition of the image of a set under a function. But wait! We haven't even seen the final form of continuity yet! Recall that every metric space generates a topology, and that the metric topology is generated by defining open balls as open sets... Now we're ready to define the final layer of abstraction, topological continuity. 
</p>

<p><b><u>Definition:</u></b> Let $(X, \tau_x )$ and $(Y, \tau_y )$ be <em>topological spaces</em>. Then a function $f: X \to Y$ is <b>continuous</b> if for all open sets $H \in \tau_y, \, f^{-1}(H) \in \tau_x.$
</p>

<p>The moment of truth: we transformed a convoluted epsilon delta definition into a simple, elegant, and much more widely applicable statement: <em>"A function is <b>continuous</b> if the pre-image of an open set is open."</em> Not only is this statement much simpler, it also applies to all sorts of spaces— the set of binary sequences, a really long line, co-finite sets, anything. Isn't that great?

</p>

