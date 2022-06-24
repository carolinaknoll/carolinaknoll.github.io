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
  Caption,
} from 'app/components/atoms';

import { getRandomImage } from 'app/utils/helpers';

import Plant from 'app/images/svg/noun-plant-2546396.svg';

import styles from './styles.module.scss';

const contactImage = getRandomImage('contact');

const randomStyles = {
  background: `linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(32, 43, 23, 1) 50%,
    rgba(32, 43, 23, 1) 100%
  ), url(${contactImage.imagePath})`,

  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const ContactSection = () => (
  <section className={classNames('content', styles.contact)} style={randomStyles} id="contact">
    <div className={styles.columnWrapper}>
      <div className={styles.titleContainer}>
        <Plant className={styles.titleImage} />
        <Heading
          type={HeadingLevels.h2}
          form={HeadingFonts.cursive}
          className={styles.title}
          center
        >
          <FormattedMessage id="contactTitle" />
        </Heading>
      </div>

      <Text size={TextSizes.size20} className="startingParagraph">
        <FormattedMessage id="contactDescription1" />
      </Text>

      <ContactForm className={styles.contactFormWrapper} />

      <Text size={TextSizes.size20}>
        <FormattedMessage id="contactDescription2" />{' '}
        <a href="https://github.com/carolinaknoll">GitHub</a> <FormattedMessage id="commonOr" />{' '}
        <a href="https://www.linkedin.com/in/carolinaknoll">LinkedIn</a>.
      </Text>

      <Text size={TextSizes.size20}>
        <FormattedMessage id="commonSectionImageCredit" />
        <Caption data={contactImage} />
      </Text>
    </div>
  </section>
);

export { ContactSection };
