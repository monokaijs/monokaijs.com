import styles from './Button.module.css';
import {PropsWithChildren} from "react";

interface ButtonProps extends PropsWithChildren {

}

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.buttonOuter}>
      {props.children}
    </button>
  )
}
