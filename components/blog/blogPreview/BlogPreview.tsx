import { FC } from "react";
import { IPost } from "../../../graphql/types";
import styles from "./BlogPreview.module.css"
import NextLink from "next/link"


interface EntryProps {
    post: IPost
}

const BlogPreviewEntry: FC<EntryProps> = ({ post }) => {
    return <NextLink href={`/blog/${post.slug}`}><a className={styles.entry}>
        <h1 className={styles.title}>{post.title}</h1>
        {post.excerpt ? 
        <div className={styles.excerpt}>
            <hr />
            <span className={styles.excerptContent}>{post.excerpt}</span>
        </div> : ""} 

    </a></NextLink>
}


interface Props {
    posts: IPost[]
}

const BlogPreview: FC<Props> = ({posts}) => {
    return <>{posts.map((p)=>{return <BlogPreviewEntry key={p.slug} post={p}/>})}</>
}


export default BlogPreview;