import styles from './KnowledgeCheckContainer.module.css'

export default function KnowledgeCheckContainer(props) {
    return <section className={styles.pageWrapper}>{props.children}</section>
}
