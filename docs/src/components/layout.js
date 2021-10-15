/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"

import "./layout.css"

const Layout = ({ currentPath, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navigation {
            title
            items {
              title
              path
              order
              parent
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={withPrefix(`/assets/images/icons/favicon.ico`)} />
        <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/assets/images/icons/apple-touch-icon.png`)} />
        <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/assets/images/icons/favicon-32x32.png`)} />
        <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/assets/images/icons/favicon-16x16.png`)} />
        <link rel="manifest" href={withPrefix(`/assets/images/icons/site.webmanifest`)} />
        <link rel="mask-icon" href={withPrefix(`/assets/images/icons/safari-pinned-tab.svg`)} color="#f67900" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="The Collabur Design System." />
      </Helmet>
      <div className="main is-flex-desktop">
        <Header siteNavigation={data.site.siteMetadata.navigation} currentPath={currentPath} />
        <div className="main is-block">
          {children}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
