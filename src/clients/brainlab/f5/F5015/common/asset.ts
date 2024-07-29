export const selectors = {
  success: "div.success-message",
  submitButton: "div#newForm button",
  form: "div#newForm>form",
  nthAemGrid:
    "div.root.responsivegrid>div>div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12 > div.aem-Grid>div:nth-child",
};

export const mboxNames = {
  formSubmittedSuccessfully: "form-submitted-successfully",
  submitButtonClick: "submit-button-click",
  anywhereClickInForm: "anywhere-click-in-form",
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};
