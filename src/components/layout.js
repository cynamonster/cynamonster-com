/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const BACKGROUND_COLOR = '#121625';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{backgroundColor: BACKGROUND_COLOR, height: '100%'}}>{children}</main>
        {/* <footer className="animated bounceInUp delay-1s">
          <div className="footer__main">
            <a href="mail:ben@cynamonster.com" >
              <FontAwesomeIcon icon={faEnvelope}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cynamonster">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.behance.net/gallery/81160273/Design-Work" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a href="https://linkedin.com/in/bencynamon" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
