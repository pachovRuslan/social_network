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
      <div className={style.information}>
        <span>Ruslan Pachkov</span>
        <div className={style.info}>
         <p> birthday:  23 November<br />
          Current city:  Polotsk<br />
          Relationship:  Married to Yulia Pachkova<br />
          Hometown: Ноябрьск<br />
          Brother: Roman Pachkov<br />
          Mobile: +375295933838<br /></p>
        </div>
      </div>
      <div className={style.block2}>
        Friends 9
      </div>
      <div className={style.new_post}>
        <input placeholder="Create new post ... "></input>
      </div>
      <div className={style.friend_bar}>
    
       <div className={style.friend_ava}><img src='img/1 (1).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (2).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (3).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (4).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (5).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (6).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (7).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (8).jpg' alt="ava" />name</div>
       <div className={style.friend_ava}><img src='img/1 (9).jpg' alt="ava" />name</div>
        
      </div>
      <div className={style.post}>
        <Posts name='Ruslan pachkov' data='12.12.2021' message='There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness.'
          like_counts='0' avatar={<img src='img/avatar.jpg' alt="avatar" />} />
        <Posts name='Ruslan pachkov' data='12.12.2021' message='Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.  Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom' like_counts='3' avatar={<img src='img/avatar.jpg' alt="avatar" />} />
        <Posts name='Ruslan pachkov' data='12.12.2021' message='While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom' like_counts='3' avatar={<img src='img/avatar.jpg' alt="avatar" />} />
        <Posts name='Ruslan pachkov' data='12.12.2021' message='While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom' like_counts='3' avatar={<img src='img/avatar.jpg' alt="avatar" />} />
        <Posts name='Ruslan pachkov' data='12.12.2021' message='While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom' like_counts='3' avatar={<img src='img/avatar.jpg' alt="avatar" />} />
      </div>
    </div>
  )
}

export default Profile