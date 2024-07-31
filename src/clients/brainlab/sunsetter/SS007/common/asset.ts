export const selectors = {
  hero: "main#content>div:first-child>div:first-child",
  header: "header.header",
};

export const rightArrowSvg: string = `
<svg width="23" height="48" viewBox="0 0 23 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 46L18.7973 25.6665C20.0621 24.1353 20.012 21.908 18.6796 20.4353L2 2" stroke="#01426A" stroke-width="5"/>
</svg>
`;

export const leftArrowSvg: string = `
<svg width="23" height="48" viewBox="0 0 23 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 2L4.20274 22.3335C2.93788 23.8647 2.98799 26.092 4.32045 27.5647L21 46" stroke="#01426A" stroke-width="5"/>
</svg>
`;

export const triggerEvent = (apiName: string) => {
  //@ts-ignore
  window["optimizely"] = window["optimizely"] || [];
  //@ts-ignore
  window["optimizely"].push({
    type: "event",
    eventName: apiName,
  });

  console.log("event-triggered=", apiName);
};

export const swiperLibrary = {
  js: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
  css: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
};

export const imgLinks = [
  {
    link: "https://brainlabs.digital/cro/sunsetter/ss007/1.jpg",
    serial: 0,
  },
  {
    link: "https://brainlabs.digital/cro/sunsetter/ss007/2.jpg",
    serial: 1,
  },
  {
    link: "https://brainlabs.digital/cro/sunsetter/ss007/3.jpg",
    serial: 2,
  },
  {
    link: "https://brainlabs.digital/cro/sunsetter/ss007/1.jpg",
    serial: 0,
  },
  {
    link: "https://brainlabs.digital/cro/sunsetter/ss007/2.jpg",
    serial: 1,
  },
  {
    link: "https://brainlabs.digital/cro/sunsetter/ss007/3.jpg",
    serial: 2,
  },
];

export const cities = [
  { key: "AL", value: "Alabama" },
  { key: "AZ", value: "Arizona" },
  { key: "AR", value: "Arkansas" },
  { key: "CA", value: "California" },
  { key: "CO", value: "Colorado" },
  { key: "CT", value: "Connecticut" },
  { key: "DC", value: "District of Columbia" },
  { key: "DE", value: "Delaware" },
  { key: "FL", value: "Florida" },
  { key: "GA", value: "Georgia" },
  { key: "HI", value: "Hawaii" },
  { key: "ID", value: "Idaho" },
  { key: "IL", value: "Illinois" },
  { key: "IN", value: "Indiana" },
  { key: "IA", value: "Iowa" },
  { key: "KS", value: "Kansas" },
  { key: "KY", value: "Kentucky" },
  { key: "LA", value: "Louisiana" },
  { key: "ME", value: "Maine" },
  { key: "MD", value: "Maryland" },
  { key: "MA", value: "Massachusetts" },
  { key: "MI", value: "Michigan" },
  { key: "MN", value: "Minnesota" },
  { key: "MS", value: "Mississippi" },
  { key: "MO", value: "Missouri" },
  { key: "MT", value: "Montana" },
  { key: "NE", value: "Nebraska" },
  { key: "NV", value: "Nevada" },
  { key: "NH", value: "New Hampshire" },
  { key: "NJ", value: "New Jersey" },
  { key: "NM", value: "New Mexico" },
  { key: "NY", value: "New York" },
  { key: "NC", value: "North Carolina" },
  { key: "ND", value: "North Dakota" },
  { key: "OH", value: "Ohio" },
  { key: "OK", value: "Oklahoma" },
  { key: "OR", value: "Oregon" },
  { key: "PA", value: "Pennsylvania" },
  { key: "RI", value: "Rhode Island" },
  { key: "SC", value: "South Carolina" },
  { key: "SD", value: "South Dakota" },
  { key: "TN", value: "Tennessee" },
  { key: "TX", value: "Texas" },
  { key: "UT", value: "Utah" },
  { key: "VT", value: "Vermont" },
  { key: "VA", value: "Virginia" },
  { key: "WA", value: "Washington" },
  { key: "WV", value: "West Virginia" },
  { key: "WI", value: "Wisconsin" },
  { key: "WY", value: "Wyoming" },
];

export const heroImageLinks: string[] = [
  "https://brainlabs.digital/cro/sunsetter/ss007/hero-img-1.jpg",
  "https://brainlabs.digital/cro/sunsetter/ss007/hero-img-2.jpg",
  "https://brainlabs.digital/cro/sunsetter/ss007/hero-img-3.jpg",
];

export const skipForNowLink: string =
  "https://www.sunsetter.com/cm/find-a-dealer/results";

export const emailRegularExpression: string =
  "^(([^<>()[]\\.,;:s@@&quot;]+(.[^<>()[]\\.,;:s@@&quot;]+)*)|(&quot;.+&quot;))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$";

export const afterFormSubmissionRedirectLink: string = `https://www.sunsetter.com/co/view-awning-pricing/`;
