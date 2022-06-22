import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profilesDataReducer'
import Profile from './Profile';
import StoreContext from '../../StoreContext';


function ProfileContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }
        let onPostChange = (text) => {
          let action = updateNewPostActionCreator(text);
          store.dispatch(action);
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
      }
    </StoreContext.Consumer>
  )
}

export default ProfileContainer