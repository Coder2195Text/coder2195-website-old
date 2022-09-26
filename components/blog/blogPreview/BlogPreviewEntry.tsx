import { FC, useEffect } from "react";
import { IPost } from "../../../graphql/types";
import styles from "./BlogPreviewEntry.module.css"
import NextLink from "next/link"

interface Props {
    post: IPost
}

const BlogPreviewEntry: FC<Props> = ({ post }) => {
    return <NextLink href={`/blog/${post.slug}`}><a className={styles.entry}>
        <h1 className={styles.title}>{post.title}</h1>
        {post.excerpt ? 
        <div className={styles.excerpt}>
            <hr />
            <span className={styles.excerptContent}>{post.excerpt}</span>
        </div> : ""} 

    </a></NextLink>
}

export default BlogPreviewEntry;