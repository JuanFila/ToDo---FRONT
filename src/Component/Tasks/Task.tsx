import { Trash } from '@phosphor-icons/react';
import style from './task.module.css';


export function Task() {
  return(
    <div className={style.wrapper}>
      <input type="checkbox" className={style.checkBox}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aliquam.</p>
      <button><Trash className={style.Icon}/></button>
    </div>
  )
}