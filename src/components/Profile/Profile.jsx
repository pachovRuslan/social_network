import React from 'react'
import style from './Profile.module.css';
import Posts from './Posts/Index';
import FriendsBar from './FriendsBar/FriendsBar';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  // console.log(props)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let updateNewPostText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={style.profile}>
      {props.profilesData.map((info) => (<ProfileInfo
        name={info.name}
        avatar={info.avatar}
        birthday={info.birthday}
        Relationship={info.Relationship}
        Hometown={info.Hometown}
        Mobile={info.Mobile}
        Current_city={info.Current_city}
        key={info.id}
      />))[0]}
      <div className={style.block2}>
        Friends 9
      </div>
      <div className={style.new_post}>
        <div>
          <input
            placeholder=" create new post ..."
            onChange={updateNewPostText}
            value={props.newPostText}
            ref={newPostElement}
          />
        </div>
        <div className={style.send_button}>
          <img onClick={addPost} src='img/send.png' alt='send'></img>
        </div>
      </div>
      <div className={style.friend_bar}>
        {props.profilesData.map((friend) => (<FriendsBar
          name_friend={friend.name}
          avatar_friend={friend.avatar} />))}
      </div>
      <div className={style.post}>
        {props.profilesData.map((post) => (<Posts
          name={post.name}
          avatar={post.avatar}
          posts={post.posts}
          key={post.id}
        />))[0]}
      </div>
    </div>
  )
}

export default Profile