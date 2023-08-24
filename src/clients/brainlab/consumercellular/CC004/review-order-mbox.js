const reviewOrderButtonSelector = "div.btn-checkout>a";

function runTest() {
  const reviewOrderButton = document.querySelector(reviewOrderButtonSelector);

  reviewOrderButton.addEventListener("click", () => {
    console.log("m-box-triggered");
    adobe.target.trackEvent({ mbox: "review-order" });
  });
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector(reviewOrderButtonSelector)
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
