import { Link } from 'next-view-transitions'
import BLOG_POSTS from '@/data/blog'

export default function BlogPage() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Blog</h1>
      <p className="mt-2 text-base sm:text-lg">
        Thoughts on frontend development, performance, and engineering best practices.
      </p>

      <div className="mt-10 space-y-8">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-base border-2 border-border p-5 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-light dark:border-darkBorder dark:hover:shadow-dark"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-heading sm:text-2xl">{post.title}</h2>
            </div>
            <p className="mt-1 text-sm opacity-70">{post.date}</p>
            <p className="mt-3 text-base">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-base border-2 border-border px-3 py-1 text-sm dark:border-darkBorder"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
