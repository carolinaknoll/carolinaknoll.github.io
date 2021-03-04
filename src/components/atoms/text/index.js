import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const SIZES = {
  16: styles.size16,
  20: styles.size20,
  22: styles.size22,
  24: styles.size24,
  28: styles.size28,
}

const COLORS = {
  default: styles.default,
}

const FONTS = {
  cursive: styles.cursive,
  print: styles.print,
}

const [cursive] = FONTS

const Text = ({ size, color, children, className, form, bold, ...props }) => {
  const textProps = {
    className: classNames(className, COLORS[color], SIZES[size], FONTS[form], styles.text, {
      [styles.bold]: bold,
    }),
    props,
  }

  return <p {...textProps}>{children}</p>
}

Text.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(COLORS)),
  form: PropTypes.oneOf(Object.keys(FONTS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
}

Text.defaultProps = {
  bold: false,
  children: undefined,
  className: undefined,
  color: COLORS.default,
  form: 'print',
  size: SIZES[16],
}

export default Text
