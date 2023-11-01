export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  checkoutWrapper: "div#checkout-wrapper",
  checkoutSection: "div#checkout-sections-column",
  checkoutSections: "div#checkout-sections-column>div",
  placeOrderButtons: "div.submit-section>button",
  nextButtons: "div.next-button-component>button",
  checkoutNthSection: "div#checkout-sections-column>div:nth-child",
  breadcrumbItems: "div.breadcrumb-component-wrap>div",
  baseComponent: "div.base-affix-component",
  oldSaveCard: "div.base-affix-component>div>div>h4",
  newSaveCard: "div.checkout-header>div.left>h4",
  errors:
    "form.billing-info>div:nth-child(4), div.shipping-info-component>div:nth-child(4), form.payment-info>div.error",
  aarpJoinButton: "div.customer-info-component-template>button.btn",
  shoppingContainer: "div.shopping-container",
  cardTitles:
    "div#checkout-sections-column>div.summary-section>div.card>div.card-title",
};

export const pageData = {
  checkoutPage: {
    checkoutTargetClassList: ["plan-summary-component", "col-md-6"],
    planSummarySiblingClassList: ["base-plan-summary-component"],
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

export const breadcrumbs = [
  {
    bigText: "CUSTOMER INFORMATION",
    shortText: "CI",
  },
  {
    bigText: "BILLING INFORMATION",
    shortText: "BI",
  },
  {
    bigText: "SHIPPING INFORMATION",
    shortText: "SI",
  },
  {
    bigText: "OTHER INFORMATION",
    shortText: "OI",
  },
  {
    bigText: "PAYMENT INFORMATION",
    shortText: "PI",
  },
];

export const rightArrowSvg = `
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-xs chakra-icon css-13otjrl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
  <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
</svg>
`;

export const mboxNames = {
  breadcrumbClick: "breadcrumb-click",
  nextClick: "next-click",
  placeOrderSuccessClick: "place-order-success-click",
  placeOrderErrorClick: "place-order-error-click",
  reviewOrderClick: "review-order-click",
  checkoutPageVisit: "checkout-page-visit",
  processingPageVisit: "processing-page-visit",
  thankYouPageVisit: "thankyou-page-visit",
  saveCartClick: "save-cart-click",
  tabClick: "tab-click",
};

export const pathnames = {
  checkout: "/shopping/checkout",
  processing: "/shopping/checkout/processing",
  shopping: "/shopping",
  thankyou: "/shopping/thankyou",
};

export const mobileMaxWidth: number = 720;
