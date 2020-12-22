// https://vanillajstoolkit.com/helpers/isinviewport/

export const isInViewport = elem => {
  let distance = elem.getBoundingClientRect()
  const isVisible = distance.top >= 0 && distance.left >= 0
  return isVisible
}
