export const triggerEvent = (eventName) => {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });

  console.log(eventName + ": triggered");
};

function runTest() {
  const learnMoreLinks = document.querySelectorAll(
    "section[data-typename='UiColumn'] a"
  );

  if (!learnMoreLinks || learnMoreLinks.length === 0) {
    return;
  }

  learnMoreLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      triggerEvent(`learn-more-${index + 1}-cta-click`);
    });
  });

  console.log("Test 5.3 is running......!");
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("section[data-typename='UiColumn'] a")
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
