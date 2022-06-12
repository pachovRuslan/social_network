import React from 'react'
import style from './Profile.module.css';
import Posts from '../Posts/Index';


function Profile() {
  return (
    <div className={style.profile}>

      <div className={style.avatar}>
        <img src='img/avatar.jpg' alt="avatar" />
        <button className={style.button_photo}> Upload Photo</button>
      </div>
      <div className={style.block1}>
        <h1>First name  Last name</h1>
        <div className={style.info}>
          birthday:23 November<br />
          Current city:  Polotsk<br />
          Relationship:  Married to Yulia Pachkova<br />
          Hometown: Ноябрьск<br />
          Brother: Roman Pachkov<br />
          Mobile: +375295933838<br />
        </div>

      </div>
      <div className={style.block2}>
        some information block
      </div>

      <div className={style.new_post}>
        <input placeholder="Create new post ... "></input>
      </div>
      <div className={style.friend_bar}>
        friends bar
      </div>
      <div className={style.post}>
        <Posts message='my first post' like_counts='0' avatar={<img src='img/avatar.jpg' alt="avatar"/>}/>
        <Posts message='my second post' like_counts='3'  avatar={<img src='img/avatar.jpg' alt="avatar" />} />
      </div>

    </div>

  )
}

export default Profile