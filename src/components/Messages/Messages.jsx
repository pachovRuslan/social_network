import React from 'react'
import style from './Messages.module.css';
import DialogItem from './DialogItem';
import MessagesItem from './MessagesItem';


function Messages(props) {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text)
  }
  return (
    <div className={style.Messages}>
      <div className={style.message}>
        <div className={style.contacts}>
          {props.profilesData.map((dialog) => (<DialogItem
            name={dialog.name}
            key={dialog.id}
            avatar={dialog.avatar} />))}
        </div>
        <div className={style.dialog_block}>
          <div className={style.dialog}>
            {props.messages.messages.map((message) => (<MessagesItem
              message={message.message}
              key={message.id} />))}
          </div>
          <div className={style.input_block}>
            <input
              placeholder="write new message ... "
              onChange={onMessageChange}
              value={props.messages.newMessageBody}
              ref={newMessageElement}
            />
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