import { FC, useContext } from "react";
import styles from "./Title.module.css";

interface Props {
    children: string
}

const Title: FC<Props> = ({ children }) => {
    return <span className={styles.wrapper}>
        <h1 className={styles.title}>{children}</h1>
    </span>
}

export default Title;