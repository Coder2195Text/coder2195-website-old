import Link from "next/link";
import { FC } from "react";
import styles from "./IconButton.module.css"

interface Props {
    disabled?: boolean,
    children: string;
    href: string;
}


const IconButton: FC<Props> = ({disabled, href, children}) => {
    const button = <button className={styles.button} disabled={disabled}>{children}</button>
    if (disabled) return button;
    return <Link href={href}>{button}</Link>
}


export default IconButton;