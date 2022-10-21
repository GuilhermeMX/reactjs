import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <div>

      <Header />
      <Post
        author="Guilherme Xavier"
        content="O brabo da cultura e tudo mais"
      />
    </div>
  )
}