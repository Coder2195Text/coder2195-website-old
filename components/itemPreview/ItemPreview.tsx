import { FC } from "react"
import styles from "./ItemPreview.module.css"
import NextLink from "next/link"

interface Props {
    href: string;
    title: string;
    excerpt: string | null;
}

const ItemPreview: FC<Props> = ({ href, title, excerpt }) => {
    return <NextLink href={href}><a className={styles.entry}>
        <h1 className={styles.title}>{title}</h1>
        {excerpt ? 
        <div className={styles.excerpt}>
            <hr />
            <span className={styles.excerptContent}>{excerpt}</span>
        </div> : ""} 

    </a></NextLink>
}

export default ItemPreview;