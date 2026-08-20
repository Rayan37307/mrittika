import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/blog";

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-sage text-cream">
      <div className="container-px">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-cream/70 mb-2">
            From the journal
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream">My Blog</h2>
        </div>

        <div className="flex flex-col divide-y divide-cream/15">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 py-7 first:pt-0"
            >
              <div className="relative w-full sm:w-40 shrink-0 aspect-[4/3] sm:aspect-square rounded-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 160px, 100vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 bg-terracotta text-cream text-[10px] tracking-wide font-medium px-2.5 py-1 rounded-sm">
                  {post.tag}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-xs text-cream/70">
                    Posted by <span className="text-cream/90">{post.author}</span>
                  </p>
                  <span className="flex items-center gap-1.5 text-cream/50">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                      <path
                        d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .17 2.83L8.9 10.24a3 3 0 1 0 0 3.52l6.27 3.4a3 3 0 1 0 .82-1.77l-6.27-3.4a3 3 0 0 0 0-1.98l6.27-3.4c.28.24.6.43.94.55A3 3 0 0 0 18 8Z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                    </svg>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                      <path
                        d="M6 4h12v16l-6-3.5L6 20V4Z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-cream mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-cream/75 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>

              <Link
                href="#blog"
                className="inline-flex items-center justify-center shrink-0 rounded-full border border-cream/40 hover:bg-cream hover:text-sage-dark transition-colors text-cream px-6 py-3 text-sm font-medium tracking-wide w-fit"
              >
                Continue Reading
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
