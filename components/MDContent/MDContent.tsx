import { FC } from "react"
import styles from "./MDContent.module.css"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

interface Props {
    content: string
}

const MDContent: FC<Props> = ({content}) => {
    return <div className={styles.wrapper}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
}

export default MDContent;