import Image from "next/image";
import { posts } from "@/data/blog";

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-cream-dark/40">
      <div className="container-px">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">
            From the journal
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">My Blog</h2>
        </div>

        <div className="flex flex-col divide-y hairline">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col sm:flex-row gap-5 sm:gap-8 py-7 first:pt-0"
            >
              <div className="relative w-full sm:w-56 shrink-0 aspect-[4/3] sm:aspect-square rounded-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 224px, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-cream rounded-sm px-2.5 py-1.5 text-center leading-tight">
                  <div className="text-sm font-medium text-ink">{post.day}</div>
                  <div className="text-[10px] uppercase text-ink-soft">{post.month}</div>
                </div>
                <span className="absolute bottom-3 left-3 bg-terracotta text-cream text-[10px] tracking-wide font-medium px-2.5 py-1 rounded-sm">
                  {post.tag}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-xs text-sage-dark mb-2">
                  Posted by <span className="text-ink-soft">{post.author}</span>
                </p>
                <h3 className="font-display text-xl sm:text-2xl text-ink mb-2.5">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-4 max-w-2xl">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors w-fit"
                >
                  Continue Reading
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
