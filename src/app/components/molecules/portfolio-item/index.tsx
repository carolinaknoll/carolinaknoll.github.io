import React from 'react';

import { Heading, HeadingFonts, HeadingLevels, Text, TextSizes } from 'app/components/atoms';
import { ImageWithCaption } from 'app/components/molecules';
import { FormattedMessage } from 'react-intl';

import styles from './styles.module.scss';
import { PortfolioItemData } from 'app/utils/portfolio';

interface PortfolioItemProps {
  item: PortfolioItemData;
  hideCaption: boolean;
}

const PortfolioItem = ({ item, hideCaption }: PortfolioItemProps) => (
  <div className={styles.portfolioItem}>
    <ImageWithCaption
      position={item.imagePosition}
      image={item.image}
      className={styles.portfolioItemImage}
      hideCaption={hideCaption}
    />

    <Heading type={HeadingLevels.h5} form={HeadingFonts.cursive} center className={styles.a523ab4b1ddefdc61fc45}>
      {item.texts.title}
    </Heading>
    <Text size={TextSizes.size20} className={styles.portfolioItemText}>
      {item.texts.description} <FormattedMessage id="commonThisProjectUses" /> {item.texts.technologies}{' '}
      <FormattedMessage id="commonView" />{' '}
      <a href={item.texts.page}>
        <FormattedMessage id="commonPage" />
      </a>
      /
      <a href={item.texts.code}>
        <FormattedMessage id="commonCode" />
      </a>
      .
    </Text>
  </div>
);

export { PortfolioItem };
