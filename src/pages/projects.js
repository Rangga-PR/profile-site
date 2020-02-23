import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projectcard from "../components/projectcard/projectcard"
import styles from "../styles/projects.module.css"
import projectList from "../data/projectList.js"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <main className={styles.container}>
        {projectList.map((project, index) => (
          <Projectcard project={project} key={`${project}-${index}`} />
        ))}
      </main>
    </Layout>
  )
}

export default ProjectsPage
