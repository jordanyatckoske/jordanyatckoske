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
        {title.toUpperCase()}
      </AniLink>
    </h3>
    <h3>
      <AniLink cover bg="#062c51" top="exit" direction="right" to="/about">
        ABOUT
      </AniLink>
    </h3>
    <h3>
      <AniLink cover bg="#062c51" top="exit" direction="left" to="/experience">
        EXPERIENCE
      </AniLink>
    </h3>
    <h3>
      <AniLink cover bg="#062c51" top="exit" direction="down" to="/contact">
        CONTACT
      </AniLink>
    </h3>
  </div>
)

export default NavigationLinks
