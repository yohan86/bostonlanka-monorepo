export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  category: string;
  categorytwo?: string;
  publishedAt?: string;
  featuredImage: {
    node:{
       sourceUrl: string;
       altText: string;
    }
  },
  videourl?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl: string;
}