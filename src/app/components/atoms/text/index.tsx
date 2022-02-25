import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export enum TextSizes {
  size16 = styles.size16,
  size20 = styles.size20,
  size22 = styles.size22,
  size24 = styles.size24,
  size26 = styles.size26,
  size28 = styles.size28,
}

export enum TextColors {
  default = styles.default,
}

export enum TextFonts {
  cursive = styles.cursive,
  print = styles.print,
}

interface TextProps {
  size?: TextSizes;
  color?: TextColors;
  children?: ReactNode;
  className?: string;
  form?: TextFonts;
  bold?: boolean;
}

export const Text = ({
  size = TextSizes.size16,
  color = TextColors.default,
  children,
  className,
  form = TextFonts.print,
  bold,
  ...props
}: TextProps) => {
  const textProps = {
    className: classNames(className, TextColors[color], TextSizes[size], TextFonts[form], styles.text, {
      [styles.bold]: bold,
    }),
    props,
  };

  return <p {...textProps}>{children}</p>;
};
