import styles from './Footer.module.css';
export const Footer = () => {
  return (
    <div className={styles.footer}>
      --<br/>
      Made by <a href={'/about'}>@MonokaiJs</a>, 2022
    </div>
  )
}
