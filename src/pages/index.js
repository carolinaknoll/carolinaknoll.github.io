import React, { useEffect } from 'react'

import { Heading, Text, ContactForm, Footer } from '_atoms'
import { ImageWithCaption, PortfolioItem } from '_molecules'
import { RandomImage } from '_organisms'
import { Layout } from '_templates'
import { isInViewport } from '_utils/is-in-viewport'
import { PORTFOLIO_ITEMS } from '_utils/portfolio'

import classNames from 'classnames'

import styles from './styles.module.css'

const Home = () => {
  return (
    <Layout>
      <section className={styles.home} id="hero">
        <div className={classNames(styles.imageWrapper)}></div>

        <div className={classNames(styles.contentWrapper)}>
          <div className={styles.homeDescription}>
            <div className={styles.headingGroup}>
              <Heading type="h2" form="print">
                Hello, I'm
              </Heading>
              <Heading type="h2" form="cursive" className={styles.a523ab4b1ddefdc61fc45}>
                Carolina!
              </Heading>
            </div>
            <Heading type="h6" form="print">
              I am a Jr. Software Engineer passionate about education practices and hopeful about a
              future where society looks up to a higher truth with humility and love to one another,
              regardless of physical or intelectual differences.
            </Heading>
          </div>
        </div>
      </section>

      <section className={classNames(styles.separatorBlock, styles.separatorBlockGreen)}>
        <Heading type="h5" form="cursive" center>
          Per aspera ad astra!
        </Heading>
        <Heading type="h6" form="print" center>
          Through hardships to the stars!
        </Heading>
      </section>

      <section className={styles.about} id="about">
        <div className={classNames(styles.contentWrapper)}>
          <div className={styles.content}>
            <Heading type="h2" form="cursive" center>
              About
            </Heading>

            <RandomImage position="right" category="about" className={styles.aboutImageFirst} />

            <Text size="20" className={styles.startingParagraph}>
              As a kid with melancholic temperament, I was always quiet and by myself at school. I
              remember thinking "I could've stayed home and have learned the exact same thing my
              teachers said"! Truth is, they were just following school books. Recess and time off
              school were quietly spent on studying, reading books and playing computer games.
            </Text>

            <Text size="20">
              I choose Information Systems as my bachelor's on distance learning because I was young
              and needed it, and also because I was sure university wouldn't teach everything I
              needed so I had more time to focus on self learning the skills needed for work.
            </Text>

            <Text size="20">
              As of now, I currently use React, Redux, Gatsby and React Native at work.
            </Text>

            <div className={styles.marginTop50}>
              <RandomImage position="left" category="about" className={styles.aboutImageSecond} />

              <Text size="20" className={styles.startingParagraph}>
                Outside work, I'm all about education and how to make it better. I believe current
                school education focuses too much on content, and with so much to learn, study and
                apply on tests, children quickly get bored - and the spark of learning turns into
                the boredom of repetition and acceptance. I believe something isn't right when we
                say: "Oh, I forgot almost everything I've learned at school!"
              </Text>

              <Text size="20">
                I believe school teaches us very little about how to go on with (mature) life. That
                is, before taking sides on any opinion, habit or action, one should work primarily
                on nurturing a solid moral ground - in other words, I can deeply love chocolate
                cakes, but it is unhealthy and not morally acceptable to eat them all day, everyday.
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(styles.separatorBlock, styles.separatorBlockGreen)}>
        <Heading type="h5" form="cursive" center>
          Macte animo! Generose puer sic itur ad astra.
        </Heading>
        <Heading type="h6" form="print" center>
          Young, cheer up! This is the way to the skies.
        </Heading>
      </section>

      <section className={styles.portfolio} id="portfolio">
        <div className={classNames(styles.contentWrapper)}>
          <div className={styles.content}>
            <Heading type="h2" form="cursive" center className={styles.a523ab4b1ddefdc61fc45}>
              Portfolio
            </Heading>

            <RandomImage position="right" category="portfolio" className={styles.aboutImageFirst} />

            <Text size="20" className={styles.startingParagraph}>
              Here are a few projects I have greatly spent some love and time on. I prefer to work
              on one or two projects at a time so that I can pour love on them over time, so I am
              currently working on one about resources for education.
            </Text>
            <Text size="20">
              I have also worked on a few other personal projects that are a bit heavier on code,
              although still simple, but needed to better comprehend certain skills during the last
              few years. Because of it, however, they are not updated with my current code. And
              since I code mostly everyday for work, I prefer to keep them this way for now. We can
              always chat about current approaches to solving problems and being creative, though!
            </Text>

            <div className={styles.portfolioProjects}>
              <div className={styles.portfolioProjectsItem}>
                <PortfolioItem item={PORTFOLIO_ITEMS.EducationalResources} hideCaption />
              </div>

              <div className={styles.portfolioProjectsGrid}>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(styles.separatorBlock, styles.separatorBlockGreen)}>
        <Heading type="h5" form="cursive" center>
          How many angels can dance on the head of a pin?
        </Heading>
      </section>

      <section className={styles.contact} id="contact">
        <div className={classNames(styles.contentWrapper)}>
          <div className={styles.content}>
            <Heading type="h2" form="cursive" center className={styles.a312ee4b00c2ffc05f7f4}>
              Contact
            </Heading>

            <Text size="20" className={styles.startingParagraph}>
              <Text size="20" className={styles.startingParagraph}>
                Please use the form if you would like to chat. I will try to reply as soon as I can.
              </Text>
              <Text size="20">
                People usually have links for their own social profiles here. However, these
                profiles tend to become forgotten over time. I try to keep away from online social
                life in general because of all the noise, and prefer to work on puzzles and read
                books instead, but if you would like to know more, please take a look at my{' '}
                <a href="https://github.com/carolinaknoll">GitHub</a> or{' '}
                <a href="https://www.linkedin.com/in/carolinaknoll">LinkedIn</a> profiles.
              </Text>
            </Text>

            <div className={styles.contactColumnsWrapper}>
              <div className={classNames(styles.half, styles.contactFormWrapper)}>
                <ContactForm />
              </div>

              <div className={styles.half}>
                <RandomImage position="right" category="contact" className={styles.contactImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export default Home
