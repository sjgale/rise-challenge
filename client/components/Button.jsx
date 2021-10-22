import styles from './Button.module.css'

export default function Button({ disabled, onClick, children }) {
    return (
        <button
            className={(disabled && styles.disabled) || styles.base}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
