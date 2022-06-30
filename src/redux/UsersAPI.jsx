import axios from 'axios'
import React from 'react'
import Users from '../components/Users/Users'

class usersAPI extends React.Component {
    componentDidMount() {
        axios.get('https://62a64fb3b9b74f766a465bc1.mockapi.io/users?page=1&limit=10')
            .then(Response => {
                this.props.setUsers(Response.data)
            })
    }
    render() {
        return <Users users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow} />
    }
}
export default usersAPI