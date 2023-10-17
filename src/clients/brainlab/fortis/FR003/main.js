function runTest() {
  const testName = "BLTEST013: Contact form CTA button language";
  const targetURL =
    "https://www.fortis.edu/campuses/florida/cutler-bay/ignite/associate-degree-in-nursing.html";
  const VARIATION = 2;
  const testInfo = `ID: FR003, VARIATION: ${VARIATION}, VERSION: 0.0.1, is running....!`;
  console.log(testInfo);

  const variation1Text = "Call Me Today";
  const variation2Text = "Call Me Now";
  const mBoxName = "submit-button-mbox";

  const buttonTertiarySelector = "button.btn-tertiary";
  const buttonTertiary = document.querySelector(buttonTertiarySelector);

  if (VARIATION === 1) {
    buttonTertiary.textContent = variation1Text;
  } else {
    buttonTertiary.textContent = variation2Text;
  }

  buttonTertiary.addEventListener("click", () => {
    console.log("mbox=", mBoxName);
    adobe.target.trackEvent({ mbox: mBoxName });
  });
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("button.btn-tertiary")
  ) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 2000);
  }
})();
