import style from'./header.module.css';
import Icon from '../../assets/icon.svg';

export function Header() {
  return(
    <header className={style.Headers}>
      <img src={Icon} alt="" />
      <h2 className={style.twoColors}>todo</h2>
    </header>
  )
}