import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.user}>
                <div className={styles.username}>Elmo</div>
                <div className={styles.userImg}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg"
                        alt="User Image for Elmo"
                    />
                </div>
            </div>
        </header>
    )
}
