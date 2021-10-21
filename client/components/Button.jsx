import styles from './Button.module.css'

export default function Button(props) {

  const buttonStyles = [
    styles.button,
    props.disabled ? styles.disabled : undefined
  ]

  return <button className={ props.disabled && styles.disabled || styles.base }>
    {props.children}
  </button>
}