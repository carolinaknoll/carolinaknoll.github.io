import React from 'react';

import styles from './styles.module.scss';

interface CaptionTypes {
  data: {
    imageName: string;
    imageUrl?: string;
  };
}

const Caption = ({ data }: CaptionTypes) => (
  <p className={styles.caption}>
    <a href={data.imageUrl || ''}>{data.imageName}</a>
  </p>
);

export { Caption };
