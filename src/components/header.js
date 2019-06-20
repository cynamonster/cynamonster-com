import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (  ) => (
  <header>
    
    <Link to="/">
      <div class="header__logo"><i class="fa fa-code fa-3x" aria-hidden="true"></i></div>
    </Link>
    <div class="header__nav-bar" id="navLinks">
      <Link 
        to="/"
        activeClassName="active-nav" 
      >About</Link>
      <Link 
        to="/contact"
        activeClassName="active-nav" 
      >Contact</Link>
      <Link
        to="/work"
        activeClassName="active-nav" 
      >Development</Link>
    </div> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
