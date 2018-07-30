import React from 'react'

const NavBurger = (props) => {
  return(
      <button type="button" className="hamburger is-closed" data-toggle="offcanvas">
        <span className="hamb-top"></span>
        <span className="hamb-middle"></span>
        <span className="hamb-bottom"></span>
      </button>
  )
}

export default NavBurger
