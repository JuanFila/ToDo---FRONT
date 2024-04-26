import { Header } from "./Component/Header/Header";
import { Create, TaskItem } from "./Component/Post/Post";
import "./styles/global.css";
import style from "./App.module.css";
import { useState } from "react";
import { NoTask } from "./Component/CardNoTasks/NoTask";
import { Task } from "./Component/Tasks/Task";

export function App() {
  const [tasksCount, setTaskCount] = useState(0);
  const [tasksFinish, setTasksFinish] = useState(0);
  const [tasksOpen, setTaskOpen] = useState(0);
  
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  function addTasks(newTask: TaskItem) {
    setTasks([...tasks, newTask])
    setTaskCount(tasks.length + 1)
  }

  function removeTask(index:number) {
    const removeItem = [...tasks]
    removeItem.slice(index, 1)
    setTasks(removeItem)
  }

  function viewHome() {
    if (tasks.length > 0) {
      return tasks.map((task) => (
        <Task key={task.id}  text={task.text} concluded={task.concluded} removeTask={removeTask} />
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
              <p className={style.count}>{`${tasksOpen} de ${tasksFinish}`}</p>
            </div>
          </div>
          <div className={style.Post}>{viewHome()}</div>
        </main>
      </div>
    </div>
  );
}
