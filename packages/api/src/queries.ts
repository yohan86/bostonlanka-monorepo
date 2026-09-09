import { gql } from "@apollo/client";

export const GET_NEWS_FEED = gql`
    query GetNewsFeed( $first: int=10 ){
        posts(first: $first){
            nodes{
                id
                title
                slug
                date
                excerpt
                featuredImage{
                    node{
                        sourceUrl
                        altText
                    }
                }
            }
        }
    }
`;