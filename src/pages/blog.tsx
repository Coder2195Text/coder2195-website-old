import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { BlogPreview } from "../components/blog-preview";
import Link from "../components/global/link/Link";
import Title from "../components/global/title/Title";
import { fetchBlogPreviews } from "../graphql/queries";

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
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

export const getStaticProps = async () => {
  const posts = await fetchBlogPreviews();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default Blog;
