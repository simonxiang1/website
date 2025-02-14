+++
title = "All Voting Systems are Fundamentally Screwed"

[extra]
is_archive = true
render_math = true
+++

In light of the recent election, there's a lot of talk going on about alternate voting systems like ranked choice, with claims like "Libertarians are stealing *our* votes!" and "with ranked choice, \_\_\_\_ would have won!" Here's a mathematical approach to why **any** proposed alternative wouldn't work. This post is based off notes from the first UT math club lecture given by Tom Gannon, you can find them [here](https://github.com/simonxiang1/math_notes/blob/master/freshman_year/math_club/master_notes.pdf). Sorry for the clickbait title. Without further ado, let's begin.

How would we precisely define what a voting system is? Informally, we would probably need a list of *alternatives* to choose from, for each person to make an ordered list of such alternatives, and have a *societal preference list* as the output. We would also prefer there to be more than two alternatives, since the two party system has been the cause of much complaint. Mathematically, we would define two sets $A=\{\text{set of outcomes}\}$ and $N=\{\text{set of voters}\}$. Then a **voting system** would be defined as a function $$
F \colon L(A)^N \to L(A),
$$ where $L(A)$ denotes the set of all total orderings of $A$. Each person's individual ballot would be an $N$-tuple $(R\_1,\cdots,R\_N)\in L(A)^N$ (also called a *preference profile*). Let's give some examples of voting systems:

* **First Past the Post:** This is the system we use today. Everyone will submit a ballot with their top choice, and whoever gets picked as top choice the most will win.
* **Borda count:** This, along with instant-runoff, is a version of "ranked choice" voting that people ask for. Rate your candidates from 1-10 (not literally), then everyone's ratings get summed up: whichever candidate with the most points wins.
* **Last Past the Post:** This isn't real, but serves to push the definition of a voting system: it's like FPTP (First Past the Post), but whoever gets picked as top choice the *least* wins. By definition, this is still a voting system.
* **Dictatorship:** Our favorite system. There exists a dictator among the voters, and the societal preference list is literally just the dictator's ballot.


We would probably want our voting system to satisfy some reasonable conditions. For example, if everyone puts in the exact same ballot, then the output should be that ballot that everyone put in right? Also, if everyone ranks candidate $A$ above candidate $B$, then in the final ranking, $A$ should be greater than $B$. These conditions are called the **Pareto condition** and **independence of irrelevant alternatives**, respectively. We could also interpret indepedence of irrelevant alternatives as such: if we add a third candidate, it won't change the position of the other two candidates. Let's define these conditions mathematically:

**Definition:** A voting system satisfies the ***Pareto condition*** (unanimity) if given that an alternative $a$ is strictly greater than $b$ for all total orderings $R\_1,\cdots,R\_N$, then $a$ is strictly greater than $b $ in $F(R\_1,\cdots, R\_N)$.

**Definition:** A voting system is said to be ***independent of irrelevant alternatives*** (denoted IIA) if for two preference profiles $(R\_1,\cdots,R\_N)$ and $(S\_1,\cdots,S\_N)$ such that for all individuals $i$, alternatives $a$ and $b$ have the same order in $R\_i$ as in $S\_i$, then alternatives $a$ and $b$ have the same order in $F(R\_1,\cdots,R\_N)$ as in $F(S\_1,\cdots,S\_N)$.

These conditions seem pretty reasonable right? Let's take a look at what each of our voting systems satisfies.

| Criterion | FPTP | Borda | LPTP | Dictatorship |
|:----------|:-----|:------|:-----|:-------------|
| Pareto? | **Yes**  | **Yes** | **No** | **YES!** |
| IIA? | No | No | No | **YES!** |

- **Pareto FPTP**: If everyone chooses the same person, they will have the most votes and win
- **Pareto Borda**: For the same reason as FPTP
- **Pareto LPTP**: Everyone putting the same person first will result in them losing
- **IIA FPTP**: Introducing a third party may change the results
- **IIA Borda**: Same reason as FPTP but more severe since the new candidate will be weighted
- **IIA LPTP**: Introducing an irrelevant alternative will probably result in them winning

Do you see a pattern? The only voting system that satisfies both Pareto and IIA is a dictatorship! The natural question to ask then, is "are there any other systems that satisfy both Pareto and IIA"? The answer to that is **NO!** The *only* system that satisfies both Pareto and IIA is a dictatorship. This is called ***Arrow's Impossibility Theorem***, proving this shows that there *doesn't exist* a system that satisfies Pareto, is IIA, and isn't a dictatorship.

**Theorem** *(Arrow's Impossibility Theorem)***:** Assume that $V$ is a voting system with more than two alternatives which satisfies both Pareto and is independent of irrelevant alternatives. Then $V$ is a dictatorship.

**Corollary:** There exists no voting system that

* has more than two alternatives,
* satisfies the Pareto condition,
* is independent of irrelevant alternatives,
* and is NOT a dictatorship.


I won't get into the proof: you can find it [here](https://github.com/simonxiang1/math_notes/blob/master/freshman_year/math_club/master_notes.pdf). But proving this theorem says that any voting system you could possibly come up with will fail at least one of the conditions: so in other words, if we want reasonable voting criterion with more than two candidates, no can do! This may be out of character, but here are some practical reasons why other voting systems haven't been implemented:

**Instant Runoff**

* takes too much time (and therefore money), since one voting cycle is required for each candidate
* requires too much mental energy from each voter, forcing them to make several conscious choices rather than one

**Borda count**

* once again requires too much mental energy from each voter, forcing them to rank each candidate
* tends to elect people who are somewhat decent according to most people, rather than the best candidate that the majority want

**Dictatorship**

* objectively the best system, since citizens of a dictatorship fairly chose their supreme leader, unlike flawed systems like FPTP
* voting system of choice in wonderful progressive democracies like North Korea, Libya, and Iraq
* this message was approved by Ali Khamenei (Supreme leader of Iran), Kim Jong-un (Supreme leader of North Korea), Mswati III (King of Swaziland), and Chairman Mao


