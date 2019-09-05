import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Icon from "../assets/TransparentRectangles.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Icon />
    <h1>Jordan Yatckoske</h1>
    <h4>Full-Stack Developer</h4>
    {/* <SEO title="Home" />    
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
