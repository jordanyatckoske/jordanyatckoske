import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Styles from "./index.module.scss"
import Rectangles from "../assets/TransparentRectangles.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className={Styles.graphic}>
      <Rectangles />
    </div>
    <div className={Styles.content}>
      <h1>Jordan Yatckoske</h1>
      <h4>Full-Stack Developer</h4>
    </div>
    {/* <SEO title="Home" />    
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
