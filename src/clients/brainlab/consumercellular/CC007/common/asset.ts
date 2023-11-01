export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  navHeader: "div.nav-header",
};

export const pageData = {
  checkoutPage: {
    desktopPreviousSiblingClass: "base-due-today-wrapper",
    desktopTargetLastChildClass: "submit-bar",
    placeOrderButtonSelector: "div.submit-section>button",
  },
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
};

export const mBoxNames = {
  checkoutPageVisit: "checkout-page-visit",
  processingPageVisit: "processing-page-visit",
  thankYouPageVisit: "thankyou-page-visit",
  reviewOrderClick: "review-order-click",
  placeOrderSuccessClick: "place-order-success-click",
  placeOrderErrorClick: "place-order-error-click",
};

export const pathnames = {
  checkout: "/shopping/checkout",
  processing: "/shopping/checkout/processing",
  shopping: "/shopping",
  thankyou: "/shopping/thankyou",
};

export const mobileMaxWidth: number = 720;
