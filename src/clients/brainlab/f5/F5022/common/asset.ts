export const selectors = {
  success: "div.success-message",
  submitButton: "div#newForm button",
  form: "div#newForm>form",
  nthAemGrid:
    "div.root.responsivegrid>div>div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12 > div.aem-Grid>div:nth-child",
  guideSlider: "div[data-component-title='Ceros']",
  footer: "div[data-component-title='Footer']",
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

export const missingLearnHeadlines: string[] = [
  "Expanded threat surface",
  "Critical defenses while supporting innovation",
  "WAAP offers universal visibility",
];
