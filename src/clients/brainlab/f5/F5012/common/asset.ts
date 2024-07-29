export const selectors = {
  heroBannerBg: "div.bg-default.c01__wrap",
};

export const getBackgroundImage = (size: string): string => {
  return `https://medianet.com/cro/f5/f5012/office-${size}.jpg`;
};

export const bgStyle = (size: string): string =>
  `background-color: rgb(250, 249, 247); background-position: 0% 0%; background-image: url("${getBackgroundImage(
    size
  )}");`;
