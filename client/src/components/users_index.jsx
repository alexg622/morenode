import React from 'react'

class UsersIndex extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){
    const users = this.props.users.map(user => {
      return (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <h1>{user.password}</h1>
        </div>
      )
    })
    console.log(this.props.users);
    return (
      <div>
        <h1>Hellow World</h1>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

export default UsersIndex
