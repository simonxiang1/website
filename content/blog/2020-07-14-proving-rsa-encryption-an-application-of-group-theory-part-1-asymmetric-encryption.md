+++
title = "Proving RSA Encryption: An Application of Group Theory (Part 1: Asymmetric Encryption)"

[extra]
render_math = true
is_archive = true
+++


If someone receives an email from me, they might notice a peculiar "signature.asc" file attached at the bottom. This is not a bug— this is so the recipient can decrypt this file with the **RSA encryption algorithm** and verify that the sender is in fact, me, and the message has not been tampered with.

In essence, how the RSA algorithm works is by multiplying two very large prime numbers, known only to the recipient of the message, and making the product public (this is known as a ***public key***). The sender uses the product to encrypt a message using an algorithm that only someone with knowledge of the two prime numbers (known as the ***private key***) can decrypt. We can leave the question of the computational difficulty of integer factorization, i.e., whether or not there exists an algorithm that factors large prime numbers in polynomial time, to the computer scientists (hopefully there isn't, or else a large portion of modern day encryption becomes useless).

What we're concerned with, as mathematicians, is the **validity** of the algorithm. We want to know, given ***any*** message, will the recipient ***always*** be able to decrypt the encrypted message with their private key and get the right message? Let's get right into the math— all you'll need to be familiar with is some basic number theory.

**Definition:** Let $n$ be the product of two prime numbers $p$ and $q$ respectively, and $s$ be an integer relatively prime to $(p-1)(q-1)$. Let $p, q,$ and $s$ be part of the ***private key***, and let $n$ and $r$ be part of the ***public key***, where $r$ is the *multiplicative inverse* of $s$ mod $(p-1)(q-1)$. That is, $rs \equiv 1$ mod $(p-1)(q-1)$.

The definitions may seem a little strange and arbitrary— no worries! Everything will fall into place over time. For now, our goal is to show that, using the public and private keys, the sender and recipient can *successfully complete an **encryption/decryption exchange***. Let's define what that is real quick: in this case, let $m$ be the message being encrypted (Note that $m$ is an integer— there are several ways to encode messages as integers that we will not cover here for the sake of brevity).

**Encryption:** Let $e$ equal the encrypted message, which is determined by
$$
e \equiv m^r \, (\text\{mod\} \, n).
$$
This is simple since $n$ and $r$ are known, and a computer can easily perform modular exponentiation in a reasonable amount of time.

**Decryption:** After receiving the encrypted message $e$, we decrypt it by computing
$$
e^s \equiv (m^r)^s \equiv m^\{rs\} \equiv m \, (\text\{mod\} \, n).
$$
We can do this because $s$ is part of the ***private key***. Note that in this case, we're dealing with a form of ***asymmetric encryption***, since **anyone with the public key** can encrypt a message but **only the owner of the private key** can decrypt it. Everything makes sense up until the last implication. How does $m^{rs} \equiv m \, (\text{mod} \, n)$?

We need a lemma.

**Lemma:** Let $n = pq$, where $p$ and $q$ are two distinct primes. If $a$ is an integer relatively prime to $n$ and $w$ is an integer such that $w=1$ mod $(p-1)(q-1)$, then
$$
a^w \equiv a \, (\text\{mod\} \, n).
$$

**Proof:** *Left as an exercise to the reader.*

Just kidding. This lemma is built off a powerful theorem, whose proof relies heavily on group theory. Since this post is getting rather long, I'll prove it in the next post, as well as shed some light on the intuition behind choosing the oddly specific number $(p-1)(q-1)$ for $s$ to be relatively prime to. Now that we have this lemma, the equivalence
$$
m^\{rs\} \equiv m \, (\text\{mod\} \, n)
$$
follows from the fact that we defined $r$ to be the *multiplicative inverse*  of $s$ (so $rs \equiv 1$ mod $(p-1)(q-1)$), and the lemma above, setting $a$ equal to $m$ and $w$ equal to $rs$.

And there we have it! Look out for part two, where I'll talk about digital signatures, group theory, and implementing this in real life.
