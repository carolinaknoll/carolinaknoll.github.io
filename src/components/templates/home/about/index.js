import React from 'react'
import { Fade } from 'react-reveal'
import classNames from 'classnames'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { Heading, Text } from '_atoms'
import { RandomImage } from '_organisms'

import styles from './styles.module.css'

const AboutSection = () => (
  <section className={classNames('sectionPadding', styles.about)} id="about">
    <div className="content">
      <Fade>
        <Heading type="h2" form="cursive" center className={styles.aboutTitle}>
          <FormattedMessage id="about.title" />
        </Heading>
      </Fade>

      <Fade delay={200}>
        <RandomImage position="right" category="about" className={styles.aboutImageFirst} />
      </Fade>

      <Fade delay={300}>
        <Text size="20" className="startingParagraph">
          <FormattedMessage id="about.description1" />
        </Text>

        <Text size="20">
          <FormattedMessage id="about.description2" />
        </Text>
      </Fade>

      <div className={styles.secondSection}>
        <Fade>
          <RandomImage position="left" category="about" className={styles.aboutImageSecond} />
        </Fade>

        <Fade>
          <Text size="20" className="startingParagraph">
            <FormattedMessage id="about.description3" />
          </Text>
          <Text size="20">
            <FormattedMessage id="about.description4" />
          </Text>
        </Fade>
      </div>
    </div>
  </section>
)

export default AboutSection
