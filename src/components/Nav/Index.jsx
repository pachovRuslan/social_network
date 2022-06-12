import style from './nav.module.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.item}>
        <span>
          <img src="img/profile.png" alt="profile" />
        </span>
        <Link to="/profile">Profile  </Link>
         </div >
      <div className={style.item}>
        <span><img src="img/message.png" alt="message" /></span>
        <Link to="/messages" activeClassName={style.active_link}>Messages  </Link>
        </div>
      <div className={style.item}>
        <span>
          <img src="img/profile.png" alt="profile" />
        </span>
        <Link to="https://www.reactjs.org">News </Link>        
      </div>
      <div className={style.item}>
        <span>
          <img src="img/profile.png" alt="profile" />
        </span>
        <a  href="https://www.reactjs.org">Music </a>
      </div>
      <div className={style.item}>
        <span>
          <img src="img/setting.png" alt="setting" />
        </span>
        <a  href="https://www.reactjs.org">Settings </a>

      </div>
    </div>
  );
}
export default Nav;