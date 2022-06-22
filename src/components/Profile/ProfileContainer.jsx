import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from '../../redux/profilesDataReducer'
import Profile from './Profile';


function ProfileContainer(props) {

  let state = props.store.getState();
  
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  }

  return (
 <Profile 
 updateNewPostText={onPostChange}
 addPost={addPost}
 profilesData={state.profilesData}
 newPostText={state.profilesData.newPostText} 
/>
  )
}

export default ProfileContainer