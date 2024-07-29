export const selectors = {
  riskFreeText: "p.risk-free",
};

export const mBoxNames = {
  planPageVisit: "plan-page-visit",
  checkoutPageVisit: "checkout-page-visit",
  thankYouPageVisit: "thankyou-page-visit",
};

export const pathnames = {
  plan: "/shopping/choose/plan",
  thankyou: "/shopping/thankyou",
  checkout: "/shopping/checkout",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};

export const signals: string[] = [
  "30-day risk free guarantee",
  "Commitment free with no contracts. Cancel anytime",
  "100% US based customer support specialists",
  "Only $15 to add additional lines",
];
