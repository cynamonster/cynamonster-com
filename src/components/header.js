import { Link } from "gatsby"
import {Menu} from 'semantic-ui-react'
import PropTypes from "prop-types"
import React from "react"

const Header = (  ) => {
  // selectedScreen = '';

  const handleItemClick = (event, data) => {
    console.log(data)
    window.location.href = data.link;
  }

  return (
    <Menu borderless inverted widths={5} stackable size='huge'  className="nav-menu">
        <Menu.Item
          name='Home'
          link='/'
          // active={global.window.location.href === '/'}
          onClick={handleItemClick}
        >
          <Link to="/">
            About
          </Link>
        </Menu.Item>

        <Menu.Item
          name='Contact'
          link='/contact'
          // active={global.window.location.href === '/'}
          onClick={handleItemClick}
        >
          <Link to="/">
            Contact
          </Link>
        </Menu.Item>

        <Menu.Item
          name='Development'
          link='/work'
          // active={global.window.location.href === '/development'}
          onClick={handleItemClick}
        >
          <Link to="/work">
            Development
          </Link>
        </Menu.Item>

        <Menu.Item
          name='Blog'
          link='/blog'
          // active={global.window.location.href === '/blog'}
          onClick={handleItemClick}
        >
          <Link to="/blog">
            Blog
          </Link>
        </Menu.Item>
      </Menu>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

    {/* <Link to="/">
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
      <Link
        to="/blog"
        activeClassName="active-nav" 
      >Blog</Link>
    </div>  */}