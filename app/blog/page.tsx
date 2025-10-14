import { Link } from '../../components/Link';
import { getAllPosts } from '../../lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="grid gap-8 p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div>
        {posts.map((post) => (
          <article key={post.slug} className="grid gap-1">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold"
            >
              {post.title}
            </Link>
            <time className="text-sm text-stone-600 dark:text-stone-400">
              {post.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.excerpt && (
              <p className="text-stone-700 dark:text-stone-300">
                {post.excerpt}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
