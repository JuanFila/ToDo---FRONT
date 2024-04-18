import { Header } from "./Component/Header/Header";
import { Create } from "./Component/Post/Post";
import "./styles/global.css";
import style from "./App.module.css";
import { useState } from "react";
import { NoTask } from "./Component/CardNoTasks/NoTask";
import { Task } from "./Component/Tasks/Task";

export function App() {
  const [tasksCount, setTaskCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Create />
        <main>
          <div className={style.Header}>
            <div>
              <span className={style.PostCreate}>Tarefas criadas</span>
              <p className={style.count}>{tasksCount}</p>
            </div>
            <div>
              <span className={style.completed}>Concluídas</span>
              <p className={style.count}>{tasksCount}</p>
            </div>
          </div>
          <div className={style.Post}>
            <Task />
          </div>
        </main>
      </div>
    </div>
  );
}
