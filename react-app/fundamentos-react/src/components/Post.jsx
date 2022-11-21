import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/GuilhermeMX.png" />
          <div className={styles.authorInfo}>
            <strong>Guilherme M. Xavier</strong>
            <span>Software Developer</span>
          </div>
        </div>
      </header>
    </article>
  )
}