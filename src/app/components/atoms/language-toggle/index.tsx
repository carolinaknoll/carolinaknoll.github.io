import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const LanguageToggle = () => {
  const intl = useIntl();
  const isEnglish = intl.locale === 'en';
  const linkUrl = isEnglish ? '/pt' : '/';
  const languageTranslation = isEnglish ? 'commonEnglish' : 'commonPortuguese';

  return (
    <Link to={linkUrl}>
      <FormattedMessage id="commonLanguage" />: <FormattedMessage id={languageTranslation} />
    </Link>
  );
};

export { LanguageToggle };
