import Icon from './Icon'
import styles from './MultiChoice.module.css'

export default function MultiChoice({
    options,
    selection,
    setSelection,
    showResults
}) {
    function onChoice(event, value) {
        if (showResults) {
            event.preventDefault()
            return
        }
        setSelection(value)
    }

    return (
        <div className={showResults ? styles.showResults : undefined}>
            {options.map((option) => (
                <div className={styles.optionContainer} key={option.text}>
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
                        <input
                            type="radio"
                            value={option.text}
                            checked={selection === option.text}
                            className={styles.radio}
                            onChange={(e) => onChoice(e, e.target.value)}
                        />
                        <label
                            className={styles.label}
                            onClick={(e) => onChoice(e, option.text)}
                        >
                            {option.text}
                        </label>
                    </div>
                </div>
            ))}
        </div>
    )
}
