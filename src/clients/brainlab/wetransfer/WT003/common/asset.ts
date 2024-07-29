export const selectors = {
  animationContainers: "section[data-typename='UiColumn']",
  mediaSection: "section[data-typename='UiMedia']",
};

export const swiperLibrary = {
  js: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
  css: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
};

export const rightArrowSvg: string = `
  <svg width="25" height="25" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.00004 37.33L20.665 20.665L4.00004 3.99996" stroke="#CCCCCC" stroke-width="6.24907" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
export const leftArrowSvg: string = `
  <svg width="25" height="25" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.665 4L4 20.665L20.665 37.33" stroke="#CCCCCC" stroke-width="6.24907" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const triggerEvent = (eventName: string) => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });

  console.log(eventName + ": triggered");
};
