import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Fade } from 'react-reveal'
import { Heading } from '_atoms'

import styles from './styles.module.css'

const SeparatorBlock = ({ name, title, subtitle }) => (
  <div className={classNames(styles.separatorBlock, styles[name])}>
    {title && (
      <Fade>
        <Heading type="h5" form="cursive" center>
          {title}
        </Heading>
      </Fade>
    )}

    {subtitle && (
      <Fade delay={300}>
        <Heading type="h6" form="print" center>
          {subtitle}
        </Heading>
      </Fade>
    )}
  </div>
)

SeparatorBlock.defaultProps = {
  name: '',
  title: '',
  subtitle: '',
}

export default SeparatorBlock
