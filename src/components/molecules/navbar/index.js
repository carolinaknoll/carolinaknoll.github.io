import React from 'react'
import PropTypes from 'prop-types'
import { ThemeToggle, Text } from '_atoms'

const Navbar = ({ isDark, toggleTheme }) => (
  <div className="navbar">
    <Text form="cursive" size="20">
      Carolina Knoll
    </Text>

    <div className="desktop">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  </div>
)

Navbar.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Navbar
