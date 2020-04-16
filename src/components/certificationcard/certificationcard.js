import React from "react"
import PropTypes from "prop-types"
import styles from "./certificationcard.module.css"

const Certificationcard = ({ certificate }) => (
  <div className={styles.cardBody}>
    <div className={styles.topSection}>
      <img
        className={styles.certificateImg}
        src={certificate.img}
        alt={certificate.name}
      />
    </div>
    <div className={styles.bottomSection}>
      <p className={styles.certificateIssuer}>{certificate.issuer}</p>
      <p className={styles.certificateName}>{certificate.name}</p>
      <a className={styles.detailLink} href={certificate.link} target="blank">
        See More Details
      </a>
    </div>
  </div>
)

Certificationcard.propTypes = {
  certificate: PropTypes.object,
}

export default Certificationcard
