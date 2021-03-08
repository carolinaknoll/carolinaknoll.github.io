import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Heading, Text } from '_atoms'
import { ImageWithCaption } from '_molecules'

import styles from './styles.module.css'

const PortfolioItem = ({ item, hideCaption }) => (
  <div className={styles.portfolioItem}>
    <ImageWithCaption
      position={item.imagePosition}
      image={item.image}
      className={styles.portfolioItemImage}
      hideCaption
    />

    <Heading type="h5" form="cursive" center className={styles.a523ab4b1ddefdc61fc45}>
      {item.texts.title}
    </Heading>
    <Text size="20" className={styles.portfolioItemText}>
      {item.texts.description} View <a href={item.texts.page}>Page</a>/
      <a href={item.texts.code}>Code</a>.
    </Text>
    <Text size="20">This project uses {item.texts.technologies}.</Text>
  </div>
)

export default PortfolioItem
