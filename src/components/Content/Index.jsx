import Profile from '../Profile/Index';
import style from './Content.module.css'

const Content = (props) => {
 return (
    <div className={style.Content}>
      <Profile  friendsData={props.friendsData}/>
    </div>
  );
}
export default Content;

