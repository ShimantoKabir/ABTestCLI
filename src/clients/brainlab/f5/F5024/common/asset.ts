export const selectors = {
  heroSection: "div.c01.aem-GridColumn.aem-GridColumn--default--12",
  heroFromNthRow: "form.mktoForm.hero>div:nth-child",
  capFromNthRow: "form.mktoForm.cap>div:nth-child",
  capNameEmailPhoneError:
    "form.mktoForm.cap>div:nth-child(4) div.mktoError, form.mktoForm.cap>div:nth-child(3) div.mktoError",
  heroNameEmailPhoneError:
    "form.mktoForm.hero>div:nth-child(3) div.mktoError, form.mktoForm.hero>div:nth-child(2) div.mktoError",
  capabilitiesSection: "div#capabilities",
  footer: "div[data-component-title='Footer']",
};

export const scriptLink: string =
  "https://interact.f5.com/js/forms2/js/forms2.min.js";

export const heroMktoForms2 = {
  domain: "https://interact.f5.com",
  munchkinId: "653-SMC-783",
  formId: 23747,
};

export const capMktoForms2 = {
  domain: "https://interact.f5.com",
  munchkinId: "653-SMC-783",
  formId: 15271,
};

export const footerMktoForms2 = {
  domain: "https://interact.f5.com",
  munchkinId: "653-SMC-783",
  formId: 7652,
};

export const mboxNames = {
  topFormSubmitted: "top-form-submitted",
  middleFormSubmitted: "middle-form-submitted",
  middleFormShowedUp: "middle-form-showed-up",
  bottomFormSubmitted: "bottom-form-submitted",
};

export const formSteps = [
  {
    progressIcon: `
    <svg width="357" height="8" viewBox="0 0 357 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2.81967C0 1.26241 1.26241 0 2.81967 0H178.5V7.31203H2.81967C1.26241 7.31203 0 6.04962 0 4.49236V2.81967Z" fill="#138A3B"/>
      <path d="M178.676 0.17623H354.18C355.64 0.17623 356.824 1.35974 356.824 2.81967V4.49236C356.824 5.95229 355.64 7.1358 354.18 7.1358H178.676V0.17623Z" stroke="#138A3B" stroke-width="0.352459"/>
    </svg>
    `,
    text: "Step 1 of 2",
  },
  {
    progressIcon: `
    <svg width="358" height="8" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.84375 2.81967C0.84375 1.53855 1.8823 0.5 3.16342 0.5H178.344V6.81203H3.16342C1.8823 6.81203 0.84375 5.77348 0.84375 4.49236V2.81967Z" stroke="#138A3B"/>
      <path d="M179.02 0.17623H354.524C355.984 0.17623 357.168 1.35974 357.168 2.81967V4.49236C357.168 5.95229 355.984 7.1358 354.524 7.1358H179.02V0.17623Z" fill="#138A3B"/>
      <path d="M179.02 0.17623H354.524C355.984 0.17623 357.168 1.35974 357.168 2.81967V4.49236C357.168 5.95229 355.984 7.1358 354.524 7.1358H179.02V0.17623Z" stroke="#138A3B" stroke-width="0.352459"/>
    </svg>
    `,
    text: "Step 2 of 2",
  },
];

export const capImageUrl: string =
  "https://brainlabs.digital/cro/f5/f5024/cap-form-img.jpg";

export const footerImage: string =
  "https://brainlabs.digital/cro/f5/f5024/footer.jpg";

export const closeIconSvg: string = `
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 7L7 21" stroke="#595858" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 7L21 21" stroke="#595858" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const formInfo = {
  cap: {
    title: "Download the free eBook",
    description: "Web Application Firewalls for dummies",
    id: "cap",
    formId: capMktoForms2.formId,
  },
  hero: {
    title: "Secure Your API Today",
    description: "",
    id: "hero",
    formId: heroMktoForms2.formId,
  },
};

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};

export const f5NoticeUrl: string =
  "https://www.f5.com/company/policies/privacy-notice";

export const contactUsMail: string = "thef5team@f5.com";
