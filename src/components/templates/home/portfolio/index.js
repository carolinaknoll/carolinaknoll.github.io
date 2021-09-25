import React from 'react'
import { Fade } from 'react-reveal'
import classNames from 'classnames'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { Heading, Text, Caption } from '_atoms'
import { PortfolioItem } from '_molecules'
import { RandomImage } from '_organisms'
import { getPortfolioItems } from '_utils/portfolio'

import styles from './styles.module.css'

const PortfolioSection = ({ portfolioItems }) => (
  <section className={classNames('sectionPadding', styles.portfolio)} id="portfolio">
    <div className="content">
      <Fade>
        <Heading type="h2" form="cursive" center className={styles.portfolioTitle}>
          <FormattedMessage id="portfolio.title" />
        </Heading>
        <RandomImage position="right" category="portfolio" className={styles.portfolioImage} />
        <Text size="20" className={'startingParagraph'}>
          <FormattedMessage id="portfolio.description1" />
        </Text>
        <Text size="20">
          <FormattedMessage id="portfolio.description2" />
        </Text>
      </Fade>

      <div className={styles.portfolioProjects}>
        <Fade>
          <div className={styles.portfolioProjectsItemFirst}>
            <PortfolioItem item={portfolioItems[0]} hideCaption />
          </div>
        </Fade>

        <div className={styles.portfolioProjectsGrid}>
          {portfolioItems.slice(1).map((item, index) => (
            <Fade key={`portfolio-item-${index}`}>
              <PortfolioItem item={item} hideCaption />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default PortfolioSection
