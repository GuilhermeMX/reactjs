import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GuilhermeMX.png",
      name: "Guilherme Xavier",
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio' },
      { type: 'link', content: 'https://github.com/GuilhermeMX'},
    ],
    publishedAt: new Date('2023-01-31 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/djavano.png",
      name: "Djavan",
      role: "CS Customer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio' },
      { type: 'link', content: 'https://github.com/GuilhermeMX'},
    ],
    publishedAt: new Date('2023-01-21 20:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}