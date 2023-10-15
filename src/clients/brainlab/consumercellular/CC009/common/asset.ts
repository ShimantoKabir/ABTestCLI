export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
  checkoutWrapper: "div#checkout-wrapper",
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
};

export const pageData = {
  checkoutPage: {
    checkoutTargetClassList: ["plan-summary-component", "col-md-6"],
    planSummarySiblingClassList: ["base-plan-summary-component"],
  },
};

export const breadcrumbs = [
  {
    text: "CUSTOMER INFORMATION",
  },
  {
    text: "BILLING INFORMATION",
  },
  {
    text: "SHIPPING INFORMATION",
  },
  {
    text: "OTHER INFORMATION",
  },
  {
    text: "PAYMENT INFORMATION",
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
  placeOrderClick: "place-order-click",
};
