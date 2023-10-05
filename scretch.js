function addListener(pageData) {
  const cta = document.querySelector(pageData.planPage.selector);
  if (!cta) {
    return;
  }

  cta.addEventListener("click", () => {
    console.log("mbox=", pageData.planPage.mBoxName);
    adobe.target.getOffer({
      mbox: pageData.planPage.mBoxName,
      success: function (offers) {
        adobe.target.applyOffer({
          mbox: pageData.planPage.mBoxName,
          offer: offers,
        });
      },
      error: function (status, error) {
        if (console && console.log) {
          console.log("status=" + status + ", error=", error);
        }
      },
      timeout: 5000,
    });
  });
}

function runTest() {
  console.log("ADOBE-TARGET-TEST-INIT");
  let isListenerAdded = false;
  const pageData = {
    planPage: {
      selector: "div.hide-phone-down button.btn-shop",
      mBoxName: "test-trigger-mbox",
      targetClassList: ["bill-breakdown", "hide-phone-down"],
      firstChildClass: "bill-box-wrapper",
      lastChildClass: "disclaimer",
    },
  };

  const targetNode = document.getElementById("shopping-page-container");
  const config = { attributes: true, childList: true, subtree: true };

  const callback = (mutationList, observer) => {
    for (let index = 0; index < mutationList.length; index++) {
      const target = mutationList[index].target;

      if (
        target.classList &&
        target.classList.contains(pageData.planPage.targetClassList[0]) &&
        target.classList.contains(pageData.planPage.targetClassList[1]) &&
        target.firstChild &&
        target.firstChild.classList &&
        target.firstChild.classList.contains(
          pageData.planPage.firstChildClass
        ) &&
        target.lastChild &&
        target.lastChild.classList &&
        target.lastChild.classList.contains(pageData.planPage.lastChildClass)
      ) {
        if (!isListenerAdded) {
          addListener(pageData);
          isListenerAdded = true;
        }
        break;
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

(function pollOnload() {
  if (document.querySelector("body")) {
    try {
      runTest();
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollOnload, 2000);
  }
})();
