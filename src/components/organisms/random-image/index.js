import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ImageWithCaption } from '_molecules'
import { CATEGORIZED_IMAGES } from '_utils/images'

const RandomImage = ({ position, category, className }) => {
  let randomNumber = category
    ? Math.floor(Math.random() * CATEGORIZED_IMAGES[category].length)
    : Math.floor(Math.random() * CATEGORIZED_IMAGES.length)

  return (
    <ImageWithCaption
      position={position}
      image={
        category ? CATEGORIZED_IMAGES[category][randomNumber] : CATEGORIZED_IMAGES[randomNumber]
      }
      className={className}
    />
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
