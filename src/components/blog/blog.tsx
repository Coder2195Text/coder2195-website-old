import styles from "./blog.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IPost } from "../../graphql/types";
import Image from "next/image";
import Link from "next/link";
import { BlogFooterButton } from "./footer-button";
import { FiChevronLeft, FiChevronRight, FiHome } from "react-icons/fi";

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
          <FiChevronLeft />
        </BlogFooterButton>

        <Link href="/">
          <button className="button">
            <FiHome />
          </button>
        </Link>

        <BlogFooterButton post={post.previous}>
          <FiChevronRight />
        </BlogFooterButton>
      </div>
    </div>
  );
};
