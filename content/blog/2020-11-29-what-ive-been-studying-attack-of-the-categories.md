+++
title = "What I've Been Studying: Attack of the Categories"

[extra]
is_archive = true
render_math = true
+++

Now that the institution of learning has temporarily ceased operation, I can finally get to studying academic material, which is what I wanted to do all along. Sadly school got in the way. I've seen people post what they've been learning online, not so much as something that others would be interested in, but rather as a time capsule and reflection of sorts. Which seemed like a mighty fine idea, hence this post. Here's what I've been studying over Thanksgiving break (more loosely, somewhat recently), now that I have no tedious homework or essays to write. The main topic was algebraic topology, as always.

### Category Theory

As the title suggests, I've been brushing up on some category theory.

* Specifically, I added some constructions to my list of examples like the homotopy category $\mathsf{hTop}$ and the chain complex functors and algebraic homology functor, the latter two when composed assign a sequence of abelian homology groups to a space.
* The biggest development was wrapping my head around **products** and **coproducts** of categories. These satisfy *universal properties*, that is, when they exist relative to some morphisms, they're unique. Coproducts are the dual categorical construction of products by reversing the arrows, they take inclusion maps into a space uniquely, the set theoretic example being the disjoint union. We can also generalize these to more than two objects by means of **cones** and **cocones**, and later on limits and colimits.
* I reviewed what **monomorphisms** and **epimorphisms** were, and realized the boundary maps $H\_n(X,A)\overset{\partial}{\longrightarrow}H\_{n-1}(A)$ and the the change-of-coefficient homomorphisms $H\_n(X;G\_1)\to H\_n(X;G\_2)$ as natural transformations.
* If I have time, I plan on learning about the Yoneda lemma, limits and colimits, pullbacks and pushouts, and abelian categories.

### Algebraic Topology

Everything I learn is to aid my study of algebraic topology, of course, but here is the pure algebraic topology concepts I covered. The big development was reveiwing shaky foundations, including

* **Cell complexes.** Hatcher's exposition was way too dense for me at the beginning of the semester, but now that I've matured a little I revisited it in depth and it actually makes a lot of sense. The general idea of building complexes by attaching higher dimensional cells is intuitive (and worked somewhat for most of the semester), but I finally worked out the details of the structure of attaching maps and cells. Specifically, forming the $n$-skeleton $X^n$ from $X^{n-1}$ by attaching $n$-cells $e\_{\alpha}^n$ via maps $\varphi\_{\alpha} \colon S^{n-1} \to X^{n-1}$, where $X^n=X^{n-1}\amalg\_{\alpha}D\_{\alpha}^n/\sim$ and $\sim$ is the relation $x\sim \varphi\_{\alpha}(x)$ for $x\in \partial D\_{\alpha}^n=S^{n-1}$ to get $X^n=X^{n-1}\amalg\_{\alpha}e\_{\alpha}^n$ made no sense to me. So I worked out examples with $n=1,2,3$ in detail, which illuminated the attaching formula significantly.
* There were also portions of general CW theory that I missed, like what a **characteristic map** was, and the formal definitions of a **subcomplex** and **CW pairs**.
* I covered the constructions you can do with CW complexes in depth. For example:
  + **Products:** Essentially the complex with product cells ranging over the base complexes.
  + **Quotients:** These take a CW pair $(X,A)$ and smoosh $A$ down to a point (or $0$-cell).
  + **Suspension:** An important yet seemingly weird construction, build from two **cones**, defined as the quotient $(X\times I)/(X\times \{0\})$ to a point. For example, the suspension of the circle $S^1$ looks like a two-sided top.
  + **Join:** This joins two spaces $X$ and $Y$ by line segments between points, formally $X\times Y\times I/\sim$ with the relation $(x,y\_1,0)\sim(x,y\_2,0)$ and $(x\_1,y,1)\sim(x\_2,y,1)$. This is a particularly confusing construction, so I worked out several examples in detail. You can also view a **simplex** as an iterated join of points.
  + **Wedge Sum:** This fundamental construction is made by identifying two spaces together at a point. For example, $S^1\vee S^1$ is the figure eight, $S^1\vee S^1\vee S^1$ is the fidget spinner, and a wedge sum of $n$ circles is the $n$-bouquet. A neat fact is that for any complex, the quotient $X^n/X^{n-1}$ is the wedge sum of $n$-spheres $\bigvee\_{\alpha}S\_{\alpha}^n$, since collapsing the previous structure to a point leaves us with a bunch of $n$-cells joined at a $0$-cell, precisely the wedge sum of $n$-spheres.
  + **Smash Product:** This is a construction I have never used before, to be honest. Its the quotient of the product by collapsing the wedge sum, or $(X\times Y)/(X\vee Y)$. You can think of it as deleting overlapping structure of the product. It makes a lot more sense with examples, some of them being:
    - The smash product of two circles $S^1\wedge S^1$ is the torus $\mathbb T$ quotient the figure eight, which can the thought of simultaneously contracting the inner ring and an outer ring, so the resulting structure is the simply-connected $2$-sphere $S^2$.
    - Smashing any space $X$ and the two point sphere $S^0$ results in $X$, because $X\times S^0$ is simply two copies of $X$, and you identify a copy of $X$ to a point in the other copy of $X$, which is just $X$ again.
    - To generalize the first example, the smash product of an $n$-sphere and an $m$-sphere is the $(n+m)$-sphere, or $S^n\wedge S^m=S^{n+m}.$ To see why, the product CW structure has four cells, a zero cell, an $n$-cell, an $m$-cell, and an $(n+m)$-cell. The wedge sum wedges everything but the $(n+m)$-cell together, and collapsing that to a point yields an $(n+m)$-cell plus a $0$-cell, which is precisely $S^{n+m}$.
