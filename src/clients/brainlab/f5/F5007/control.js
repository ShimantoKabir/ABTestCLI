function runTest() {
  const tenPercentScroll = "10-percent-scroll";
  const twentyPercentScroll = "20-percent-scroll";

  const infrastructureSection = document.querySelector(
    "div#container1646962529"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
        console.log("scrolled=", tenPercentScroll);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: tenPercentScroll });
      }

      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        console.log("scrolled=", twentyPercentScroll);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: twentyPercentScroll });
      }
    });
  });

  observer.observe(infrastructureSection);
}

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
