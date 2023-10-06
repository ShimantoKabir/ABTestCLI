export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
};

export const triggerMboxName: string = "9.4D-mbox";

export const pageData = {
  shoppingPage: {
    desktopCtaSelector: "div.btn-checkout>a.btn-shop",
    mobileCtaSelector: "div.review-order-button>a.btn-shop",
    mobilePreTargetClass: "main-content",
    mobilePreSiblingClass: "input-component-frame",
    desktopTargetClass: "checkout-column",
    desktopSiblingClass: "checkout-column",
    mobilePostTargetId: "save-cart-zip-code",
    mobilePostAttributeName: "data-previous-value",
  },
  planPage: {
    desktopCtaSelector: "div.hide-phone-down button.btn-shop",
    mobileCtaSelector: "div#mobile-bill-breakdown button.btn-shop",
    targetClass: "bill-box",
    siblingClass: "base-dollar-display-component",
  },
  overViewPage: {
    desktopCtaSelector: "div.product-details>div.hide-phone-down>button",
    desktopTargetClass: "product-details",
    desktopSiblingClass: "trade-in-prompt",
  },
};

export const mobileMaxWidth: number = 720;
