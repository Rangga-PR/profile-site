import React from "react"
import Certificationcard from "../components/certificationcard/certificationcard"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/certification.module.css"
import certificationList from "../data/certificationList"

const certificationPage = () => {
  return (
    <Layout>
      <SEO title="certifications" />
      <main className={styles.container}>
        {certificationList.map((certificate, index) => (
          <Certificationcard
            certificate={certificate}
            key={`${certificate}-${index}`}
          />
        ))}
      </main>
    </Layout>
  )
}

export default certificationPage
