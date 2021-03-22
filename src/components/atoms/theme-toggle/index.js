import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'gatsby-plugin-intl'

const ThemeToggle = ({ isDark, toggleTheme }) => {
  const currentTheme = <FormattedMessage id={isDark ? 'common.dark' : 'common.light'} />

  return (
    <p onClick={toggleTheme}>
      <FormattedMessage id="common.theme" />: {currentTheme}
    </p>
  )
}

ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  showText: PropTypes.bool,
}

ThemeToggle.defaultProps = {
  showText: true,
}

export default ThemeToggle
