export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  tiles: "div.placeholder-device-tile",
  addDeviceDirect: "div.add-device-tile a",
  yourDeviceDirect: "ul.mobile-menu-list>li:nth-child(6)>a",
  shopPhone: "shop-phone",
  yourPhone: "your-phone",
  tileFooter: "div.placeholder-device-tile>div.tile-body>div.tile-footer",
  tileFooterLink: "div.placeholder-device-tile>div.tile-body>div.tile-footer>a",
};

export const mboxNames = {
  shopPhone: "mbox-shop-phone",
  yourPhone: "mbox-your-phone",
};

export const pageData = {
  shoppingPage: {
    planSummaryTargetClassList: ["plan-summary-component", "col-md-6"],
    planSummarySiblingClassList: ["base-plan-summary-component"],
    mobilePostTargetId: "save-cart-zip-code",
    mobilePostAttributeName: "data-previous-value",
  },
};
