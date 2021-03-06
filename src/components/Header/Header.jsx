import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {


  return (
    <div className={style.Header}>
      <Link to="/">{<img src='img/logo.png' alt='logo'></img>} </Link>
      <div className={style.castom_input}>
        <input placeholder="search ... "></input>
      </div>
      <div className={style.Header_logo}>
        <Link to='/profile'>{props.avatar}</Link>
      </div>

    </div>
  );
}
export default Header;
