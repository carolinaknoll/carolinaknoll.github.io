import React, { useEffect } from 'react'
import { Fade } from 'react-reveal'

import { Heading, Text, ContactForm, Footer } from '_atoms'
import { ImageWithCaption, SeparatorBlock, PortfolioItem } from '_molecules'
import { RandomImage } from '_organisms'
import { Layout } from '_templates'
import { isInViewport } from '_utils/is-in-viewport'
import { getPortfolioItems } from '_utils/portfolio'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'

import classNames from 'classnames'

import styles from './styles.module.css'

const Home = () => {
  const intl = useIntl()
  const PORTFOLIO_ITEMS = getPortfolioItems()

  return (
    <Layout>
      <section className={styles.home} id="home">
        <div className={styles.homeDescription}>
          <div className={styles.headingGroup}>
            <Fade>
              <Heading type="h2" form="print">
                <FormattedMessage id="home.description1" />
              </Heading>
              <Heading type="h2" form="cursive" className={styles.a1e8257bffdf87}>
                <FormattedMessage id="home.description2" />
              </Heading>
            </Fade>
          </div>

          <Fade delay={300}>
            <Heading type="h6" form="print">
              <FormattedMessage id="home.description3" />
            </Heading>
          </Fade>
        </div>
      </section>

      <SeparatorBlock
        name="home"
        title={intl.formatMessage({ id: 'separators.separator1Title' })}
        subtitle={intl.formatMessage({ id: 'separators.separator1Subtitle' })}
      />

      <section className={styles.about} id="about">
        <div className={styles.content}>
          <Fade>
            <Heading type="h2" form="cursive" center className={styles.a1e8257bffdf87}>
              <FormattedMessage id="about.title" />
            </Heading>
          </Fade>

          <Fade delay={200}>
            <RandomImage position="right" category="about" className={styles.aboutImageFirst} />
          </Fade>

          <Fade delay={300}>
            <Text size="20" className={styles.startingParagraph}>
              <FormattedMessage id="about.description1" />
            </Text>

            <Text size="20">
              <FormattedMessage id="about.description2" />
            </Text>

            <Text size="20">
              <FormattedMessage id="about.description3" />
            </Text>
          </Fade>

          <div className={styles.marginTop50}>
            <Fade>
              <RandomImage position="left" category="about" className={styles.aboutImageSecond} />
            </Fade>

            <Fade>
              <Text size="20" className={styles.startingParagraph}>
                <FormattedMessage id="about.description4" />
              </Text>

              <Text size="20">
                <FormattedMessage id="about.description5" />
              </Text>
            </Fade>
          </div>
        </div>
      </section>

      <SeparatorBlock
        name="about"
        title={intl.formatMessage({ id: 'separators.separator2Title' })}
        subtitle={intl.formatMessage({ id: 'separators.separator2Subtitle' })}
      />

      <section className={styles.portfolio} id="portfolio">
        <div className={styles.content}>
          <Fade>
            <Heading type="h2" form="cursive" center className={styles.ablue1bgreen1}>
              <FormattedMessage id="portfolio.title" />
            </Heading>
            <RandomImage position="right" category="portfolio" className={styles.portfolioImage} />
            <Text size="20" className={styles.startingParagraph}>
              <FormattedMessage id="portfolio.description1" />
            </Text>
            <Text size="20">
              <FormattedMessage id="portfolio.description2" />
            </Text>
            <Text size="20">
              <FormattedMessage id="portfolio.description3" />
            </Text>
          </Fade>

          <div className={styles.portfolioProjects}>
            <Fade>
              <div className={styles.portfolioProjectsItem}>
                <PortfolioItem item={PORTFOLIO_ITEMS.EducationalResources} hideCaption />
              </div>
            </Fade>

            <div className={styles.portfolioProjectsGrid}>
              <Fade>
                <div className={styles.portfolioProjectsItem}>
                  <PortfolioItem item={PORTFOLIO_ITEMS.AwesomeGamified} hideCaption />
                </div>

                <div className={styles.portfolioProjectsItem}>
                  <PortfolioItem item={PORTFOLIO_ITEMS.WikipediaViewer} hideCaption />
                </div>

                <div className={styles.portfolioProjectsItem}>
                  <PortfolioItem item={PORTFOLIO_ITEMS.PomodoroTimer} hideCaption />
                </div>

                <div className={styles.portfolioProjectsItem}>
                  <PortfolioItem item={PORTFOLIO_ITEMS.MarkdownPreviewer} hideCaption />
                </div>

                <div className={styles.portfolioProjectsItem}>
                  <PortfolioItem item={PORTFOLIO_ITEMS.Insight} hideCaption />
                </div>

                <div className={styles.portfolioProjectsItem}>
                  <PortfolioItem item={PORTFOLIO_ITEMS.JavaScriptCalculator} hideCaption />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <SeparatorBlock
        name="portfolio"
        title={intl.formatMessage({ id: 'separators.separator3Title' })}
      />

      <section className={styles.contact} id="contact">
        <div className={styles.content}>
          <Fade>
            <Heading type="h2" form="cursive" center className={styles.aorange1borange2}>
              <FormattedMessage id="contact.title" />
            </Heading>

            <Text size="20" className={styles.startingParagraph}>
              <Text size="20" className={styles.startingParagraph}>
                <FormattedMessage id="contact.description1" />
              </Text>
              <Text size="20">
                <FormattedMessage id="contact.description2" />{' '}
                <a href="https://github.com/carolinaknoll">GitHub</a>{' '}
                <FormattedMessage id="common.or" />{' '}
                <a href="https://www.linkedin.com/in/carolinaknoll">LinkedIn</a>.
              </Text>
            </Text>
          </Fade>

          <div className={styles.contactColumnsWrapper}>
            <Fade>
              <div className={classNames(styles.half, styles.contactFormWrapper)}>
                <ContactForm />
              </div>

              <div className={styles.half}>
                <RandomImage position="right" category="contact" className={styles.contactImage} />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export default Home
