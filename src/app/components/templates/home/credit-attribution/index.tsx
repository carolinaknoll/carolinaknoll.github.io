import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Text, Caption, TextSizes } from 'app/components/atoms';
import { HOME_LIGHT_THEME_IMAGE_PROPS, HOME_DARK_THEME_IMAGE_PROPS } from 'app/utils/images';
import { getCreditAttributionItems } from 'app/utils/credit-attributions';

import styles from './styles.module.scss';

const CreditAttribution = () => {
  const attributionItems = getCreditAttributionItems();

  return (
    <>
      <Text size={TextSizes.size16} className={styles.attribution}>
        <FormattedMessage id="creditAttribution1" />
      </Text>
      <div className={styles.attributions}>
        <div className={styles.attributionContainer}>
          <Text size={TextSizes.size16} className={styles.attribution}>
            <FormattedMessage id="commonDark" /> <FormattedMessage id="commonTheme" />:
            <Caption data={HOME_LIGHT_THEME_IMAGE_PROPS} />
            <FormattedMessage id="commonLight" /> <FormattedMessage id="commonTheme" />:
            <Caption data={HOME_DARK_THEME_IMAGE_PROPS} />
          </Text>
        </div>
      </div>

      <div className={styles.attributions}>
        {attributionItems.map((item) => (
          <div className={styles.attributionContainer} key={item.url}>
            <Text size={TextSizes.size16} className={styles.attribution}>
              {item.icon}
              <a href={item.url} target="_blank" className={styles.url}>
                {item.author}
              </a>
            </Text>
          </div>
        ))}
      </div>
    </>
  );
};

export { CreditAttribution };
