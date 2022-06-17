import React from 'react'
import style from './Profile.module.css';
import Posts from './Posts/Index';
import FriendsBar from './FriendsBar/FriendsBar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Profile(props) {

  let postElements = props.profilesData.map(post => <Posts
    name={post.name}
    avatar={post.avatar}
    posts={post.posts}
  />);
  let friendsElements = props.profilesData.map(friend => <FriendsBar
    name_friend={friend.name}
    avatar_friend={friend.avatar}
  />)
  let ProfileInform = props.profilesData.map(info => <ProfileInfo
    name={info.name}
    avatar={info.avatar}
    birthday={info.birthday}
    Relationship={info.Relationship}
    Hometown={info.Hometown}
    Mobile={info.Mobile}
    Current_city={info.Current_city}
  />)
  
  let newPostElement = React.createRef();
  let pushPost = () => {
    let text = newPostElement.current.value;
    props.addPost=('pidor');
  }

  return (

    <div className={style.profile}>
      {ProfileInform[3]}
      <div className={style.block2}>
        Friends 9
      </div>
      <div className={style.new_post}>
        <div><input placeholder="Create new post ... " ref={newPostElement} ></input></div>
        <div className={style.send_button}>
         <img  onClick={pushPost} src='img/send.png' alt='send'></img>
        </div>
      </div>
      <div className={style.friend_bar}>
        {friendsElements}
      </div>
      <div className={style.post}>
        {postElements[3]}
      </div>
    </div>

  )
}

export default Profile