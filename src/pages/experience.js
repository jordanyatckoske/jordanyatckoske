import React from "react"
import { Link } from "gatsby"

import Icon from "../assets/CodeBars.svg"
import Styles from "./experience.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <div className={Styles.graphic}>
      <Icon />
    </div>
    <div className={Styles.content}>
      <h1>Experience</h1>
      <h3>Freelance Web-Developer</h3>
      <p>Some interesting information about what I do.</p>
      <h3>Stoneridge Software Devleoper Intern</h3>
      <p>Some interesting information about what I do.</p>
      <h3>Python Educator</h3>
      <p>Some interesting information about what I do.</p>
    </div>
  </Layout>
)

export default About
