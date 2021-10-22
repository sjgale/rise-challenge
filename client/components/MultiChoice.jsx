import { useCallback } from 'react'
import styles from './MultiChoice.module.css'

export default function MultiChoice({ options, showResults }) {
    function onChoice(event) {
        if (showResults) {
            event.preventDefault()
        }
    }

    return (
        <div className={showResults ? styles.showResults : undefined}>
            {options.map((option) => (
                <div key={option.text} className={styles.optionContainer}>
                    <input
                        type="radio"
                        id={option.text}
                        name="check"
                        className={styles.radio}
                    />
                    <label htmlFor={option.text} onClick={onChoice}>
                        {option.text}
                    </label>
                </div>
            ))}
        </div>
    )
}
