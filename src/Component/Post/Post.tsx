import style from "./post.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import '../../styles/global.css';

export function Create() {
  return (
    <div>
      <form className={style.postForm}>
        <input type="text" placeholder="Adicione uma tarefa" className={style.Input} />
        <button type="submit">Criar <PlusCircle size={20} weight="bold"/> </button>
      </form>
    </div>
  );
}
