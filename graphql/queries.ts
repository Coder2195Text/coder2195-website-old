import { gql, GraphQLClient } from "graphql-request";
import { IBlogPost, ISocial } from "./types";

const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/cl8hzzoiu59rq01tccufrg18c/master'
);


export async function fetchBlogPreviews() {
    const { blogPosts } = await hygraph.request<{ blogPosts: IBlogPost[] }>(`
        query {
            blogPosts(orderBy: createdAt_DESC) {
                slug
                excerpt
                title
            }
        }
    `)
    return blogPosts;
}

export async function fetchBlogPost(slug: string) {
    const { blogPost } = await hygraph.request<{ blogPost: IBlogPost }>(`
        query ($slug: String!){
            blogPost(where: { slug: $slug }) {
                title
                excerpt
                coverImage {
                    url
                    width
                    height
                }
                content {
                    markdown
                }
                date
                next {
                    slug
                }
                previous {
                    slug
                }
            }
        }
    `, { slug })
    return blogPost;
}

export async function fetchBlogSlugs() {
    const { blogPosts } = await hygraph.request<{ blogPosts: IBlogPost[] }>(`
        query {
            blogPosts {
                slug
            }
        }
    `)
    return blogPosts.map((post: IBlogPost) => { return post.slug })
}

export async function fetchSocials(){
    const {socials} = await hygraph.request<{socials: ISocial[]}>(`
        query {
            socials {
                icon
                url
                target
            }
        }
    `)
    return socials
}