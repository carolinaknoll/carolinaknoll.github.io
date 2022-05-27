import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import { Heading, HeadingFonts, HeadingLevels, Text, TextSizes } from 'app/components/atoms';
import { PortfolioItem } from 'app/components/molecules';
import { RandomImage } from 'app/components/organisms';
import { PortfolioItemData } from 'app/utils/portfolio';

import Flower from 'app/images/svg/noun-flowers-1827937.svg';

import styles from './styles.module.scss';

interface PorfolioSectionProps {
  portfolioItems: PortfolioItemData[];
}

const PortfolioSection = ({ portfolioItems }: PorfolioSectionProps) => (
  <section className={classNames('sectionPadding', styles.portfolio)} id="portfolio">
    <div className="content">
      <div className={styles.titleContainer}>
        <Heading
          type={HeadingLevels.h2}
          form={HeadingFonts.cursive}
          center
          className={styles.aboutTitle}
        >
          <Heading
            type={HeadingLevels.h2}
            form={HeadingFonts.cursive}
            center
            className={styles.portfolioTitle}
          >
            <FormattedMessage id="portfolioTitle" />
          </Heading>
        </Heading>
        <Flower className={styles.titleImage} />
      </div>

      <RandomImage position="right" category="portfolio" className={styles.portfolioImage} />
      <Text size={TextSizes.size20} className={'startingParagraph'}>
        <FormattedMessage id="portfolioDescription1" />
      </Text>
      <Text size={TextSizes.size20}>
        <FormattedMessage id="portfolioDescription2" />
      </Text>

      <div className={styles.portfolioProjects}>
        <div className={styles.portfolioProjectsItemFirst}>
          <PortfolioItem item={portfolioItems[0]} hideCaption />
        </div>

        <div className={styles.portfolioProjectsGrid}>
          {portfolioItems.slice(1).map((item: PortfolioItemData, index: number) => (
            <PortfolioItem item={item} hideCaption key={`portfolio-item-${index}`} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { PortfolioSection };
