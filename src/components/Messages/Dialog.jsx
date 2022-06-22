import React from 'react'
import style from './Messages.module.css';
import { Link } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={style.contact} >
      <div className={style.friend_ava}>{props.avatar}</div>
      <div className={style.friend_name}><Link to={path}>{props.name}</Link></div>
    </div>
  )
}
function Dialog(props) {
  return (
    <div className={style.Messages}>
      <div className={style.message}>
        <div className={style.contacts}>
          {props.profilesData.map((dialog) => (<DialogItem
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar} />))}
        </div>
        <div className={style.select_block}>
          <div><img src='img/chat.png' alt='chat'></img></div>
          <div className={style.select_block1}>Select a chat</div>
        </div>
      </div>
    </div>
  )
}

export default Dialog