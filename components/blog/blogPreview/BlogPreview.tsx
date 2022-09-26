import { FC } from "react";
import { IPost } from "../../../graphql/types";
import BlogPreviewEntry from "./BlogPreviewEntry";

interface Props {
    posts: IPost[]
}

const BlogPreview: FC<Props> = ({posts}) => {
    return <>{posts.map((p)=>{return <BlogPreviewEntry key={p.slug} post={p}/>})}</>
}

export default BlogPreview;