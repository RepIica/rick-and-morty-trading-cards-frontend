import React from 'react'
import {Fragment} from 'react'

const Profile = (props) => {
  return(
    <Fragment>
      <div class="overlay"></div>

      <!-- Sidebar -->
      <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
        <ul class="nav sidebar-nav">
          <li class="sidebar-brand" id="menu-name">
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
          <!-- <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Works <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li class="dropdown-header">Dropdown heading</li>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li> -->
          <li id="menu-log-out">
            <a href="#">Log Out</a>
          </li>
          <!-- <li>
            <a href="#">Contact</a>
          </li> -->
          <!-- <li>
            <a href="https://twitter.com/maridlcrmn">Follow me</a>
          </li> -->
        </ul>
      </nav>


    </Fragment>
  )
}

export default Profile
