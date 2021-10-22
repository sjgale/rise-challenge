import Icon from './Icon'
import styles from './FeedbackIllustration.module.css'

export default function FeedbackIllustration({isCorrect}) {
  return <>
    <div className={styles.symbolContainer}>
        <Icon
            icon={isCorrect ? 'checkmark' : 'cross'}
            color="#313537"
            size="15px"
        />
    </div>
    <h3 className={styles.text}>{isCorrect ? 'Correct' : 'Incorrect'}</h3>
  </>
}