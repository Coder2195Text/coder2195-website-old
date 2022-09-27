import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { FiChevronLeft, FiChevronRight, FiHome } from "react-icons/fi";
import styles from "./blog.module.css";
import { IPost } from "@/graphql/types";
import { BlogFooterButton } from "./footer-button";

export const Blog: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{post.title}</h1>

      {post.coverImage && (
        <Image
          alt=""
          width={post.coverImage.width}
          height={post.coverImage.height}
          src={post.coverImage.url}
        />
      )}

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content.markdown}
      </ReactMarkdown>

      <div className={styles.footer}>
        <BlogFooterButton post={post.previous}>
          <FiChevronLeft color="white" />
        </BlogFooterButton>

        <Link href="/">
          <button className="button">
            <FiHome color="white" />
          </button>
        </Link>

        <BlogFooterButton post={post.previous}>
          <FiChevronRight color="white" />
        </BlogFooterButton>
      </div>
    </div>
  );
};
