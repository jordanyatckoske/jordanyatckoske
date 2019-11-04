import React from "react"

import YLogo from "../assets/YLogo.svg"
import LinkedInIcon from "../assets/linkedin-brands.svg"
import Layout from "../components/layout"
import Styles from "./contact.module.scss"
import SEO from "../components/seo"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  handleChange = type => event => this.setState({ [type]: event.target.value })

  handleSubmit = event => event.preventDefault()

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <div className={Styles.graphic}>
          <YLogo />
        </div>

        <div className={Styles.content}>
          <h1>CONTACT ME</h1>
          <h3>
            Send me a message to learn about my experience or inquire about
            possible development opportunities!
          </h3>
          <div className={Styles.logos}>
            <a
              alt="LinkedIn"
              href="https://www.linkedin.com/in/jordan-yatckoske-523955135/"
              target="_blank"
              rel="noopener"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
              placeholder="Name"
              autoComplete="off"
            />
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange("email")}
              placeholder="Email"
              autoComplete="off"
            />
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange("message")}
              placeholder="Message"
              autoComplete="off"
            />
            <button name="submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default About
