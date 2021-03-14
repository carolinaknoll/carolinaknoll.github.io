import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '_atoms'
import { Fade } from 'react-reveal'

import styles from './styles.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}>
      <Fade>
        <Text size="20">
          <a href="mailto:carolinasknoll@gmail.com">
            <span>E</span>mail
          </a>{' '}
          /{' '}
          <a href="https://github.com/carolinaknoll">
            <span>G</span>itHub
          </a>{' '}
          /{' '}
          <a href="https://www.linkedin.com/in/carolinaknoll">
            <span>L</span>inkedIn
          </a>
        </Text>
      </Fade>
    </div>
    <div className={styles.footerBottom}>
      <Fade delay={300}>
        <Text size="20">
          <span>H</span>andcrafted with love by <span>C</span>arolina <span>K</span>noll and art
          from <a href="https://search.creativecommons.org/">Creative Commons Search</a>.
        </Text>
      </Fade>
    </div>
  </footer>
)

export default Footer
