import React from 'react'
import {Fragment} from 'react'

const Splash = (props) => {
  return(
    <Fragment>
      <div className="row">
        <div className="col-xs-12" align="center">
          <h1>Rick and Morty Virtual Trading Cards</h1>
        </div>
      </div>
      <div className="row homepage">
        <div className="col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1" align="center">
          <button type="button" name="button" className="btn" id="signup-btn">Sign Up</button><br/>
          <button type="button" name="button" className="btn" id="login-btn" onClick={props.clickHandler}>Log In</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Splash
