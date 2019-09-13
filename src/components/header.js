import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <>
    {/* <div className={Styles.overlay}></div> */}
    <header className={Styles.header}>
      <h3>
        <Link to="/">{siteTitle}</Link>
      </h3>
      <h3>
        <Link to="/about">About</Link>
      </h3>
      <h3>
        <Link to="/experience">Experience</Link>
      </h3>
      <h3>
        <Link to="/contact">Contact</Link>
      </h3>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
