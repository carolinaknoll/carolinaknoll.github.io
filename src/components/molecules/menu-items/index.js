import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './styles.module.css'

const MenuItems = ({ closeCallback }) => (
  <div className={styles.menuItems}>
    <a title="Home" onClick={closeCallback} href="#home">
      <span>H</span>ome
    </a>

    <a title="About" onClick={closeCallback} href="#about">
      <span>A</span>bout
    </a>

    <a title="Portfolio" onClick={closeCallback} href="#portfolio">
      <span>P</span>ortfolio
    </a>

    <a title="Contact" onClick={closeCallback} href="#contact">
      <span>C</span>ontact
    </a>
  </div>
)

MenuItems.propTypes = {
  closeCallback: PropTypes.node.isRequired,
}

export default MenuItems
