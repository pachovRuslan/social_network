import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messagesReducer'
import Messages from './Messages';


function MessagesContainer(props) {

  let state = props.store.getState();
  
  let addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onMessageChange = (text) => {
    let action = updateNewMessageBodyCreator(text);
    props.store.dispatch(action)
  }

  return (
 <Messages
 onMessageChange={onMessageChange}
 addMessage={addMessage}
 state={state}
 newPostText={state.profilesData.newPostText} 
/>
  )
}

export default MessagesContainer