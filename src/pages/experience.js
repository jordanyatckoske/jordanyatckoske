import React from "react"
import { Link } from "gatsby"

import CodeBars from "../assets/CodeBars.svg"
import Styles from "./experience.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Experience" />
    <div className={Styles.experienceGraphic}>
      <CodeBars />
    </div>
    <div className={Styles.content}>
      <h1>Experience</h1>
      <h3>Freelance Web-Developer</h3>
      <p>
        As a freelance developer, my passion for working with node and react has
        continued to grow. My focus is on clean design and efficient planning to
        create applications that are reliable and long-lasting. This website is
        built using <em>GatsbyJs</em> utilizing CCS modules with <em>SCSS</em>{" "}
        syntax. In addition, <em>webpack</em>, <em>Heroku</em>, and{" "}
        <em>service workers</em> are used to ensure fast load times, efficient
        deployment, and improved offline capability complying with <em>PWA</em>{" "}
        best practices.
      </p>
      <h3>Stoneridge Software Devleoper Intern</h3>
      <p>
        From my first day, I never felt like an intern at Stoneridge. I was
        continually integrated into important team decisions involving
        production code impacting the design and usability of our web
        application. Working on a small development team forced me out of my
        comfort zone and taught me how to accomplish all assigned tasks. In the
        end, our team's goal was to innovate the way large agriculturual co-ops
        recieved commodities into their systems by desgining a fresh and
        integraded web-application to ultimately improve effiencency in all
        business practices.
      </p>
      <h3>Python Educator</h3>
      <p>
        My passion for educating others has always been present and recently I
        was presented with the opportunity to collaborate to create a YouTube
        channel dedicated to Python education. Through this opportunity, I have
        been responsible for creating engaging content for our audience through
        intense research and planning. Our approach incorporates the most
        popular Python libraries by presenting my knowledge and research through
        relevant projects and applications designed to cater to a diverse
        audience. Because of quick changes in technology, we are forced to stay
        up to date and become translators from language documentation to
        pracital uses in our applications.
      </p>
    </div>
  </Layout>
)

export default About
