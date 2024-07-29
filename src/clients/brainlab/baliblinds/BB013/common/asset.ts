export const selectors = {
  categoryContent: "div.product-category-content",
  descriptions: "div.product-link-content-container>p",
  learnMoreLinks: "a.action-link.black",
};

export const whereToBuyLink: string = "/where-to-buy/";

export const swatchLinks: string[] = [
  "https://www.baliblinds.com/swatches/?product-line-id=326",
  "https://www.baliblinds.com/swatches/?product-line-id=291",
  "https://www.baliblinds.com/swatches/?product-line-id=333",
  "https://www.baliblinds.com/swatches/?product-line-id=260",
  "https://www.baliblinds.com/swatches/?product-line-id=321",
  "https://www.baliblinds.com/swatches/?product-line-id=306",
  "https://www.baliblinds.com/swatches/?product-line-id=1342",
  "https://www.baliblinds.com/swatches/?product-line-id=289",
  "https://www.baliblinds.com/swatches/?product-line-id=320",
  "https://www.baliblinds.com/swatches/?product-line-id=308",
  "https://www.baliblinds.com/swatches/?product-line-id=325",
  "https://www.baliblinds.com/swatches/?product-line-id=278",
  "https://www.baliblinds.com/swatches/?product-line-id=334",
  "https://www.baliblinds.com/swatches/?product-line-id=1338",
];

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
