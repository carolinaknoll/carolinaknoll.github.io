import React from 'react'
import { Fade } from 'react-reveal'

import { Heading, Text, Caption } from '_atoms'
import { PortfolioItem } from '_molecules'
import { HOME_LIGHT_THEME_IMAGE_PROPS, HOME_DARK_THEME_IMAGE_PROPS } from '_utils/images'
import { FormattedMessage } from 'gatsby-plugin-intl'

import styles from './styles.module.css'

const HeroSection = () => (
  <section className={styles.home} id="home">
    <div className={styles.homeBackground}></div>
    <div className={styles.homeDescriptionWrapper}>
      <div className={styles.homeDescription}>
        <Fade>
          <Heading type="h2" form="print">
            <FormattedMessage id="home.description1" />
          </Heading>
          <Heading type="h2" form="cursive" className={styles.homeTitle}>
            <FormattedMessage id="home.description2" />
          </Heading>
        </Fade>

        <Fade delay={300}>
          <Heading type="h6" form="print">
            <FormattedMessage id="home.description3" />
          </Heading>
        </Fade>

        <div className={styles.homeImageAttribution}>
          <hr className={styles.homeImageAttributionSeparator} />
          <Fade delay={400}>
            <Text size="16">
              <FormattedMessage id="home.imageAttribution1" />
            </Text>

            <div className={styles.homeImageAttributionText}>
              <Text size="16">
                <FormattedMessage id="home.imageAttribution2" />
              </Text>
              <Caption data={HOME_LIGHT_THEME_IMAGE_PROPS} />
            </div>

            <div className={styles.homeImageAttributionText}>
              <Text size="16">
                <FormattedMessage id="home.imageAttribution3" />
              </Text>
              <Caption data={HOME_DARK_THEME_IMAGE_PROPS} />
            </div>
          </Fade>
        </div>
        <hr className={styles.homeDescriptionWrapperSeparator} />
      </div>
    </div>
  </section>
)

export default HeroSection
