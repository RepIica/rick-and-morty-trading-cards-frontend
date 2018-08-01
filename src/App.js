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
    currentUser: null,
    clicked: false
  }
//
//   submitSignUp = (username, password) => {
//   createUser(username, password).then((data) => {
//     getCurrentUser(data.token).then((user) => {
//       this.setState({ currentUser: user }, () => {
//         localStorage.setItem('token', data.token)
//         this.props.history.push('/')
//       })
//     })
//   })
// }
//
  componentDidMount() {
    if (localStorage.getItem('token')) {
      getCurrentUser(localStorage.getItem('token')).then((user) => {
        if (user) {
          this.setState({
            currentUser: user
          })
        } else {
          this.logout()
        }
      })

    }

  }
  submitLogin = (username, password) => {
    loginUser(username, password).then((data) => {
      getCurrentUser(data.token).then((user) => {
        this.setState({ currentUser: user }, () => {
          localStorage.setItem('token', data.token)
          this.props.history.push('/profile')
        })
      })

    })
  }

  profileClicked = (e) => {
    this.props.history.push('/profile')
  }
  loginClicked = (e) => {
    this.props.history.push('/login')
  }
  signupClicked = (e) => {
    this.props.history.push('/signup')
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {console.log(`currentUser state is now`,this.state.currentUser)})
  }

  render() {
    return (
      <div id="wrapper">
        {this.state.currentUser ? <Navbar clickHandler={this.logout} profileHandler={this.profileClicked} user={this.state.currentUser}/> : null}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            {this.state.currentUser ?
              <div className="col-sm-2 burgerDiv" align="center">
                <NavBurger />
              </div>
              : null}

            <Switch>
              <Route path="/profile" render={() => {
                return (this.state.currentUser ?
                  <React.Fragment>
                    <div className="col-sm-3 col-sm-offset-7" align="center">
                      <button className="btn btn-small" onClick={this.logout}>Logout</button>
                    </div>
                    <Profile user={this.state.currentUser}/>
                  </React.Fragment>
                  : <Redirect to="/login" />
                )
              }} />

              <Route path="/login" render={() => {
                return (this.state.currentUser ? <Redirect to="/profile" />
                  : <Login submitHandler={this.submitLogin} />)
              }} />

              <Route path="/signup" render={() => {
                return (
                  <Signup />
                )
              }} />

              <Route path="/" render={() => {
                return (
                  <Splash clickHandler={this.loginClicked} signupClickHandler={this.signupClicked}/>
                )
              }}/>

            </Switch>
          </div>
      </div>
    </div>
    );
  }
}

export default withRouter(App);
