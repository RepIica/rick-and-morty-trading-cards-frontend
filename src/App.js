import React, { Component } from 'react';
import Splash from './components/Splash.js'
import Profile from './components/Profile.js'
import AuthAction from './auth/AuthAction.js'
import RickAndMortyContainer from './components/RickAndMortyContainer.js'
import NavBurger from './components/NavBurger.js'
import Navbar from './components/Navbar.js'

class App extends Component {
  state = {
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

  login = (e) => {
    e.preventDefault()
    this.setState({
      loggedIn: true
    }, () => {console.log(`loggedIn state is now`,this.state.loggedIn)})
  }

  clicked = () => {
    this.setState({
      clicked: true
    }, () => {console.log(`clicked state is now`,this.state.clicked)})
  }

  logout = (e) => {

    this.setState({
      loggedIn: false
    }, () => {console.log(`loggedIn state is now`,this.state.loggedIn)})
  }


  render() {
    return (
      <div id="wrapper">
        {this.state.loggedIn ? <Navbar clickHandler={this.logout}/> : null}
        <div id="page-content-wrapper">
          {this.state.loggedIn ?
            <React.Fragment>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-2" align="center">
                    <NavBurger />
                  </div>
                  <div className="col-sm-3 col-sm-offset-7" align="center">
                    <button className="btn btn-small" onClick={this.logout}>Logout</button>
                  </div>
                </div>
                <Profile />
              </div>
            </React.Fragment>
            :
            <div className="container-fluid">
              {this.state.clicked ? <AuthAction clickHandler={this.login} /> : <Splash clickHandler={this.clicked}/>}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
