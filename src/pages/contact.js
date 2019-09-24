import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Styles from "./contact.module.scss"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    return (
      <Layout>
        {/* <SEO title="Page two" /> */}
        <div className={Styles.content}>
          <h1>Contact Me</h1>
          <p>
            Send me a message to learn about my experience or inquire about
            possible development opportunities.
          </p>
          <form>
            <input
              name="name"
              type="text"
              placeholder="Name"
              autoFocus
              autoComplete="off"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
            <textarea name="name" placeholder="Message" autoComplete="off" />
            <button name="submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className={Styles.graphic}></div>
      </Layout>
    )
  }
}

export default About
