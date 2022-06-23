import React from 'react';

import { Heading, HeadingLevels, HeadingFonts } from 'app/components/atoms';
import { FormattedMessage } from 'react-intl';

import Flower from 'app/images/svg/noun-feather-3250980.svg';

import styles from './styles.module.scss';

const HeroSection = () => (
  <section className={styles.home} id="home">
    <div className={styles.contentContainer}>
      <div className={styles.titleContainer}>
        <Flower className={styles.titleImage} />
        <Heading type={HeadingLevels.h2} form={HeadingFonts.cursive} className={styles.title}>
          <FormattedMessage id="homeDescription1" />
        </Heading>
      </div>

      <Heading type={HeadingLevels.h6} form={HeadingFonts.print}>
        <FormattedMessage id="homeDescription2" />{' '}
        <a href="https://en.wikipedia.org/wiki/Virtue" target="_blank">
          <FormattedMessage id="homeDescription3" />
        </a>
      </Heading>
    </div>
  </section>
);

export { HeroSection };
