import Block from "./Block"
import Button from './Button'
import {P} from "./Typography"
import styles from './KnowledgeCheck.module.css'
import Radio from './Radio'

export default function KnowledgeCheck({data}) {
  return (
    <Block>
      <div className={styles.question}>
        <div className={styles.text}>
          <P>{data.question?.text}</P>
        </div>
        {(data.question?.media?.type === 'image') && (
          <div className="media">
            <img src={data.question.media.url} />
          </div>
        )}
      </div>

      <div className={styles.answers}>
        <Radio options={data.answers} />
      </div>

      <div className={styles.actions}>
        <Button disabled={false}>Submit</Button>
      </div>
    </Block>
  )
}