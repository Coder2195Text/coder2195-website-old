import { GetStaticProps } from "next";
import { FC } from "react";
import CoverImage from "../../components/blog/coverImage/CoverImage";
import Title from "../../components/global/title/Title";
import { fetchBlogSlugs, fetchBlogPost } from "../../graphql/queries";
import { IPost } from "../../graphql/types";
import BlogContent from "../../components/blog/blogContent/BlogContent";
import Head from "next/head";
import BlogFooter from "../../components/blog/blogFooter/BlogFooter";


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params!.slug;
    if (typeof slug != "string") return { props: {} };
    const post = await fetchBlogPost(slug);

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const slugs = await fetchBlogSlugs();

    return {
        paths: slugs.map((slug) => ({
            params: { slug },
        })),
        fallback: "blocking",
    };
}

interface Props {
    post: IPost
}

const BlogPostPage: FC<Props> = ({post}) => {
    return <>
        <Head>
            <title>{`Blog: ${post.title}`}</title>
        </Head>
        <Title>{post.title}</Title>
        <CoverImage image={post.coverImage}/>
        <BlogContent content={post.content.markdown}/>
        <BlogFooter post={post}/>
    </>
};

export default BlogPostPage;