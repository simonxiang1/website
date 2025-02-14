+++
title = "Proving RSA Encryption: An Application of Group Theory (Part 2: Fermat's Little Theorem and Ring Theory)"

[extra]
render_math = true
is_archive = true
+++




This post is going to be a little heavy on the group theory— I'm going to try to build everything from the ground up but having a prior understanding of the basics of groups will be very useful. Let's start by stating an important theorem:

**Theorem** *(Fermat's Little Theorem):* Let $a \in \mathbb{Z}$, $p$ a prime. If $p$ doesn't divide $a$, then $p$ divides $a^{p-1} - 1$, that is,
$$
a^\{p-1\} \equiv 1 \, (\text\{mod\} \, p).
$$
Those with a background in number theory may be more familiar with this equivalent statement of the theorem: If $a \in \mathbb{Z}$, then $a^p \equiv a \, (\text{mod} \, p)$ for $p$ a prime.

**Proof:** *I have discovered a truly remarkable proof that is too large to be contained in the margins of this post.*

Just kidding. Before we prove Fermat's Little Theorem, let's talk about groups and fields. Here's how groups are defined (I'm going to let addition denote an arbitrary binary operation):

**Definition:** A ***group*** $\langle G,+ \rangle$ is a set $G$ closed under addition such that- $\mathscr{G}\_1$ (Associativity): For all $a, b, c \in G,$
  $$
  (a+b)+c = a+(b+c)
  $$
- $  \mathscr{G}\_2$ (Identity): There exists an element $0 \in G$ such that for all $a \in G$,
  $$
  0+a=a+0=a.
  $$
- $  \mathscr{G}\_3$ (Inverse): For all $a \in G$, there exists an $a' \in G$ such that
  $$
  a + a' = a' + a = 0.
  $$


The cool thing about groups is that they're very simple yet powerful: as long as ***any set*** paired with ***any binary operation*** satisfies these axioms, it forms a group, and all the theorems from group theory apply to it. It doesn't just have to be $\mathbb{R}$ with the standard addition, anything from the set of square matrices $(GL(n, \mathbb{C}))$ to the set of permutations on a regular $n$-gon $(S\_n)$ form a group.

Let's prove a theorem that will come in handy later. Since this post is going to be very technical, I'm not going to explain the proof since I'll have to explain everything that builds onto the main theorem used in the proof, Lagrange's Theorem.

**Theorem:** Let $G$ be a finite group under multiplication (so 1 is now the identity), and let $|G|$ denote its cardinality (order). Then for all $a \in G$,
$$
a^\{|G|\} = 1.
$$

**Proof:** By *Lagrange's Theorem*, the order of the element $a$ (the smallest positive integer $k$ such that $a^k=1$) must divide $|G|$, that is, $|G|=kn$ for some $n \in \mathbb{N}$. Then
$$
a^\{|G|\}=a^\{kn\}=(a^k)^n=1^n=1. \quad \boxtimes
$$

Let's take a look at the specific group $\mathbb{Z}\_p$, consisting of the set of integers
$$
\\{0,1,2, ... , p-1\\}
$$
for $p$ a prime, paired with the binary operation of modular arithmetic. For example, $5+6$ (mod 7) $\equiv 11$ (mod 7) $\equiv 4$. I'll leave it to you to check that this forms a group. We can actually go further: we can tack on a second binary operation (modular multiplication) and call it a ***ring***.

Rings have many properties, but the important ones are that multiplication is associative, follows the distributive law ($a\*(b+c) = a\*b + a\*c$), and that the ring has an identity for multiplication (there exists an element $1 \in R$ such that $1\*a=a\*1=a$ for all $a \in R$). Formally, a ring that has an identity element is called a *ring with unity*.

The thing about rings is that *not every element has a multiplicative inverse* like groups do. For example, take the element $0$. Since $0+0=0$, $a\*0=a\*(0+0)=a\*0+a\*0$ for all $a \in R$. If $a\*0=a\*0+a\*0$, just add the additive inverse of $a\*0$ to both sides of the equation to yield $0=a\*0+0=a\*0$. So $a\*0 = 0$ for all $a \in R$. Now if $0$ had a multiplicative inverse, that's saying that there exists some element $0' \in R$ such that $0'\*0=1$, which is a contradiction since we would have both $0'\*0=0$ and $0'\*0=1$. Therefore $0$ cannot have a multiplicative inverse.

Elements of rings that *do* have multiplicative inverses are called ***units***. We have another handy theorem that lets us classify the units in $\mathbb{Z}\_p$! However, I'm going to skip explaning the machinery behind the proof for the same reasons as the first proof.

**Theorem:** Let $n$ be the order of the ring $\mathbb{Z}\_n$ and $m \in \mathbb{Z}\_n$. Then if $\text{gcd}(m,n)=1, m$ is a ***unit***.

