import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Text } from '_atoms'

import styles from './styles.module.css'

const ImageWithCaption = ({ position, image }) => (
  <div
    className={classNames(styles.imageWithCaption, {
      [styles.imageWithCaptionLeft]: position === 'left',
      [styles.imageWithCaptionRight]: position === 'right',
    })}
  >
    <img src={image.imagePath} alt={image.imageName} className={styles.imageWithCaptionImage} />
    <Text size="16">{image.imageName}</Text>
  </div>
)

ImageWithCaption.propTypes = {
  position: PropTypes.string.isRequired,
  image: PropTypes.shape.isRequired,
}

ImageWithCaption.defaultProps = {
  position: '',
  image: PropTypes.shape({
    imagePath: PropTypes.func,
    imageName: PropTypes.string,
    imageUrl: PropTypes.string,
    uploader: PropTypes.string,
  }),
}

export default ImageWithCaption
