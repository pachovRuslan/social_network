import style from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = (props) => {
  console.log(props)
  return (
    <div className={style.Header}>
      <Link to="/"> <img src='img/logo.png' alt='logo'></img></Link>
      <div className={style.castom_input}>
        <input placeholder="search ... "></input>
      </div>
      <div className={style.Header_logo}>
        <Link to='/profile'>
        <img src='img/1 (3).jpg' alt="ava" />
        </Link>
        </div>

    </div>
  );
}
export default Header;
