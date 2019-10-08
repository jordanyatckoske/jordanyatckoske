import PropTypes from "prop-types"
import React from "react"
import Icon from "../assets/bars-solid.svg"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import Styles from "./header.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
    this.openNavClick = this.openNavClick.bind(this)
  }

  openNavClick() {
    const navState = this.state.navOpen
    this.setState({ navOpen: !navState })
  }

  render() {
    return (
      <>
        <header className={Styles.header}>
          <span className={Styles.barsLogo} onClick={this.openNavClick}>
            <Icon />
          </span>
          {this.state.navOpen ? (
            <div className={Styles.headerLinks}>
              <h3>
                <AniLink
                  cover
                  bg="#062c51"
                  top="enter"
                  direction="up"
                  entryOffset={90}
                  to="/"
                >
                  {this.props.title}
                </AniLink>
              </h3>
              <h3>
                <AniLink
                  cover
                  bg="#062c51"
                  top="exit"
                  direction="right"
                  to="/about"
                >
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
                <AniLink
                  cover
                  bg="#062c51"
                  top="exit"
                  direction="down"
                  to="/contact"
                >
                  Contact
                </AniLink>
              </h3>
            </div>
          ) : null}
        </header>
      </>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Header title={data.site.siteMetadata.title} />}
  />
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }
