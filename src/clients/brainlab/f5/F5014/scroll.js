function triggerMetrics(mboxName) {
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
  console.log("mbox=", mboxName);
}

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  var p = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  return Math.floor(p);
}

function runTest() {
  console.log("Scroll event...!");
  let is25PercentScrolled = false;
  let is50PercentScrolled = false;
  let is75PercentScrolled = false;
  let is95PercentScrolled = false;

  document.addEventListener("scroll", (event) => {
    const percent = getScrollPercent();

    if (percent < 25) {
      is25PercentScrolled = false;
      is50PercentScrolled = false;
      is75PercentScrolled = false;
    }

    if (percent > 25 && !is25PercentScrolled) {
      triggerMetrics("25-percent-scrolled");
      is25PercentScrolled = true;
    }

    if (percent > 50 && !is50PercentScrolled) {
      triggerMetrics("50-percent-scrolled");
      is50PercentScrolled = true;
    }

    if (percent > 75 && !is75PercentScrolled) {
      triggerMetrics("75-percent-scrolled");
      is75PercentScrolled = true;
    }

    if (percent > 95 && !is95PercentScrolled) {
      triggerMetrics("95-percent-scrolled");
      is95PercentScrolled = true;
    }
  });
}

(function pollOnload() {
  if (document.querySelector("body")) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 250);
  }
})();
