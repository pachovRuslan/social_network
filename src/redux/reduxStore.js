import { legacy_createStore , combineReducers } from "redux";
import profilesDataReducer from './profilesDataReducer'
import messagesReducer from './messagesReducer'
let redusers = combineReducers({
    profilesData:profilesDataReducer,
    messages:messagesReducer
})

let store = legacy_createStore (redusers)
export default store
