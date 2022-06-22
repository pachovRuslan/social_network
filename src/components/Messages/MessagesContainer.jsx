import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesReducer'
import StoreContext from '../../StoreContext';
import Messages from './Messages';


function MessagesContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addMessage = () => {
          store.dispatch(sendMessageCreator());
        }
        let onMessageChange = (text) => {
          let action = updateNewMessageBodyCreator(text);
          store.dispatch(action)
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
      }
    </StoreContext.Consumer>
  )
}
export default MessagesContainer