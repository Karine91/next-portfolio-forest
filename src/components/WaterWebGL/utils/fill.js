export default function (
  imageWidth, imageHeight,
  containerWidth, containerHeight,
  alignX, alignY,
) {
  const target = {
    x: 0,
    y: 0,
    width: containerWidth,
    height: containerHeight,
  };

  const imageRatio = imageWidth / imageHeight;
  const containerRatio = containerWidth / containerHeight;

  let scale;
  if (imageRatio > containerRatio) {
    scale = containerHeight / imageHeight;
    target.width = imageWidth * scale;
    target.x = (containerWidth - target.width) * alignX;
  } else {
    scale = containerWidth / imageWidth;
    target.height = imageHeight * scale;
    target.y = (containerHeight - target.height) * alignY;
  }

  return target;
}
