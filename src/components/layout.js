/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidenav from "./sidenav/sidenav"
import Burgernav from "./burgernav/burgernav"
import Content from "./content/content"
import "./layout.css"
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <Burgernav siteTitle={data.site.siteMetadata.title} />
      <Sidenav siteTitle={data.site.siteMetadata.title} />
      <Content>{children}</Content>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
