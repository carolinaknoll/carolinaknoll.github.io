import React from 'react';
import classNames from 'classnames';

import { Heading, Text, Caption, TextSizes, HeadingLevels, HeadingFonts } from 'app/components/atoms';
import { HOME_LIGHT_THEME_IMAGE_PROPS, HOME_DARK_THEME_IMAGE_PROPS } from 'app/utils/images';
import { FormattedMessage } from 'react-intl';

import styles from './styles.module.scss';

const HeroSection = () => (
  <section className={styles.home} id="home">
    <div className={styles.background}>
      <div className={styles.homeDescriptionWrapper}>
        <div className={styles.homeDescription}>
          <div className={classNames(styles.titleContainer, styles.transparentBg)}>
            <Heading type={HeadingLevels.h2} form={HeadingFonts.print}>
              <FormattedMessage id="homeDescription1" />
            </Heading>
            <Heading type={HeadingLevels.h2} form={HeadingFonts.cursive} className={styles.homeTitle}>
              <FormattedMessage id="homeDescription2" />
            </Heading>
          </div>

          <Heading type={HeadingLevels.h6} form={HeadingFonts.print} className={styles.transparentBg}>
            <FormattedMessage id="homeDescription3" />{' '}
            <a href="https://en.wikipedia.org/wiki/Virtue" target="_blank">
              <FormattedMessage id="homeDescription4" />
            </a>
          </Heading>
        </div>
      </div>

      <div className={classNames(styles.attributionContainer, styles.transparentBg)}>
        <Text size={TextSizes.size16} className={classNames(styles.attribution)}>
          <FormattedMessage id="homeImageAttribution1" />
          <FormattedMessage id="homeImageAttribution2" />
          <Caption data={HOME_LIGHT_THEME_IMAGE_PROPS} /> /
          <FormattedMessage id="homeImageAttribution3" />
          <Caption data={HOME_DARK_THEME_IMAGE_PROPS} />
        </Text>
      </div>
    </div>
  </section>
);

export { HeroSection };
