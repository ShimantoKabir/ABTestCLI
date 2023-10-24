const nursingText = "div.align-right>div.text>p:nth-child(3)";
const submitButton = "div.modal-content>div.submit>button";
const applyCta = "div.rfi-btn>a";
const mboxNames = {
  formSubmitButton: "form-submit-button",
  applyClick: "apply-click",
  scrollToSndOfWhatToLear: "scroll-to-end-of-what-to-learn",
};

function triggerMetrics(mboxName) {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe.target.trackEvent({ mbox: mboxName });
}

function runTest() {
  console.log("ID: FR005, VARIATION: control, VERSION: 0.0.2 is running.....!");

  const nursingTextElm = document.querySelector(nursingText);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        triggerMetrics(mboxNames.scrollToSndOfWhatToLear);
      }
    });
  });

  nursingTextElm && observer.observe(nursingTextElm);

  const submitButtonElm = document.querySelector(submitButton);

  submitButtonElm &&
    submitButtonElm.addEventListener("click", () => {
      triggerMetrics(mboxNames.formSubmitButton);
    });

  const applyCtas = document.querySelectorAll(applyCta);

  applyCtas &&
    applyCtas.length !== 0 &&
    applyCtas.forEach((applyCta, index) => {
      applyCta.addEventListener("click", () => {
        index === 0 && triggerMetrics(mboxNames.applyClick);
        index === 1 && triggerMetrics(mboxNames.applyClick);
      });
    });
}

(function pollOnload() {
  if (document.querySelector("body") && document.querySelector(nursingText)) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 2000);
  }
})();
