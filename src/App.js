import React, { Component } from 'react';
import './App.css';
import Splash from './components/Splash.js'

class App extends Component {
  state = {
    loggedIn: false
  }

  clickHandler = (e) => {
    this.setState({
      loggedIn: true
    }, console.log(this.state))

  }


  render() {
    return (
      <div className="App" id="wrapper">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <Splash clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
