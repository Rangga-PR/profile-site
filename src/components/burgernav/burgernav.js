import React, { useState } from "react"
import { Link } from "gatsby"

import styles from "./burgernav.module.css"

const Burgernav = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.burgerNav}>
      <a href="/">
        <p className={styles.navTitle}>{siteTitle}</p>
      </a>
      <div className={styles.burgerNavIcon} onClick={toggleBurgerMenu}>
        {isOpen ? (
          <i className={`fas fa-times`}></i>
        ) : (
          <i className={`fas fa-bars`}></i>
        )}
      </div>
      <div
        className={`${isOpen ? styles.open : styles.closed} ${styles.pageList}`}
      >
        <ul>
          <li>
            <Link className={styles.pageLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.pageLink} to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className={styles.pageLink} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.pageLink} to="/certification">
              Certifications
            </Link>
          </li>
          <li>
            <Link className={styles.pageLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Burgernav
