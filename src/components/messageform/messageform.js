import React from "react"

import styles from "./messageform.module.css"

const Messageform = () => (
  <div className={styles.messageContainer}>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className={styles.credentials}>
        <input name="userName" className={styles.name} placeholder="Name" />
        <input
          name="userEmail"
          className={styles.email}
          placeholder="Email"
          type="email"
        />
      </div>
      <div className={styles.message}>
        <textarea
          placeholder="Your Message here...."
          className={styles.textMessage}
          name="message"
          cols="60"
          rows="8"
        ></textarea>
        <button className={styles.submitButton} type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
)

export default Messageform
