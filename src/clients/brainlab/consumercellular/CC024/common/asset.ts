export const selectors = {
  ownDevice: "div.grid-container>div:nth-child(2)>div.choose-device",
  byodLink:
    "div.grid-container>div:nth-child(2)>div.choose-device>div.upper-grid-info>div.product-image>a",
};

export const triggerMetrics = (mboxName: string) => {
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
  console.log("mbox=", mboxName);
};
