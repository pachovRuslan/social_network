import React from 'react'
import style from './Messages.module.css';
const MessagesItem = (props) => {
    return (
      <div>
        <div className={style.dialog} >
          {props.message}
        </div>
      </div>
    )
  }

export default MessagesItem