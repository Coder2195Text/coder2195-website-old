import { GetStaticProps } from "next";
import { FC } from "react";
import { fetchBlogSlugs, fetchBlogPost } from "../../graphql/queries";
import { IPost } from "../../graphql/types";
import Head from "next/head";
import { Blog } from "../../components/blog";

interface Props {
  post: IPost;
}

const BlogPostPage: FC<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Blog: {post.title}</title>
      </Head>

      <Blog post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchBlogPost(params!.slug as string);

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

export default BlogPostPage;
