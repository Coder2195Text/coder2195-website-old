import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { fetchBlogSlugs, fetchBlogPost } from "@/graphql/queries";
import Head from "next/head";
import { Blog } from "@/components/blog";

const BlogPostPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Blog: {post.title}</title>{" "}
      </Head>

      <Blog post={post} />
    </>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const post = await fetchBlogPost(params!.slug as string);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchBlogSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export default BlogPostPage;
