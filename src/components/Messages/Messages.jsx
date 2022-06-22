import React from 'react'
import style from './Messages.module.css';
import DialogItem from './DialogItem';
import MessagesItem from './MessagesItem';

function Messages(props) {
  console.log(props)
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
          {props.state.profilesData.map((dialog) => (<DialogItem
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar} />))}
        </div>
        <div className={style.dialog_block}>
          <div className={style.dialog}>
            {props.state.messages.map((message) => (<MessagesItem
              message={message.message}
              id={message.id} />))}
          </div>
          <div className={style.input_block}>
            <input
              placeholder="create new post ... "
              onChange={onMessageChange}
              value={props.state.newMessageBody}
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