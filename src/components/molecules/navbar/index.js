import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeToggle, LanguageToggle, Text } from '_atoms'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import { MenuItems } from '_molecules'
import { Link } from 'gatsby'

import styles from './styles.module.css'

const Navbar = ({ isDark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={styles.navbarContainer} id="navbarContainer">
      <CheeseburgerMenu
        backgroundColor={isDark ? '#000' : '#FFF'}
        closeCallback={closeMenu}
        innerClassName={styles.navbarInner}
        isOpen={menuOpen}
        noShadow
        outerClassName={styles.navbarOuter}
        topOffset="45px"
      >
        <MenuItems closeCallback={closeMenu} />
      </CheeseburgerMenu>
      <HamburgerMenu
        animationDuration={0.5}
        borderRadius={0}
        className={styles.navbarNavigation}
        color={isDark ? '#FFF' : '#000'}
        height={15}
        isOpen={menuOpen}
        menuClicked={openMenu}
        rotate={0}
        strokeWidth={2}
        width={25}
      />
      <div className={styles.navbarBrand}>
        <a href="#">
          <Text form="cursive" size="22">
            Carolina Knoll
          </Text>
        </a>
      </div>

      <div className={styles.navbarOptions}>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} /> -{' '}
        <LanguageToggle isDark={isDark} />
      </div>

      <div className={styles.desktopNav}>
        <MenuItems />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Navbar
