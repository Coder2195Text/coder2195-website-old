import { gql, GraphQLClient } from "graphql-request";
import { IPost } from "./types";

const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/cl8hzzoiu59rq01tccufrg18c/master'
);


export async function fetchBlogPreviews() {
    const { posts } = await hygraph.request<{ posts: IPost[] }>(`
        query {
            posts {
                slug
                excerpt
                title
            }
        }
    `)
    return posts;
}

export async function fetchBlogPost(slug: string) {
    const { post } = await hygraph.request<{ post: IPost }>(`
        query ($slug: String!){
            post(where: { slug: $slug }) {
                title
                coverImage
                content {
                    markdown
                }
                date
            }
        }
    `, { slug })
    return post;
}

export async function fetchBlogSlugs() {
    const { posts } = await hygraph.request<{ posts: IPost[] }>(`
        query {
            posts {
                slug
            }
        }
    `)
    return posts.map((post: IPost) => { return post.slug })
}