import React, { useState } from 'react';
import classNames from 'classnames';

import { Navbar } from 'app/components/molecules';
import { SEO } from 'app/components/atoms';

import 'app/styles/base.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => setDarkTheme(!isDarkTheme);

  return (
    <div
      className={classNames('app', {
        darkTheme: isDarkTheme,
        lightTheme: !isDarkTheme,
      })}
    >
      <SEO />
      <Navbar toggleTheme={toggleTheme} isDark={isDarkTheme} />
      {children}
    </div>
  );
};

export default Layout;
