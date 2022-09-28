import { CSSProperties, FC } from "react"
import styles from "./MDContent.module.css"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

interface Props {
    content: string,
    style?: CSSProperties
}

const MDContent: FC<Props> = ({ content, style}) => {
    return <div className={styles.wrapper} style={style}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
}

export default MDContent;