* We also have that collapsing a contractible subcomplex to a point preserves homotopy type, which can be used to show that finite connected graphs look like wedges of $S^1$, and $S^2/S^0$ and $S^1\vee S^2$ are homotopy equivalent.
* I also reviewed the **Euler characteristic** $\chi(X)$ defined by even cells minus odd cells, or formally $\chi(X)=\sum\_{n=0}^k(-1)^nc\_n$. With $k=2$, and $0$-cells as vertices, $1$-cells as edges, and $2$-cells as faces, this turns out to be the familiar formula $V-E+F=2$ for convex polyhedra.
* I did an in depth study of the real projective space $\mathbb R \mathrm P^n$, focusing on how to visualize the realization of $\mathbb R \mathrm P^n$ as the sphere with antipodal points identified, that is, how $\mathbb R\mathrm P^n\cong S^n /(v\sim -v)$. Dealing with lower dimensional cases helped, the general idea is to realize lines as a specific angle in the upper hemisphere, since they go through both and considering two sets of angles would be redundant. Then, we can inductively build $\mathbb R\mathrm P^n$ from $\mathbb R \mathrm P^0,\mathbb R \mathrm P^1$, etc by giving $\mathbb R \mathrm P^n$ a CW structure, which turns out to be one $n$-cell for each dimension. That is, $\mathbb R \mathrm P^0=e^0\cup e^1\cup \cdots \cup e^n$.
* I also covered the complex projective space $\mathbb C \mathrm P^n$, and how it has a CW structure $\mathbb C\mathrm P^n=e^0\cup e^2\cup \cdots \cup e^{2n}$. Something I would like to understand better is how exactly we visualize the construction of $\mathbb R \mathrm P^2$ and $\mathbb C \mathrm P^1$, since these immerse in $\mathbb R^3$ (Boy's surface), but how exactly the immersions were constructed is unclear to me.
* Since we're going to talk about homotopy theory next week, I read a little bit about the higher homotopy groups of spheres in Hatcher, and started to define the higher homotopy groups.
* Finally, I began reviewing basic fundamental concepts like the fundamental group (haha), and the fact that $\pi\_1(S^1)=\mathbb Z$, since I didn't understand that proof the first time around. I also plan on reviewing basic covering space theory.

### Group Theory

Before UT, I thought I knew everything there was to know about groups. This turned out to be a horribly misinformed perception of reality.

* To complement the study of products in category theory, I studied the **direct product** in depth. There's more to it than "addition componentwise", it turns out if you have two normal subgroups $H,K\trianglelefteq G$ where you can write every $g\in G$ uniquely as a product $hk$ for $h\in H$ and $k\in K$, and $H,K$ have trivial intersection, then the amazing fact follows that $G$ must be isomorphic to the product $H\times K$!
* Now I'm working on wrapping my head around the **semidirect product**, a generalization of the direct product by relaxing the normality of one of the subgroups. This means we have to consider the action induced by a homomorphism into the automorphism group of the normal subgroup, to defined the product as $(h\_1,k\_1)(h\_2,k\_2)=(h\_1k\_1\cdot h\_2,k\_1,k\_2)$ (where $\cdot$ denotes the left action of the homomorphism $\varphi$). This is a generalization because if $\varphi$ is the trivial homomorphism the operation simply becomes the same as componentwise multiplication.
* I also reviewed the idea of **free abelian groups**, which are defined in a linear algebraic fashion but turn out to be isomorphic to copies of $\mathbb Z$, which I proved as an exercise. Furthermore, they have a *basis* that generates the group, and every basis has the same amount of elements.
* If I have time, I plan on completing the proof of the **fundamental theorem of finitely generated abelian groups**, something I have been interested in since my first abstract algebra course. The theorem says that every finitely generated abelian group $A$ is isomorphic to copies of $\mathbb Z$ mod prime power (nonunique), plus copies of the infinite cyclic $\mathbb Z$, or more concisely$$
  A \simeq \bigoplus\_i \mathbb Z\_\{p\_i^\{k\_i\}\}\oplus \mathbb Z^n.
  $$

### LaTeX

* I cleaned up my preamble a little (removed some comments and failed features)! I also figured out how to defined general theorem and definition environments, for example now I can do cool things like:
  
  **Zorn's Lemma:** If every chain in a poset $P$ has an upper bound, then $P$ has a maximal element.
  
  in LaTeX! Before, I would have to do something lame like **Lemma** (Zorn). The main purpose was for the number of constructions we can do on CW complexes, but this will certainly come in handly later if I don't want to define an entire environment for one theorem.
* I also cleaned up the structure of my algebraic topology notes. For example, the files used to be called `notes_1.tex, notes_2.tex`, but now they have the appropiate naming scheme of `category_theory.tex, homology.tex`, etc.

### Planned Learning

* Everything mentioned at the end of the sections above, of course.
* Our complex analysis course never covered things like analytic continuation and what a meromorphic function was, so I'll probably take some notes on such topics in my free time.
* I also want to study more linear algebra, since at UNT we didn't cover very much (as it was a course for engineers). Some topics include reviewing orthogonal and orthonormal bases, learning about inner product spaces, dual spaces, and tensors.
* Finally, over winter I plan to read chapter 5 of Pugh's *Analysis* (the section on multivariate analysis), in preparation for my differential topology and Riemannian geometry courses next semester.

Detailed notes on every topic mentioned can be found [here](https://github.com/simonxiang1/math_notes/blob/master/freshman_year/algebraic_topology/master_notes.pdf) (or more generally, [here](https://github.com/simonxiang1/math_notes/)).


