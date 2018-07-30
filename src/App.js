import React, { Component } from 'react';
import Splash from './components/Splash.js'
import NavBurger from './components/NavBurger.js'
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js'

class App extends Component {
  state = {
    loggedIn: true
  }

  login = (e) => {
    this.setState({
      loggedIn: true
    }, ()=> {console.log(`loggedIn state is now`,this.state.loggedIn)})
  }
  logout = (e) => {
    this.setState({
      loggedIn: false
    }, ()=> {console.log(`loggedIn state is now`,this.state.loggedIn)})
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
              <Splash clickHandler={this.login}/>
            </div>
          }

        </div>
      </div>
    );
  }
}

export default App;
