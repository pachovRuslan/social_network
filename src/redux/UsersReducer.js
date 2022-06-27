const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
    // {
    //     id: 1, name: 'Mary Jane', avatar: <img src='img/1 (1).jpg' alt="ava" />, followed: false, Current_city: "Polotsk",
        
    //     Country: "Belarus", status: "busy"
        
       
    // },
    // {
    //     id: 2, name: 'Den Fix', avatar: <img src='img/1 (2).jpg' alt="ava" />, followed: false, Current_city: "Minsk",
    //         Country: "Belarus", status: "busy"
     
    // },
    // {
    //     id: 3, name: 'Banny Rabbit', avatar: <img src='img/1 (3).jpg' alt="ava" />, followed: false, Current_city: "Gomel",
        
    //     Country: "Belarus", status: "busy"
    
    // },
    // {
    //     id: 4, name: 'Alex Snous', avatar: <img src='img/1 (4).jpg' alt="ava" />, followed: true, Current_city: "Orsha",
    //            Country: "Belarus", status: "busy"
        
    // },
    // {
    //     id: 5, name: 'Kev Godick', avatar: <img src='img/1 (5).jpg' alt="ava" />, followed: false, Current_city: "Vitebks",
        
    //     Country: "Belarus", status: "busy"
   
    // },
    // {
    //     id: 6, name: 'Davis Junior', avatar: <img src='img/1 (6).jpg' alt="ava" />, followed: false, Current_city: "Vitebks",
        
    //     Country: "Belarus", status: "busy"

    // },
    // {
    //     id: 7, name: 'Alexa Sprank', avatar: <img src='img/1 (7).jpg' alt="ava" />, followed: true, Current_city: "Brest",
        
    //     Country: "Belarus", status: "busy"
   
    // },
    // {
    //     id: 8, name: 'Dipper Hall', avatar: <img src='img/1 (8).jpg' alt="ava" />, followed: false, Current_city: "Postavi",
        
    //     Country: "Belarus", status: "busy"
   
    // },
    // {
    //     id: 9, name: 'Jeck Black', avatar: <img src='img/1 (9).jpg' alt="ava" />, followed: false, Current_city: "Moskov",
        
    //     Country: "Russian", status: "busy"
    
    // },
    // {
    //     id: 10, name: 'Jon Troffy', avatar: <img src='img/1 (10).jpg' alt="ava" />, followed: false, Current_city: "New York",
        
    //     Country: "USA", status: "busy"
 
    // }
]
}

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
        }      
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
               }
            case SET_USERS:{
        return{ ...state, users:[...state.users, ...action.users]}
            }
        default:
             return state;
        }}

export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
export const unFollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}
export default UsersReducer;