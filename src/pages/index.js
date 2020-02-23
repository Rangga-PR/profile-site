import React, { useState, useMemo } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexVideo from "../videos/coffee.mp4"

import styles from "../styles/index.module.css"

const IndexPage = () => {
  const [age, setAge] = useState(0)

  const getAge = () => {
    const currenTime = new Date()
    const currentYear = currenTime.getFullYear()
    const currentMonth = currenTime.getMonth() + 1
    let age = currentYear - 1995
    if (currentMonth < 6) age -= 1
    setAge(age)
  }

  useMemo(() => getAge(), [])

  return (
    <Layout>
      <SEO title="Home" />
      <video className={styles.indexVideo} autoPlay muted loop>
        <source src={IndexVideo} />
      </video>
      <div className={styles.overlay}>
        <div className={styles.greetingContainer}>
          <h1 className={styles.welcome}>Welcome</h1>
          <p
            className={styles.greeting}
          >{`Hi, i am a ${age} years old , Software Engineer, It's good to meet you`}</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
