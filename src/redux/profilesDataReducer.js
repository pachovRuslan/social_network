const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = [
    {
        id: 1, name: 'Mary Jane', avatar: <img src='img/1 (1).jpg' alt="ava" />, birthday: " 23 November", Current_city: "Polotsk",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Ноябрьск",
        Mobile: "+375295933838",
        posts: [
            {
                id: 1, data: '12.11.2021', message: 'While we are postponing, life speeds by'
                , like_count: '9'
            }],
        newPostText: ""
    },
    {
        id: 2, name: 'Den Fix', avatar: <img src='img/1 (2).jpg' alt="ava" />, birthday: " 10 december", Current_city: "Minsk",
        Relationship: "Married to Mary Jane",
        Hometown: "Витебск",
        Mobile: "+375295922838",
        posts: [{
            id: 1, data: '31.12.2021', message: 'There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness.'
            , like_count: '0'
        }],
        newPostText: ""
    },
    {
        id: 3, name: 'Banny Rabbit', avatar: <img src='img/1 (3).jpg' alt="ava" />, birthday: " 3 November", Current_city: "Gomel",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Минск",
        Mobile: "+37529590000",
        posts: [
            {
                id: 1, data: '12.11.2021', message: 'There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness.'
                , like_count: '1'
            }],
            newPostText: ""
    },
    {
        id: 4, name: 'Alex Snous', avatar: <img src='img/1 (4).jpg' alt="ava" />, birthday: " 30 November", Current_city: "Orsha",
        Relationship: "Married to Alexa Sprank",
        Hometown: "Москва",
        Mobile: "+375295933809", posts: [
            {
                id: 1, data: '12.11.2021', message: 'There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness.'
                , like_count: '4'
            },
            {
                id: 2, data: '22.10.2021', message: 'When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.'
                , like_count: '8'
            },
            {
                id: 3, data: '10.10.2021', message: 'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.'
                , like_count: '8'
            }],
            newPostText: ""
    },
    {
        id: 5, name: 'Kev Godick', avatar: <img src='img/1 (5).jpg' alt="ava" />, birthday: " 20 february", Current_city: "Vitebks",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Орша",
        Mobile: "+37529591133",
        posts: [

            {
                id: 1, data: '15.12.2021', message: 'Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.  Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                , like_count: '2'
            }],
            newPostText: ""
    },
    {
        id: 6, name: 'Davis Junior', avatar: <img src='img/1 (6).jpg' alt="ava" />, birthday: " 12 february", Current_city: "Vitebks",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Орша",
        Mobile: "+37533591133",
        posts: [

            {
                id: 1, data: '15.12.2021', message: 'Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.  Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                , like_count: '2'
            }],
            newPostText: ""
    },
    {
        id: 7, name: 'Alexa Sprank', avatar: <img src='img/1 (7).jpg' alt="ava" />, birthday: " 22 june", Current_city: "Brest",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Гродно",
        Mobile: "+375291238732",
        posts: [

            {
                id: 1, data: '15.12.2021', message: 'Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.  Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                , like_count: '2'
            }],
            newPostText: ""
    },
    {
        id: 8, name: 'Dipper Hall', avatar: <img src='img/1 (8).jpg' alt="ava" />, birthday: " 29 may", Current_city: "Postavi",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Могилев",
        Mobile: "+375336541047",
        posts: [
            {
                id: 1, data: '14.11.2021', message: 'While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                , like_count: '9'
            }],
            newPostText: ""
    },
    {
        id: 9, name: 'Jeck Black', avatar: <img src='img/1 (9).jpg' alt="ava" />, birthday: " 9 october", Current_city: "Moskov",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Поставы",
        Mobile: "+3752576534419",
        posts: [
            {
                id: 1, data: '14.11.2021', message: 'While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                , like_count: '9'
            }],
            newPostText: ""
    },
    {
        id: 10, name: 'Jon Troffy', avatar: <img src='img/1 (10).jpg' alt="ava" />, birthday: " 26 febryary", Current_city: "New York",
        Relationship: "Married to Yulia Pachkova",
        Hometown: "Брест",
        Mobile: "+375295911848",
        posts: [
            {
                id: 1, data: '12.11.2021', message: 'While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                , like_count: '9'
            }],
            newPostText: ""
    }
]

const profilesDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: { 
            let newPost = {
                data: '01.01.2022',
                message:  state.profileData.newPostText,
                like_count: '0',
                 id: 6
        };
              return {
                ...state,
                posts: [...state.profileData.posts, newPost], 
                newPostText:''
              };
            }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }

               default:
            return state;
    }
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