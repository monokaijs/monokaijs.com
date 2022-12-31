import {BlogLinks} from "../../configs/app.config";
import styles from './Header.module.css';

export const BlogHeader = () => {
  return (
    <div className={styles.blogHeader}>
      <div className={styles.blogNavbar}>
        <div className={styles.blogTitle}>
          MonokaiJs.com
        </div>
        <div className={styles.navLinks}>
          <a href={'/login'}>Login</a> | <a href={'/signup'}>Create Account</a>
        </div>
      </div>
      <div className={styles.blogLinks}>
        {BlogLinks.map(link => (
          <a className={styles.blogLink} key={link.title + '_' + link.path} href={link.path}>{link.title}</a>
        ))}
      </div>
    </div>
  )
}
