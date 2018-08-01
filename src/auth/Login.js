import React from 'react'

class Login extends React.Component {
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
      <React.Fragment>
        <div className="row">
          <div className="col-xs-12" align="center">
            <h1>Rick and Morty Virtual Trading Cards</h1>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <form onSubmit={(e) => {
                e.preventDefault()
                this.props.submitHandler(this.state.username, this.state.password)
              }}>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onInputChange}/><br/><br/>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onInputChange}/><br/><br/>
              <input type="submit" value="Log In"/>
            </form>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Login
