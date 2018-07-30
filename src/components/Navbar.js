import React from 'react'
import {Fragment} from 'react'

class Navbar extends React.Component {
  componentDidMount(){
    console.log('Navbar mounted')
    let trigger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.overlay'),
        isClosed = false;

    trigger.addEventListener('click',function () {
      hamburger_cross();
      document.querySelector('#wrapper').classList.toggle('toggled')
    });

    function hamburger_cross() {
      if (isClosed == true) {
        overlay.style.visibility = 'hidden';
        trigger.classList.remove('is-open');
        trigger.classList.add('is-closed');
        isClosed = false;
      } else {
        overlay.style.visibility = 'visibile'
        trigger.classList.remove('is-closed');
        trigger.classList.add('is-open');
        isClosed = true;
      }
    }
  }
  render(){
    return(
      <Fragment>
        <div className="overlay"></div>

        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul className="nav sidebar-nav">
            <li className="sidebar-brand" id="menu-name">
              <a href="#">

              </a>
            </li>
            <li id="menu-profile">
              <a href="#">Profile</a>
            </li>
            <li id="menu-chatbox">
              <a href="#">Chatbox</a>
            </li>
            <li id="menu-top-memes">
              <a href="#">Top Memes</a>
            </li>
            <li id="menu-new-memes">
              <a href="#">New Memes(Coming Soon)</a>
            </li>
            <li id="menu-log-out">
              <a href="#">Log Out</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="https://twitter.com/maridlcrmn">Follow me</a>
            </li>
          </ul>
        </nav>


      </Fragment>
    )
  }
}
export default Navbar
