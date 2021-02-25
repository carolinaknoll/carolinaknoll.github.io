import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const HEADING_FONTS = ['cursive', 'print']
const HEADING_COLORS = ['default', 'white']

const [h1] = HEADING_LEVELS
const [cursive] = HEADING_FONTS
const [defaultColor] = HEADING_COLORS

const Heading = ({ children, type, form, className, color, bold, center, ...props }) => {
  const componentProps = {
    className: classNames(
      styles.heading,
      styles[type],
      styles[form],
      { [styles.bold]: bold, [styles.center]: center },
      color !== 'default' ? styles[color] : '',
      className
    ),
    ...props,
  }

  return React.createElement(type, { ...componentProps }, children)
}

Heading.propTypes = {
  type: PropTypes.oneOf(HEADING_LEVELS),
  form: PropTypes.oneOf(HEADING_FONTS),
  color: PropTypes.oneOf(HEADING_COLORS),
  children: PropTypes.node,
  className: PropTypes.string,
  bold: PropTypes.bool,
  center: PropTypes.bool,
}

Heading.defaultProps = {
  type: h1,
  form: cursive,
  color: defaultColor,
  children: undefined,
  className: undefined,
  bold: false,
  center: false,
}

export default Heading
