import Link from "next/link";
import { FC } from "react";
import styles from "./IconButton.module.css"

interface Props {
    disabled?: boolean,
    children: string;
    href: string;
    target?: string;
    size?: string;
}


const IconButton: FC<Props> = ({disabled, href, children, target, size}) => {
    if (!size) size = "42pt";
    const button = <button style={{
        fontSize: size,
        height: size,
        width: size
    }} className={styles.button} disabled={disabled}>{children}</button>
    if (disabled) return button;
    return <Link href={href}><a target={target}>{button}</a></Link>
}


export default IconButton;