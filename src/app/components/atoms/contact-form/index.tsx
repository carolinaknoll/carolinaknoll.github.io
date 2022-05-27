import React from 'react';
import classNames from 'classnames';
import { useIntl } from 'react-intl';

import styles from './styles.module.scss';

interface ContactformProps {
  className: string;
}

const ContactForm = ({ className }: ContactformProps) => {
  const intl = useIntl();

  return (
    <form
      action="https://formspree.io/carolinasknoll@gmail.com"
      method="POST"
      className={classNames(styles.contactForm, className)}
    >
      <input
        type="text"
        name="name"
        className={styles.contactFormInput}
        id="user"
        placeholder={intl.formatMessage({ id: 'contactFormNamePlaceholder' })}
      />

      <input
        type="email"
        name="_replyto"
        className={styles.contactFormInput}
        placeholder={intl.formatMessage({ id: 'contactFormEmailPlaceholder' })}
      />

      <textarea
        name="text"
        className={styles.contactFormInput}
        placeholder={intl.formatMessage({ id: 'contactFormMessagePlaceholder' })}
      ></textarea>

      <input
        type="submit"
        value={intl.formatMessage({ id: 'contactFormSendEmail' })}
        className={classNames([styles.contactFormInput, styles.contactFormInputSend])}
      />
    </form>
  );
};

export { ContactForm };
