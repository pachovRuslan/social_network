import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from '../../redux/profilesDataReducer'
import Profile from './Profile';

function ProfileContainer(props) {
  
  let state = props.store.getState();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }
  return (
 <Profile 
 updateNewPostActionCreator={onPostChange}
 addPost={addPost}
 profilesData={state.profilesData} 
/>
  )
}

export default ProfileContainer