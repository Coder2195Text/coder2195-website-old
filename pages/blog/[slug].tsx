import { GetStaticProps } from "next";
import { FC } from "react";
import { fetchBlogSlugs, fetchBlogPost } from "../../graphql/queries";
import { IBlogPost } from "../../graphql/types";
import Footer from "../../components/footer/Footer";
import IconButton from "../../components/iconButton/IconButton";
import Image from "next/image";
import { NextSeo } from "next-seo";
import MDContent from "../../components/MDContent/MDContent";
import icons from "../../utils/icons";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params!.slug;
	if (typeof slug != "string") return { props: {} };
	const post = await fetchBlogPost(slug);

	return {
		props: {
			post,
		},
	};
};

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
	post: IBlogPost;
}

const BlogPostPage: FC<Props> = ({ post }) => {
	const title = `Coder2195 - Blog: ${post.title}`;
	const description = post.excerpt ? post.excerpt : "";
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{
					title,
					description,
				}}
			/>
			<h1 id="title">{post.title}</h1>
			{post.coverImage ? (
				<Image
					alt=""
					width={post.coverImage.width}
					height={post.coverImage.height}
					src={post.coverImage.url}
				/>
			) : (
				<></>
			)}
			<div style={{ marginLeft: "5vw", marginRight: "5vw" }}>
				<MDContent
					content={post.content.markdown}
					style={{ marginBottom: "72pt" }}
				/>
			</div>
			<Footer>
				<IconButton
					disabled={!post.next}
					href={`/blog/${post?.next?.slug}`}
					src={icons.LEFT_BUTTON}
				/>
				<IconButton href="/blog" src={icons.HOME} />
				<IconButton
					disabled={!post.previous}
					href={`/blog/${post?.previous?.slug}`}
					src={icons.RIGHT_BUTTON}
				/>
			</Footer>
		</>
	);
};

export default BlogPostPage;
