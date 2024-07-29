export const selectors = {
  footer: "div[data-component-title='Footer']",
  resourceSection: "div#resources",
  resourceSecondaryNav: "ul.u07__main-nav>li:nth-child(6)",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};

export const swiperLibrary = {
  js: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
  css: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
};

export const leftArrowSvg: string = `
  <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.665 4L4 20.665L20.665 37.33" stroke="#CCCCCC" stroke-width="6.24907" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const rightArrowSvg: string = `
  <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.00004 37.33L20.665 20.665L4.00004 3.99996" stroke="#CCCCCC" stroke-width="6.24907" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const scriptLink: string =
  "https://d30ia583fbtg8i.cloudfront.net/trustquotes/trustquotes.js";

export const emptyStar: string =
  "https://medianet.com/cro/f5/f5011/empty-star.png";

export const halfStar: string =
  "https://medianet.com/cro/f5/f5011/half-star.png";

export const fullStar: string =
  "https://medianet.com/cro/f5/f5011/full-star.png";

export const arrowSvg: string = `
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z" fill="white"/>
</svg>  
`;
