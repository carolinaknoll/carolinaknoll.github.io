import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ImageWithCaption } from '_molecules'
import { CATEGORIZED_IMAGES } from '_utils/images'

import styles from './styles.module.css'

const RandomImage = ({ position, category, className }) => {
  let randomNumber = category
    ? Math.floor(Math.random() * CATEGORIZED_IMAGES[category].length)
    : Math.floor(Math.random() * CATEGORIZED_IMAGES.length)

  return (
    <div className={classNames(styles.randomImage, className)}>
      <ImageWithCaption
        position={position}
        image={
          category ? CATEGORIZED_IMAGES[category][randomNumber] : CATEGORIZED_IMAGES[randomNumber]
        }
      />
    </div>
  )
}

RandomImage.propTypes = {
  position: PropTypes.string.isRequired,
  category: PropTypes.string,
  className: PropTypes.string,
}

RandomImage.defaultProps = {
  position: '',
  category: '',
  className: '',
}

export default RandomImage
