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
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <footer>
          <h5>© {new Date().getFullYear()} Built by Jordan Yatckoske</h5>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
