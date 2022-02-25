import React from 'react';
import classNames from 'classnames';

import { Caption } from 'app/components/atoms';

import styles from './styles.module.scss';

interface ImageWithCaptionProps {
  position: string;
  image: {
    imagePath: string;
    imageName: string;
    imageUrl?: string;
    uploader?: string;
  };
  className: string;
  hideCaption?: boolean;
}

const ImageWithCaption = ({ position, image, className, hideCaption }: ImageWithCaptionProps) => (
  <div
    className={classNames(styles.imageWithCaption, className, {
      [styles.imageWithCaptionLeft]: position === 'left',
      [styles.imageWithCaptionRight]: position === 'right',
      [styles.imageWithCaptionCenterTop]: position === 'centerTop',
    })}
  >
    <img src={image.imagePath} alt={image.imageName} className={styles.imageWithCaptionImage} />

    {!hideCaption && <Caption data={image} />}
  </div>
);

export { ImageWithCaption };
