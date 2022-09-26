import { GetStaticProps } from "next";
import { FC } from "react";
import { fetchBlogSlugs, fetchBlogPost } from "../../graphql/queries";
import { IPost } from "../../graphql/types";


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

const BlogPostPage: FC<Props> = (param) => {
    return <>{JSON.stringify(param)}</>
};

export default BlogPostPage;