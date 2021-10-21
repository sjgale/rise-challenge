import styles from './ContentContainer.module.css'

export default function ContentContainer(props) {
  return <div className={styles.contentContainer}>
    {props.children}
  </div>
}