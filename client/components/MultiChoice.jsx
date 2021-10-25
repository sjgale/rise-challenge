import { useState } from 'react'
import Icon from './Icon'
import styles from './MultiChoice.module.css'

export default function MultiChoice({
    options,
    selection,
    setSelection,
    showResults
}) {
    const [focusedRadio, setFocusedRadio] = useState(undefined)

    const onChoice = (event) => {
        if (showResults) {
            event.preventDefault()
            return
        }
        setSelection(event.target.value)
    }

    return (
        <div className={showResults ? styles.showResults : undefined}>
            {options.map((option) => (
                <div
                    className={`${styles.optionContainer} ${
                        focusedRadio === option.text ? styles.inFocus : ''
                    }`}
                    key={option.text}
                >
                    <div className={styles.optionSignifiers}>
                        {selection === option.text && (
                            <div className={styles.optionOutline} />
                        )}
                        <div
                            className={`${styles.radioIndicator} ${
                                selection === option.text
                                    ? styles.selectedIndicator
                                    : ''
                            }`}
                        >
                            <Icon
                                size="8px"
                                icon={option.isCorrect ? 'checkmark' : 'cross'}
                                color="#747a7e"
                            ></Icon>
                        </div>
                    </div>
                    <div className={styles.optionText}>
                        <label className={styles.label}>
                            <input
                                type="radio"
                                value={option.text}
                                checked={selection === option.text}
                                className={styles.radio}
                                onChange={onChoice}
                                onFocus={(e) => setFocusedRadio(e.target.value)}
                                onBlur={() => setFocusedRadio(undefined)}
                            />
                            {option.text}
                        </label>
                    </div>
                </div>
            ))}
        </div>
    )
}
