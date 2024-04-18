import style from './noTaks.module.css';
import Icon from '../../assets/Notask.svg';

export function NoTask() {
  return(
    <div className={style.Wrapper}>
      <img src={Icon} />
      <span >Você ainda não tem tarefas cadastradas</span>
      <p >Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}