// test name: BLTEST038.3 - XC CTA Naming
function runTest() {
  const variation = "start";

  const linkTextMap = {
    start: {
      linkText: "Start demo",
    },
    free: {
      linkText: "Free demo",
    },
    self: {
      linkText: "Self-guided demo",
    },
  };

  const heroLinkSelector = "div.c01__button>a";
  const heroLink = document.querySelector(heroLinkSelector);

  if (!heroLink) {
    return;
  }

  heroLink.textContent = linkTextMap[variation].linkText;

  console.log("Test BLTEST038.3 is running......!");
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("div.c01__button>a")
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
