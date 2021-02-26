import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}></div>
    <div className={styles.footerBottom}>
      <div className={styles.container}>
        <p>Handcrafted with by Carolina Knoll.</p>
      </div>
    </div>
  </footer>
)

export default Footer
