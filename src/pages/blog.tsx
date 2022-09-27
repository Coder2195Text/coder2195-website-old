import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import BlogPreview from "../components/blog/blogPreview/BlogPreview";
import Link from "../components/global/link/Link";
import Title from "../components/global/title/Title";
import { fetchBlogPreviews } from "../graphql/queries";
import { IPost } from "../graphql/types";

interface Props {
  posts: Array<IPost>;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchBlogPreviews();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const Blog: FC<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Coder2195 - Blog</title>
      </Head>
      <Title>Blog Posts</Title>
      <BlogPreview posts={posts} />
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default Blog;
