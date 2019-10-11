import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Styles from "../components/navigationLinks.module.scss"

const NavigationLinks = ({ title }) => (
  <div className={Styles.navLinks}>
    <h3>
      <AniLink
        cover
        bg="#062c51"
        top="enter"
        direction="up"
        entryOffset={90}
        to="/"
      >
        {title}
      </AniLink>
    </h3>
    <h3>
      <AniLink cover bg="#062c51" top="exit" direction="right" to="/about">
        About
      </AniLink>
    </h3>
    <h3>
      <AniLink cover bg="#062c51" top="exit" direction="left" to="/experience">
        Experience
      </AniLink>
    </h3>
    <h3>
      <AniLink cover bg="#062c51" top="exit" direction="down" to="/contact">
        Contact
      </AniLink>
    </h3>
  </div>
)

export default NavigationLinks
