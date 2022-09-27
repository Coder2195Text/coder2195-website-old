import { GetStaticProps } from "next";
import { FC } from "react";
import Title from "../../components/global/title/Title";
import { fetchBlogSlugs, fetchBlogPost } from "../../graphql/queries";
import { IPost } from "../../graphql/types";
import BlogContent from "../../components/blog/blogContent/BlogContent";
import Head from "next/head";
import Footer from "../../components/global/footer/Footer";
import IconButton from "../../components/global/iconButton/IconButton";
import Image from "next/image";


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
        {post.coverImage ? <Image alt="" width={post.coverImage.width} height={post.coverImage.height} src={post.coverImage.url}/> : <></>}
        <BlogContent content={post.content.markdown}/>
        <Footer>
            <IconButton disabled={!post.next} href={`/posts/${post?.next}`}></IconButton>
            <IconButton href="/blog"></IconButton>
            <IconButton disabled={!post.previous} href={`/posts/${post?.previous}`}></IconButton>
        </Footer>
    </>
};

export default BlogPostPage;