function triggerMetrics(mboxName) {
  console.log("mbox=", mboxName);
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
}

function runTest() {
  const applyButtonsSelector = "div.rfi-btn>a";
  const formSubmitButtonSelector = "button.form-submit";

  const applyButtons = document.querySelectorAll(applyButtonsSelector);
  const formSubmitButton = document.querySelector(formSubmitButtonSelector);

  if (
    applyButtons === null ||
    applyButtons.length === 0 ||
    formSubmitButton === null
  ) {
    return;
  }

  applyButtons.forEach((a) => {
    a.addEventListener("click", () => {
      triggerMetrics("how-to-apply-click");
    });
  });

  formSubmitButton.addEventListener("click", () => {
    triggerMetrics("form-submit-click");
  });

  console.log("Apply and Form submit event added....!");
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("div.rfi-btn>a") &&
    document.querySelector("button.form-submit")
  ) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 250);
  }
})();
