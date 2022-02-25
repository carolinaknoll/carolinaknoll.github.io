import React from 'react';

import { Heading, Text, Caption, TextSizes, HeadingLevels, HeadingFonts } from 'app/components/atoms';
import { HOME_LIGHT_THEME_IMAGE_PROPS, HOME_DARK_THEME_IMAGE_PROPS } from 'app/utils/images';
import { FormattedMessage } from 'react-intl';

import styles from './styles.module.scss';

const HeroSection = () => (
  <section className={styles.home} id="home">
    <div className={styles.homeBackground}></div>
    <div className={styles.homeDescriptionWrapper}>
      <div className={styles.homeDescription}>
        <Heading type={HeadingLevels.h2} form={HeadingFonts.print}>
          <FormattedMessage id="homeDescription1" />
        </Heading>
        <Heading type={HeadingLevels.h2} form={HeadingFonts.cursive} className={styles.homeTitle}>
          <FormattedMessage id="homeDescription2" />
        </Heading>

        <Heading type={HeadingLevels.h6} form={HeadingFonts.print}>
          <FormattedMessage id="homeDescription3" />
        </Heading>

        <div className={styles.homeImageAttribution}>
          <hr className={styles.homeImageAttributionSeparator} />

          <Text size={TextSizes.size16}>
            <FormattedMessage id="homeImageAttribution1" />
          </Text>

          <div className={styles.homeImageAttributionText}>
            <Text size={TextSizes.size16}>
              <FormattedMessage id="homeImageAttribution2" />
            </Text>
            <Caption data={HOME_LIGHT_THEME_IMAGE_PROPS} />
          </div>

          <div className={styles.homeImageAttributionText}>
            <Text size={TextSizes.size16}>
              <FormattedMessage id="homeImageAttribution3" />
            </Text>
            <Caption data={HOME_DARK_THEME_IMAGE_PROPS} />
          </div>
        </div>
        <hr className={styles.homeDescriptionWrapperSeparator} />
      </div>
    </div>
  </section>
);

export { HeroSection };
