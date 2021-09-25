import React, { useEffect } from 'react'
import { Fade } from 'react-reveal'
import classNames from 'classnames'
import { FormattedMessage } from 'gatsby-plugin-intl'

import { Heading, Text, ContactForm } from '_atoms'
import { RandomImage } from '_organisms'

import styles from './styles.module.css'

const ContactSection = () => (
  <section className={classNames('sectionPadding', styles.contact)} id="contact">
    <div className="content">
      <Fade>
        <Heading type="h2" form="cursive" center className={styles.title}>
          <FormattedMessage id="contact.title" />
        </Heading>

        <Text size="20" className="startingParagraph">
          <FormattedMessage id="contact.description1" />
        </Text>
        <Text size="20">
          <FormattedMessage id="contact.description2" />{' '}
          <a href="https://github.com/carolinaknoll">GitHub</a> <FormattedMessage id="common.or" />{' '}
          <a href="https://www.linkedin.com/in/carolinaknoll">LinkedIn</a>.
        </Text>

        <div className={styles.columnsWrapper}>
          <ContactForm />
          <RandomImage position="right" category="contact" className={styles.imageWrapper} />
        </div>
      </Fade>
    </div>
  </section>
)

export default ContactSection
