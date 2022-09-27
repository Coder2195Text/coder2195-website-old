import { InferGetStaticPropsType, NextPage } from "next";
import { BlogPreview } from "@/components/blog-preview";
import { Link, Title } from "@/components/shared";
import { fetchBlogPreviews } from "@/graphql/queries";
import Head from "next/head";

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
