import NextLink from "next/link";
import { FC } from "react";
import styles from "./Link.module.css"

interface Props {
    children: string;
    href: string;
    target?: string;
}

const Link: FC<Props> = ({ href, children, target }) => {
    return <NextLink href={href} target={target}><a className={styles.link}>{children}</a></NextLink>
}

export default Link;