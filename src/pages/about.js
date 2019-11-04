import React from "react"

import Layout from "../components/layout"
import CameraLens from "../assets/CameraLens.svg"
import Styles from "./about.module.scss"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className={Styles.graphic}>
      <CameraLens />
    </div>
    <div className={Styles.content}>
      <h1>ABOUT ME</h1>

      <h3>Who am I?</h3>
      <p>
        I am currently a senior at Concordia College in Moorhead, MN pursuing a
        degree in Computer Science. As an aspiring Full-Stack Web developer, I
        am searching for an inspiring organization striving to innovate in this
        field.
      </p>
      <h3>Why am I a web developer?</h3>
      <p>
        Web development has given me a chance to express my passion for clean
        design and usable software. The variety within web development languages
        has inspired me to become a continuous learner. A new langugage. A new
        framework. A new best practice. All of these give me a chance to grow my
        knowledge and learn how to build resilience when failure occurs.
      </p>
      <h3>What inpires me?</h3>
      <p>
        Learning new things, creative and usable design, and ideas that contrast
        with my own.
      </p>
      <h3>What will I bring to your organization?</h3>
      <p>
        A smile, a few jokes, an instilled love for learning, and a passion for
        creating applications with thoughtful teams.
      </p>
    </div>
  </Layout>
)

export default About
