import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';

import { ThemeToggle, LanguageToggle, Text, TextSizes, TextFonts } from 'app/components/atoms';
import { MenuItems } from 'app/components/molecules';

import variables from 'app/config/css-variables.css';

import styles from './styles.module.scss';

interface NavbarProps {
  isDark?: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark = true, toggleTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarOptions = (
    <div className={styles.navbarOptions}>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} /> / <LanguageToggle />
    </div>
  );

  return (
    <nav className={styles.navbarContainer} id="navbarContainer">
      <CheeseburgerMenu
        backgroundColor={isDark ? variables['gray-2'] : variables['white-2']}
        closeCallback={closeMenu}
        innerClassName={styles.navbarInner}
        isOpen={menuOpen}
        noShadow
        outerClassName={styles.navbarOuter}
        topOffset="45px"
      >
        <div>
          {navbarOptions}
          <MenuItems closeCallback={closeMenu} />
        </div>
      </CheeseburgerMenu>
      <HamburgerMenu
        animationDuration={0.5}
        borderRadius={0}
        className={styles.navbarNavigation}
        color={isDark ? variables['white'] : variables['dark']}
        height={15}
        isOpen={menuOpen}
        menuClicked={openMenu}
        rotate={0}
        strokeWidth={2}
        width={25}
      />
      <div className={styles.navbarBrand}>
        <Link to="/">
          <Text form={TextFonts.cursive} size={TextSizes.size26}>
            Carolina Knoll
          </Text>
        </Link>
      </div>

      <div className={styles.desktopNav}>
        {navbarOptions}
        <MenuItems />
      </div>
    </nav>
  );
};

export { Navbar };
