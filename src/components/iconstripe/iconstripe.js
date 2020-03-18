import React from "react"

import styles from "./iconstripe.module.css"

const Iconstripe = () => (
  <div className={styles.stripeContainer}>
    <a
      href="https://wa.me/6281515882084?text=Hello%20,I%20saw%20your%20Website"
      target="blank"
    >
      <i className={`${styles.whatsapp} fab fa-whatsapp`}></i>
    </a>
    <a href="https://t.me/wassleeping" target="blank">
      <i className={`${styles.telegram} fab fa-telegram`}></i>
    </a>
    <a href="https://github.com/rangga-pr" target="blank">
      <i className={`${styles.github} fab fa-github`}></i>
    </a>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ranggaputraraharja@gmail.com"
      target="blank"
    >
      <i className={`${styles.email} far fa-envelope`}></i>
    </a>
  </div>
)

export default Iconstripe
