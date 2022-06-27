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
        <Link to="/messages" >Messages  </Link>
      </div>
      <div className={style.item}>
        <span>
          <img src="img/news.png" alt="news" />
        </span>
        <Link to="/news">News </Link>
      </div>
      <div className={style.item}>
        <span>
          <img src="img/music.png" alt="music" />
        </span>
        <Link to="/music">Music </Link>
      </div>
      <div className={style.item}>
        <span>
          <img src="img/setting.png" alt="setting" />
        </span>
        <Link to="/setting">Setting </Link>
      </div>
      <div className={style.item}>
        <span>
          <img src="img/profile.png" alt="users" />
        </span>
        <Link to="/users">Users </Link>
      </div>
    </div>
  );
}

export default Nav;