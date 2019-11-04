import React from "react"

import Layout from "../components/layout"
import Styles from "./index.module.scss"
import Rectangles from "../assets/TransparentRectangles.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.graphic}>
      <Rectangles />
    </div>
    <div className={Styles.content}>
      <h1>JORDAN YATCKOSKE</h1>
      <h4>Full-Stack Developer</h4>
    </div>
  </Layout>
)

export default IndexPage
