import React from 'react';

import { Heading, HeadingLevels, HeadingFonts } from 'app/components/atoms';
import { FormattedMessage } from 'react-intl';

import Flower from 'app/images/svg/noun-feather-3250980.svg';

import styles from './styles.module.scss';

const HeroSection = () => (
  <section className={styles.home} id="home">
    <div className={styles.background}>
      <div className={styles.homeDescription}>
        <div className={styles.titleContainer}>
          <Flower className={styles.titleImage} />
          <Heading type={HeadingLevels.h2} form={HeadingFonts.cursive} className={styles.homeTitle}>
            <FormattedMessage id="homeDescription1" />
          </Heading>
        </div>

        <Heading type={HeadingLevels.h6} form={HeadingFonts.print} className={styles.foo}>
          <FormattedMessage id="homeDescription2" />{' '}
          <a href="https://en.wikipedia.org/wiki/Virtue" target="_blank">
            <FormattedMessage id="homeDescription3" />
          </a>
        </Heading>
      </div>
    </div>
  </section>
);

export { HeroSection };
