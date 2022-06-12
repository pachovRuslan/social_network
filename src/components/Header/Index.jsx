import style from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={style.Header}>
      <Link to="/"> <img src='img/logo.png' alt='logo'></img></Link>
      <div className={style.castom_input}>
        <input placeholder="search ... "></input>
      </div>
      <div className={style.Header_logo}>
        <Link to='/profile'>
        <img src='img/avatar.jpg' alt="avatar"></img>
        </Link>
        </div>

    </div>
  );
}
export default Header;
