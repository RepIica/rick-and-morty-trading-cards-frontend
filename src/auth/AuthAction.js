import React from 'react'

class AuthAction extends React.Component {
  state = {
    username: "",
    password: ""
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.props.clickHandler}>
        <input type="text" name="username" placeholder="username"  />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" />
      </form>
    )
  }
}

export default AuthAction
