import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { z } from 'zod';

const postsDirectory = path.join(process.cwd(), 'content/posts');

const frontmatterSchema = z.object({
  title: z.string(),
  date: z.date(),
  excerpt: z.string().optional(),
});

export interface PostMetadata extends z.infer<typeof frontmatterSchema> {
  slug: string;
}

export interface Post extends PostMetadata {
  contentHtml: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getAllPosts(): PostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      const parsed = frontmatterSchema.parse(data);

      return { slug, ...parsed };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const parsed = frontmatterSchema.parse(data);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { slug, ...parsed, contentHtml };
}
