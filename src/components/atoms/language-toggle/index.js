import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'

const LanguageToggle = ({ isDark, toggleLanguage }) => {
  const intl = useIntl()
  const isEnglish = intl.locale === 'en'
  const linkUrl = isEnglish ? '/pt' : '/'
  const languageTranslation = isEnglish ? 'common.english' : 'common.portuguese'

  return (
    <Link to={linkUrl}>
      <FormattedMessage id="common.language" />: <FormattedMessage id={languageTranslation} />
    </Link>
  )
}

LanguageToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
}

export default LanguageToggle
