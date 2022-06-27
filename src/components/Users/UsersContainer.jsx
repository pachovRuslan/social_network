import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC } from '../../redux/UsersReducer';

import Users from './Users';

let mapStateToProps = (state) => {
 console.log(state)

  return{
    users: state.usersPage.users

  }
}
let mapDispatchToProps= (dispatch) => {
  return{
follow:(userId)=>{
  dispatch(followAC(userId))
},
unFollow:(userId)=>{
  dispatch(unFollowAC(userId))
},
setUsers:(users)=>{
  dispatch(setUsersAC(users))
},
  }
}
const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer