import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "./header.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default () => {
  const query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
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
            {query.site.siteMetadata.title}
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
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }
