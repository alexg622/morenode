import React from 'react'

class UsersIndex extends React.Component {
  
  componentDidMount(){
    console.log(this.props)
    console.log(this.props.users)
  }

  render(){

    return (
      <div>
        <h1>Hellow World</h1>
      </div>
    )
  }
}

export default UsersIndex
