import { useState, useEffect } from 'react'
import Block from './Block'
import Button from './Button'
import { P } from './Typography'
import styles from './KnowledgeCheck.module.css'
import MultiChoice from './MultiChoice'
import Collapsible from './Collapsible'
import Icon from './Icon'
import FeedbackIllustration from './FeedbackIllustration'

export default function KnowledgeCheck({ data, onStateUpdate }) {
    const [selection, setSelection] = useState(undefined)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        setSelection(data.selection)
        setSubmitted(data.submitted)
    }, [])

    function isCorrect(selection) {
        const selectedAnswer = data.answers.find(
            (answer) => answer.text === selection
        )
        return selectedAnswer?.isCorrect
    }

    function onSelection(selection) {
        setSelection(selection)
        onStateUpdate(data.id, selection, submitted)
    }

    function onSubmit(submitted) {
        setSubmitted(submitted)
        if (!submitted) {
            setSelection(undefined)
        }
        onStateUpdate(data.id, submitted ? selection : undefined, submitted)
    }

    return (
        <Block>
            <div
                className={`${styles.knowledgeCheck} ${
                    submitted ? styles.showResults : undefined
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
                        showResults={submitted}
                        selection={selection}
                        setSelection={onSelection}
                    />
                </div>

                <Collapsible isCollapsed={!submitted}>
                    <div className={styles.actions}>
                        <Button
                            disabled={!selection}
                            onClick={() => onSubmit(true)}
                        >
                            Submit
                        </Button>
                    </div>
                </Collapsible>

                <Collapsible isCollapsed={submitted}>
                    <div className={styles.results}>
                        <div className={styles.feedback}>
                            <FeedbackIllustration
                                isCorrect={isCorrect(selection)}
                            />
                            <p>{data.feedback}</p>
                        </div>
                        <button type="button" onClick={() => onSubmit(false)}>
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
