import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const Caption = ({ data }) => (
  <p className={styles.caption}>
    <a href={data.imageUrl}>{data.imageName}</a>
  </p>
)

Caption.propTypes = {
  data: PropTypes.shape(),
}

Caption.defaultProps = {
  data: PropTypes.shape({
    imageName: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
}

export default Caption
