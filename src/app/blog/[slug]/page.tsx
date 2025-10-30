import { notFound } from 'next/navigation'
import { Link } from 'next-view-transitions'
import BLOG_POSTS from '@/data/blog'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="font-base">
      <Link
        href="/blog"
        className="mb-5 inline-block text-sm opacity-70 hover:opacity-100"
      >
        ← Back to Blog
      </Link>

      <article>
        <h1 className="text-2xl font-heading sm:text-4xl">{post.title}</h1>
        <p className="mt-2 text-sm opacity-70">{post.date}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-base border-2 border-border px-3 py-1 text-sm dark:border-darkBorder"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose dark:prose-invert mt-8 max-w-none">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map((line) => {
                  // Headers
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-2xl font-heading mt-8 mb-4">${line.slice(2)}</h1>`
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-xl font-heading mt-6 mb-3">${line.slice(3)}</h2>`
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-lg font-heading mt-5 mb-2">${line.slice(4)}</h3>`
                  }

                  // Code blocks
                  if (line.startsWith('```')) {
                    const lang = line.slice(3)
                    return lang
                      ? `<pre class="bg-black/5 dark:bg-white/5 rounded-base p-4 overflow-x-auto mt-4 mb-4"><code class="text-sm">`
                      : '</code></pre>'
                  }

                  // Inline code
                  const codeReplaced = line.replace(
                    /`([^`]+)`/g,
                    '<code class="bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">$1</code>',
                  )

                  // Lists
                  if (line.startsWith('- ')) {
                    return `<li class="ml-5 mb-1">${codeReplaced.slice(2)}</li>`
                  }
                  if (line.match(/^\d+\. /)) {
                    return `<li class="ml-5 mb-1">${codeReplaced.replace(/^\d+\. /, '')}</li>`
                  }

                  // Empty lines
                  if (line.trim() === '') {
                    return '<br/>'
                  }

                  // Regular paragraphs
                  return `<p class="mb-4">${codeReplaced}</p>`
                })
                .join('\n'),
            }}
          />
        </div>
      </article>
    </div>
  )
}
