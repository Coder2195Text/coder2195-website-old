import { FC } from "react";
import { IBlogPost } from "../../../graphql/types";
import ItemPreview from "../../global/itemPreview/ItemPreview";


interface Props {
    posts: IBlogPost[]
}

const BlogPreview: FC<Props> = ({posts}) => {
    return <>{
        posts.map((p)=>{return <ItemPreview key={p.slug} href={`/blog/${p.slug}`} title={p.title} excerpt={p.excerpt}/>})
    }</>
}


export default BlogPreview;