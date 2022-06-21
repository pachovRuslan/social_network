const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const messagesReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            message: state.newMessageBody,
            id: '2'
        };
        state.push(newMessage);
        state.newMessageBody = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.newText;
    }


    
return state
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newText: text
    }
}
export default messagesReducer;