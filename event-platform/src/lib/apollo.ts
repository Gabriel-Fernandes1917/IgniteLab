import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o734pr0ylz01xmfp6p1glr/master',
    cache: new InMemoryCache()
})