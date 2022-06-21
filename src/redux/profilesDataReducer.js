const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilesDataReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            data: '01.01.2022',
            message: state.newPostText,
            like_count: '0'
        };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
        return state
    }
    export const addPostActionCreator = () => {
        return {
            type: ADD_POST
        }
    }
    export const updateNewPostActionCreator = (text) => {
        return {
            type: UPDATE_NEW_POST_TEXT, newText: text
        }
    }
    export default profilesDataReducer;