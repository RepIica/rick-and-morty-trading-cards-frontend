import React from 'react'
import {Fragment} from 'react'

const NavBurger = (props) => {
  return(
    <Fragment>
      <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
        <span class="hamb-top"></span>
        <span class="hamb-middle"></span>
        <span class="hamb-bottom"></span>
      </button>
    </Fragment>
  )
}

export default NavBurger
