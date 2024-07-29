function triggerMetrics(apiName) {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: apiName,
  });

  console.log("event-triggered=", apiName);
}

function runTest() {
  const cardsSelector = "div.m-b-lg>div.card-container>div.row>a";
  const consultGraberSelector = "div.generic-html-block>a";

  const cardsLinks = document.querySelectorAll(cardsSelector);
  const consultLinks = document.querySelectorAll(consultGraberSelector);

  if (
    cardsLinks === null ||
    cardsLinks.length === 0 ||
    consultLinks === null ||
    consultLinks.length === 0
  ) {
    return;
  }

  cardsLinks.forEach((a) => {
    a.addEventListener("click", () => {
      triggerMetrics("learn-more-link-click");
    });
  });

  consultLinks.forEach((a) => {
    a.addEventListener("click", () => {
      triggerMetrics("expert-link-click");
    });
  });

  console.log("Control event added....!");
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("div.m-b-lg>div.card-container>div.row>a") &&
    document.querySelector("div.generic-html-block>a")
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
