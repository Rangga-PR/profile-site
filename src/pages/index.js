import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexVideo from "../videos/coding.mp4"

import styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <video className={styles.indexVideo} autoPlay muted loop>
      <source src={IndexVideo} />
    </video>
  </Layout>
)

export default IndexPage
