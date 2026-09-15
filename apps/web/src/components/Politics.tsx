import { NewsArticle } from "@/types/types"
import OneColPostCardPL from "./OneColPostCardPL"
import TwoColsPostCardSm from "./TwoColsPostCardSm";
import CategoryFooterLink from "./CategoryFooterLink";

const Politics = ({articles}: {articles:NewsArticle[]}) => {
  const postLg:NewsArticle = articles.find((post) => post.categorytwo == "politics_large") || articles[0];
  return (
    <div className="my-5">
      <h2 className="font-medium text-2xl w-full pb-3 mb-5 uppercase b-line">Politics</h2>
      <div className="flex flex-col md:flex-row gap-6">
       
        <OneColPostCardPL article={postLg} />
      
       
        <TwoColsPostCardSm articles={articles} />
       
      </div>
      <CategoryFooterLink categoryName="Politic" categorySlug="sdsd" />
    </div>
  )
}

export default Politics