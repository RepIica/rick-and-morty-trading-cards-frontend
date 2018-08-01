import React from 'react'
import {Fragment} from 'react'

class Navbar extends React.Component {

  state={
    isClosed: false
  }

  componentDidMount(){
    console.log('Navbar mounted')
    let trigger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.overlay')

    trigger.addEventListener('click',function () {
      hamburger_cross();
      document.querySelector('#wrapper').classList.toggle('toggled')
    });

    const hamburger_cross = () => {
      if (this.state.isClosed == true) {
        overlay.style.visibility = 'hidden';
        trigger.classList.remove('is-open');
        trigger.classList.add('is-closed');
        this.setState({
          isClosed: false
        })
      } else {
        overlay.style.visibility = 'visibile'
        trigger.classList.remove('is-closed');
        trigger.classList.add('is-open');
        this.setState({
          isClosed: true
        })
      }
    }
  }

  logout = ()=>{
    document.querySelector('#wrapper').classList.toggle('toggled')
    this.props.clickHandler()
  }
  render(){
    return(
      <Fragment>
        <div className="overlay"></div>

        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul className="nav sidebar-nav">
            <li className="sidebar-brand" id="menu-name">
              <a href="#">
                {this.props.user.username}
              </a>
            </li>
            <li id="menu-profile" onClick={this.props.profileHandler}>
              <a href="#">Profile</a>
            </li>
            <li id="menu-chatbox">
              <a href="#">Add Friend(coming soon)</a>
            </li>
            <li id="menu-top-memes">
              <a href="#">FAQ(coming soon)</a>
            </li>
            <li id="menu-log-out" onClick={this.logout}>
              <a href="#">Log Out</a>
            </li>
            <li>
              <a href="http://sendhere.net/#contact">Contact</a>
            </li>
          </ul>
        </nav>


      </Fragment>
    )
  }
}
export default Navbar
