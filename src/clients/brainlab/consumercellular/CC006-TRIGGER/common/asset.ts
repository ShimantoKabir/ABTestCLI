export const selectors = {
  shoppingPageContainer: "div#shopping-page-container",
};

export const triggerMboxName: string = "6.9M.2-mbox";
export const mobileMaxWidth: number = 720;

export const planPage = {
  pathName: "/shopping/choose/plan",
  addToCart: {
    targetClassList: ["slide-enter-to", "hide-phone-up"],
    selector: "div#mobile-bill-breakdown button.btn-shop",
    eventName: "touchstart",
    mboxName: "6.9M.2-mbox",
  },
  continue: {
    targetClassName: "base-dollar-display-component",
    targetId: "mobile-bill-breakdown",
    selector: "div#mobile-bill-breakdown a.btn-shop",
    eventName: "touchstart",
    mboxName: "6.9M.2-mbox",
    lastChildClassName: "disclaimer",
  },
  update: {
    attributeNames: ["aria-hidden", "data-slick-index"],
    attributeType: "attributes",
    targetClassNames: ["slick-active", "base-dollar-display-component"],
    selector: "div#mobile-bill-breakdown button.btn-shop",
    eventName: "touchstart",
    mboxName: "6.9M.2-mbox",
    nextSiblingClassName: "monthly-total-time",
  },
};
