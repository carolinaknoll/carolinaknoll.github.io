import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'

import { ThemeToggle, LanguageToggle, Text } from '_atoms'
import { MenuItems } from '_molecules'
import { Link } from 'gatsby'

import variables from '_config/css-variables'

import styles from './styles.module.css'

const Navbar = ({ isDark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navbarOptions = (
    <div className={styles.navbarOptions}>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} /> - <LanguageToggle isDark={isDark} />
    </div>
  )

  return (
    <nav className={styles.navbarContainer} id="navbarContainer">
      <CheeseburgerMenu
        backgroundColor={isDark ? variables['gray-2'] : variables['white-2']}
        closeCallback={closeMenu}
        innerClassName={styles.navbarInner}
        isOpen={menuOpen}
        noShadow
        outerClassName={styles.navbarOuter}
        topOffset="45px"
      >
        <div>
          {navbarOptions}
          <MenuItems closeCallback={closeMenu} />
        </div>
      </CheeseburgerMenu>
      <HamburgerMenu
        animationDuration={0.5}
        borderRadius={0}
        className={styles.navbarNavigation}
        color={isDark ? variables['white'] : variables['dark']}
        height={15}
        isOpen={menuOpen}
        menuClicked={openMenu}
        rotate={0}
        strokeWidth={2}
        width={25}
      />
      <div className={styles.navbarBrand}>
        <Link to="/">
          <Text form="cursive" size="22">
            Carolina Knoll
          </Text>
        </Link>
      </div>

      <div className={styles.desktopNav}>
        {navbarOptions}
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
