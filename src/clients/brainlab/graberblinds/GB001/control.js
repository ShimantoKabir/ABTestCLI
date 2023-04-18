function runTest() {
  console.log("ID: GB001, VARIATION: Control");
  const menus = [
    {
      apiName: "benefits",
      selector: "div.motorization>div:nth-child(3)",
    },
    {
      apiName: "control-options",
      selector: "div.motorization>div:nth-child(4)",
    },
    {
      apiName: "smart-home-devices",
      selector: "div.motorization>div:nth-child(5)",
    },
    {
      apiName: "solutions-gallery",
      selector: "div.motorization>div:nth-child(6)",
    },
    {
      apiName: "comparison",
      selector: "div.motorization>div:nth-child(7)",
    },
    {
      apiName: "faqs",
      selector: "div.motorization>div:nth-child(8)",
    },
  ];

  menus.forEach((menu) => {
    const target = document.querySelector(menu.selector);
    const observer = new IntersectionObserver(callback);
    observer.observe(target);

    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Api Name=", menu.apiName);
          window["optimizely"] = window["optimizely"] || [];
          window["optimizely"].push({
            type: "event",
            eventName: menu.apiName,
            tags: {
              revenue: 0,
              value: 0.0,
            },
          });
        }
      });
    }
  });
}

(function pollOnload() {
  if (
    document.querySelector("body") &&
    document.querySelector("div.motorization")
  ) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 500);
  }
})();
