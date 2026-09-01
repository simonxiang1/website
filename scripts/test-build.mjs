import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const blogPostFiles = (await readdir('src/content/blog_posts')).filter((file) =>
  file.endsWith('.md'),
);
const blog = await readFile('dist/blog/index.html', 'utf8');
const home = await readFile('dist/index.html', 'utf8');
const about = await readFile('dist/about/index.html', 'utf8');
const resume = await readFile('dist/resume/index.html', 'utf8');
const styles = await readFile('src/styles/global.css', 'utf8');
const builtFiles = await readdir('dist', { recursive: true });

for (const [path, html] of [
  ['/', home],
  ['/about/', about],
  ['/blog/', blog],
  ['/resume/', resume],
]) {
  assert.doesNotMatch(
    html,
    /TypeError|An error occurred/,
    `${path} rendered an error`,
  );
}

assert.equal(
  (about.match(/<p class="about-copy">/g) ?? []).length,
  2,
  'Both About prose paragraphs must use the shared about-copy style',
);
assert.match(
  styles,
  /\.about-copy\s*{[^}]*font-size:\s*1\.1rem;/s,
  'The shared About prose style must define its font size',
);
assert.match(
  styles,
  /@font-face\s*{[^}]*font-family:\s*'Source Serif 4 Web';[^}]*source-serif-4-latin\.woff2/s,
  'The mobile fallback font must be declared',
);
assert.match(
  styles,
  /--serif:\s*'Iowan Old Style',\s*'Source Serif 4 Web'/,
  'Iowan Old Style must remain preferred over the bundled mobile fallback',
);
assert.match(
  blog,
  /<time datetime="\d{4}-\d{2}-\d{2}">\d{2}\.\d{2}\.\d{4}<\/time>/,
  'Blog dates must render as MM.DD.YYYY',
);

assert.match(
  resume,
  /<a\b(?=[^>]*href="\/files\/Simon_Xiang_resume\.pdf")(?=[^>]*target="_blank")(?=[^>]*rel="noreferrer")[^>]*>/,
  'The résumé PDF link must open in a new tab',
);

for (const file of builtFiles.filter((path) => path.endsWith('.html'))) {
  const html = await readFile(`dist/${file}`, 'utf8');
  for (const [, anchor, href] of html.matchAll(
    /(<a\b[^>]*href="(https?:\/\/[^"#]+)[^"]*"[^>]*>)/g,
  )) {
    if (href.startsWith('https://simonxiang.xyz')) continue;
    assert.match(
      anchor,
      /target="_blank"/,
      `External link must open in a new tab in ${file}: ${href}`,
    );
    assert.match(
      anchor,
      /rel="noreferrer"/,
      `External link must set noreferrer in ${file}: ${href}`,
    );
  }
}

const entries = [...blog.matchAll(/<li data-blog-post-entry\b[^>]*>/g)].map(
  ([entry]) => entry,
);

assert.equal(
  entries.length,
  blogPostFiles.length,
  'The blog index must render every Markdown post',
);

for (const entry of entries) {
  const tags = entry.match(/data-tags="([^"]*)"/)?.[1] ?? '';
  assert.ok(tags.length > 0, `A rendered blog post has no tags: ${entry}`);
}

assert.equal(
  (blog.match(/class="blog-post-tags"/g) ?? []).length,
  blogPostFiles.length,
  'Every blog post must render its visible tags',
);
assert.match(
  blog,
  /role="combobox"[^>]*data-tag-search/,
  'Tag combobox is missing',
);
assert.match(
  blog,
  /role="listbox"[^>]*data-tag-options/,
  'Tag options are missing',
);

console.log(`Build smoke test passed: ${entries.length} tagged blog posts.`);
