import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skillcard from "../components/skillcard/skillcard"
import styles from "../styles/skills.module.css"
const skillsList = require("../data/skillsList.json")

const SkillsPage = () => {
  return (
    <Layout>
      <SEO title="Skills" />
      <main className={styles.container}>
        {skillsList.map((skill, index) => (
          <Skillcard skill={skill} key={`${skill.name}-${index}`} />
        ))}
      </main>
    </Layout>
  )
}

export default SkillsPage
