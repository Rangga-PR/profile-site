import React from "react"

import styles from "./messageform.module.css"

const Messageform = () => (
  <div className={styles.messageContainer}>
    <form>
      <div className={styles.credentials}>
        <input name="userName" className={styles.name} placeholder="Name" />
        <input name="userEmail" className={styles.email} placeholder="Email" />
      </div>
      <div className={styles.message}>
        <textarea
          placeholder="Your Message here...."
          className={styles.textMessage}
          name="message"
          cols="60"
          rows="10"
        ></textarea>
      </div>
    </form>
  </div>
)

export default Messageform
