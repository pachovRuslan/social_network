const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages: [
        { message: 'hi dear', id: 1 },
        { message: 'hi dear 2', id: 2 }
    ],
    newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newText
            }
        case SEND_MESSAGE:
            let newText = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { message: newText, id: 3 }]
            };
        default:
            return state;
    }
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