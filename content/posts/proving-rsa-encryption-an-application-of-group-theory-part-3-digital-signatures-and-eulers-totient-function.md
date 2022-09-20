---
date: 2020-07-17
title: "(Archive) Proving RSA Encryption: An Application of Group Theory (Part 3: Digital Signatures and Euler's Totient Function)"
draft: false
---
<p>
We've finally proved Fermat's Little Theorem and explained some of the machinery behind groups and rings. Let's continue by defining an important function.
</p>
<p><b><u>Definition</u></b><em> (Euler's Totient Function):</em> Let $\varphi: \mathbb{Z}^+ \to \mathbb{Z}^+$ be defined as $\varphi(n) = $ the number of integers less than or equal to $n$ that are relatively prime to $n$ for $n \in \mathbb{Z}^+. \varphi$ is also known as the <b>Euler phi-function</b>.
</p>

<p>
As you can see, it can be quite hard to procure a general formula for $\varphi(n)$ for all $n$. However, in some cases it is relatively easy— for example, if $n$ is prime, then $\varphi(n)$ is simply $n-1.$ Recall from the last post that the Euler phi-function simply defines the <em>order</em> of the multiplicative group of units $\mathbb{Z}_n^*.$ We now state an important theorem:
</p>
<p><b><u>Theorem</u></b><em> (Euler's Theorem):</em> Let $a \in \mathbb{Z}$ be relatively prime to $n,$ that is, $\text{gcd}(a,n)=1.$ Then 
\[
a^{\varphi(n)} \equiv 1 \, (\text{mod} \, n),
\]
where $\varphi$ denotes the <em><b>Euler phi-function,</b></em> and $n \in \mathbb{Z}^+.$
</p>
<p><b><u>Proof:</u></b> Euler's Theorem is equivalent to the following statement: For all $a \in \mathbb{Z}_n^*$, $a^{\varphi(n)} \equiv 1$ (mod $n$). We know from a previous theorem that any element of a finite group raised to the power of the order of the group is $1.$ Since $|\mathbb{Z}_n^*|=\varphi(n)$, we have 
\[
a^{\varphi(n)} \equiv a^{|\mathbb{Z}_n^*|} \equiv 1 \, (\text{mod} \, n). \quad \boxtimes
\]
</p>

<p>
Notice that the reasoning behind the proof is almost the exact same as the proof of Fermat's Little Theorem: <b>Indeed, Euler's Theorem is simply a <em>generalization</em> of Fermat's Little Theorem—</b> Fermat's Little Theorem simply describes the case where $n$ is prime.
</p>
<p>
Let's calculate $\varphi(n)$ for $n=pq$, where $p$ and $q$ are two prime numbers. We want to find the number of integers less than or equal to $n$ that are relatively prime to $n$. First, note that the number of integers less than or equal to $n$ is $n-1,$ or $pq-1$. We want to subtract the number of integers that have a multiple in common with $n.$ This is what we have so far: 
\[
\varphi(n) = (pq - 1) - ? - ?
\]
 Since $n$ is composed of two prime numbers, this would entail the multiples of $p$ and $q$ (due to the unique factorization of $n$) that are less than $n$, since $n=pq$ is already accounted for. There are $p-1$ multiples of $q$ and $q-1$ multiples of $p$ that are less than or equal to $n$. This makes sense if you think about $n$ this way. Without loss of generality,
 \[
 n = pq = q + \cdots + q
 \]
 $p$ times. Then the distinct numbers
 \begin{align}
     &1:q \\
     &2:q + q \\
     &3:q + q + q \\
     & \vdots \\
     &p-1:q + \cdots + q 
 \end{align}
 are all multiples of $q$ that are less than $n$, hence why we stopped at the term $p-1$. Our goal is find the <em>number</em> of factors of $q$: then there must be $p-1$ factors since the set the set $\{1, 2, 3, \cdots p-1 \}$ has $p-1$ elements. A similar argument holds for the factors of $p$. We have some more information on how $\varphi(n)$ looks now...
 \begin{align}
     \varphi(n) &= (pq - 1) - (p - 1) - (q - 1) \\ 
                &= pq - p - q + 1 \\ 
                &= p(q-1)-(q-1) \\ 
                &= (p-1)(q-1).
 \end{align}
...Oh yeah, it's all coming together. 
</p>

<p>
Now we finally understand the reasoning behind choosing the seemingly arbitary number $(p-1)(q-1)$: it's the <em><b>order of the multiplicative group of integers mod $pq$</b></em>, which means <em><b>any element of $\mathbb{Z}_{pq}$ will reduce to 1 if raised to the power of $(p-1)(q-1)$ modulo $(p-1)(q-1)$ by Euler's Theorem.</b></em> Let us finally prove that pesky lemma from the first post.
</p>
<p><b><u>Lemma:</u></b> Let $n=pq$, where $p$ and $q$ are two distinct primes. If $a$ is an integer relatively prime to $n$ and $w$ is an integer such that $w \equiv 1 \, \text{mod} \, (p-1)(q-1)$, then 
\[
a^w \equiv a \, (\text{mod} \,n).
\]
</p>
<p><b><u>Proof:</u></b> Since $w \equiv 1 \, \text{mod} \,(p-1)(q-1), w = k(p-1)(q-1)+1$ for some $k \in \mathbb{Z}$. So
\begin{align}
    a^w &= a^{k(p-1)(q-1)+1} \\
        &= a^{(p-1)(q-1)^k}a \\
        &= a(a^{\varphi(n)})^k \\ 
        &\equiv a(1)^k \ \small{\text{by Euler's Theorem}} \\
        &= a \, (\text{mod} \, n).
\end{align}
</p>

<p>
With that, we've finally finished the theory behind RSA Encryption. Let's end this series with a real-world application, follow along on your Linux machines everyone! (Disclaimer: This should work on any machine with GPG installed).
</p>

<p>
We can use RSA Encryption to digitally sign messages, that is, generate a signature that anybody with my public key can decrypt, but only I can encrypt. Go ahead and <a href="https://gnupg.org/download" target="_blank">grab yourself of a copy of GnuPG</a>, the program we're going to use to create keys and verify signatures. If you're on Linux, just run 

<pre>
<code>sudo pacman -S gnupg</code>
</pre>

or some variant (if you're using Linux, I hope you know how to install packages).
</p>

<p>
We'll use the same notation as the original post, refer back to it if you need to. Go ahead and download <a href="https://simonxiang.xyz/examples/simonspublickey.gpg">my public key,</a> <a href="https://simonxiang.xyz/examples/hello_world.txt">the message we're going to be verifiying,</a> and <a href="https://simonxiang.xyz/examples/hello_world.sig">the digital signature generated by RSA Encryption.</a> 
</p>

<p>
The algorithm starts by encoding $m$ (hello_world.txt) as an integer. We generate the digital signature by using my <em><b>private key</b></em> and letting the singature equal 
\[
m^s \, (\text{mod} \, n).
\]
The resultant signature is encoded in the file hello_world.sig above. 
</p>

<p>
If you want to generate a GPG key pair and sign a file of your own, go ahead and open your terminal emulator and run 
<pre>
<code>gpg --gen-key</code>
</pre>
and follow the instructions. To generate the digital signature for a file, run 
<pre>
<code>gpg --output file.sig --detach-sig file</code>
</pre>
and replace <code>file.sig</code> with whatever name you want your signature file to be, and <code>file</code> with the file you want to sign. 
</p>

<p>
Now since I used my <em><b>private key</b></em> to sign this file, you'll need my <em><b>public key</b></em> to verify the signature. <code>cd</code> to the directory where you downloaded my public key, and run 
<pre>
<code>gpg --import simonspublickey.gpg</code>
</pre>
to add my public key to your <em><b>keyring</b></em>.
</p>
<p>
We verify the signature works by raising it to the power of $r$ (which is in the public key) to yield 
\[
(m^s)^r \equiv m^{rs} \equiv m \, (\text{mod} \, n)
\]
by our lemma. Isn't that neat? Basically, it compares both the message $m$ and the signature raised to the power of $r$, denoted $(m^s)^r$, and checks to see if the two match— if they do then great, if they don't, then the signature has been compromised/the message has been tampered with since it was sent, and should not be trusted.
</p>

<p>
To follow along on your own machine, <code>cd</code> to the directory you downloaded the files in and run
<pre>
<code>gpg --verify hello_world.sig hello_world.txt</code>
</pre>
Look at the third line of the output, which should read 
<pre>
<code>gpg: Good signature from "Simon ... " [unknown]</code>
</pre>
If it does, then we've successfully verified the digital signature using the steps described. We conclude that I am indeed the author of the message, and that it hasn't been tampered with since publication. (You can ignore the "<code>WARNING: This key is not certified with a trusted signature!</code>" message, it just means I haven't signed my GPG key yet.) 
</p>

<p>
And that's a wrap! If you want to send me encrypted emails, you have my public key now so feel free to do so. Together, we can use the power of math and encryption to protect our content from the peering eyes of the NSA!
</p>
