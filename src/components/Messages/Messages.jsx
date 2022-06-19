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

const MessagesItem = (props) => {
  return (
    <div>
      <div className={style.dialog} >
        {props.message}
      </div>
    </div>
  )
}


function Messages(props) {

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
  }


  return (
    <div className={style.Messages}>
      <div className={style.message}>
        <div className={style.contacts}>
          {props.profilesData.map((dialog) => (<DialogItem
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar} />))}
        </div>
        <div className={style.dialog_block}>
          <div className={style.dialog}>
            {props.messages.map((message) => (<MessagesItem
              message={message.message}
              id={message.id} />))}
          </div>
          <div className={style.input_block}>
            <input ref={newMessageElement}></input>
            <div className={style.send_button}>
              <img onClick={addMessage} src='img/send.png' alt='send'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages