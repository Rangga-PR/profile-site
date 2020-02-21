import { Link } from "gatsby"
import React from "react"
import styles from "./sidenav.module.css"

const Sidenav = () => (
  <div className={styles.sidepanel}>
    <h1 className={styles.title}>Rangga Putra</h1>
    <p className={styles.subtitle}>lorem ipsum</p>
    <nav className={styles.sidenav}>
      <Link className={styles.pageLink} to="/">
        Home
      </Link>
      <Link className={styles.pageLink} to="/profile">
        Profile
      </Link>
      <Link className={styles.pageLink} to="/skills">
        Skills
      </Link>
      <Link className={styles.pageLink} to="/projects">
        Projects
      </Link>
      <Link className={styles.pageLink} to="/contact">
        Contact
      </Link>
    </nav>
  </div>
)

export default Sidenav
