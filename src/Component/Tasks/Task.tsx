// Task.tsx
import { Check, Trash } from "@phosphor-icons/react";
import style from "./task.module.css";

interface PropsTask {
  text: string;
  concluded?: boolean;
  index: number;
  removeTask: (index: number) => void;
  alterTask: (index: number) => void;
}

export function Task({
  text,
  index,
  concluded,
  removeTask,
  alterTask
}: PropsTask) {

  function alter() {
    alterTask(index)
  } 

  const handleDeleteTesk = () => {
    removeTask(index);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.check}>
        <input
          type="checkbox"
          id={`minhaCaixaDeSelecao-${index}`}
          className={style.checkBox}
          defaultChecked={concluded} // Usando defaultChecked em vez de checked
          onChange={alter}
        />
        <label htmlFor={`minhaCaixaDeSelecao-${index}`}>
          <span>
            <Check
              size={12}
              weight="bold"
              display={"none"}
              className={style.IconCheck}
            />
          </span>
        </label>
      </div>
      <p className={concluded ? style.through : style.text}>{text}</p>
      <button onClick={handleDeleteTesk}>
        <Trash className={style.Icon} />
      </button>
    </div>
  );
}
