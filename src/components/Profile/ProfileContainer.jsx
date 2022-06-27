import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profilesDataReducer'
import Profile from './Profile';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  console.log(state.profilesData.newPostText)
  return {
    profilesData: state.profilesData,
    newPostText:state.profilesData[0].newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer