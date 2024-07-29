import { Faq } from "./faq";

export const selectors = {
  unbounceTitle: "main.content>div>div.unbounce-title.parbase.section",
  submitButton: "div.modal-content>div.submit>button",
  applyCta: "div.rfi-btn>a",
};

export const title = {
  desktop: "Frequently Asked Questions",
  mobile: "FAQs",
};

export const faqs: Faq[] = [
  {
    question: "Is FORTIS Nationally Accredited?",
    answer:
      "Yes. Each of our colleges and vocational schools are institutionally accredited by one of the following accrediting bodies:",
    points: [
      "Accrediting Bureau of Health Education Schools (ABHES)",
      "Accrediting Commission of Career Schools and Colleges (ACCSC)",
    ],
  },
  {
    question:
      "What are the pre-requisite requirements to become admitted to FORTIS?",
    answer:
      "To qualify for admissions, in most cases you must be a high school graduate or its equivalent. All applicants are required to complete a personal information sheet. During a personal interview with our admissions staff, we will review your career goals to help you find the right program to fit your needs. Every individual will be given the opportunity to tour the facility, meet with Financial Aid, and enroll in the next available classes. Please contact your local campus Admissions Advisor for more information on admission requirements.",
    points: [],
  },
  {
    question:
      "Can FORTIS help me in determining whether I qualify for Financial Aid?",
    answer:
      "Yes, FORTIS is an eligible school under the Title IV Federal Financial Aid programs. Tuition financing plans are tailored to the needs of each individual student. Financial aid is available to those students who qualify. The Financial Aid Department assists students in the understanding of the application process and the eligibility requirements for various federal, state and/or private sources of student financial aid.",
    points: [],
  },
  {
    question: "How do I enroll at Fortis?",
    answer:
      "Each applicant for admission will have the opportunity to meet with an admissions advisor who directs the applicant through the steps of the admissions process, providing information on curriculum, policies, procedures, and services, and assisting the applicant in setting necessary appointments and interviews.",
    points: [
      "All applicants are required to complete a personal information sheet. During an individual interview with our admissions staff, we will review your career goals to help you find the right program to fit your needs. Every individual will be given the opportunity to tour the facility, meet with a Financial Aid advisor, and enroll in the next available classes.",
    ],
  },
];

export const openOrCloseSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0C7.15932 0 0 7.15932 0 16C0 24.8407 7.15932 32 16 32C24.8407 32 32 24.8407 32 16C32 7.15932 24.8407 0 16 0ZM16 29.8712C8.35254 29.8712 2.12881 23.6475 2.12881 16C2.12881 8.35254 8.35254 2.12881 16 2.12881C23.6475 2.12881 29.8712 8.35254 29.8712 16C29.8712 23.6475 23.6475 29.8712 16 29.8712Z" fill="white"/>
  <path d="M21.8981 8.58283L16.0405 14.454L10.7794 8.58283C10.3591 8.16249 9.68114 8.16249 9.27436 8.58283C8.85402 9.00317 8.85402 9.68114 9.27436 10.0879L14.5354 15.9591L8.58283 21.8981C8.16249 22.3184 8.16249 22.9964 8.58283 23.4032C9.00317 23.8235 9.68114 23.8235 10.0879 23.4032L15.9591 17.5455L21.2201 23.4032C21.6405 23.8235 22.3184 23.8235 22.7252 23.4032C23.1455 22.9828 23.1455 22.3049 22.7252 21.8981L17.4642 16.0405L23.4167 10.0879C23.8371 9.66758 23.8371 8.98961 23.4167 8.58283C22.9964 8.17605 22.3184 8.17605 21.8981 8.58283Z" fill="white"/>
</svg>
`;

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
};

export const mboxNames = {
  accordionToggled: "accordion-toggled",
  formSubmitButton: "form-submit-button",
  applyClick: "apply-click",
  scrollToFaq: "scroll-to-faq",
};
