import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './styles.module.css'

const MenuItems = ({ closeCallback }) => (
  <div className={styles.menuItems}>
    <a title="Home" onClick={closeCallback} href="#home">
      Home
    </a>

    <a title="About" onClick={closeCallback} href="#about">
      About
    </a>

    <a title="Portfolio" onClick={closeCallback} href="#portfolio">
      Portfolio
    </a>

    <a title="Contact" onClick={closeCallback} href="#contact">
      Contact
    </a>
  </div>
)

MenuItems.propTypes = {
  closeCallback: PropTypes.node.isRequired,
}

export default MenuItems
