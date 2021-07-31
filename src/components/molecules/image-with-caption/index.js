import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Text, Caption } from '_atoms'

import styles from './styles.module.css'

const ImageWithCaption = ({ position, image, className, hideCaption }) => (
  <div
    className={classNames(styles.imageWithCaption, className, {
      [styles.imageWithCaptionLeft]: position === 'left',
      [styles.imageWithCaptionRight]: position === 'right',
      [styles.imageWithCaptionCenterTop]: position === 'centerTop',
    })}
  >
    <img src={image.imagePath} alt={image.imageName} className={styles.imageWithCaptionImage} />

    {!hideCaption && <Caption data={image} />}
  </div>
)

ImageWithCaption.propTypes = {
  position: PropTypes.string.isRequired,
  image: PropTypes.shape(),
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
