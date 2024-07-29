export const selectors = {
  mobileTabSelector: "div.mobile-tabs-selector",
  tabSection: "section.tabs-section",
  swatchContainer: "section.swatch-container",
  btnFilter: "button.btn-filter-sort",
  swatchCount: "div.topbar-section span.swatch-count",
  topNavSwatchCountList: "ul.topbar-nav-list>li:nth-child(3)",
  placeOrderButton: "div.swatch-ordering-links>a:last-child",
};

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
