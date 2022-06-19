import { categorizedImages } from 'app/utils/images';

export const getRandomImage = (category?: string) => {
  let randomNumber = category
    ? Math.floor(Math.random() * categorizedImages[category].length)
    : Math.floor(Math.random() * categorizedImages.length);

  return category ? categorizedImages[category][randomNumber] : categorizedImages[randomNumber];
};
