import React from 'react';
import { FormattedMessage } from 'react-intl';

interface ThemeToggleProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  showText?: boolean;
}

const ThemeToggle = ({ isDark, toggleTheme }: ThemeToggleProps) => {
  const currentTheme = <FormattedMessage id={isDark ? 'commonDark' : 'commonLight'} />;

  return (
    <p onClick={toggleTheme}>
      <FormattedMessage id="commonTheme" />: {currentTheme}
    </p>
  );
};

export { ThemeToggle };
