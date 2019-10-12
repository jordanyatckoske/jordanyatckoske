import React from "react"
import Icon from "../assets/bars-solid.svg"
import NavigationLinks from "./navigationLinks"
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import Styles from "./header.module.scss"
import { CSSTransition } from "react-transition-group"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
      width: null,
    }
    this.openNavClick = this.openNavClick.bind(this)
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth })
    if (this.state.width >= 768) {
      this.setState({ navOpen: false })
    }
  }
  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener("resize", this.updateWidth)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth)
  }
  openNavClick() {
    const navState = this.state.navOpen
    this.setState({ navOpen: !navState })
  }

  render() {
    return (
      <>
        <header className={Styles.header}>
          {this.state.width < 768 ? (
            <span className={Styles.barsLogo} onClick={this.openNavClick}>
              <Icon />
            </span>
          ) : null}
          <CSSTransition
            in={this.state.navOpen}
            timeout={350}
            classNames={{
              enter: Styles.displayEnter,
              enterActive: Styles.displayEnterActive,
              exit: Styles.displayExit,
              exitActive: Styles.displayExitActive,
            }}
            unmountOnExit
          >
            {/* {this.state.navOpen && this.state.width < 768 ? ( */}
            <NavigationLinks title={this.props.title} />
            {/* ) : null} */}
          </CSSTransition>
          {this.state.width >= 768 ? (
            <NavigationLinks title={this.props.title} />
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
