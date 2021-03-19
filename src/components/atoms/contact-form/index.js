import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useIntl } from 'gatsby-plugin-intl'

import styles from './styles.module.css'

const ContactForm = () => {
  const intl = useIntl()

  return (
    <form
      action="https://formspree.io/carolinasknoll@gmail.com"
      method="POST"
      className={styles.contactForm}
    >
      <input
        type="text"
        name="name"
        className={styles.formInput}
        id="user"
        placeholder={intl.formatMessage({ id: 'contactForm.namePlaceholder' })}
      />

      <input
        type="email"
        name="_replyto"
        className={styles.formInput}
        placeholder={intl.formatMessage({ id: 'contactForm.emailPlaceholder' })}
      />

      <textarea
        name="text"
        className={styles.formInput}
        placeholder={intl.formatMessage({ id: 'contactForm.messagePlaceholder' })}
      ></textarea>

      <input
        type="submit"
        value={intl.formatMessage({ id: 'contactForm.sendEmail' })}
        className={classNames(styles.formInput)}
      />
    </form>
  )
}

export default ContactForm
