import style from "./post.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import "../../styles/global.css";
import { ChangeEvent, FormEvent, useState } from "react";

export interface TaskItem {
  id: number;
  text: string;
  concluded: boolean;
}
interface CreateProps {
  addTesk: (task: TaskItem) => void;
}

export function Create({ addTesk }: CreateProps) {
  const [text, setText] = useState("");

  function getValue(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function create(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask: TaskItem = {
      id: Math.random(),
      text: text,
      concluded: false,
    };
    addTesk(newTask)
    setText("")
  }
  return (
    <div>
      <form onSubmit={create} className={style.postForm}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          className={style.Input}
          onChange={getValue}
        />
        <button type="submit">
          Criar <PlusCircle size={20} weight="bold" />{" "}
        </button>
      </form>
    </div>
  );
}
