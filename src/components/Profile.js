import React from 'react'
import {Fragment} from 'react'
import {avatars} from '../defaultAvatars.js'
import { getRandCard, getUsers } from '../adapter/adapter.js'
import Card from './Card.js'


class Profile extends React.Component {
  state={
    cards: [],
    users: null
  }
  user = this.props.user
  // cards =
  componentDidMount(){
    for (let i = 0; i < 6; i++) {
      getRandCard()
        .then(obj => {
          // console.log(obj)
          this.setState((previousState)=>{
            return {
              cards: [...previousState.cards, obj["api_data"]]
            }
          })

        })
    }
    getUsers()
      .then(arr=>{
        this.setState(() => {
          return {
            users: arr
          }
        })

      })
  }

  randomAvatar = () => {
    const url = avatars[Math.floor(Math.random() * 10) % avatars.length]
    return url
  }
  render(){
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
                <img src={this.randomAvatar()}/>

                <span className="card-title">Edit Avatar</span>
              </div>
              <div className="card-content">
                <h5 className="user-name-h3">{this.user.username}</h5>
                <p className="balance">Balance: ${this.user.balance}</p>
                <p>{this.user.bio}</p>
              </div>
              <div className="card-action">
                <a href="#">edit profile</a>
                <a href="#">add friend</a>
              </div>
            </div>
          </div>

          <div className="col-sm-9 card-container">
            <div className="row">
              {this.state.cards.map(obj => <Card cardObj={obj} key={obj.id}/>)}
            </div>
          </div>

        </div>

      </Fragment>
    )
  }
}

export default Profile
