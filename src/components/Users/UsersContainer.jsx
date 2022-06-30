import { connect } from 'react-redux';
import usersAPI from '../../redux/UsersAPI';
import { followAC, unFollowAC, setUsersAC } from '../../redux/UsersReducer';


let mapStateToProps = (state) => {

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
const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (usersAPI);

export default UsersContainer