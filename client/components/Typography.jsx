import styles from './Typography.module.css'

export function H1(props) {
    return <h1 className={styles.header1}>{props.children}</h1>
}

export function Blockquote(props) {
    return <blockquote className={styles.quote}>{props.children}</blockquote>
}

export function P(props) {
    return <p className={styles.paragraph}>{props.children}</p>
}
