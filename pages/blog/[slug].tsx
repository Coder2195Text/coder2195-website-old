import { GetStaticProps } from "next";
import { FC } from "react";
import { fetchBlogSlugs, fetchBlogPost } from "../../graphql/queries";
import { IBlogPost } from "../../graphql/types";
import Footer from "../../components/footer/Footer";
import IconButton from "../../components/iconButton/IconButton";
import Image from "next/image";
import { NextSeo } from "next-seo";
import MDContent from "../../components/MDContent/MDContent";


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
    post: IBlogPost
}

const BlogPostPage: FC<Props> = ({post}) => {
    const title = `Coder2195 - Blog: ${post.title}`
    const description = post.excerpt ? post.excerpt : ""
    return <>
        <NextSeo 
				title={title} 
				description={description}
				openGraph={{
					title,
					description
				}}
			/>
        <h1 id="title">{post.title}</h1>
        {post.coverImage ? <Image alt="" width={post.coverImage.width} height={post.coverImage.height} src={post.coverImage.url}/> : <></>}
        <div style={{marginLeft: "5vw", marginRight: "5vw"}}>
            <MDContent content={post.content.markdown}/>
        </div>
        <Footer>
            <IconButton disabled={!post.next} href={`/posts/${post?.next}`}></IconButton>
            <IconButton href="/blog"></IconButton>
            <IconButton disabled={!post.previous} href={`/posts/${post?.previous}`}></IconButton>
        </Footer>
    </>
};

export default BlogPostPage;