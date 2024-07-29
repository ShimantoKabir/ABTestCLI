export const selectors = {
  viewDetails: "a.btn-shop",
};

export const pathnames = {
  device: "/shopping/choose/device",
  checkout: "/shopping/checkout",
  thankyou: "/shopping/thankyou",
};

export const mboxNames = {
  devicePageVisit: "device-page-visit",
  checkoutPageVisit: "checkout-page-visit",
  thankYouPageVisit: "thankyou-page-visit",
  viewDetailsClick: "view-detail-click",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
};
