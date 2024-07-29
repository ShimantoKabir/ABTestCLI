export const selectors = {
  comboPlan: "div.combo-plans",
  aarpBox: "div.aarp-box-wrapper",
};

export const pathnames = {
  plan: "/shopping/choose/plan",
  thankyou: "/shopping/thankyou",
  checkout: "/shopping/checkout",
};

export const triggerMetrics = (mboxName: string) => {
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
  console.log("mbox=", mboxName);
};

export const mBoxNames = {
  planPageVisit: "plan-page-visit",
  checkoutPageVisit: "checkout-page-visit",
  thankYouPageVisit: "thankyou-page-visit",
};

export const signals: string[] = [
  "30-day risk free guarantee.",
  "No-contract plans.",
  "US-based customer support.",
  "No activation fees.",
];
