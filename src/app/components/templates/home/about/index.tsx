import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Heading, HeadingFonts, HeadingLevels, Text, TextSizes } from 'app/components/atoms';

import Flower from 'app/images/svg/noun-flower-2727483.svg';

import Gloves from 'app/images/svg/noun-gloves-1044055.svg';
import Rabbit from 'app/images/svg/noun-rabbit-214995.svg';
import KnowledgeGrowth from 'app/images/svg/noun-knowledge-growth-3997797.svg';

import Geography from 'app/images/svg/noun-geography-3846209.svg';
import Growth from 'app/images/svg/noun-growth-3816161.svg';
import MatrixStrength from 'app/images/svg/noun-matrix-strength-3020215.svg';
import Camping from 'app/images/svg/noun-camping-4362585.svg';
import RollerCoaster from 'app/images/svg/noun-roller-coaster-4362629.svg';

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
          <Gloves className={classNames(styles.aboutIcon, styles.stroke1px)} />
          <Text size={TextSizes.size20} className={styles.listItem}>
            <FormattedMessage id="aboutDescription4" />
          </Text>
        </div>

        <div className={styles.contentWrapper}>
          <Rabbit className={styles.aboutIcon} />
          <Text size={TextSizes.size20} className={styles.listItem}>
            <FormattedMessage id="aboutDescription5" />
          </Text>
        </div>

        <div className={styles.contentWrapper}>
          <KnowledgeGrowth className={styles.aboutIcon} />
          <Text size={TextSizes.size20} className={styles.listItem}>
            <FormattedMessage id="aboutDescription6" />
          </Text>
        </div>
      </div>

      <div className={styles.secondSection}>
        <Text size={TextSizes.size20} className={'startingParagraph'}>
          <FormattedMessage id="aboutDescription7" />
        </Text>

        <div className={styles.secondSectionContent}>
          <div className={styles.contentWrapper}>
            <Geography
              className={classNames(styles.aboutIcon, styles.stroke1px, styles.strokeSameColor)}
            />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription8" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <Growth className={classNames(styles.aboutIcon, styles.stroke5px)} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription9" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <MatrixStrength className={classNames(styles.aboutIcon, styles.stroke0px)} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription10" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <Camping className={classNames(styles.aboutIcon, styles.stroke5px)} />
            <Text size={TextSizes.size20} className={styles.listItem}>
              <FormattedMessage id="aboutDescription11" />
            </Text>
          </div>

          <div className={styles.contentWrapper}>
            <RollerCoaster className={classNames(styles.aboutIcon, styles.stroke5px)} />
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
