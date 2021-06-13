import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-intl'

import styles from './styles.module.css'

const MenuItems = ({ closeCallback }) => (
  <div className={styles.menuItems}>
    <a title="Home" onClick={closeCallback} href="#home">
      <FormattedMessage id="menu.home" />
    </a>

    <a title="About" onClick={closeCallback} href="#about">
      <FormattedMessage id="menu.about" />
    </a>

    <a title="Portfolio" onClick={closeCallback} href="#portfolio">
      <FormattedMessage id="menu.portfolio" />
    </a>

    <a title="Contact" onClick={closeCallback} href="#contact">
      <FormattedMessage id="menu.contact" />
    </a>
  </div>
)

MenuItems.propTypes = {
  closeCallback: PropTypes.func.isRequired,
}

MenuItems.defaultProps = {
  closeCallback: () => {},
}

export default MenuItems
