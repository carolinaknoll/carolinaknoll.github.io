import React from 'react';
import { ImageWithCaption } from 'app/components/molecules';
import { categorizedImages } from 'app/utils/images';

interface RandomImageProps {
  position: string;
  category: string;
  className: string;
}

const RandomImage = ({ position, category, className }: RandomImageProps) => {
  let randomNumber = category
    ? Math.floor(Math.random() * categorizedImages[category].length)
    : Math.floor(Math.random() * categorizedImages.length);

  return (
    <ImageWithCaption
      position={position}
      image={category ? categorizedImages[category][randomNumber] : categorizedImages[randomNumber]}
      className={className}
    />
  );
};

export { RandomImage };
