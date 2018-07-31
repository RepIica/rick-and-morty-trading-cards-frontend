import React, { Component } from 'react';
import Splash from './components/Splash.js'
import Profile from './components/Profile.js'
import Login from './auth/Login.js'
import Signup from './auth/Signup.js'
import RickAndMortyContainer from './components/RickAndMortyContainer.js'
import NavBurger from './components/NavBurger.js'
import Navbar from './components/Navbar.js'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { makeRickAndMortyRequest, creatUser, loginUser, getCurrentUser } from './adapter/adapter'

class App extends Component {
  state = {
    current_user: null,
    loggedIn: false,
    clicked: false
  }
//
//   submitSignUp = (username, password) => {
//   createUser(username, password).then((data) => {
//     getCurrentUser(data.token).then((user) => {
//       this.setState({ current_user: user }, () => {
//         localStorage.setItem('token', data.token)
//         this.props.history.push('/')
//       })
//     })
//   })
// }
//
  //
  // submitLogin = (username, password) => {
  //   loginUser(username, password).then((data) => {
  //     getCurrentUser(data.token).then((user) => {
  //       this.setState({ current_user: user }, () => {
  //         localStorage.setItem('token', data.token)
  //         this.props.history.push('/')
  //       })
  //     })
  //
  //   })
  // }

  loginClicked = (e) => {
    this.props.history.push('/login')
  }

  submitLogin = (username, password) => {
    loginUser(username, password)
      .then((data) => console.log(data))
    // this.props.history.push('/login')
  }
  //
  // logout = (e) => {
  //   this.setState({
  //     loggedIn: false
  //   }, () => {console.log(`loggedIn state is now`,this.state.loggedIn)})
  // }

  render() {
    return (
      <div id="wrapper">
        {this.state.loggedIn ? <Navbar clickHandler={this.logout}/> : null}
        <div id="page-content-wrapper">
          <Switch>


            <Route path="/profile" render={() => {
              return (
                <React.Fragment>
                  <div className="col-sm-3 col-sm-offset-7" align="center">
                    <button className="btn btn-small" onClick={this.logout}>Logout</button>
                  </div>
                  <Profile />
                </React.Fragment>
              )
            }} />

            <Route path="/login" render={() => {
              return (
                <Login submitHandler={this.submitLogin} />
              )
            }} />

            <Route path="/signup" render={() => {
              return (
                <Signup />
              )
            }} />

            <Route path="/" render={() => {
                return (
                  <Splash clickHandler={this.loginClicked} />
                )
            }}/>

          </Switch>
      </div>
    </div>
    );
  }
}

export default withRouter(App);
