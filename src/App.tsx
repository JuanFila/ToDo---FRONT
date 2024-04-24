import { Header } from "./Component/Header/Header";
import { Create, TaskItem } from "./Component/Post/Post";
import "./styles/global.css";
import style from "./App.module.css";
import { useState } from "react";
import { NoTask } from "./Component/CardNoTasks/NoTask";
import { Task } from "./Component/Tasks/Task";

export function App() {
  const [tasksCount, setTaskCount] = useState(0);
  
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  function addTasks(newTask: TaskItem) {
    setTasks([...tasks, newTask])
  }

  function viewHome() {
    if (tasks.length > 0) {
      return tasks.map((task) => (
        <Task key={task.id} text={task.text} concluded={task.concluded} />
      ));
    } else {
      return <NoTask />;
    }
  }

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Create 
        addTesk={addTasks}
        />
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
