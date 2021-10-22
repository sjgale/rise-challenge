import { useState } from 'react'
import Block from './Block'
import Button from './Button'
import { P } from './Typography'
import styles from './KnowledgeCheck.module.css'
import MultiChoice from './MultiChoice'
import Collapsible from './Collapsible'
import Icon from './Icon'
import FeedbackIllustration from './FeedbackIllustration'

export default function KnowledgeCheck({ data }) {
    const [selection, setSelection] = useState(undefined)
    const [showResults, setShowResults] = useState(false)

    function isCorrect(selection) {
        const selectedAnswer = data.answers.find(
            (answer) => answer.text === selection
        )
        return selectedAnswer?.isCorrect
    }
    return (
        <Block>
            <div
                className={`${styles.knowledgeCheck} ${
                    showResults ? styles.showResults : undefined
                }`}
            >
                <div className={styles.question}>
                    <div className={styles.text}>
                        <P>{data.question?.text}</P>
                    </div>
                    {data.question?.media?.type === 'image' && (
                        <div className="media">
                            <img src={data.question.media.url} />
                        </div>
                    )}
                </div>

                <div className={styles.answers}>
                    <MultiChoice
                        options={data.answers}
                        showResults={showResults}
                        selection={selection}
                        setSelection={setSelection}
                    />
                </div>

                <Collapsible isCollapsed={!showResults}>
                    <div className={styles.actions}>
                        <Button
                            disabled={false}
                            onClick={() => setShowResults(true)}
                        >
                            Submit
                        </Button>
                    </div>
                </Collapsible>

                <Collapsible isCollapsed={showResults}>
                    <div className={styles.results}>
                        <div className={styles.feedback}>
                            <FeedbackIllustration isCorrect={isCorrect(selection)} />
                            <p>{data.feedback}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowResults(false)}
                        >
                            Take Again
                            <Icon
                                icon="spinner11"
                                size="22px"
                                color="#313537"
                            />
                        </button>
                    </div>
                </Collapsible>
            </div>
        </Block>
    )
}
