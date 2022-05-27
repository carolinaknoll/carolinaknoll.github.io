import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import {
  Heading,
  Text,
  ContactForm,
  TextSizes,
  HeadingLevels,
  HeadingFonts,
} from 'app/components/atoms';
import { RandomImage } from 'app/components/organisms';

import Plant from 'app/images/svg/noun-plant-2546396.svg';

import styles from './styles.module.scss';

const ContactSection = () => (
  <section className={classNames('sectionPadding', styles.contact)} id="contact">
    <div className="content">
      <div className={styles.titleContainer}>
        <Plant className={styles.titleImage} />
        <Heading
          type={HeadingLevels.h2}
          form={HeadingFonts.cursive}
          center
          className={styles.title}
        >
          <FormattedMessage id="contactTitle" />
        </Heading>
      </div>

      <Text size={TextSizes.size20} className="startingParagraph">
        <FormattedMessage id="contactDescription1" />
      </Text>
      <Text size={TextSizes.size20}>
        <FormattedMessage id="contactDescription2" />{' '}
        <a href="https://github.com/carolinaknoll">GitHub</a> <FormattedMessage id="commonOr" />{' '}
        <a href="https://www.linkedin.com/in/carolinaknoll">LinkedIn</a>.
      </Text>

      <div className={styles.columnsWrapper}>
        <ContactForm className={styles.contactFormWrapper} />
        <RandomImage position="right" category="contact" className={styles.imageWrapper} />
      </div>
    </div>
  </section>
);

export { ContactSection };
