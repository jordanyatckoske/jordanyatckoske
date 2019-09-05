import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h4>
        <Link to="/">{siteTitle}</Link>
      </h4>
      <h4>
        <Link to="/about">About</Link>
      </h4>
      <h4>
        <Link to="/experience">Experience</Link>
      </h4>
      <h4>
        <Link to="/contact">Contact</Link>
      </h4>
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
