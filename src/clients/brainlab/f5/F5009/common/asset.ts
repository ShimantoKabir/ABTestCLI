export const selectors = {
  form: "div#newForm>form",
  formHeading: "div#newForm h3",
  submitButton: "div#newForm button",
  formText: "div.mktoHtmlText>p",
  formTopDivisions: `div#newForm>form>div:nth-child(3), div#newForm>form>div:nth-child(4)`,
  formBottomDivisions: `div#newForm>form>div:nth-child(5), div#newForm>form>div:nth-child(6), div#newForm>form>div:nth-child(7)`,
  success: "div.success-message",
};

export const privacyNoticeLink: string =
  "https://www.f5.com/company/policies/privacy-policy";

export const mboxNames = {
  nextClick: "next-click",
  formSubmitted: "form-submitted",
  anywhereClickInForm: "anywhere-click-in-form",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
