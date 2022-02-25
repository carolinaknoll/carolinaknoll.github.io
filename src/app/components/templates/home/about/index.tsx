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

      <Text size={TextSizes.size20} className="startingParagraph">
        <FormattedMessage id="aboutDescription1" />
      </Text>

      <Text size={TextSizes.size20}>
        <FormattedMessage id="aboutDescription2" />
      </Text>

      <div className={styles.secondSection}>
        <RandomImage position="left" category="about" className={styles.aboutImageSecond} />

        <Text size={TextSizes.size20} className="startingParagraph">
          <FormattedMessage id="aboutDescription3" />
        </Text>
        <Text size={TextSizes.size20}>
          <FormattedMessage id="aboutDescription4" />
        </Text>
      </div>
    </div>
  </section>
);

export { AboutSection };
