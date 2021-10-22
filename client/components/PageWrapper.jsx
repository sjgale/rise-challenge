import styles from './PageWrapper.module.css'

export default function Pagewrapper(props) {
    return <div className={styles.pageWrapper}>{props.children}</div>
}
