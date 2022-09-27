import Link from "next/link";
import { FC } from "react";
import { IPost } from "../../../graphql/types";
import styles from "./BlogFooterButton.module.css"

interface ButtonProps extends HomeProps{
    post: IPost | null
}

interface HomeProps {
    children: string
}

const BlogFooterButton: FC<ButtonProps> = ({post, children}) => {
    const disabled = !post;
    const button = <button className={styles.button} disabled={disabled}>{children}</button>
    if (disabled) return button;
    return <Link href={`/blog/${post.slug}`}>{button}</Link>
}

const BlogFooterHome: FC<HomeProps> = ({children}) => {
    return <Link href={`/blog`}><button className={styles.button}>{children}</button></Link>
}

export { BlogFooterButton, BlogFooterHome };