**Proof:** Since $\text{gcd}(m,n)=1$, for some $a, b \in \mathbb{Z}$, we have $an+bm=1$ by *Bezout's Identity.* By the *Division Algorithm*, we know there exist integers $q$ and $r$ such that $0 \leq r \leq n-1$ and $b=nq+r$. Then
$$
rm = (b-nq)m = bm-nqm = (1-an)-nqm = 1 - n(a+qm).
$$
Since we live in the ring $\mathbb{Z}\_n$, multiplication is commutative and multiples of $n$ will reduce to $0$ (mod $n$). Therefore $n(a+qm) \equiv 0 $ (mod $n$), and $rm=mr=1$. Since we have found a multiplicative inverse for $m \in \mathbb{Z}\_n$, we conclude that $m$ is a unit. $\quad \boxtimes$

There are special rings in which **every non-zero element is a ring** called ***fields***. Intuively, fields are algebraic structures in which *division*  is legal, since every element is a unit and therefore will remain in the field if "divided by" (multiplied by the multiplicative inverse) of another element in the field. From the previous theorem, the wonderful fact that $\mathbb{Z}\_p$ is a field for $p$ a prime follows! Notice that every non-zero element of $\mathbb{Z}\_p$ is relatively prime to $p$ (that is, gcd$(m,p)=1$ for $m \in \mathbb{Z}\_p$) since $p$ is a prime number, so every non-zero element of $\mathbb{Z}\_p$ is a unit, hence $\mathbb{Z}\_p$ is a field.

Algebra is all about analyzing *structure*. Like a phoenix rising from its ashes, a group emerges from this field. We claim that the ***set of units in $\mathbb{Z}\_p$ form a group*** for $p$ a prime. The hardest part about showing that this is a group **has already been done!** That is, showing that every element has an inverse, which is trivial since every element is a unit.

**We are ready to prove Fermat's Little Theorem**. Before we do, note that $p$ doesn't necessarily have to be prime for the set of units in $\mathbb{Z}\_p$ to from a group. However, since $p$ is prime, we know that every non-zero element is a unit, and therefore we can easily classify this group as consisting of the elements
$$
\\{1,2,3, ... ,p-1\\}
$$
and having order $p-1$. Let's denote our new group as $\mathbb{Z}\_p^\*$. For convenience, we'll restate Fermat's Little Theorem.

**Theorem** *(The Little Theorem of Fermat):* Let $a \in \mathbb{Z}$, $p$ a prime. If $p$ doesn't divide $a$, then $p$ divides $a^{p-1} - 1$, that is,
$$
a^\{p-1\} \equiv 1 \, (\text\{mod\} \, p).
$$

**Proof:** We can restate Fermat's Little Theorem as such: For all $a \in \mathbb{Z}\_p^\*$, $a^{p-1} \equiv 1$ (mod $p$). Recall a previous theorem: *If $G$ is a finite group under multiplication, then $a^{|G|}=1$ for all $a \in G$.* Clearly $\mathbb{Z}\_p^\*$ is a finite group under multiplication, and the order of $\mathbb{Z}\_p^\*$ is $p-1$, that is, $|\mathbb{Z}\_p^\*|=p-1$. Therefore, for all $a \in \mathbb{Z}\_p^\*$,
$$
a^\{p-1\} \equiv a^\{|\mathbb\{Z\}\_p^\*|\} \equiv 1 \, (\text\{mod\} \, p). \quad \boxtimes
$$

(For the curious reader: Here is the reasoning behind why the two statements of FLT are equivalent. Every integer will correspond to a coset of the quotient ring $\mathbb{Z}/p\mathbb{Z}.$ In other words, if $b \in \mathbb{Z}$, then $b \in a+p\mathbb{Z}$ for some $0 \lt a \leq p-1$ $(a \in \mathbb{Z}/p\mathbb{Z}),$ which implies $a+p\mathbb{Z}=b+p\mathbb{Z}$ by the definition of cosets. So we can restate FLT as such: $\forall b+p\mathbb{Z}, (b+p\mathbb{Z})^{p-1} \equiv 1$ (mod $p$) which implies $\forall a+p\mathbb{Z}, (a+p\mathbb{Z})^{p-1} \equiv 1$ (mod $p$). Since $\mathbb{Z}/p\mathbb{Z}$ and $\mathbb{Z}\_p$ are naturally isomorphic as rings (similarily, $\mathbb{Z}/p\mathbb{Z}^\*$ and $\mathbb{Z}\_p^\*$ as groups), this statement is the same as $\forall a \in \mathbb{Z}\_p, a^{p-1} \equiv 1$ (mod $p$). Therefore, FLT is equivalent to the alternate statement.)

Once again, this post has grown quite long. I'll wrap this series up in the next post, look forward to it!

by **[Simon Xiang](https://simonxiang.xyz/)**


