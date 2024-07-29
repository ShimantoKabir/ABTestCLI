export const selectors = {
  footer: "div.u02a.aem-GridColumn.aem-GridColumn--default--12",
};

export const findMoreReportLink: string =
  "https://www.f5.com/resources/reports";

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
