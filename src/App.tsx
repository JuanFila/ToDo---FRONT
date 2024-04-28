import { Header } from "./Component/Header/Header";
import { Create, TaskItem } from "./Component/Post/Post";
import "./styles/global.css";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import { NoTask } from "./Component/CardNoTasks/NoTask";
import { Task } from "./Component/Tasks/Task";

export function App() {
  const [tasksCount, setTaskCount] = useState(0);
  const [tasksOpen, setTaskOpen] = useState(0);
  
  const [tasks, setTasks] = useState<TaskItem[]>([]);
 
  function addTasks(newTask: TaskItem) {
    setTasks([...tasks, newTask])
    setTaskCount(tasks.length + 1)
  }

  function removeTask(index:number) { //ajustar isso aq
    const removeItem = [...tasks]
    removeItem.splice(index, 1)
    setTasks(removeItem)
    setTaskCount(tasks.length - 1)
  }
  const alterTask = (index: number) => {
    setTasks(prevTasks => {
      return prevTasks.map((task, i) => {
        if (i === index) {
          // Se o índice corresponder ao índice da tarefa que estamos alterando
          return { ...task, concluded: !task.concluded}; // Alteramos apenas o 'concluded' desta tarefa
         
        } else {
          return task; // Mantemos as outras tarefas inalteradas
        }
      });
    });
  };
  
  function taskFinish () { // atualiza minhas tasks concluidas
    const taskFinish = tasks.filter((task) =>  task.concluded == true)
    setTaskOpen(taskFinish.length)
    console.log(taskFinish)
  }

  useEffect(() => { // observa quando alterar alguma informação no array de tasks para alterar o contador
    taskFinish();
  }, [tasks])

  function viewHome() {
    if (tasks.length > 0) {
      return tasks.map((task, index) => (
        <Task key={task.id} index={index} text={task.text} concluded={task.concluded} removeTask={removeTask} alterTask={alterTask}/>
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
              <p className={style.count}>{`${tasksOpen} de ${tasksCount}`}</p>
            </div>
          </div>
          <div className={style.Post}>{viewHome()}</div>
        </main>
      </div>
    </div>
  );
}
