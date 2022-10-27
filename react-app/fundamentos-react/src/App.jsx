import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author="Guilherme Xavier"
            content="O brabo da cultura e tudo mais"
          />
          <Post
            author="Guilherme Xavier"
            content="O brabo da cultura e tudo mais"
          />
        </main>
      </div>
    </div>
  )
}