import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { blogPostDate, blogPostSlug, sortBlogPosts } from '../data/blogPosts';

export async function GET(context: { site: URL }) {
  const blogPosts = sortBlogPosts(
    await getCollection('blog_posts', ({ data }) => !data.draft),
  );

  return rss({
    title: "Simon Xiang's blog",
    description:
      'Posts about mathematics, ML systems, performance, and other things Simon is learning.',
    site: context.site,
    items: blogPosts.map((blogPost) => ({
      title: blogPost.data.title,
      description: blogPost.data.description ?? blogPost.data.title,
      pubDate: blogPostDate(blogPost),
      link: `/blog/${blogPostSlug(blogPost)}/`,
    })),
  });
}
