import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './styles.module.scss';

interface MenuItemsProps {
  closeCallback?: () => void;
}

const MenuItems = ({ closeCallback }: MenuItemsProps) => (
  <div className={styles.menuItems}>
    <a title="Home" onClick={closeCallback} href="#home">
      <FormattedMessage id="menuHome" />
    </a>

    <a title="About" onClick={closeCallback} href="#about">
      <FormattedMessage id="menuAbout" />
    </a>

    <a title="Portfolio" onClick={closeCallback} href="#portfolio">
      <FormattedMessage id="menuPortfolio" />
    </a>

    <a title="Contact" onClick={closeCallback} href="#contact">
      <FormattedMessage id="menuContact" />
    </a>
  </div>
);

export { MenuItems };
