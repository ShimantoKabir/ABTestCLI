export const selectors = {
  promoBanner: "div#notification-bar > div.container > div",
};

export const shopNowLink: string =
  "https://www.classicindustries.com/shop/parts/new-products";

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
