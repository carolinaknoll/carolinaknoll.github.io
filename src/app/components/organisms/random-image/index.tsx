import React from 'react';

import { ImageWithCaption } from 'app/components/molecules';
import { getRandomImage } from 'app/utils/helpers';

interface RandomImageProps {
  position: string;
  category?: string;
  className: string;
}

const RandomImage = ({ position, category, className }: RandomImageProps) => {
  let randomImage = getRandomImage(category);

  return <ImageWithCaption position={position} image={randomImage} className={className} />;
};

export { RandomImage };
