import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Styles from "./about.module.scss"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className={Styles.title}>
      <h1>About Me</h1>
    </div>
    <div className={Styles.content}>
      <h3>Who is Jordan?</h3>
      <p>
        I am currently a senior at Concordia College in Moorhead, MN pursuing a
        degree Computer Science. My hope is to soon become a Full-Stack Web
        developer at an organization that is inspiring and welcoming.
      </p>
      <h3>Why am I a web developer?</h3>
      <p>
        Web development has given me a chance to express my passion for clean
        design and usable software. The variety within web development languages
        has inspired be to continually learn more. A new langugage. A new
        framework. A new best practice. All of these give me a chance to grow my
        knowledge and fail. And failing early on is the best way to learn.
      </p>
      <h3>What inpires me?</h3>
      <p>Learning. Creative design. People with different ideas than me.</p>
      <h3>What will I bring to your organization?</h3>
      <p>
        A smile, a few jokes, an instilled love for learning, and a passion for
        creating applications with thoughtful teams.
      </p>
    </div>
  </Layout>
)

export default About
