import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { IPost } from "@/graphql/types";

export const BlogFooterButton: FC<
  PropsWithChildren<{ post: IPost | null }>
> = ({ post, children }) => {
  const button = (
    <button className="button" disabled={!post}>
      {children}
    </button>
  );

  if (!post) return button;

  return <Link href={`/blog/${post.slug}`}>{button}</Link>;
};
