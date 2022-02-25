import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum HeadingFonts {
  cursive = 'cursive',
  print = 'print',
}

export enum HeadingColors {
  default = 'default',
  white = 'white',
}

interface HeadingProps {
  type?: HeadingLevels;
  form?: HeadingFonts;
  color?: HeadingColors;
  children?: React.ReactNode;
  className?: string;
  bold?: boolean;
  center?: boolean;
}

const Heading = ({
  children,
  type = HeadingLevels.h4,
  form = HeadingFonts.print,
  className,
  color = HeadingColors.default,
  bold,
  center,
  ...props
}: HeadingProps) => {
  const componentProps = {
    className: classNames(
      styles.heading,
      styles[type],
      styles[form],
      { [styles.bold]: bold, [styles.center]: center },
      color !== 'default' ? styles[color] : '',
      className
    ),
    ...props,
  };

  return React.createElement(type, { ...componentProps }, children);
};

export { Heading };
