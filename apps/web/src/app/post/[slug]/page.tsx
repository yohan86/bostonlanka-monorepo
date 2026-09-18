// apps/web/src/app/post/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_POSTS } from "@/lib/mock-data";
import AdBannerSidebarSticky from "@/components/AdBannerSidebarSticky";
import { NewsArticle } from "@/types/types";
import AdBannerLandscape from "@/components/AdBannerLandscape";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}
export async function generateStaticParams() {
  const categories = ["politics", "latestnews", "business", "entertainment", "sports", "lifestyle", "usa", "travel"];

  return categories.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  // Match the route slug against article.slug
  const post = MOCK_POSTS.find((item:NewsArticle) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="container flex py-8 items-center justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-9 flex flex-col gap-3">
            <div>
                {/* Category link takes you back to category archive */}
                <Link
                href={`/category/${post.category}`}
                className="text-xs font-bold uppercase tracking-wider text-site-red hover:underline mb-2 inline-block"
                >
                {post.category}
                </Link>

                <h1 className="text-xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                {post.title}
                </h1>

                <time className="text-xs text-slate-400 mt-3 block">
                Published on {formattedDate}
                </time>
            </div>
            <div className="block lg:hidden mb-3 justify-center">
                <AdBannerLandscape />
            </div>

          <div className="relative w-full h-[280px] sm:h-[420px] rounded-lg overflow-hidden bg-slate-100">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none text-slate-800 text-sm md:text-base leading-relaxed whitespace-pre-line border-t border-slate-100 md:pt-6">
            {post.content}
          </div>
        </article>

        <aside className="hidden md:block lg:col-span-3 flex flex-col items-center">
          <AdBannerSidebarSticky width="w-full max-w-[200px]" />
        </aside>
      </div>
    </main>
  );
}