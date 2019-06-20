/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO() {

  return (
    <Helmet> 
      <meta charset="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      <link rel="stylesheet" href="css/style.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
      <link rel="shortcut icon" type="image/png" href="img/favicon.ico" />
      <title>Ben Cynamon</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
    </Helmet> 
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
