import PropTypes from "prop-types"
import React from "react"
import styles from "./content.module.css"

const Content = ({ children }) => (
  <section className={styles.mainSection}>{children}</section>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
