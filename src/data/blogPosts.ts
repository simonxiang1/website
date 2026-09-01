import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog_posts'>;

export function blogPostId(blogPost: BlogPost): string {
  return blogPost.id.replace(/\.(md|mdx)$/, '');
}

export function blogPostSlug(blogPost: BlogPost): string {
  return blogPostId(blogPost).replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export function blogPostDate(blogPost: BlogPost): Date {
  const match = blogPostId(blogPost).match(/^\d{4}-\d{2}-\d{2}/);
  return new Date(`${match?.[0] ?? '1970-01-01'}T12:00:00Z`);
}

export function blogPostDateLabel(blogPost: BlogPost): string {
  const [year, month, day] = blogPostDate(blogPost)
    .toISOString()
    .slice(0, 10)
    .split('-');
  return `${month}.${day}.${year}`;
}

export function blogPostDateValue(blogPost: BlogPost): string {
  return blogPostDate(blogPost).toISOString().slice(0, 10);
}

export function sortBlogPosts(blogPosts: BlogPost[]): BlogPost[] {
  return blogPosts.sort(
    (a, b) => blogPostDate(b).valueOf() - blogPostDate(a).valueOf(),
  );
}

export function readingMinutes(blogPost: BlogPost): number {
  const words = (blogPost.body ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
