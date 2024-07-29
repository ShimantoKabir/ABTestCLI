export const selectors = {
  legend: "form.find-a-dealer-form>fieldset>legend",
  defaultCheckboxLabels: "div.int-cell.my-3>h5",
  defaultCheckboxes: "div.int-cell.my-3",
  cardImage: "div.site-image-wrapper",
  error: "div.validation-summary-errors",
};

export const checkSvgIcon: string = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 0C3.581 0 0 3.581 0 8C0 12.419 3.581 16 8 16C12.419 16 16 12.419 16 8C16 3.581 12.419 0 8 0ZM12.244 12.244C11.109 13.375 9.603 14 8 14C6.397 14 4.891 13.375 3.756 12.244C2.625 11.109 2 9.603 2 8C2 6.397 2.625 4.891 3.756 3.756C4.891 2.625 6.397 2 8 2C9.603 2 11.109 2.625 12.244 3.756C13.375 4.891 14 6.397 14 8C14 9.603 13.375 11.109 12.244 12.244ZM10.784 4.916L7.016 9.103L5.262 7.372L3.856 8.794L7.1 12L12.269 6.253L10.784 4.916Z" fill="#01426A" />
</svg>
`;

export const uncheckSvgIcon: string = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="7" stroke="#01426A" stroke-opacity="0.5" stroke-width="2" />
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

export const siteImages: string[] = [
  "https://medianet.com/cro/sunsetter/ss005/awning.jpg",
  "https://medianet.com/cro/sunsetter/ss005/retractable.jpeg",
  "https://medianet.com/cro/sunsetter/ss005/exterior.jpg",
];

// export const siteImages: string[] = [
//   "https://embed.widencdn.net/img/springswindowfashions/1mc3osgwu2/240x230px@2x/SunSetter-LS21-PlatMotorPRO-StormStripe-17?keep=c&crop=yes&q=90",
//   "https://embed.widencdn.net/img/springswindowfashions/njla22ga4m/240x230px@2x/SunSetter_Powerscreen_Inside-Out_BronzeFrame-BrownBlackFabric_0323.jpg",
//   "https://embed.widencdn.net/img/springswindowfashions/7hose81ksv/240x230px@2x/sunsetter-easy-shade-bronze-22?keep=c&crop=yes&q=90",
// ];
