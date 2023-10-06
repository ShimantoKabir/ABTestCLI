function addListener(pageData) {
  const cta = document.querySelector(pageData.shoppingPage.desktopCtaSelector);
  if (!cta) {
    return;
  }

  cta.addEventListener("click", () => {
    adobe.target.getOffer({
      mbox: pageData.shoppingPage.mBoxName,
      success: function (offers) {
        adobe.target.applyOffer({
          mbox: pageData.shoppingPage.mBoxName,
          offer: offers,
        });
        console &&
          console.log &&
          console.log("mbox=", pageData.shoppingPage.mBoxName);
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
    shoppingPage: {
      desktopCtaSelector: "div.btn-checkout>a.btn-shop",
      mobilePostTargetId: "save-cart-zip-code",
      mobilePostAttributeName: "data-previous-value",
      mBoxName: "9.4D-trigger",
    },
  };

  const targetNode = document.getElementById("shopping-page-container");
  const config = { attributes: true, childList: true, subtree: true };

  const callback = (mutationList, observer) => {
    for (let index = 0; index < mutationList.length; index++) {
      const mutationRecord = mutationList[index];
      const target = mutationRecord.target;

      if (
        window.innerWidth > 720 &&
        target &&
        target.id &&
        target.id === pageData.shoppingPage.mobilePostTargetId &&
        mutationRecord.attributeName &&
        mutationRecord.attributeName ===
          pageData.shoppingPage.mobilePostAttributeName
      ) {
        if (!isListenerAdded) {
          addListener("click");
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
