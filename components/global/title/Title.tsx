import { FC, useContext } from "react";
import { useLanguage } from "../../../pages/_app";
import TRANSLATIONS from "../../../translations/translation";
import styles from "./Title.module.css";

interface Props {
    children: string
}

const Title: FC<Props> = ({ children }) => {
    const { language } = useLanguage();
    return <span className={styles.wrapper}>
        <h1 className={styles.title} style={{ animationDirection: TRANSLATIONS[language].flip ? "reverse" : "normal" }}>{children}</h1>
    </span>
}

export default Title;