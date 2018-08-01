import React from 'react'
import {Fragment} from 'react'
import {avatars} from '../defaultAvatars.js'

const randomAvatar = () => {
  const url = avatars[Math.floor(Math.random() * 10) % avatars.length]
  console.log(url);
  return url
}

const Profile = (props) => {
  const user = props.user
  return(
    <Fragment>

      <div className="row">
        <div className="col-xs-12" align="center">
          <h3 className="profile-h">Profile</h3>
        </div>
      </div>


      <div className="row">
        <div className="col-sm-3">
          <div className="card large">
            <div className="card-image">
              <img src={randomAvatar()}/>

              <span className="card-title">Edit Avatar</span>
            </div>
            <div className="card-content">
              <h5 className="user-name-h3">{user.username}</h5>
              <p className="balance">Balance: ${user.balance}</p>
              <p>{user.bio}</p>
            </div>
            <div className="card-action">
              <a href="#">edit profile</a>
              <a href="#">add friend</a>
            </div>
          </div>
        </div>

        <div className="col-sm-9">
          <ul>
            <li>
              <div className="col-md-4 col-sm-6">
                <div className="card-panel profile-card">
                  <div className="card-image">
                    <img src='https://rickandmortyapi.com/api/character/avatar/20.jpeg'/>
                  </div>
                  <div className="card-content">
                    <p>
                      id: 1
                    </p>
                    <p>
                      name: Rick Sanchez
                    </p>
                    <p>
                      status: Alive
                    </p>
                    <p>
                      species: Human
                    </p>
                    <p>
                      gender: Male
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="col-md-4 col-sm-6">
                <div className="card-panel profile-card">
                  <div className="card-image">
                    <img src='https://rickandmortyapi.com/api/character/avatar/15.jpeg'/>
                  </div>
                  <div className="card-content">
                    <p>
                      id: 1
                    </p>
                    <p>
                      name: Rick Sanchez
                    </p>
                    <p>
                      status: Alive
                    </p>
                    <p>
                      species: Human
                    </p>
                    <p>
                      gender: Male
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="col-md-4 col-sm-6">
                <div className="card-panel profile-card">
                  <div className="card-image">
                    <img src='https://rickandmortyapi.com/api/character/avatar/8.jpeg'/>
                  </div>
                  <div className="card-content">
                    <p>
                      id: 1
                    </p>
                    <p>
                      name: Rick Sanchez
                    </p>
                    <p>
                      status: Alive
                    </p>
                    <p>
                      species: Human
                    </p>
                    <p>
                      gender: Male
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="col-md-4 col-sm-6">
                <div className="card-panel profile-card">
                  <div className="card-image">
                    <img src='https://rickandmortyapi.com/api/character/avatar/11.jpeg'/>
                  </div>
                  <div className="card-content">
                    <p>
                      id: 1
                    </p>
                    <p>
                      name: Rick Sanchez
                    </p>
                    <p>
                      status: Alive
                    </p>
                    <p>
                      species: Human
                    </p>
                    <p>
                      gender: Male
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="col-md-4 col-sm-6">
                <div className="card-panel profile-card">
                  <div className="card-image">
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'/>
                  </div>
                  <div className="card-content">
                    <p>
                      id: 1
                    </p>
                    <p>
                      name: Rick Sanchez
                    </p>
                    <p>
                      status: Alive
                    </p>
                    <p>
                      species: Human
                    </p>
                    <p>
                      gender: Male
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="col-md-4 col-sm-6">
                <div className="card-panel profile-card">
                  <div className="card-image">
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'/>
                  </div>
                  <div className="card-content">
                    <p>
                      id: 1
                    </p>
                    <p>
                      name: Rick Sanchez
                    </p>
                    <p>
                      status: Alive
                    </p>
                    <p>
                      species: Human
                    </p>
                    <p>
                      gender: Male
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </Fragment>
  )
}

export default Profile
