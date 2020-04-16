import { Link } from "gatsby"
import React, { useState, useMemo } from "react"
import styles from "./sidenav.module.css"
import Image from "../image"

const Sidenav = ({ siteTitle }) => {
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
    <div className={styles.sidepanel}>
      <div className={styles.imageContainer}>
        <Image />
      </div>
      <h1 className={styles.title}>{siteTitle}</h1>
      <p
        className={styles.subtitle}
      >{`Hi, i am a ${age} years old , Software Engineer, It's good to meet you`}</p>
      <nav className={styles.sidenav}>
        <Link className={styles.pageLink} to="/">
          Home
        </Link>
        <Link className={styles.pageLink} to="/skills">
          Skills
        </Link>
        <Link className={styles.pageLink} to="/projects">
          Projects
        </Link>
        <Link className={styles.pageLink} to="/certification">
          Certifications
        </Link>
        <Link className={styles.pageLink} to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Sidenav
