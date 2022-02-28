import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Heading, HeadingFonts, HeadingLevels, Text, TextSizes } from 'app/components/atoms';
import { RandomImage } from 'app/components/organisms';

import styles from './styles.module.scss';

const AboutSection = () => (
  <section className={classNames('sectionPadding', styles.about)} id="about">
    <div className="content">
      <Heading type={HeadingLevels.h2} form={HeadingFonts.cursive} center className={styles.aboutTitle}>
        <FormattedMessage id="aboutTitle" />
      </Heading>

      <RandomImage position="right" category="about" className={styles.aboutImageFirst} />

      <Text size={TextSizes.size20} className={'startingParagraph'}>
        <FormattedMessage id="aboutDescription1" />
      </Text>

      <Text size={TextSizes.size20}>
        <FormattedMessage id="aboutDescription2" />
      </Text>

      <Text size={TextSizes.size20} className={classNames('startingParagraph', styles.secondParagraph)}>
        <FormattedMessage id="aboutDescription3" />
      </Text>
      <Text size={TextSizes.size20} className={styles.listItem}>
        <FormattedMessage id="aboutDescription4" />
      </Text>
      <Text size={TextSizes.size20} className={styles.listItem}>
        <FormattedMessage id="aboutDescription5" />
      </Text>
      <Text size={TextSizes.size20} className={styles.listItem}>
        <FormattedMessage id="aboutDescription6" />
      </Text>

      <div className={styles.secondSection}>
        <RandomImage position="left" category="about" className={styles.aboutImageSecond} />

        <Text size={TextSizes.size20} className={'startingParagraph'}>
          <FormattedMessage id="aboutDescription7" />
        </Text>
        <Text size={TextSizes.size20} className={styles.listItem}>
          <FormattedMessage id="aboutDescription8" />
        </Text>
        <Text size={TextSizes.size20} className={styles.listItem}>
          <FormattedMessage id="aboutDescription9" />
        </Text>
        <Text size={TextSizes.size20} className={styles.listItem}>
          <FormattedMessage id="aboutDescription10" />
        </Text>
        <Text size={TextSizes.size20} className={styles.listItem}>
          <FormattedMessage id="aboutDescription11" />
        </Text>
        <Text size={TextSizes.size20} className={styles.listItem}>
          <FormattedMessage id="aboutDescription12" />
        </Text>
      </div>
    </div>
  </section>
);

export { AboutSection };
