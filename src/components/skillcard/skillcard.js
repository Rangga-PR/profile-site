import React from "react"
import PropTypes from "prop-types"
import styles from "./skillcard.module.css"

const Skillcard = ({ skill }) => (
  <div className={styles.cardBody}>
    <div className={styles.topSection}>
      <i className={`${skill.icon}`}></i>
    </div>
    <div className={styles.bottomSection}>
      <p className={styles.skillName}>{skill.name}</p>
    </div>
  </div>
)

Skillcard.propTypes = {
  skill: PropTypes.object,
}

export default Skillcard
