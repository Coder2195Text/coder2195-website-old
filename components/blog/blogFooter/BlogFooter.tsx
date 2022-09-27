import { FC } from "react";
import { IPost } from "../../../graphql/types";
import { BlogFooterButton, BlogFooterHome } from "./BlogFooterButton";
import styles from "./BlogFooter.module.css"

interface Props {
    post: IPost
}

const BlogFooter: FC<Props> = ({post}) => {
    return <div className={styles.footer}>
        <BlogFooterButton post={post.next}></BlogFooterButton>
        <BlogFooterHome></BlogFooterHome>
        <BlogFooterButton post={post.previous}></BlogFooterButton>
    </div>
}

export default BlogFooter;