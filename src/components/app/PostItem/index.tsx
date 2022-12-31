import styles from './PostItem.module.css';
export const PostItem = () => {
  return (
    <div className={'post-item'}>
      <div className={styles.title}>
        <a href={'#'}>
          Lorem Ipsum
        </a>
      </div>
      <div className={styles.tags}>
      </div>
      <div className={'post-desc'}>
        Some description about this post. This is just the beginning part of the so long story. I don't know, just keep reading.
      </div>
      <div className={styles.footer}>
        <div className={styles.continueReading}>
          8 minutes
        </div>
        <div className={styles.date}>
          Jan 1, 2023
        </div>
      </div>
    </div>
  )
}
