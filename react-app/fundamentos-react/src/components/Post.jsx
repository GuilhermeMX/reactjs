import { Comment } from "./Comment";
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

        <time title="21 de novembro as 11:02" dateTime="2022-11-21 11:03:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!!</p>
        <p>Acabei de subir mais um projeto no meu portifólio</p>
        <p><a href="https://github.com/GuilhermeMX/">https://github.com/GuilhermeMX/</a></p>
        <p>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />  

        <button type="submit">Comentar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}