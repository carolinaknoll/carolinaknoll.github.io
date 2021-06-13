import React, { useEffect } from 'react'
import { Fade } from 'react-reveal'

import { Heading, Text, ContactForm, Footer } from '_atoms'
import { ImageWithCaption, PortfolioItem } from '_molecules'
import { RandomImage } from '_organisms'
import { Layout } from '_templates'
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
        <div className={styles.homeDescriptionWrapper}>
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
        </div>
      </section>

      <section className={classNames(styles.sectionPadding, styles.about)} id="about">
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
          </Fade>

          <div className={styles.marginTop120}>
            <Fade>
              <RandomImage position="left" category="about" className={styles.aboutImageSecond} />
            </Fade>

            <Fade>
              <Text size="20" className={styles.startingParagraph}>
                <FormattedMessage id="about.description3" />
              </Text>
              <Text size="20">
                <FormattedMessage id="about.description4" />
              </Text>
            </Fade>
          </div>
        </div>
      </section>

      <section className={classNames(styles.sectionPadding, styles.portfolio)} id="portfolio">
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
          </Fade>

          <div className={styles.portfolioProjects}>
            <Fade>
              <div className={styles.portfolioProjectsItemFirst}>
                <PortfolioItem item={PORTFOLIO_ITEMS[0]} hideCaption />
              </div>
            </Fade>

            <div className={styles.portfolioProjectsGrid}>
              {PORTFOLIO_ITEMS.slice(1).map((item, index) => (
                <Fade key={`portfolio-item-${index}`}>
                  <PortfolioItem item={item} hideCaption />
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(styles.sectionPadding, styles.contact)} id="contact">
        <div className={styles.content}>
          <Fade>
            <Heading type="h2" form="cursive" center className={styles.aorange1borange2}>
              <FormattedMessage id="contact.title" />
            </Heading>

            <Text size="20" className={styles.startingParagraph}>
              <FormattedMessage id="contact.description1" />
            </Text>
            <Text size="20">
              <FormattedMessage id="contact.description2" />{' '}
              <a href="https://github.com/carolinaknoll">GitHub</a>{' '}
              <FormattedMessage id="common.or" />{' '}
              <a href="https://www.linkedin.com/in/carolinaknoll">LinkedIn</a>.
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
