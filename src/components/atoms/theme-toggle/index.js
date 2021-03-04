import React from 'react'
import PropTypes from 'prop-types'

const ThemeToggle = ({ isDark, toggleTheme, showText }) => (
  <div>
    <button onClick={toggleTheme}>{showText ? `${isDark ? 'on' : 'off'}` : null}</button>
  </div>
)

ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  showText: PropTypes.bool,
}

ThemeToggle.defaultProps = {
  showText: true,
}

export default ThemeToggle
