import React from 'react'
import {Fragment} from 'react'
import {avatars} from '../defaultAvatars.js'

const Card = (props) => {
  const card = props.cardObj
  return(
    <li>
      <div className="col-md-4 col-sm-6">
        <div className="card-panel profile-card">
          <div className="card-image">
            <img src={card.image}/>
          </div>
          <div className="card-content">
            <p>
              id: {card.id}
            </p>
            <p>
              name: {card.name}
            </p>
            <p>
              status: {card.status}
            </p>
            <p>
              species: {card.species}
            </p>
            <p>
              gender: {card.gender}
            </p>
            <p>
              location: {card.location.name}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Card
