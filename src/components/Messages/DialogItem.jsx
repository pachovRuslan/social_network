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

export default DialogItem