export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  headerTop: "div.header-top",
};

export const pageData = {
  checkoutPage: {
    desktopPreviousSiblingClass: "base-due-today-wrapper",
    desktopTargetLastChildClass: "submit-bar",
    desktopPlaceOrderButtonSelector: "div.on-desktop>button",
    mBoxName: "checkout-page-place-order",
  },
  shoppingPage: {
    desktopCtaSelector: "div.btn-checkout>a.btn-shop",
    mBoxName: "shopping-page-review-order",
    desktopTargetClass: "checkout-column",
    desktopSiblingClass: "checkout-column",
  },
};
