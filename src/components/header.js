import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <>
    <header className={Styles.header}>
      <h3>
        <AniLink
          cover
          bg="#062c51"
          top="enter"
          direction="up"
          entryOffset={90}
          to="/"
        >
          {siteTitle}
        </AniLink>
      </h3>
      <h3>
        <AniLink cover bg="#062c51" top="exit" direction="right" to="/about">
          About
        </AniLink>
      </h3>
      <h3>
        <AniLink
          cover
          bg="#062c51"
          top="exit"
          direction="left"
          to="/experience"
        >
          Experience
        </AniLink>
      </h3>
      <h3>
        <AniLink cover bg="#062c51" top="exit" direction="down" to="/contact">
          Contact
        </AniLink>
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
