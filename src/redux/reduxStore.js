
import { legacy_createStore , combineReducers } from "redux";
import profilesDataReducer from './profilesDataReducer'
import messagesReducer from './messagesReducer'
import UsersReducer from "./UsersReducer";
let redusers = combineReducers({
    profilesData:profilesDataReducer,
    usersPage: UsersReducer,
    messages:messagesReducer,
   
})

let store = legacy_createStore (redusers)
export default store