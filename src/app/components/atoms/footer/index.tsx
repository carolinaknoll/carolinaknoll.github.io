import React from 'react';
import { Text, TextSizes } from 'app/components/atoms';
import { FormattedMessage } from 'react-intl';

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}>
      <Text size={TextSizes.size20}>
        <a href="mailto:carolinasknoll@gmail.com">
          <span>E</span>mail
        </a>{' '}
        /{' '}
        <a href="https://github.com/carolinaknoll">
          <span>G</span>itHub
        </a>{' '}
        /{' '}
        <a href="https://www.linkedin.com/in/carolinaknoll">
          <span>L</span>inkedIn
        </a>
      </Text>
    </div>
    <div className={styles.footerBottom}>
      <Text size={TextSizes.size20}>
        <FormattedMessage id="footerDescription1" /> <span>C</span>arolina <span>K</span>noll{' '}
        <FormattedMessage id="footerDescription2" />{' '}
        <a href="https://search.creativecommons.org/">Creative Commons Search</a>.
      </Text>
    </div>
  </footer>
);

export { Footer };
