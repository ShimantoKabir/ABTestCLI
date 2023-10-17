function runTest() {}

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
