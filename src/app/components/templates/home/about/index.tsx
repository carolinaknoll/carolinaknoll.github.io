import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Heading, HeadingFonts, HeadingLevels, Text, TextSizes } from 'app/components/atoms';

import Flower from 'app/images/svg/noun-flower-2727483.svg';

import styles from './styles.module.scss';

const AboutSection = () => (
  <section className={classNames('sectionPadding', styles.about)} id="about">
    <div className="content">
      <div className={styles.titleContainer}>
        <Flower className={styles.titleImage} />
        <Heading
          type={HeadingLevels.h2}
          form={HeadingFonts.cursive}
          center
          className={styles.aboutTitle}
        >
          <FormattedMessage id="aboutTitle" />
        </Heading>
      </div>

      <Text size={TextSizes.size20} className={'startingParagraph'}>
        <FormattedMessage id="aboutDescription1" />
      </Text>

      <Text size={TextSizes.size20}>
        <FormattedMessage id="aboutDescription2" />
      </Text>

      <Text
        size={TextSizes.size20}
        className={classNames('startingParagraph', styles.secondParagraph)}
      >
        <FormattedMessage id="aboutDescription3" />
      </Text>

      <div className={styles.firstSectionContent}>
        <div className={styles.contentWrapper}>
          <Text size={TextSizes.size20} className={styles.listItem}>
            <FormattedMessage id="aboutDescription4" />
          </Text>
        </div>

        <div className={styles.contentWrapper}>
          <Text size={TextSizes.size20} className={styles.listItem}>
            <FormattedMessage id="aboutDescription5" />
          </Text>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.foo} />
          <Text size={TextSizes.size20} className={styles.listItem}>
            <FormattedMessage id="aboutDescription6" />
          </Text>
        </div>
      </div>

      <div className={styles.secondSection}>
        {/* <RandomImage position="left" category="about" className={styles.aboutImageSecond} /> */}

        <Text size={TextSizes.size20} className={'startingParagraph'}>
          <FormattedMessage id="aboutDescription7" />
        </Text>

        <div className={styles.secondSectionContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.foo} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription8" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.foo} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription9" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.foo} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription10" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.foo} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription11" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.foo} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription12" />
            </Text>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { AboutSection };
