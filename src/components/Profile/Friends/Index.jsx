import React from 'react'
import style from './Friends.module.css';

function Friends(props) {
    return (
       
            <div className={style.friend_ava}>{props.avatar_friend} {props.name_friend}</div>
       
    )
}

export default Friends