import { GraphQLClient } from "graphql-request";
import { IPost } from "./types";

const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/cl8hzzoiu59rq01tccufrg18c/master'
);


export async function fetchBlogPreviews(){
    return await hygraph.request<{posts: Array<IPost>}>(`
        {
            posts {
              slug
              title
            }
        }
    `)
}