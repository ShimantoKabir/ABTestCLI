function executeModification() {
  const mboxName = "thank-you-mbox";
  const thankYouKey = "thank-you-key";
  const VARIATION = "thank-you";
  const testInfo =
    "ID: FR004, VARIATION: " + VARIATION + ", VERSION: 0.0.3, is running....!";
  console.log(testInfo);

  const thankYouValue = sessionStorage.getItem(thankYouKey);

  if (thankYouValue && thankYouValue === "thank-you-value") {
    console.log("mbox=", mboxName);
    adobe.target.trackEvent({ mbox: mboxName });
    sessionStorage.removeItem(thankYouKey);
  }
}

(function pollOnload() {
  if (document.querySelector("body")) {
    try {
      executeModification();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 2000);
  }
})();
