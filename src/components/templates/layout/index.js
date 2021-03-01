import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Navbar } from '_molecules'
import { SEO } from '_atoms'

import '_styles/base.css'

const Layout = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => setDarkTheme(!isDarkTheme)

  return (
    <div
      className={classNames('app', {
        darkTheme: isDarkTheme,
        lightTheme: !isDarkTheme,
      })}
    >
      <SEO />
      <Navbar toggleTheme={toggleTheme} isDark={isDarkTheme} />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
