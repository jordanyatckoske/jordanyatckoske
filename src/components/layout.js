/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styles from "./layout.module.scss"
import Icon from "../assets/DarkBackgroundGradient.svg"

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
    <>
      {/* <Icon className={styles.background} /> */}

      <div className={styles.container}>
        {/* <aside className={styles.menu}>aside</aside> */}
        <Header siteTitle="Jordan Yatckoske" />
        <main className={styles.main}>{children}</main>

        <footer>
          <h5>© {new Date().getFullYear()} Built by Jordan Yatckoske</h5>
          {/* {` `} */}
          {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
