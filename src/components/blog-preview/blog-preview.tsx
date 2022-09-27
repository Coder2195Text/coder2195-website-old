import { IPost } from "@/graphql/types";
import styles from "./blog-preview.module.css";
import NextLink from "next/link";

export const BlogPreview: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <NextLink href={`/blog/${post.slug}`} key={post.slug}>
          <a className={styles.entry}>
            <h1 className={styles.title}>{post.title}</h1>
            {post.excerpt && (
              <div className={styles.excerpt}>
                <hr />
                <span className={styles.excerptContent}>{post.excerpt}</span>
              </div>
            )}
          </a>
        </NextLink>
      ))}
    </>
  );
};
