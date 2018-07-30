import React from 'react'
import {Fragment} from 'react'
import {avatars} from '../defaultAvatars.js'

const randomAvatar = () => {
  const url = avatars[Math.floor(Math.random() * 10) % avatars.length]
  console.log(url);
  return url
}

const Profile = (props) => {
  return(
    <Fragment>

      <div className="row">
        <div className="col-xs-12" align="center">
          <h3>Profile</h3>
        </div>
      </div>


      <div className="row">
        <div className="col-sm-4">
          <h5>Medium</h5>
          <div className="card large">
            <div className="card-image">
              <img src={randomAvatar()}/>
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">link</a>
              <a href="#">link</a>
            </div>
          </div>
        </div>

        <div className="col-sm-8">
          <ul>
            <li>Card 1</li>
            <li>Card 2</li>
            <li>Card 3</li>
            <li>Card 4</li>
            <li>Card 5</li>
          </ul>
        </div>
      </div>

    </Fragment>
  )
}

export default Profile
