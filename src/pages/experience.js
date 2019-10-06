import React from "react"
import { Link } from "gatsby"

import Icon from "../assets/CodeBars.svg"
import Styles from "./experience.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Experience" />
    <div className={Styles.experienceGraphic}>
      <Icon />
    </div>
    <div className={Styles.content}>
      <h1>Experience</h1>
      <h3>Freelance Web-Developer</h3>
      <p>
        As a freelance developer, I have been working on many applications using
        node and react. My focus is on clean design and writing code that can be
        easily understood by other developers.
      </p>
      <h3>Stoneridge Software Devleoper Intern</h3>
      <p>
        From the frist day on the job, I never felt like an intern at
        Stoneridge. This is because I was continually integrated into important
        decisions with production code. I worked with a small team to delivery
        an agriculture application designed to help the efficiency of taking in
        commodities in large co-ops.
      </p>
      <h3>Python Educator</h3>
      <p>
        I have always had a passion for educating others and recently I was
        presented with the opportunity to collaborate to createa YouTube channel
        dedicated to Python education. I am responsible for creating engaging
        content by researching popular Python libraries and presenting my
        knowledge through real world projects and applications.
      </p>
    </div>
  </Layout>
)

export default About
