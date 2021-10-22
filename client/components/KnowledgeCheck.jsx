import { useState } from 'react'
import Block from './Block'
import Button from './Button'
import { P } from './Typography'
import styles from './KnowledgeCheck.module.css'
import MultiChoice from './MultiChoice'
import Collapsible from './Collapsible'
import Icon from './Icon'

export default function KnowledgeCheck({ data }) {
    const [showResults, setShowResults] = useState(false)

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
                            <div className={styles.symbolContainer}>
                                <Icon icon="cross" />
                            </div>
                            <h3>Incorrect</h3>
                            <p>{data.feedback}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowResults(false)}
                        >
                            Take Again
                            <img src="/133-spinner11.svg" alt="Retake Icon" />
                        </button>
                    </div>
                </Collapsible>
            </div>
        </Block>
    )
}
