import styles from './Radio.module.css'

export default function Radio({options}) {
  return <>
    {options.map(option =>
      <div key={option.text} className={styles.optionContainer}>
        <input type="radio" id={option.text} name="check" hidden className={styles.radio} />
        <label for={option.text}>
          {option.text}
        </label>
      </div>
    )}
  </>
}