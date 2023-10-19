function runTest() {
  const customEventName = "glide-3rd-or-6th-link-click";
  console.log("ID: BB006, VARIATION: control, VERSION: 1.0.0 is running.....!");
  const slide7thDottedLink = "ul.glide__slides>li:nth-child(7) a.dotted-link";
  document.querySelector(slide7thDottedLink).addEventListener("click", () => {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: customEventName,
    });
    console.log("custom-event=", customEventName);
  });
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("ul.glide__slides>li:nth-child(7) a.dotted-link")
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
