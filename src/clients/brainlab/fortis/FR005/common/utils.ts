export const replaceStringSpace = (str: string, replaceBy: string): string => {
  return str.replace(/\s/g, replaceBy).toLowerCase();
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
};
