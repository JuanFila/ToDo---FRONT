import { Header } from './Component/Header/Header';
import { Create } from './Component/Post/Post';
import './styles/global.css';
import style from './App.module.css';

export function App() {

  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Create/>
        <main>
        </main>
      </div>
    </div>
  )
}


