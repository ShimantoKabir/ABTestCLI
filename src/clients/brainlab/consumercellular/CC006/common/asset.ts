export const selectors = {
  modalCloseButton: "div.added-to-cart-modal button.cci-shopping-modal-close",
  modal: "div.added-to-cart-modal",
  shoppingPageContainer: "div#shopping-page-container",
  addDevice: "div.add-device>button",
  yourDevice: "div.your-device>button",
  addDeviceDirect: "div.add-device-tile a",
  yourDeviceDirect: "ul.mobile-menu-list>li:nth-child(6)>a",
  shoppingBar: "span.shopping-bars",
};

export const modalStatusKey: string = "mobile-add-device-model-open";
export const mobileMaxWidth: number = 720;

export const pageData = {
  shoppingPage: {
    targetClassName: "plan-summary-component",
    modalAddADeviceMboxName: "modal-add-a-device",
    modalBringYourDeviceMboxName: "modal-bring-your-device",
    preReviewOrderTargetClassName: "main-content",
    preReviewOrderSiblingClassName: "input-component-frame",
    postReviewOrderId: "save-cart-zip-code",
    postReviewOrderAttribute: "data-previous-value",
    selector: "div.review-order-button>a.btn-shop",
    mboxName: "review-order",
    pathName: "/shopping",
  },
  configurePage: {
    targetClassName: "accessory-grid-wrapper",
    siblingClassName: "no-results",
    selector: "div.button-tray>button.config-add-to-cart",
    mboxName: "configure-add-to-cart",
    pathName: "/configure",
  },
  overviewPage: {
    targetClassName: "device-details",
    siblingClassName: "reserve-device-modal",
    selector: "div.device-details>div.hide-phone-up>button",
    mboxName: "overview-add-to-cart",
    pathName: "/overview",
  },
};
