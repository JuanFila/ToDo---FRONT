import { Check, Trash } from "@phosphor-icons/react";
import style from "./task.module.css";

interface PropsTask {
  text: string
  concluded?:  boolean
}

export function Task({text, concluded}:PropsTask) {
  return (
    <div className={style.wrapper}>
      <div className={style.check}>
        <input
          type="checkbox" id="minhaCaixaDeSelecao" className={style.checkBox}/>
        <label htmlFor="minhaCaixaDeSelecao">
          <span>
            <Check size={12} weight="bold" display={"none"} className={style.IconCheck} />
          </span>
        </label>
      </div>
      <p className={style.t}>
      {text}
      </p>
      <button>
        <Trash className={style.Icon} />
      </button>
    </div>
  );
}
