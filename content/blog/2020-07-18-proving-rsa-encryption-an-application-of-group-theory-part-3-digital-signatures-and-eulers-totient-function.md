+++
title = "Proving RSA Encryption: An Application of Group Theory (Part 3: Digital Signatures and Euler's Totient Function)"

[extra]
render_math = true
is_archive = true
+++

We've finally proved Fermat's Little Theorem and explained some of the machinery behind groups and rings. Let's continue by defining an important function.

**Definition** *(Euler's Totient Function):* Let $\varphi: \mathbb{Z}^+ \to \mathbb{Z}^+$ be defined as $\varphi(n) = $ the number of integers less than or equal to $n$ that are relatively prime to $n$ for $n \in \mathbb{Z}^+. \varphi$ is also known as the **Euler phi-function**.

As you can see, it can be quite hard to procure a general formula for $\varphi(n)$ for all $n$. However, in some cases it is relatively easy— for example, if $n$ is prime, then $\varphi(n)$ is simply $n-1.$ Recall from the last post that the Euler phi-function simply defines the *order* of the multiplicative group of units $\mathbb{Z}\_n^\*.$ We now state an important theorem:

**Theorem** *(Euler's Theorem):* Let $a \in \mathbb{Z}$ be relatively prime to $n,$ that is, $\text{gcd}(a,n)=1.$ Then
$$
a^\{\varphi(n)\} \equiv 1 \, (\text\{mod\} \, n),
$$
where $\varphi$ denotes the ***Euler phi-function,*** and $n \in \mathbb{Z}^+.$

**Proof:** Euler's Theorem is equivalent to the following statement: For all $a \in \mathbb{Z}\_n^\*$, $a^{\varphi(n)} \equiv 1$ (mod $n$). We know from a previous theorem that any element of a finite group raised to the power of the order of the group is $1.$ Since $|\mathbb{Z}\_n^\*|=\varphi(n)$, we have
$$
a^\{\varphi(n)\} \equiv a^\{|\mathbb\{Z\}\_n^\*|\} \equiv 1 \, (\text\{mod\} \, n). \quad \boxtimes
$$

Notice that the reasoning behind the proof is almost the exact same as the proof of Fermat's Little Theorem: **Indeed, Euler's Theorem is simply a *generalization* of Fermat's Little Theorem—** Fermat's Little Theorem simply describes the case where $n$ is prime.

*Update (2025): The rest has been omitted because I couldn't get the KaTeK align environment working.*

