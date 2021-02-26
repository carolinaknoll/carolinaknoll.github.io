import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const ContactForm = () => (
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
      placeholder="Hi! I'm..."
    />

    <input type="email" name="_replyto" className={styles.formInput} placeholder="My email is..." />

    <textarea
      name="text"
      className={styles.formInput}
      placeholder="I would like to chat about..."
    ></textarea>

    <input type="submit" value="Send email!" className={classNames(styles.formInput)} />
  </form>
)

export default ContactForm
