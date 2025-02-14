+++
title = "Linear Algebra and Its Applications, Part 2: Derivatives"

[extra]
is_archive = true
render_math = true
+++

I mentioned in my introduction post that this series would probably end up being about the applications of Linear Algebra to other fields of math or something. Well it's the first post, and we already stopped talking about real life applications! Whoops.

Consider the vector space with basis
$$
\mathscr\{B\} = \\{ 1, x, x^2, ... , x^n \\}
$$
over $\mathbb{R}.$ This is known as the **vector space of polynomials with real coefficients of degree n or less**, denoted by $\mathbb{R}[x]$ (some texts may use $P\_n)$. If it looks familiar, it probably showed up as a frequent example in your Linear Algebra problem sets (and is of extreme importance over an arbitrary field in Galois Theory)!

Note: while in Algebra the PID $\mathbb{F}[x]$ for $\mathbb{F}$ a field contains infinite degree polynomials, in this case we will assume $\mathbb{R}[x]$ to have finite degree polynomials with maximum degree $n$.

We can write an arbitrary element of any vector space as a **linear combination** of the elements of its basis set. In this case, an element of $\mathbb{R}[x]$ looks like a polynomial. A linear combination of the elements of $\mathscr{B}$ is of the form
$$
a + a\_1x + a\_2x^2 + ... a\_nx^n.
$$
We can use $f(x)$ and $g(x)$ to denote such linear combinations with shorthand $\sum\_{i=0}^{n} a\_ix^i$ for $a\_i \in \mathbb{R}$. Note that $x$ *isn't actually a variable:* we haven't defined a way to evaluate $x$ and it doesn't change based off the input. (If you're wondering how we evaluate polynomials in the traditional sense, we use something called the *evaluation homomorphism*).

We can use this vector space to do some cool things, like take ideas from Calculus and express them in the language of Linear Algebra! Remember the **derivative** from Calculus: in this case it's a map
$\frac{d}{dx} : \mathbb{R}[x] \to \mathbb{R}[x]$ such that
$$\frac\{d\}\{dx\}\left(a+a\_1x+...+a\_nx^n\right)=a\_1+2a\_2x+...+na\_nx^\{n-1\}.$$
In summation notation, it's saying that
$$\frac\{d\}\{dx\}\sum\_\{i=0\}^\{n\} a\_ix^i = \sum\_\{i=0\}^\{n-1\} (i+1)a\_\{i+1\}x^\{i\}.$$
Using the standard notations for derivatives, we can write $\frac{d}{dx}f(x)=f'(x)$ for $f(x)\in\mathbb{R}[x].$

We can show that the map $\frac{d}{dx} : \mathbb{R}[x] \to \mathbb{R}[x]$ is **linear**. Recall that the conditions for a map $T: V \to V$ to be linear are that
$$
\text\{1:\}\,\,T(v\_1+v\_2)=T(v\_1)+T(v\_2)
$$
$$
\text\{2:\}\,\,T(\alpha v) = \alpha T(v)
$$
for a vector space $V$ over a field $\mathbb{F}, v\_i \in V, \alpha \in \mathbb{F}.$ We know that
$$
\frac\{d\}\{dx\}\left(f(x) + g(x)\right) = \frac\{d\}\{dx\}f(x) + \frac\{d\}\{dx\}g(x)
$$
for $f(x), g(x) \in \mathbb{R}[x],$ satisfying the first condition. Next,
$$
\frac\{d\}\{dx\}\left( c f(x) \right) = c \frac\{d\}\{dx\}f(x)
$$
for $c \in \mathbb{R}, f(x) \in \mathbb{R}[x],$ so $\frac{d}{dx}$ is linear.

Furthermore, if a map from a vector space onto itself is linear, we can say it's a ***linear transformation.*** We can represent such transformations with a **matrix.** To find the matrix representation of a linear transformation, examine the column vectors that arise from the **image of the basis set under such linear transformation.** We denote this matrix as $[T]\_B$ for a vector space $T$ with basis set $B$, so for the derivative operator we would denote the image of $\mathscr{B}$ under $\frac{d}{dx}$ as $[\frac{d}{dx}]\_{\mathscr{B}}$.

To find the first column vector, examine the image of $1$ under $\frac{d}{dx}$: clearly it vanishes since constants don't change. So
$
[1]\_{\frac{d}{dx}}=
\Bigg[\begin{smallmatrix}
0 \\
\vdots \\
0 \\
\end{smallmatrix}\Bigg]
$
Similarly, we have
$$ [x]\_\{\frac\{d\}\{dx\}\} =
\begin\{bmatrix\}
1 \\
0 \\
\vdots \\
0 \\
\end\{bmatrix\}, \,[x^2]\_\{\frac\{d\}\{dx\}\} =
\begin\{bmatrix\}
0 \\
2 \\
0 \\
\vdots \\
0 \\
\end\{bmatrix\}, \,[x^3]\_\{\frac\{d\}\{dx\}\} =
\begin\{bmatrix\}
0 \\
0 \\
3 \\
0 \\
\vdots \\
0 \\
\end\{bmatrix\},
$$
and so on. Intuitively, this is because $\frac{d}{dx}x=1, \frac{d}{dx}x^2 = 2x, \frac{d}{dx}x^3=3x^2,$ etc, and we represent those values with the vectors above if we write them as a linear transformation of the elements of $\mathscr{B}$ (e.g. $2x=0\cdot 1+2x+0x^2 + \cdots$, $3x^2=0\cdot 1+0x+3x^2+0x^3+ \cdots).$

If we combine all these column vectors, we can find a matrix representation of the derivative! Here it is in all its glory:
$$
[\frac\{d\}\{dx\}]\_\{\mathscr\{B\}\} =
\begin{pmatrix}
0 & 1 & 0 & 0 & \cdots & 0 \\
0 & 0 & 2 & 0 & \cdots & 0 \\
0 & 0 & 0 & 3 & \cdots & 0 \\
0 & 0 & 0 & 0 & \ddots & \vdots \\
\vdots & \vdots & \vdots & \vdots & \ddots & n \\
0 & 0 & 0 & 0 & 0 & 0 \\
\end{pmatrix},
$$
where $\dim (\mathbb{R}[x]) = n+1$ (or $\mathbb{R}[x]$ having polynomials of a maximum degree $n$). You can multiply this matrix by some polynomial vectors in your free time to see if this really works.

Furthermore, the derivative matrix has an interesting algebraic property in that it's **nilpotent.** A nilpotent matrix is defined as one that eventually vanishes when multiplied by itself, that is, there exists some $k \in \mathbb{Z}$ such that
$$
A^k = 0,
$$
where $A$ is a matrix and $0$ denotes the zero matrix.

I won't offer a proof, but this is an intuitive result: recall from Analysis that no polynomial of finite degree is infinitely differentiable. So an arbitrary polynomial of degree $n$ will vanish if differentiated $n+1$ times, or in other words, multiplied by the matrix $\frac{d}{dx}^{n+1}$ (in Liebniz notation this would be denoted as $\frac{d^{n+1}}{dx^{n+1}}$). So clearly $\frac{d^{n+1}}{dx^{n+1}}$ corresponds to the zero matrix, and $k=n+1.$

