import { getAllPostSlugs, getPostBySlug } from '../../../lib/posts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  getAllPostSlugs().map((slug) => ({ slug }));

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="mx-auto grid max-w-4xl gap-2 p-8">
      <header>
        <time className="text-stone-600 dark:text-stone-400">
          {post.date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </header>
      <div
        className="prose prose-stone dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
