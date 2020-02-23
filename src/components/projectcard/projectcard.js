import React from "react"
import PropTypes from "prop-types"

import styles from "./projectcard.module.css"

const Projectcard = ({ project }) => {
  return (
    <a className={styles.projectCardBody} href={`${project.url}`}>
      <div className={styles.imgSection}>
        <img className={styles.img} src={project.thumbnail} alt={project.alt} />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.title}>
          <h4>{project.name}</h4>
        </div>
        <div className={styles.description}>
          <p>{project.description}</p>
        </div>
        <div className={styles.stackList}>
          {project.stacks.map((stack, index) => (
            <i className={`${stack.icon}`} key={`${stack}-${index}`}></i>
          ))}
        </div>
      </div>
    </a>
  )
}

Projectcard.propTypes = {
  project: PropTypes.object,
}

export default Projectcard
