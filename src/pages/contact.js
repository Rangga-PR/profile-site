import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Iconstripe from "../components/iconstripe/iconstripe"
import Messageform from "../components/messageform/messageform"

import styles from "../styles/contact.module.css"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className={styles.mainContainer}>
        <h2 className={styles.contactHeader}>Contact Me</h2>
        <div className={styles.contactContainer}>
          <p>if you wish, you can contact me using one of the apps below</p>
          <Iconstripe />
          <p>
            otherwise you can also send me a message by filling out the form
            below
          </p>
          <Messageform />
        </div>
      </main>
    </Layout>
  )
}

export default ContactPage
