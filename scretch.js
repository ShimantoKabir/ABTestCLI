function runTest() {}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("div#container1646962529")
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
