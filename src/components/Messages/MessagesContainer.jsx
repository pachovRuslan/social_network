import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesReducer'
import Messages from './Messages';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  // console.log(state)
  return {
    messages: state.messages,
    profilesData: state.profilesData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageBodyCreator(text))
    },
    addMessage: () => {
      dispatch(sendMessageCreator());
    },
  }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer