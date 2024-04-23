import { Header } from "./Component/Header/Header";
import { Create } from "./Component/Post/Post";
import "./styles/global.css";
import style from "./App.module.css";
import { useState } from "react";
import { NoTask } from "./Component/CardNoTasks/NoTask";
import { Task } from "./Component/Tasks/Task";

const tasks = [
  {
    id: 1,
    task: {
      text: "Testando atividade, feita como desafio da rocket",
      concluded: false,
    },
  },
  {
    id: 2,
    task: {
      text: "Testando atividade, Ft",
      concluded: true,
    },
  },
];

export function App() {
  const [tasksCount, setTaskCount] = useState(0);

  function viewHome() {
    if (tasks.length > 0) {
      return tasks.map(task => (
        <Task
          key={task.id}
          text={task.task.text}
          concluded={task.task.concluded}
        />
      ));
    } else {
      return <NoTask />;
    }
  }

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
          <div className={style.Post}>{viewHome()}</div>
        </main>
      </div>
    </div>
  );
}
