function triggerMetrics(mboxName) {
  console.log("mbox=", mboxName);
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
}

function runTest() {
  const targetNode = document.querySelector("div.success-message");
  const config = { attributes: true };
  let isFormSubmitted = false;

  const callback = (mutationList, observer) => {
    for (let index = 0; index < mutationList.length; index++) {
      const target = mutationList[index].target;
      if (target.classList.contains("show") && !isFormSubmitted) {
        triggerMetrics("form-submitted-successfully");
        isFormSubmitted = true;
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

  console.log("Form successful submission event added...!");
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("div.success-message")
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
