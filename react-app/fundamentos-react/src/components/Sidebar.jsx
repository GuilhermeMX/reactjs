import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
      /> 

      <div className={styles.profile}>
        <strong>Guilherme M. Xavier</strong>
        <span>Software Developer</span>
      </div>    

      <footer>
        <a href="#">
          Editar Perfil
        </a>          
      </footer>
    </aside>  
  );
}