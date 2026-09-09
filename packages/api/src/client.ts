import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

export const createGraphQLClient = (apiUrl:string) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: apiUrl,
        }),
        cache : new InMemoryCache(),
    });
};