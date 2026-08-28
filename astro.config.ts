import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import type { Element, Root, RootContent } from 'hast';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

function rehypeExternalLinks() {
  return (tree: Root) => {
    const visit = (node: Root | RootContent) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const link = node as Element;
        const href = link.properties.href;
        if (
          typeof href === 'string' &&
          /^https?:\/\//.test(href) &&
          !href.startsWith('https://simonxiang.xyz')
        ) {
          link.properties = {
            ...link.properties,
            target: '_blank',
            rel: ['noreferrer'],
          };
        }
      }

      if ('children' in node) node.children.forEach(visit);
    };

    visit(tree);
  };
}

export default defineConfig({
  site: 'https://simonxiang.xyz',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !/\/blog\/\d{4}-\d{2}-\d{2}-/.test(page),
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeExternalLinks,
        [rehypeKatex, { strict: false, throwOnError: false }],
      ],
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
