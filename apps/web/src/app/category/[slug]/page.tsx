// apps/web/src/app/category/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { MOCK_POSTS } from "@/lib/mock-data"
import AdBannerSidebarSticky from "@/components/AdBannerSidebarSticky";
import { NewsArticle } from "@/types/types";
import { FaLongArrowAltRight, FaPlayCircle } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AdBannerLandscape from "@/components/AdBannerLandscape";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = ["politics", "latestnews", "business", "entertainment", "sports", "lifestyle", "usa", "travel"];

  return categories.map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Filter articles where category matches the route slug (e.g. "politics")
  const categoryPosts = MOCK_POSTS.filter(
    (article:NewsArticle) => article.category.toLowerCase() === slug.toLowerCase()
  );

  const categoryTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="container mx-auto px-4">
        <div className="block lg:hidden mb-3 justify-center">
            <AdBannerLandscape />
        </div>
      {/* Category Header */}
      <div className="border-b-2 border-site-red pb-3 mb-8">
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900">
          {categoryTitle}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Feed Column */}
        <section className="lg:col-span-9 flex flex-col gap-6">
          {categoryPosts.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-slate-500 text-sm">
                No articles found under category: <span className="font-semibold">{categoryTitle}</span>
              </p>
            </div>
          ) : (
            categoryPosts.map((post:NewsArticle) => {
              const formattedDate = new Date(post.date).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "short", day: "numeric" }
              );

              return (
                <article
                  key={post.id}
                  className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-slate-200 group"
                >
                  {/* Thumbnail Image */}
                  <Link
                    href={`/post/${post.slug}`}
                    className="relative w-full sm:w-52 h-36 bg-slate-100 rounded overflow-hidden shrink-0"
                  >
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 208px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Text Details */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-site-red transition-colors line-clamp-2 leading-snug">
                        <Link href={`/post/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <time className="text-[11px] text-slate-400 mt-2 block">
                      {formattedDate}
                    </time>
                  
                    <div className="flex items-center gap-3 mt-2">
                      {/* Video Badge (Premium Pill Look) */}
                      {post.videourl && (
                        <Link
                          href={`/post/${post.slug}`}
                          className="video-btn inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-site-red border border-red-100 text-[10px] font-bold uppercase tracking-wider hover:bg-site-red hover:text-white transition-all duration-200"
                        >
                          <FaPlayCircle size={11} />
                          <span>Watch</span>
                        </Link>
                      )}

                      {/* Read More Button (Subtle Arrow Slide) */}
                      <Link
                        href={`/post/${post.slug}`}
                        aria-label={`Read details for ${post.title}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:text-site-red group/btn transition-colors duration-200"
                      >
                        <span>Read Story</span>
                        <MdKeyboardDoubleArrowRight
                          size={15}
                          className="text-site-red transition-transform duration-200 group-hover/btn:translate-x-1"
                        />
                      </Link>
                    </div>


                  </div>
                </article>
              );
            })
          )}
        </section>

        {/* Sidebar Ads */}
        <aside className="hidden md:flex lg:col-span-3 flex-col items-center">
          <AdBannerSidebarSticky width="w-full max-w-[300px]" />
        </aside>
      </div>
    </main>
  );
}