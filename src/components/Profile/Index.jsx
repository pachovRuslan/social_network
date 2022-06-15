import React from 'react'
import style from './Profile.module.css';
import Posts from './Posts/Index';
import FriendsBar from './Friends/Index';
import ProfileInfo from './ProfileInfo/Index';
function Profile(props) {

  let postElements = props.friendsData.map(post => <Posts name={post.name} avatar={post.avatar} posts={post.posts} />);
  let friendsElements = props.friendsData.map(friend => <FriendsBar name_friend={friend.name} avatar_friend={friend.avatar} />)
  let ProfileInform = props.friendsData.map(info => <ProfileInfo
    name={info.name}
    avatar={info.avatar}
    birthday={info.birthday}
    Relationship={info.Relationship}
    Hometown={info.Hometown}
    Mobile={info.Mobile}
    Current_city={info.Current_city}
  />)


  return (

    <div className={style.profile}>
      {ProfileInform[3]}
      <div className={style.block2}>
        Friends 9
      </div>
      <div className={style.new_post}>
        <input placeholder="Create new post ... "></input>
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