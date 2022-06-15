import React from 'react'
import style from './Messages.module.css';
import { Link } from 'react-router-dom';
const DialogItem = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={style.contact} >
      <div className={style.friend_ava}>{props.avatar}</div>
     <div className={style.friend_name}><Link to={path}>{props.name}</Link></div> 
    </div>

  )
}
const MessagesItem = (props) => {
  return (
    <div className={style.dialog} >
      {props.message}
    </div>

  )
}


function Messages(props) {
  let dialogElements = props.dialogData
.map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);
let messageElemetns = props.messages
.map( m => <MessagesItem message={m.message} id={m.id}/>);

  return (
    <div className={style.Messages}>
      <div className={style.message}>
        <div className={style.contacts}>
        { dialogElements }
        </div>
        <div className={style.dialog}>
          {messageElemetns}
        </div>
      </div>
    </div>
  )
}

export default Messages