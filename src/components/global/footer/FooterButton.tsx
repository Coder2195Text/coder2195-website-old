import Link from "next/link";
import { FC } from "react";
import { IPost } from "../../../graphql/types";
import styles from "./FooterButton.module.css";

interface ButtonProps {
  post: IPost | null;
  children: string;
}

interface HomeProps {
  children: string;
  url: string;
}

const BlogFooterButton: FC<ButtonProps> = ({ post, children }) => {
  const disabled = !post;
  const button = (
    <button className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
  if (disabled) return button;
  return <Link href={`/blog/${post.slug}`}>{button}</Link>;
};

const FooterHome: FC<HomeProps> = ({ children, url }) => {
  return (
    <Link href={url}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
};

export { BlogFooterButton, FooterHome };
