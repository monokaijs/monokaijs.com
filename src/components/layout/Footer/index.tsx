import styles from './Footer.module.css';
export const Footer = () => {
  return (
    <div className={styles.footer}>
      --<br/>
      Made by <a href={'/about'}>@monokaiJs</a>, 2022
    </div>
  )
}
